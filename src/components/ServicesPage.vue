<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Our Services
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our comprehensive range of services designed to help you
          succeed. From consulting to implementation, we've got you covered.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Web Development -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Web Development
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Custom web applications built with modern technologies and best
            practices.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• Responsive Design</li>
            <li>• Performance Optimization</li>
            <li>• SEO-Friendly</li>
            <li>• Cross-browser Compatibility</li>
          </ul>
          <div class="text-2xl font-bold text-blue-600 mb-4">
            Starting at $2,999
          </div>
          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>

        <!-- Mobile App Development -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Mobile Apps
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Native and cross-platform mobile applications for iOS and Android.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• Native Performance</li>
            <li>• App Store Optimization</li>
            <li>• Push Notifications</li>
            <li>• Offline Functionality</li>
          </ul>
          <div class="text-2xl font-bold text-green-600 mb-4">
            Starting at $4,999
          </div>
          <button
            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>

        <!-- Cloud Solutions -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Cloud Solutions
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Scalable cloud infrastructure and migration services for modern
            businesses.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• AWS/Azure/GCP</li>
            <li>• Auto-scaling</li>
            <li>• 99.9% Uptime</li>
            <li>• Security Compliance</li>
          </ul>
          <div class="text-2xl font-bold text-purple-600 mb-4">
            Starting at $1,999
          </div>
          <button
            class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>

        <!-- UI/UX Design -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            UI/UX Design
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Beautiful, intuitive designs that create exceptional user
            experiences.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• User Research</li>
            <li>• Wireframing & Prototyping</li>
            <li>• Design Systems</li>
            <li>• Usability Testing</li>
          </ul>
          <div class="text-2xl font-bold text-orange-600 mb-4">
            Starting at $1,499
          </div>
          <button
            class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>

        <!-- Digital Marketing -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-pink-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Digital Marketing
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Comprehensive digital marketing strategies to grow your online
            presence.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• SEO & SEM</li>
            <li>• Social Media Marketing</li>
            <li>• Content Strategy</li>
            <li>• Analytics & Reporting</li>
          </ul>
          <div class="text-2xl font-bold text-pink-600 mb-4">
            Starting at $999
          </div>
          <button
            class="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>

        <!-- Consulting -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            IT Consulting
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Strategic technology consulting to optimize your business processes.
          </p>
          <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
            <li>• Technology Audit</li>
            <li>• Digital Transformation</li>
            <li>• Process Optimization</li>
            <li>• Strategic Planning</li>
          </ul>
          <div class="text-2xl font-bold text-indigo-600 mb-4">
            Starting at $199/hr
          </div>
          <button
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-xl text-blue-100 mb-8">
          Let's discuss your requirements and create a custom solution for your
          business.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Quote
          </router-link>
          <button
            class="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Services page mounted");
});
</script>

<style scoped>
/* Component-specific styles */
</style>
