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

        <a href="#" class="card-link">View Blogger</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>

<style>

.card-boy {
  height: 10rem;
}

</style>
