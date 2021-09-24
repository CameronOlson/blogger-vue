import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { Post } from '../models/Post'
import { convertToQuery } from '../utils/Query'

class PostsService {
  async getPosts(query = {}) {
    AppState.posts = []
    logger.log('query', query)
    const res = await api.get('api/blogs' + convertToQuery(query))
    logger.log('post res', res)
    AppState.posts = res.data.map(p => new Post(p))
  }

  // REVIEW Does this thing work
  async createPost(newPost) {
    const res = await api.post('api/blogs', newPost)
    AppState.posts.unshift(new Post(res.data))
    logger.log('create res', res)
  }

  async getPostById(PostId) {
    AppState.post = null
    const res = await api.get(`api/blogs/${PostId}`)
    logger.log(res)
    AppState.post = new Post(res.data)
  }

  async deletePost(PostId) {
    const res = await api.delete(`api/blogs/${PostId}`)
    logger.log(res)
    AppState.posts = AppState.posts.filter(p => p.id !== PostId)
  }
}

export const postsService = new PostsService()
