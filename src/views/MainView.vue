<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, watch, ref } from 'vue';

const angka1 = ref(0)
const angka2 = ref(100)

onMounted(() => {
    console.log("on mounted")
})

onUpdated(() => {
    console.log("on updated")
})

watch(angka2, (newValue, oldValue) => {
    console.log("OLD:", oldValue, "NEW:", newValue)
    
})

onUnmounted(() => {
    console.log("on unmounted");
    
})
</script>

<template>
    <div>
        <h1>{{ angka1 }} - {{ angka2 }}</h1>

        <hr />

        <button @click="()=>angka1++">tambah angka 1</button>
        <button @click="()=>angka2++">tambah angka 2</button>
    </div>
</template>