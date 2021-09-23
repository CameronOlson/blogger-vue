<template>
  <div class="col-md-12 py-3" v-if="post">
    <div class="card bg-dark text-light rounded text-center">
      <div class="card-body">
        <img :src="post.imgUrl" alt="picture should go here" class="img-fluid rounded shadow">
        <h5 class="card-title py-3">
          {{ post.title }}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">
        </h6>
        <p class="card-text">
          {{ post.body }}
        </p>
        <a href="#" class="card-link">View Full Post</a>

        <a href="#" class="card-link">View Blogger</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const route = useRoute()
    logger.log('route param id', route.params.id)
    onMounted(async() => {
      await postsService.getPostById(route.params.id)
    })
    return {
      post: computed(() => AppState.post)
    }
  }
}
</script>

<style>

</style>
