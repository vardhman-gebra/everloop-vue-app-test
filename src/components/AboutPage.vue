<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Us
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn about our mission, vision, and the passionate team behind our
          platform.
        </p>
      </div>

      <!-- Mission Section -->
      <section class="mb-16">
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We are dedicated to creating innovative solutions that empower
            businesses and individuals to achieve their goals more efficiently.
            Our platform is built with the belief that technology should be
            accessible, reliable, and transformative.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Since our founding, we have been committed to excellence, continuous
            improvement, and putting our users first in everything we do.
          </p>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="mb-16">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div class="text-gray-600 dark:text-gray-300">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div class="text-gray-600 dark:text-gray-300">Uptime</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div class="text-gray-600 dark:text-gray-300">Countries</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div class="text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-16">
        <h2
          class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Meet Our Team
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
          >
            <div
              class="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">JS</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              John Smith
            </h3>
            <p class="text-blue-600 dark:text-blue-400 mb-3">CEO & Founder</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Visionary leader with 15+ years of experience in tech innovation.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
          >
            <div
              class="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">SJ</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Sarah Johnson
            </h3>
            <p class="text-green-600 dark:text-green-400 mb-3">CTO</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Technical genius who architected our scalable platform
              infrastructure.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
          >
            <div
              class="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">MW</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Mike Wilson
            </h3>
            <p class="text-orange-600 dark:text-orange-400 mb-3">
              Head of Design
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Creative mind behind our beautiful and intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section>
        <div
          class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 class="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-3">Innovation</h3>
              <p class="text-blue-100">
                We constantly push boundaries to create cutting-edge solutions
                that drive progress.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Integrity</h3>
              <p class="text-blue-100">
                Transparency and honesty guide every decision and interaction we
                have.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Excellence</h3>
              <p class="text-blue-100">
                We strive for perfection in every detail, delivering quality
                that exceeds expectations.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Collaboration</h3>
              <p class="text-blue-100">
                Together we achieve more, fostering partnerships that create
                lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("About page mounted");
});
</script>

<style scoped>
/* Component-specific styles */
</style>
