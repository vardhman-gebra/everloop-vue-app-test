<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header class="bg-white shadow-sm dark:bg-gray-800 sticky top-0 z-50">
      <nav
        class="container mx-auto px-4 py-4 flex items-center justify-between"
      >
        <div class="flex items-center space-x-2">
          <span class="text-lg font-bold text-primary dark:text-white"
            >AI App</span
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a
            href="#home"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Home</a
          >
          <a
            href="#features"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Features</a
          >
          <a
            href="#pricing"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >Pricing</a
          >
          <a
            href="#about"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >About</a
          >
          <a
            href="#login"
            class="text-white bg-primary font-medium rounded-lg hover:bg-primary-dark transition"
            >Join Now!</a
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
          <a
            href="#home"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            @click="mobileMenuOpen = false"
            >Home</a
          >
          <a
            href="#features"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            @click="mobileMenuOpen = false"
            >Features</a
          >
          <a
            href="#pricing"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            @click="mobileMenuOpen = false"
            >Pricing</a
          >
          <a
            href="#about"
            class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
            @click="mobileMenuOpen = false"
            >About</a
          >
          <a
            href="#login"
            class="text-white bg-primary font-medium rounded-lg hover:bg-primary-dark transition"
            @click="mobileMenuOpen = false"
            >Join Now!</a
          >
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section from Landing.vue -->
      <section
        id="home"
        class="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-light text-white"
      >
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Discover the Power of AI
              </h1>
              <p class="text-xl mb-8">
                Transform your workflow with our cutting-edge AI assistant
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  class="text-primary font-medium py-2 px-6 rounded-lg hover:bg-gray-100/50 transition"
                  href="#login"
                >
                  Get Started
                </a>
                <a
                  class="border border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white/10 transition"
                  href="#features"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="md:w-1/2">
              <img
                src="/hero-image.svg"
                alt="AI Assistant"
                class="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section (combining both Landing and Features views) -->
      <section id="features" class="py-16 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">
            Key Features
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Lightning Fast
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Get instant responses with our high-performance AI engine.
              </p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Highly Secure
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Your data is encrypted and never shared with third parties.
              </p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Smart Automation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Automate repetitive tasks and focus on what matters.
              </p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Natural Language Processing
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Our advanced NLP algorithms understand context and nuance to
                provide accurate responses.
              </p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Computer Vision
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Analyze and interpret visual data with our state-of-the-art
                image recognition technology.
              </p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                Predictive Analytics
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Forecast trends and make data-driven decisions with our
                predictive models.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" class="py-16 bg-gray-100 dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">
            Pricing Plans
          </h2>

          <div class="flex flex-col lg:flex-row gap-8 justify-center">
            <!-- Basic Plan -->
            <div
              class="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 flex-1 max-w-md"
            >
              <h3 class="text-2xl font-semibold mb-2 dark:text-white">Basic</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Perfect for individuals
              </p>
              <div class="text-4xl font-bold mb-6 dark:text-white">
                $9<span
                  class="text-xl font-normal text-gray-600 dark:text-gray-400"
                  >/month</span
                >
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">100 AI queries per day</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Email support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Basic integrations</span>
                </li>
              </ul>

              <a
                href="#login"
                class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition block text-center"
              >
                Choose Plan
              </a>
            </div>

            <!-- Pro Plan -->
            <div
              class="bg-white p-8 rounded-lg shadow-md border-2 border-primary dark:bg-gray-800 flex-1 max-w-md"
            >
              <div
                class="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Most Popular
              </div>
              <h3 class="text-2xl font-semibold mb-2 dark:text-white">Pro</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                For small teams
              </p>
              <div class="text-4xl font-bold mb-6 dark:text-white">
                $29<span
                  class="text-xl font-normal text-gray-600 dark:text-gray-400"
                  >/month</span
                >
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Unlimited AI queries</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Priority support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Advanced integrations</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Analytics dashboard</span>
                </li>
              </ul>

              <a
                href="#login"
                class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition block text-center"
              >
                Choose Plan
              </a>
            </div>

            <!-- Enterprise Plan -->
            <div
              class="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 flex-1 max-w-md"
            >
              <h3 class="text-2xl font-semibold mb-2 dark:text-white">
                Enterprise
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                For large organizations
              </p>
              <div class="text-4xl font-bold mb-6 dark:text-white">
                $99<span
                  class="text-xl font-normal text-gray-600 dark:text-gray-400"
                  >/month</span
                >
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Unlimited everything</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">24/7 dedicated support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300">Custom integrations</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="dark:text-gray-300"
                    >Advanced security features</span
                  >
                </li>
              </ul>

              <a
                href="#login"
                class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">
            About Us
          </h2>

          <div
            class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-700"
          >
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              At AI App, we're on a mission to make artificial intelligence
              accessible to everyone. Our team of experts has developed
              cutting-edge technology that helps businesses and individuals
              harness the power of AI to solve complex problems and enhance
              productivity.
            </p>

            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2020, we've grown from a small startup to a leading
              innovator in the AI space. Our platform is used by thousands of
              customers worldwide, from small businesses to Fortune 500
              companies.
            </p>

            <h3 class="text-2xl font-semibold mb-4 dark:text-white">
              Our Team
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 class="font-medium dark:text-white">Jane Doe</h4>
                  <p class="text-gray-600 dark:text-gray-400">CEO & Founder</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 class="font-medium dark:text-white">John Smith</h4>
                  <p class="text-gray-600 dark:text-gray-400">CTO</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 class="font-medium dark:text-white">Emily Johnson</h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    Head of Product
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 class="font-medium dark:text-white">Michael Brown</h4>
                  <p class="text-gray-600 dark:text-gray-400">Lead Engineer</p>
                </div>
              </div>
            </div>

            <h3 class="text-2xl font-semibold mb-4 dark:text-white">
              Contact Us
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Have questions? Reach out to our team at
              <a
                href="mailto:info@aiapp.com"
                class="text-primary hover:underline"
                >info@aiapp.com</a
              >
            </p>
          </div>
        </div>
      </section>

      <!-- Login Section -->
      <section id="login" class="py-16 bg-gray-100 dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div
            class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800"
          >
            <h2 class="text-2xl font-bold mb-6 text-center dark:text-white">
              Login
            </h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 dark:text-gray-300 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block text-gray-700 dark:text-gray-300 mb-2"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section
        class="py-16 bg-gradient-to-r from-primary to-primary-light text-white"
      >
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p class="text-xl mb-8">
            Join thousands of users who are already using our AI app.
          </p>
          <a
            href="#login"
            class="bg-white text-primary font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>
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
const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Handle login logic here
  console.log("Login attempt with:", email.value);
  // You would normally call an authentication service here
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
