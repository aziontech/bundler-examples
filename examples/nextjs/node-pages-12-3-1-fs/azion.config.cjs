/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

module.exports = {
  build: {
    preset: "next",
    polyfills: true,
    memoryFS: {
      injectionDirs: ["data"],
      removePathPrefix: "",
    },
  },
  edgeStorage: [
    {
      name: "$BUCKET_NAME",
      dir: ".edge/next-build-assets",
      edgeAccess: "read_only",
      prefix: "$BUCKET_PREFIX",
    },
  ],
  edgeConnectors: [
    {
      name: "$EDGE_CONNECTOR_NAME",
      active: true,
      type: "edge_storage",
      attributes: {
        bucket: "$BUCKET_NAME",
        prefix: "$BUCKET_PREFIX",
      },
    },
  ],
  edgeFunctions: [
    {
      name: "$EDGE_FUNCTION_NAME",
      path: "./functions/handler.js",
      bindings: {
        storage: {
          bucket: "$BUCKET_NAME",
          prefix: "$BUCKET_PREFIX",
        },
      },
    },
  ],
  edgeApplications: [
    {
      name: "$EDGE_APPLICATION_NAME",
      rules: {
        request: [
          {
            name: "Next.js Static Assets",
            description: "Serve Next.js static assets through edge connector",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument: "^/_next/static/",
                },
              ],
            ],
            behaviors: [
              {
                type: "set_edge_connector",
                attributes: {
                  value: "$EDGE_CONNECTOR_NAME",
                },
              },
              {
                type: "deliver",
              },
            ],
          },
          {
            name: "Deliver Static Assets",
            description: "Serve static assets through edge connector",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument:
                    ".(css|js|ttf|woff|woff2|pdf|svg|jpg|jpeg|gif|bmp|png|ico|mp4|json|xml|html)$",
                },
              ],
            ],
            behaviors: [
              {
                type: "set_edge_connector",
                attributes: {
                  value: "$EDGE_CONNECTOR_NAME",
                },
              },
              {
                type: "deliver",
              },
            ],
          },
          {
            name: "Execute Next.js Function",
            description: "Execute Next.js edge function for all requests",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument: "^/",
                },
              ],
            ],
            behaviors: [
              {
                type: "run_function",
                attributes: {
                  value: "$EDGE_FUNCTION_NAME",
                },
              },
              {
                type: "forward_cookies",
              },
            ],
          },
        ],
      },
      functionsInstances: [
        {
          name: "$EDGE_FUNCTION_INSTANCE_NAME",
          ref: "$EDGE_FUNCTION_NAME",
          args: {
            environment: "production",
          },
        },
      ],
    },
  ],
  workloads: [
    {
      name: "$WORKLOAD_NAME",
      active: true,
      infrastructure: 1,
      protocols: {
        http: {
          versions: ["http1", "http2"],
          httpPorts: [80],
          httpsPorts: [443],
          quicPorts: null,
        },
      },
      deployments: [
        {
          name: "$DEPLOYMENT_NAME",
          current: true,
          active: true,
          strategy: {
            type: "default",
            attributes: {
              edgeApplication: "$EDGE_APPLICATION_NAME",
            },
          },
        },
      ],
    },
  ],
};
