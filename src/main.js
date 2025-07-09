import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import FoodAbout from './components/FoodAbout.vue'
import FoodItem from './components/FoodItem.vue'
import FoodKinds from './components/FoodKinds.vue'

const app = createApp(App)
app.component('food-about', FoodAbout)
app.component('food-item', FoodItem)
app.component('food-kinds', FoodKinds)
app.mount('#app')
