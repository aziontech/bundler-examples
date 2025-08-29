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
    preset: "html",
    polyfills: true,
  },
  storage: [
    {
      name: "$BUCKET_NAME",
      prefix: "$BUCKET_PREFIX",
      dir: "./www",
      edgeAccess: "read_only",
    },
  ],
  connectors: [
    {
      name: "$CONNECTOR_NAME",
      active: true,
      type: "storage",
      attributes: {
        bucket: "$BUCKET_NAME",
        prefix: "$BUCKET_PREFIX",
      },
    },
  ],
  applications: [
    {
      name: "$APPLICATION_NAME",
      rules: {
        request: [
          {
            name: "Deliver Static Assets",
            description: "Deliver static assets directly from storage",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument:
                    "\\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|ttf|otf|woff|woff2|eot|pdf|doc|docx|xls|xlsx|ppt|pptx|mp4|webm|mp3|wav|ogg|css|js|json|xml|html|txt|csv|zip|rar|7z|tar|gz|webmanifest|map|md|yaml|yml)$",
                },
              ],
            ],
            behaviors: [
              {
                type: "set_connector",
                attributes: {
                  value: "$CONNECTOR_NAME",
                },
              },
              {
                type: "deliver",
              },
            ],
          },
          {
            name: "Redirect to index.html",
            description: "Handle directory requests by rewriting to index.html",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument: ".*/$",
                },
              ],
            ],
            behaviors: [
              {
                type: "set_connector",
                attributes: {
                  value: "$CONNECTOR_NAME",
                },
              },
              {
                type: "rewrite_request",
                attributes: {
                  value: "${uri}index.html",
                },
              },
            ],
          },
          {
            name: "Redirect to index.html for Subpaths",
            description: "Handle subpath requests by rewriting to index.html",
            active: true,
            criteria: [
              [
                {
                  variable: "${uri}",
                  conditional: "if",
                  operator: "matches",
                  argument: "^(?!.*\\/$)(?![\\s\\S]*\\.[a-zA-Z0-9]+$).*",
                },
              ],
            ],
            behaviors: [
              {
                type: "set_connector",
                attributes: {
                  value: "$CONNECTOR_NAME",
                },
              },
              {
                type: "rewrite_request",
                attributes: {
                  value: "${uri}/index.html",
                },
              },
            ],
          },
        ],
        response: [],
      },
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
              application: "$APPLICATION_NAME",
            },
          },
        },
      ],
    },
  ],
};
