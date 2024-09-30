
  <script setup>
  import { ref, onMounted } from 'vue'
  import PostTable from '../components/PostTable.vue'
  import PostModal from '../components/PostModal.vue'
  import { useApi } from '../composables/useApi'
  
  const { fetchPosts } = useApi()
  const posts = ref([])
  const selectedPost = ref(null)
  
  onMounted(async () => {
    posts.value = await fetchPosts()
  })
  
  const openModal = (post) => {
    selectedPost.value = post
  }
  
  const closeModal = () => {
    selectedPost.value = null
  }
  </script>
  

  <template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Posts</h2>
      <PostTable :posts="posts" @open-modal="openModal" />
      <PostModal v-if="selectedPost" :post="selectedPost" @close="closeModal" />
    </div>
  </template>