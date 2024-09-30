<script setup>

  import Header from './components/Header.vue'
  import Sidebar from './components/Sidebar.vue'
  import { useDarkMode } from './composables/useDarkMode'

  const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div :class="[isDarkMode ? 'dark' : '', 'min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white']">
    <div >
      <Header @toggle-dark-mode="toggleDarkMode" />
      <div class="flex">
        <Sidebar />
        <main class="flex-1 p-6">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>


<style>
/* Light mode styles */
.light-mode {
  background-color: white;
  color: #333;
  /* ... */
}

/* Dark mode styles */
.dark-mode {
  background-color: #333;
  color: white;
  /* ... */
}
</style>