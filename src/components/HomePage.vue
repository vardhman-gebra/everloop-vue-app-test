<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
  >
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center">
          <h1
            class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Welcome to
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Our Platform
            </span>
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover amazing features and services that will transform your
            workflow. Join thousands of satisfied users who have already made
            the switch.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/services"
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </router-link>
            <router-link
              to="/about"
              class="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Preview -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Why Choose Us?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Reliable
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              99.9% uptime guarantee with enterprise-grade security.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div
              class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              User-Friendly
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Intuitive interface designed for maximum productivity.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Scalable
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Grows with your business from startup to enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-blue-100 mb-8">
          Join our community and start your journey today.
        </p>
        <router-link
          to="/contact"
          class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Contact Us Now
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // Any initialization logic for the home page
  console.log("Home page mounted");
});
</script>

<style scoped>
/* Component-specific styles can go here */
</style>
