# Next.js Commerce 13 - Azion

A modern e-commerce project built with Next.js 13 and optimized for Azion's Platform. This project demonstrates how to implement a complete online store with advanced performance features using Azion's OpenNext.js.

## 📋 About the Project

This is an e-commerce demonstration project that includes:

- **Modern Interface**: Responsive user interface built with React and Tailwind CSS
- **Reusable Components**: Design system based on Radix UI and custom components
- **Product Catalog**: Complete product display system with images and descriptions
- **Optimized Performance**: ISR (Incremental Static Regeneration) implementation

### Technologies Used

- **Next.js 13**: React framework with App Router
- **TypeScript**: Static typing for greater reliability
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible and customizable components
- **@tabler/icons-react**: Modern and consistent icons
- **OpenNext.js Azion**: Adapter to run Next.js on Azion

### Project Structure

```
src/
├── app/                  # Next.js 13 App Router
│   ├── (store)/          # Store route group
│   ├── api/              # API Routes
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Main layout
├── components/           # Reusable React components
│   ├── ui/               # Design system base components
│   ├── banner.tsx        # Banner component
│   ├── footer.tsx        # Application footer
│   └── ...
├── hooks/                # Custom React hooks
└── lib/                  # Utilities and configurations
```

## 🚀 How to Use with Azion's OpenNext.js

### Prerequisites

1. **Node.js** (version 18 or higher)
2. **Azion CLI** installed globally:

   **Using Homebrew (macOS/Linux):**

   ```bash
   brew install azion
   ```

   **Other installation methods:** See the [complete installation guide](https://www.azion.com/en/documentation/products/azion-cli/overview/#installing-azion-cli) for Windows, Linux packages, and more options.

3. **Azion Account** with access to the Platform

### MockAPI Setup (Required)

Before setting up the Azion CLI, you need to configure the MockAPI service for the product data:

#### 1. Create MockAPI Account

1. Go to [mockapi.io](https://mockapi.io)
2. Create a free account
3. Create a new project

#### 2. Configure Products Endpoint

1. In your MockAPI project, create a new resource called `products`
2. Set the endpoint path as `/products`
3. Import the product data from `./data.json` file in this repository
4. Copy the generated API endpoint URL (it should look like: `https://[project-id].mockapi.io/api/v1`)

#### 3. Environment Configuration

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your MockAPI endpoint:
   ```bash
   NEXT_PUBLIC_ENDPOINT_API=https://[your-project-id].mockapi.io/api/v1
   REVALIDATE_SECRET=your-secret-token
   ```

#### 4. Product Data Structure

Make sure your MockAPI products endpoint returns data in this format (based on `./data.json`):

```json
[
  {
    "id": "1",
    "name": "Shadow Stride Shoes",
    "slug": "shadowStrideShoes",
    "images": ["https://example.com/image.jpg"],
    "price": 100,
    "currency": "USD",
    "description": "Product description here..."
  }
]
```

> **Note**: The application fetches products from `${NEXT_PUBLIC_ENDPOINT_API}/products` and individual products from `${NEXT_PUBLIC_ENDPOINT_API}/products/{id}`

## 🛠️ Local Development

### Install Dependencies

```bash
npm install
```

### Environment Setup

Make sure you have completed the MockAPI setup and configured your `.env` file with the correct endpoint before running the development server.

### Run in Development Mode

```bash
npm run dev
```

### Local Build (Next.js)

```bash
npm run build
```

### Run Local Build

```bash
npm start
```

## 📖 Interactive Guide

For a complete visual guide with step-by-step instructions, visit the **`/how-to`** page when running the project locally:

```bash
npm run dev
# Then visit: http://localhost:3000/how-to
```

The `/how-to` page includes:

- Complete setup instructions with visual examples
- MockAPI configuration guide
- CLI commands with detailed explanations
- Azion platform features overview
- Links to additional resources

### Build, Preview, and Deploy Commands

#### 1. Configure CLI Token

Before using the Azion CLI, you need to configure your personal access token:

```bash
# Configure your personal token
azion -t <your-personal-token>
```

> **Important**: You need to generate a Personal Token first. Visit the [Personal Tokens documentation](https://www.azion.com/en/documentation/products/accounts/personal-tokens/) to learn how to create one in your Azion account dashboard.

#### 2. Initial Setup

```bash
# Create initial configuration and link to Azion project
azion link
```

#### 3. Project Build

```bash
# Optimized build for Azion's Platform
azion build --preset opennextjs
```

#### 4. Local Preview

```bash
# Run local preview (skips Next.js build)
azion dev --skip-framework-build
```

> **Note**: The `--skip-framework-build` flag is used to skip the Next.js build step, useful when you've already built or want to quickly test Azion configurations.

#### 5. Production Deploy

```bash
# Deploy to Azion
azion deploy --local
```

## 🔄 How ISR Works in Azion's OpenNext.js

This project uses Incremental Static Regeneration (ISR) optimized for Azion Platform. The ISR implementation uses a hybrid architecture that combines Cache API and Storage to deliver ultra-low latency and automatic scalability.

For detailed information about how ISR works in Azion's OpenNext.js, including architecture diagrams and implementation details, please refer to the official documentation:

📖 **[ISR Documentation - OpenNext.js Azion](https://github.com/aziontech/opennextjs-azion/blob/main/docs/incremental-cache.md)**

This documentation covers:

- Hybrid caching architecture (Cache API + Storage)
- On-demand page generation and revalidation
- Performance optimizations for Edge computing
- Implementation details and best practices

## 🔄 Cache Revalidation API

This project includes a built-in API endpoint for manual cache revalidation, useful for updating cached content when products are modified in your MockAPI or when you need to force cache updates.

### API Endpoint: `/api/revalidate`

The revalidation API allows you to invalidate cached content by either **path** or **tag**, triggering fresh data fetching from your MockAPI.

#### Authentication

The API requires a secret token for security. Set the `REVALIDATE_SECRET` environment variable in your `.env` file:

```bash
REVALIDATE_SECRET=your-secret-token
```

#### Usage Examples

**Revalidate by Tag (Recommended):**

```bash
# Revalidate all products cache
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-secret: your-secret-token" \
  -d '{
    "type": "tag",
    "value": "products"
  }'

# Revalidate sale products cache
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-secret: your-secret-token" \
  -d '{
    "type": "tag",
    "value": "sale-products"
  }'
```

**Revalidate by Path:**

```bash
# Revalidate specific page
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-secret: your-secret-token" \
  -d '{
    "type": "path",
    "value": "/sale"
  }'
```

#### Response Format

**Success (200):**

```json
{
  "revalidated": true,
  "now": 1758205920197
}
```

**Error Responses:**

- **401 Unauthorized:** `{"message": "unauthorized"}` - Invalid secret token
- **400 Bad Request:** `{"message": "Missing value"}` - Missing or empty value field

#### When to Use

- **After updating products in MockAPI:** Use tag revalidation with `"products"` to refresh all product-related cache
- **After modifying sale items:** Use tag revalidation with `"sale-products"` to update sale page cache
- **For specific page updates:** Use path revalidation for targeted page refreshes
- **During deployment:** Automate cache clearing as part of your CI/CD pipeline

> **Production Note:** Replace `localhost:3000` with your actual domain when using in production environments.

## 📦 Main Dependencies

### Production

- `next`: ~13.5.11 - React framework
- `react`: ^18 - Interface library
- `@radix-ui/*`: Accessible UI components
- `tailwindcss`: CSS framework
- `next-themes`: Theme management

### Development

- `@aziontech/opennextjs-azion`: this is installed by preset opennextjs
- `typescript`: ^5 - Static typing
- `eslint`: Code linting

## 🌐 Azion Platform Features

The project comes pre-configured with Azion's OpenNext.js through the `azion.config.cjs` file. This configuration includes:

- **OpenNext.js Preset**: Optimized configuration for Next.js
- **Storage**: Bucket for static asset storage
- **Functions**: Azion Functions for rendering
- **Applications**: Routing and content delivery rules

### Azion Functions

- JavaScript code execution
- Automatic scalability

### Azion Storage

- Globally distributed storage
- S3-compatible API
- Native integration with Functions

### Azion Cache

- Smart cache with configurable TTL
- Selective purge by tags
- Automatic compression

## 📚 Additional Resources

- [Azion Documentation](https://www.azion.com/en/documentation/)
- [OpenNext.js Azion GitHub](https://github.com/aziontech/opennextjs-azion)
- [Next.js Documentation](https://nextjs.org/docs)
- [Azion CLI Reference](https://www.azion.com/en/documentation/products/azion-cli/)
