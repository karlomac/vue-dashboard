import { computed } from 'vue'
import { useStore } from 'vuex'

export function useDarkMode() {
  const store = useStore()

  // Retrieve the dark mode status from the store
  const isDarkMode = computed(() => store.state.darkMode)

  // Commit the 'toggleDarkMode' mutation to update the store
  const toggleDarkMode = () => {
    store.commit('toggleDarkMode')
  }

  return {
    isDarkMode: isDarkMode.value,
    toggleDarkMode
  }
}