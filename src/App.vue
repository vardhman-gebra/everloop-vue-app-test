<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <NavigationBar />

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer
      class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <div class="container mx-auto px-4 py-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">SP</span>
              </div>
              <span class="text-lg font-bold text-gray-900 dark:text-white"
                >Sample Platform</span
              >
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Building innovative solutions for the modern world.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/"
                  class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                  >About</router-link
                >
              </li>
              <li>
                <router-link
                  to="/services"
                  class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                  >Services</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>hello@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Business Street<br />San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            © 2024 Sample Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style scoped>
/* Component-specific styles */
</style>
