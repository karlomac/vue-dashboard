
<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        posts: Array
    })

    const expandedPosts = ref({})

    const truncateBody = (body, length = 100) => {
        return body.length > length ? body.slice(0, length) + '...' : body
    }

    const toggleExpand = (postId) => {
        expandedPosts.value[postId] = !expandedPosts.value[postId]
    }
</script>
  
  <template>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell"
            >
              Body
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="post in posts" :key="post.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
            <td class="px-6 py-4 whitespace-nowrap">
              <a
                href="#"
                @click.prevent="$emit('open-modal', post)"
                class="text-blue-600 dark:text-blue-400 hover:underline"
                >{{ post.title }}</a
              >
            </td>
            <td class="px-6 py-4 hidden md:table-cell">
              <p v-if="!expandedPosts[post.id]">{{ truncateBody(post.body) }}</p>
              <p v-else>{{ post.body }}</p>
              <button
                @click="toggleExpand(post.id)"
                class="text-sm text-blue-600 dark:text-blue-400 mt-2"
              >
                {{ expandedPosts[post.id] ? 'Read less' : 'Read more' }}
              </button>
            </td>
            <td class="px-6 py-4 md:hidden">
              <p v-if="!expandedPosts[post.id]">{{ truncateBody(post.body, 50) }}</p>
              <p v-else>{{ post.body }}</p>
              <button
                @click="toggleExpand(post.id)"
                class="text-sm text-blue-600 dark:text-blue-400 mt-2"
              >
                {{ expandedPosts[post.id] ? 'Read less' : 'Read more' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  