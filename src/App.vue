<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header class="bg-white shadow-sm dark:bg-gray-800">
      <nav
        class="container mx-auto px-4 py-4 flex items-center justify-between"
      >
        <div class="flex items-center space-x-2">
          <!-- <img src="/logo.svg" alt="Logo" class="h-8 w-8" /> -->
          <span class="text-lg font-bold text-primary dark:text-white"
            >AI App</span
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Home</router-link
          >
          <router-link
            to="/features"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Features</router-link
          >
          <router-link
            to="/pricing"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Pricing</router-link
          >
          <router-link
            to="/about"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >About</router-link
          >
          <router-link
            to="/login"
            class="text-white bg-primary font-medium rounded-lg hover:bg-primary-dark transition"
            >Join Now!</router-link
          >
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-500 dark:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 flex flex-wrap items-center gap-2">
          <router-link
            to="/"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            >Home</router-link
          >
          <router-link
            to="/features"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            >Features</router-link
          >
          <router-link
            to="/pricing"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            >Pricing</router-link
          >
          <router-link
            to="/about"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            >About</router-link
          >
          <router-link
            to="/login"
            class="text-white bg-primary font-medium py-2 px-6 rounded-lg hover:bg-primary-dark transition"
            >Join Now!</router-link
          >
        </div>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-white dark:bg-gray-800 py-6">
      <div class="container mx-auto px-4">
        <p class="text-center text-gray-500 dark:text-gray-400">
          © 2023 AI App. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>
