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
    entry: ["index.js"],
    preset: "javascript",
    polyfills: true,
  },
  networkList: [
    {
      name: "$NETWORK_LIST_NAME",
      type: "ip_cidr",
      items: ["127.0.0.0/8", "10.0.0.1"],
    },
  ],
  edgeFunctions: [
    {
      name: "$EDGE_FUNCTION_NAME",
      path: "./functions/index.js",
    },
  ],
  edgeApplications: [
    {
      name: "$EDGE_APPLICATION_NAME",
      rules: {
        request: [
          {
            name: "Execute Edge Function",
            description: "Execute edge function for all requests",
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
