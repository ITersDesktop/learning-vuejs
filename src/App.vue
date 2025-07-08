<script setup>
  import HelloWorld from './components/HelloWorld.vue'
</script>

<!-- <template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template> -->

<template>
  <h1>Food</h1>
  <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
  <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
  <div id="divComp">
    <component :is="activeComp"></component>
  </div>
</template>

<script>
// https://www.w3schools.com/vue/vue_provide-inject.php
export default {
  data() {
    return {
      activeComp: 'food-kinds',
      foods: [
        { name: 'Pizza', imgUrl: 'src/assets/img/foods/pizza.svg' },
        { name: 'Apple', imgUrl: 'src/assets/img/foods/apple.svg' },
        { name: 'Cake', imgUrl: 'src/assets/img/foods/cake.svg' },
        { name: 'Fish', imgUrl: 'src/assets/img/foods/fish.svg' },
        { name: 'Rice', imgUrl: 'src/assets/img/foods/rice.svg' }
      ]
    }
  },
  provide() {
    return {
      foods: this.foods
    }
  }
}
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
.divBtn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background-color: white;
  border: solid 2px #04AA6D;
  border-radius: 10px;
  font-family: Verdana,sans-serif;
  color: black;
  padding: 10px;
  margin: 10px;
}
.divBtn:hover {
  background-color: #04AA6D;
  color: white;
  cursor: pointer;
}
#divComp {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 400px;
}
</style>
