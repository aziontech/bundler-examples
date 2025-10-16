<script setup lang="ts">

// This call is only made at build time
const { data, error } = await useFetch('/api/hello')

if (error.value) {
  throw createError(error.value)
}

useSeoMeta({
  title: 'Nuxt SSG Demo',
  description: 'Static Site Generation demonstration with Nuxt'
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span class="text-green-600">Nuxt</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          This page is statically generated (SSG) at build time. 
          Perfect for content that doesn't change frequently.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- SSG Card -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Static Generation</h3>
          </div>
          <p class="text-gray-600 mb-4">
            This page is pre-rendered at build time, resulting in:
          </p>
          <ul class="space-y-2 text-gray-600 mb-4">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Maximum performance
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Optimized SEO
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              CDN hosting
            </li>
          </ul>
          
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div class="flex items-center mb-2">
              <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm font-medium text-blue-800">Build Time</span>
            </div>
            <p class="text-xs text-blue-700">
              This page was generated at: <strong>{{ data?.date }}</strong>
            </p>
            <p class="text-xs text-blue-600 mt-1">
              This timestamp won't change until the next build!
            </p>
          </div>
        </div>

        <!-- SSR Card -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Server Rendering</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Need dynamic content? Visit our SSR page:
          </p>
          <NuxtLink 
            to="/ssr" 
            class="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            View SSR Page
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Info Section -->
      <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
          How does it work?
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-gray-600">1</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Build Time</h4>
            <p class="text-gray-600 text-sm">
              This page is generated during the build process
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-gray-600">2</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">CDN Deploy</h4>
            <p class="text-gray-600 text-sm">
              Static files are served via CDN
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-gray-600">3</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Fast Load</h4>
            <p class="text-gray-600 text-sm">
              Instant loading for users
            </p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 pt-8 border-t border-gray-200">
        <div class="space-y-2">
          <p class="text-gray-500">
            Built with ❤️ using <strong>Nuxt 3</strong> and <strong>Tailwind CSS</strong>
          </p>
          <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
            <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm text-green-700">
              <strong>Page generated at:</strong> {{ data?.date }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Adiciona animações suaves */
.container > * {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
