
<script setup>
    import { ref, onMounted } from 'vue'
    import { useApi } from '../composables/useApi'

    const props = defineProps({
        post: Object
    })

    const { fetchComments } = useApi()
    const comments = ref([])

    onMounted(async () => {
        comments.value = await fetchComments(props.post.id)
    })
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
            <h2 class="text-2xl font-bold mb-4">{{ post.title }}</h2>
            <p class="mb-4">{{ post.body }}</p>
            <h3 class="text-xl font-bold mb-2">Comments</h3>
            <ul v-if="comments.length">
                <li v-for="comment in comments" :key="comment.id" class="mb-2">
                    <strong>{{ comment.email }}</strong>: {{ comment.body }}
                </li>
            </ul>
            <p v-else>Loading comments...</p>
            <button @click="$emit('close')" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Close
            </button>
        </div>
    </div>
  </template>
  

  