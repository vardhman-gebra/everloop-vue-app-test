<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Contact Us
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to start your project? Get in touch with our team and let's
          discuss how we can help bring your vision to life.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send us a Message
          </h2>
          <form
            @submit.prevent="submitForm"
            class="space-y-6"
            id="contact_form"
          >
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label
                for="service"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Service Interest
              </label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="consulting">IT Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded-lg"
          >
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div
                  class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    hello@example.com
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    support@example.com
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    Address
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    123 Business Street
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Business Hours
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300"
                  >Monday - Friday</span
                >
                <span class="font-semibold text-gray-900 dark:text-white"
                  >9:00 AM - 6:00 PM</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300">Saturday</span>
                <span class="font-semibold text-gray-900 dark:text-white"
                  >10:00 AM - 4:00 PM</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300">Sunday</span>
                <span class="font-semibold text-gray-900 dark:text-white"
                  >Closed</span
                >
              </div>
            </div>
          </div>

          <!-- FAQ Link -->
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 class="text-xl font-bold mb-3">Need Quick Answers?</h3>
            <p class="text-blue-100 mb-4">
              Check out our frequently asked questions.
            </p>
            <router-link
              to="/dashboard"
              class="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              View Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    // Reset form
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = "";
    });

    isSubmitting.value = false;
    showSuccess.value = true;

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  }, 1500);
};
</script>

<style scoped>
/* Component-specific styles */
</style>
