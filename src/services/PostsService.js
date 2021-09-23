import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { Post } from '../models/Post'

class PostsService {
  async getPosts() {
    AppState.posts = []
    // logger.log('query', query)
    const res = await api.get('api/blogs')
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
}

export const postsService = new PostsService()
