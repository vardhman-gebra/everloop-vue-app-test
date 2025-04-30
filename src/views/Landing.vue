<template>
  <div>
    <!-- Hero Section -->
    <section
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
                class="text-primary font-medium py-2 px-6 rounded-lg hover:bg-gray-100/10 transition"
                href="/login"
              >
                Get Started
              </a>
              <button
                class="border border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white/10 transition"
              >
                Learn More
              </button>
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

    <!-- Features Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">
          Key Features
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gray-100 dark:bg-gray-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4 dark:text-white">
          Ready to get started?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of users who are already using our AI app.
        </p>
        <button
          class="bg-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-dark transition"
        >
          Sign Up Now
        </button>
      </div>
    </section>
  </div>
</template>
