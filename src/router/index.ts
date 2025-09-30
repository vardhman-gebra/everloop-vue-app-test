import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ServicesPage from "../components/ServicesPage.vue";
import ContactPage from "../components/ContactPage.vue";
import DashboardPage from "../components/DashboardPage.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        title: "Home - Welcome to Our Platform",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        title: "About Us - Learn More About Our Company",
      },
    },
    {
      path: "/services",
      name: "services",
      component: ServicesPage,
      meta: {
        title: "Services - What We Offer",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
      meta: {
        title: "Contact Us - Get In Touch",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardPage,
      meta: {
        title: "Dashboard - Your Account Overview",
        requiresAuth: true, // Example: could be used for protected routes
      },
    },
    {
      // Catch-all route for 404 errors
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Global navigation guard
router.beforeEach((to, _from, next) => {
  // Update document title based on route meta
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }

  // Example: Check authentication for protected routes
  if (to.meta.requiresAuth) {
    // In a real app, you would check if user is authenticated
    // For demo purposes, we'll just allow access
    console.log("Accessing protected route:", String(to.name));
  }

  next();
});

// Global after navigation guard
router.afterEach((to, from) => {
  // Analytics tracking could go here
  console.log(
    `Navigated from ${String(from.name) || "unknown"} to ${
      String(to.name) || "unknown"
    }`
  );
});

export default router;
