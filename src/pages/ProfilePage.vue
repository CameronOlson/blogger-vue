<template>
  <div class="container-fluid" v-if="profile">
    <p>Hello form profile page</p>
    <div class="row" v-if="posts.length > 0">
      <!-- <Post v-for="p in posts" :key="p.id" :post="p" /> -->
    </div>
    <div class="row" v-else>
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import { profilesService } from '../services/ProfilesServices'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsService.getPosts({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style>

</style>
