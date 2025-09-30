<template>
  <nav class="bg-white shadow-lg dark:bg-gray-800 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-sm">SP</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white"
            >Sample Platform</span
          >
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="nav-link"
            :class="{ active: $route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle mobile menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4"
      >
        <div class="flex flex-col space-y-2">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="mobile-nav-link"
            :class="{ active: $route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface NavLink {
  name: string;
  path: string;
}

const mobileMenuOpen = ref(false);

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];
</script>

<style scoped>
.nav-link {
  color: rgb(75 85 99);
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  color: rgb(37 99 235);
}

.nav-link.active {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

.mobile-nav-link {
  color: rgb(75 85 99);
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  display: block;
}

.mobile-nav-link:hover {
  color: rgb(37 99 235);
}

.mobile-nav-link.active {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

/* Dark mode styles */
:global(.dark) .nav-link {
  color: rgb(209 213 219);
}

:global(.dark) .nav-link:hover {
  color: rgb(96 165 250);
}

:global(.dark) .nav-link.active {
  color: rgb(96 165 250);
  background-color: rgba(37 99 235, 0.2);
}

:global(.dark) .mobile-nav-link {
  color: rgb(209 213 219);
}

:global(.dark) .mobile-nav-link:hover {
  color: rgb(96 165 250);
}

:global(.dark) .mobile-nav-link.active {
  color: rgb(96 165 250);
  background-color: rgba(37 99 235, 0.2);
}

/* Smooth transitions for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
