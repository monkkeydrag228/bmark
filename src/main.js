import { createApp } from 'vue'
import App from './App.vue'
import ProjectHv from './ProjectHv.vue'
import ForhalfCard from './ForhalfCard.vue'
import ZaShita from './ZaShita.vue'
import WhatHappening from './WhatHappening.vue'
import SmileChel from './SmileChel.vue'
import FirstFloor from './FirstWloor.vue'
import SecondFloor from './SecondFloor.vue'

const app = createApp(App)
app.component('my-component', ProjectHv)
app.component('my-half', ForhalfCard)
app.component('my-zashita', ZaShita)
app.component('my-happen', WhatHappening)
app.component('my-smile', SmileChel)
app.component('my-first', FirstFloor)
app.component('my-second', SecondFloor)
app.mount('#app')