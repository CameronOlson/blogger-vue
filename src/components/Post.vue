<template>
  <div class="col-md-4 py-3">
    <div class="card bg-dark text-light rounded" style="width: 22rem;">
      <div class="card-body">
        <img :src="post.imgUrl" alt="picture should go here" class="img-fluid rounded shadow">
        <h5 class="card-title py-3">
          {{ post.title }}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">
        </h6>
        <p class="card-text overflow-scroll card-boy">
          {{ post.body }}
        </p>
        <router-link :to="{name: 'Post', params: { id: post.id}}">
          <a href="#" class="card-link">View Full Post</a>
        </router-link>
        <div v-if="account.id == post.creatorId">
          <a href="#" class="card-link" @click="deletePost()">Delete Post</a>
        </div>
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="selectable">
          <img :src="post.creator.picture" class="" width="64" alt="Da Creatoooor">
          {{ post.creator.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id)
          Pop.toast('this has been deleted')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>

.card-boy {
  height: 7rem;
}

</style>
