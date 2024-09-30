
  <script setup>
  // No additional logic needed
  </script>

<template>
    <aside class="bg-gray-100 dark:bg-gray-800 w-64 min-h-screen pt-16">
      <nav class="mt-5">
        <router-link to="/" class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          Dashboard
        </router-link>
        <router-link to="/about" class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          About
        </router-link>
        <!-- Add more navigation links as needed -->
      </nav>
    </aside>
</template>