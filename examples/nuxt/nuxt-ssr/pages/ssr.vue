<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch('/api/hello')

useSeoMeta({
  title: 'Nuxt SSR Demo',
  description: 'Server Side Rendering demonstration with Nuxt'
})

const refreshData = () => {
  refresh()
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
          <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
          <span class="text-purple-600">Server</span> Side Rendering
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          This page is rendered on the server for each request, 
          allowing dynamic content and real-time data.
        </p>
      </div>

      <!-- API Data Card -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-3xl font-bold text-gray-900">API Data</h2>
            <button 
              @click="refreshData"
              :disabled="pending"
              class="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="pending" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              {{ pending ? 'Updating...' : 'Refresh' }}
            </button>
          </div>

          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
              </svg>
              <p class="text-red-700">Error loading API data</p>
            </div>
          </div>

          <div v-else-if="data" class="space-y-4">
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Server Message</h3>
              <p class="text-gray-700 text-lg">{{ data.message }}</p>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Timestamp</h3>
              <p class="text-blue-700 text-lg font-mono">{{ data.date }}</p>
              <p class="text-sm text-gray-600 mt-2">
                This timestamp is generated on the server for each request
              </p>
            </div>
          </div>

          <div v-else class="animate-pulse">
            <div class="bg-gray-200 rounded-lg h-20 mb-4"></div>
            <div class="bg-gray-200 rounded-lg h-20"></div>
          </div>
        </div>
      </div>

      <!-- Comparison Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- SSR Benefits -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">SSR Benefits</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
              <span>Always up-to-date content</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
              <span>SEO with dynamic data</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
              <span>Faster initial load</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
              <span>Works without JavaScript</span>
            </li>
          </ul>
        </div>

        <!-- When to use -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">When to use SSR</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
              <span>Frequently changing data</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
              <span>User-personalized content</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
              <span>E-commerce pages</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
              <span>Real-time dashboards</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation -->
      <div class="text-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to SSG
        </NuxtLink>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 pt-8 border-t border-gray-200">
        <p class="text-gray-500">
          Server-rendered page • Data updated at: <strong>{{ data?.date }}</strong>
        </p>
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
