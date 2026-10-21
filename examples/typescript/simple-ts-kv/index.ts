import * as kv from "azion/kv";

const VALID_TYPES = ["json", "text", "arrayBuffer", "stream"] as const;
type ValidType = (typeof VALID_TYPES)[number];

interface ErrorResponse {
  error: string;
  message: string;
}

interface SuccessResponse {
  success: boolean;
  data?: any;
  message?: string;
}

function jsonResponse(
  data: ErrorResponse | SuccessResponse,
  status: number,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request: Request, env: any, ctx: any) {
    let client: any = null;

    try {
      // Initialize the KV client
      client = await kv
        .createClient({
          namespace: "my-namespace",
        })
        .connect();

      const url = new URL(request.url);
      const key = url.searchParams.get("key");
      const type = (url.searchParams.get("type") || "json") as ValidType;

      if (!key) {
        return jsonResponse(
          { error: "Bad Request", message: "Missing 'key' parameter" },
          400,
        );
      }

      if (!VALID_TYPES.includes(type)) {
        return jsonResponse(
          {
            error: "Bad Request",
            message: `Invalid type. Must be one of: ${VALID_TYPES.join(", ")}`,
          },
          400,
        );
      }

      switch (request.method) {
        case "GET":
          return await handleGet(client, key, type);

        case "POST":
        case "PUT":
          return await handleSet(client, key, request);

        case "DELETE":
          return await handleDelete(client, key);

        default:
          return jsonResponse(
            {
              error: "Method Not Allowed",
              message: `Method ${request.method} is not supported`,
            },
            405,
          );
      }
    } catch (error: any) {
      console.error("KV Operation Error:", error);
      return jsonResponse(
        {
          error: "Internal Server Error",
          message: error.message || "An unexpected error occurred",
        },
        500,
      );
    } finally {
      if (client) {
        try {
          await client.disconnect();
        } catch (error) {
          console.error("Error disconnecting client:", error);
        }
      }
    }
  },
};

async function handleGet(
  client: any,
  key: string,
  type: ValidType,
): Promise<Response> {
  const value = await client.get(key, { type });

  if (value === null || value === undefined) {
    return jsonResponse(
      { error: "Not Found", message: `Key '${key}' not found` },
      404,
    );
  }

  return jsonResponse({ success: true, data: value }, 200);
}

async function handleSet(
  client: any,
  key: string,
  request: Request,
): Promise<Response> {
  const contentType = request.headers.get("Content-Type") || "";
  const ttl = parseInt(
    new URL(request.url).searchParams.get("ttl") || "30",
    10,
  );

  let value: any;
  let options: any = {};

  if (ttl > 0) {
    options.expiration = {
      type: "EX",
      value: ttl,
    };
  }

  if (contentType.includes("application/json")) {
    value = await request.json();
  } else if (contentType.includes("text/plain")) {
    value = await request.text();
  } else {
    return jsonResponse(
      {
        error: "Bad Request",
        message: "Content-Type must be application/json or text/plain",
      },
      400,
    );
  }

  await client.set(key, value, options);

  return jsonResponse(
    {
      success: true,
      message: `Key '${key}' set successfully`,
      data: {
        key,
        ttl:
          options.expiration?.value > 0
            ? options.expiration.value
            : "no expiration",
      },
    },
    200,
  );
}

async function handleDelete(client: any, key: string): Promise<Response> {
  await client.delete(key);

  return jsonResponse(
    { success: true, message: `Key '${key}' deleted successfully` },
    200,
  );
}
