<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
    <div class="container mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Welcome back! Here's an overview of your account and recent activity.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Total Projects
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ stats.totalProjects }}
              </p>
            </div>
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
          </div>
          <p class="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Active Tasks
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ stats.activeTasks }}
              </p>
            </div>
            <div
              class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-sm text-orange-600 mt-2">5 due this week</p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Team Members
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ stats.teamMembers }}
              </p>
            </div>
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                />
              </svg>
            </div>
          </div>
          <p class="text-sm text-blue-600 mt-2">2 new this week</p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Revenue
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                ${{ stats.revenue.toLocaleString() }}
              </p>
            </div>
            <div
              class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
          </div>
          <p class="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Recent Projects -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Recent Projects
              </h2>
              <button class="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div class="space-y-4">
              <div
                v-for="project in recentProjects"
                :key="project.id"
                class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div class="flex items-center space-x-4">
                  <div
                    :class="[
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      project.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900'
                        : project.status === 'in-progress'
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : 'bg-orange-100 dark:bg-orange-900',
                    ]"
                  >
                    <span
                      :class="[
                        'text-sm font-bold',
                        project.status === 'completed'
                          ? 'text-green-600'
                          : project.status === 'in-progress'
                          ? 'text-blue-600'
                          : 'text-orange-600',
                      ]"
                    >
                      {{ project.name.charAt(0)
                      }}{{ project.name.split(" ")[1]?.charAt(0) || "" }}
                    </span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      {{ project.name }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ project.client }}
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <span
                    :class="[
                      'inline-block px-3 py-1 rounded-full text-xs font-medium',
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : project.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
                    ]"
                  >
                    {{ project.status.replace("-", " ") }}
                  </span>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {{ project.date }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="space-y-6">
          <!-- Quick Actions -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div class="space-y-3">
              <button
                class="w-full text-left p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z"
                    />
                  </svg>
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Create New Project</span
                  >
                </div>
              </button>
              <button
                class="w-full text-left p-3 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    class="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                    />
                  </svg>
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Invite Team Member</span
                  >
                </div>
              </button>
              <button
                class="w-full text-left p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6.1A8.008 8.008 0 0110 20a8.008 8.008 0 01-6-2.9V5z"
                    />
                  </svg>
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Generate Report</span
                  >
                </div>
              </button>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div class="space-y-3">
              <div
                v-for="activity in recentActivity"
                :key="activity.id"
                class="flex items-start space-x-3"
              >
                <div
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold',
                    activity.type === 'project'
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                      : activity.type === 'task'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                      : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
                  ]"
                >
                  {{ activity.type.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1">
                  <p class="text-sm text-gray-900 dark:text-white">
                    {{ activity.description }}
                  </p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ activity.time }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Card -->
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <span class="text-xl font-bold">JD</span>
              </div>
              <h3 class="font-bold mb-1">John Doe</h3>
              <p class="text-blue-100 text-sm mb-4">Project Manager</p>
              <button
                class="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

interface Project {
  id: number;
  name: string;
  client: string;
  status: "completed" | "in-progress" | "pending";
  date: string;
}

interface Activity {
  id: number;
  type: "project" | "task" | "team";
  description: string;
  time: string;
}

const stats = reactive({
  totalProjects: 24,
  activeTasks: 18,
  teamMembers: 12,
  revenue: 125000,
});

const recentProjects = ref<Project[]>([
  {
    id: 1,
    name: "Website Redesign",
    client: "Tech Corp",
    status: "in-progress",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Mobile App",
    client: "StartUp Inc",
    status: "completed",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Cloud Migration",
    client: "Enterprise Ltd",
    status: "pending",
    date: "3 days ago",
  },
  {
    id: 4,
    name: "API Development",
    client: "Digital Agency",
    status: "in-progress",
    date: "5 days ago",
  },
]);

const recentActivity = ref<Activity[]>([
  {
    id: 1,
    type: "project",
    description: 'New project "E-commerce Platform" created',
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "task",
    description: 'Task "Database design" completed',
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "team",
    description: "Sarah Johnson joined the team",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "project",
    description: 'Project "Mobile App" delivered',
    time: "2 days ago",
  },
]);

onMounted(() => {
  console.log("Dashboard mounted");
  // You could fetch real data here
});
</script>

<style scoped>
/* Component-specific styles */
</style>
