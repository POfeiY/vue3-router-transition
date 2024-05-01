<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from './router'
const tranisitonName = ref<string>('')
const route = useRoute()

watch(
  () => route.path,
  (to, from) => {
    // TODO: tab路由无需路由过渡

    const toDepth = routes.findIndex(r => r.path === to)
    const fromDepth = routes.findIndex(r => r.path === from)
    tranisitonName.value = toDepth > fromDepth ? 'go' : 'back'
  }
)

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="tranisitonName">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </router-view>
</template>
