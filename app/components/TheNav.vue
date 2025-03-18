<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref<number>(0)

// Función para actualizar el valor de scrollY
const updateScroll = () => {
  scrollY.value = window.scrollY
}

// Agregar el event listener cuando el componente se monta
onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  // Inicializar con el valor actual
  updateScroll()
})

// Limpiar el event listener cuando el componente se desmonta
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <nav position-sticky top-0 left-0 right-0 bg-blue p-2>
    NavBar
    cantidad de scroll {{ scrollY }}
  </nav>
</template>