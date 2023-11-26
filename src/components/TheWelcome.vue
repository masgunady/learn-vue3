<script lang="ts">
  interface IProps {
      title: string,
      content: string
    }
  interface IEmit {
    (e: 'emitChangeFullname', value: string) : void
  }
</script>

<script setup lang="ts">
  import {ref, defineProps, defineEmits} from 'vue'
  const props = defineProps<IProps>()
  const nama = ref("Gunadi")

  const emit = defineEmits<IEmit>()

  const changeFullname = (newName: string) => {
    emit('emitChangeFullname', newName)
  }
</script>

<template>
  <main>
    <h1>Home/About {{ nama }} {{ props.title }}</h1>
    <h2>{{ props.content }}</h2>

    <button @click="changeFullname('rendi')">Change Fullname</button>
  </main>
</template>

<style>
  h1{
    color: aqua;
  }
</style>

