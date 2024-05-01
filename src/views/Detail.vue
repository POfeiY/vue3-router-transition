<script setup lang="ts">
import { useRouter } from 'vue-router'
const route = useRouter()
const backHome = () => {
  route.back()
}
</script>
<template>
  <div w-100vw position-absolute>
    <h2>Detail Page</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia beatae dolor modi, sit dolorem
      inventore quo necessitatibus porro adipisci sint ullam labore quis cum animi veniam placeat? Nostrum, veritatis.
    </p>
    <button @click.stop="backHome">Back Home</button>
  </div>
</template>
