<script lang="ts" setup>
import HeroSection from '@/components/HeroSection.vue';
import {computed, provide, ref, type Ref} from 'vue'

const angka: Ref<number> = ref(0)
const huruf: Ref<string> = ref('a')
const text: Ref<string> = ref('')
const addAngka = () => {
  angka.value++
}

const reduceAngka = () => angka.value--

const gantiHuruf = (iniHuruf:string) => {
  huruf.value = iniHuruf
}

const reverseText = computed(() => {
  return text.value.split("").reverse().join('')
})

provide('angka', angka)
provide('huruf', huruf)
provide('text', reverseText)
</script>

<template>
  <div class="about">
    <div>
      <h1>About me</h1>
    </div>
    <div>
      <button @click="addAngka">tambah</button>
      <button @click="reduceAngka">kurang</button>
    </div>
    <div>
      <button @click="() => gantiHuruf('X')">Ganti</button>
    </div>
    <div>
      <input type="text" v-model="text" placeholder="type something ...">
    </div>
    <div>
      <HeroSection>
        <div>Test</div>
        <template v-slot:header>
          <div>
            ini header
          </div>
        </template>
        <template v-slot:footer>
          <div>
            ini footer
          </div>
        </template>
      </HeroSection>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
