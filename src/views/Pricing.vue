<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8 text-center dark:text-white">
      Pricing Plans
    </h1>

    <div class="flex flex-col lg:flex-row gap-8 justify-center">
      <!-- Basic Plan -->
      <div
        class="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 flex-1 max-w-md"
      >
        <h2 class="text-2xl font-semibold mb-2 dark:text-white">Basic</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Perfect for individuals
        </p>
        <div class="text-4xl font-bold mb-6 dark:text-white">
          $9<span class="text-xl font-normal text-gray-600 dark:text-gray-400"
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

        <button
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Choose Plan
        </button>
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
        <h2 class="text-2xl font-semibold mb-2 dark:text-white">Pro</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">For small teams</p>
        <div class="text-4xl font-bold mb-6 dark:text-white">
          $29<span class="text-xl font-normal text-gray-600 dark:text-gray-400"
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

        <button
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Choose Plan
        </button>
      </div>

      <!-- Enterprise Plan -->
      <div
        class="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 flex-1 max-w-md"
      >
        <h2 class="text-2xl font-semibold mb-2 dark:text-white">Enterprise</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          For large organizations
        </p>
        <div class="text-4xl font-bold mb-6 dark:text-white">
          $99<span class="text-xl font-normal text-gray-600 dark:text-gray-400"
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
            <span class="dark:text-gray-300">Advanced security features</span>
          </li>
        </ul>

        <button
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</template>
