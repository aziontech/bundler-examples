export default {
  async fetch(request, env, ctx) {
    const kv = await Azion.KV.open("my-namespace-kv");

    if (request.method === "GET") {
      const message = await kv.get("message");
      return new Response(JSON.stringify({ message }));
    }

    if (request.method === "POST") {
      const body = await request.json();
      await kv.put("message", body?.message, { expirationTtl: 60 });
      return new Response(JSON.stringify({ message: "Message saved" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (request.method === "DELETE") {
      await kv.delete("message");
      return new Response(JSON.stringify({ message: "Message deleted" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Method not allowed", { status: 405 });
  },
};
