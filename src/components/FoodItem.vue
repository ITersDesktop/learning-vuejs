<template>
  <div>
    <h2>
      {{ foodName }}
      <img class="food-fav" src="/favourite.svg" v-show="foodIsFavorite">
    </h2>
    <img class="food-img" :src="foodImg">
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
export default {
  // props: ['foodName','foodDesc','isFavorite']
  props: {
    foodName: {
      type: String,
      required: true
    },
    foodDesc: {
      type: String,
      required: false,
      default: 'This is the default description.'
    },
    foodImg: {
      type: String,
      required: true  
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite;
    }
  }
};
</script>

<style>
  .food-fav {
    width: 25%;
  }
  .food-img {
    width: 100%;
  }
</style>
