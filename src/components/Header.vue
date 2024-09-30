<template>
    <header class="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold">Dashboard</h1>
        <div class="flex items-center">
          <button @click="$emit('toggle-dark-mode')" class="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full w-10 h-10">
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  // No additional logic needed
  </script>
  