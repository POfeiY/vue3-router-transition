<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter()
const toDetail = () => {
  route.go(-1)
}
onMounted(() => {
  console.log('Home')
})
</script>
<template>
  <div w-100vw bg-pink position-absolute>
    <h2>Home Page</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis quis adipisci perferendis ab
      doloribus laudantium laborum officiis deleniti sed, excepturi cupiditate nulla voluptas ullam qui non? Voluptas,
      tempore deleniti!</p>
    <button @click.stop="toDetail">To Detail</button>
  </div>
</template>
