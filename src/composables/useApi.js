import { ref } from 'vue'

export function useApi() {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching comments:', error)
      return []
    }
  }

  return { fetchPosts, fetchComments }
}
