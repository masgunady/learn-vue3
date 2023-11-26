<script lang="ts">
    interface ITamu {
        fullName: string,
        address: string
    }
</script>
<script setup lang="ts">
    import TamuCard from '@/components/TamuCard.vue';
    import {reactive, ref, type Ref} from 'vue'

    const formTamu: ITamu = reactive({
        fullName:"",
        address:""
    })

    const tamuKu: Ref<ITamu[]> = ref([])

    const addTamu = () => {
        tamuKu.value = [...tamuKu.value, {
            fullName: formTamu.fullName,
            address: formTamu.address
        }]
    }
</script>

<template>
  <main>
    <h1>Form Input</h1>
    <form @submit.prevent="addTamu()">
        <input type="text" v-model="formTamu.fullName" placeholder="input nama tamu">
        <input type="text" v-model="formTamu.address" placeholder="input alamat">
        <button type="submit">Input Tamu</button>
    </form>

    <p class="text-display">Display :</p>

    <div class="container">
        <div v-if="tamuKu.length">
            <section v-for="(item, index) in tamuKu" :key="index" class="wrapper1">
                <div class="photo-wrap"></div>
                <div class="bio-wrap">
                    <div class="bio-item">
                        <TamuCard :fullName="item.fullName" :address="item.address"/>
                    </div>
                </div>
            </section>
        </div>
        </div>
  </main>
</template>

<style scoped>
    main{
        padding: 10px;
        background: #525252;
        border-radius: 30px;
    }
    h1 {
    color: #ffffff !important
    }
    .text-display {
        color: rgb(255, 255, 255);
        font-size: 16px;
    }
    div.container {
        width: 500px;
        height: 350px;
        background: #eaeaea;
        border-radius: 20px;
        padding: 10px;
        overflow: scroll;
    }
    .wrapper1 {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap:10px;
        margin-bottom: 5px;
    }

    .photo-wrap {
        width: 70px;
        height: 70px;
        background: blue;
        border-radius: 10px;
        text-align: center;
    }

    .bio-wrap {
        font-size: 18px;
    }

    .bio-item {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: start;
        gap:5px;
    }

    .bio-title {
        width: 70px;
    }  
</style>
