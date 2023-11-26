<script lang="ts">
  interface IBiodata {
    fullName: string,
    address: string,
    isActive?: boolean
  }
  interface IFormLogin {
    email: string,
    password: string,
    gender: string
  }
  interface IUser {
    id: number,
    name: string
  }
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import {ref, reactive, type Ref} from 'vue'

const username: Ref<string> = ref("masgun")
const biodata: IBiodata = reactive({
  fullName: "gunadi pratama",
  address: "karawang"
})

const dataUser: Ref<IUser[]> = ref([])
const handleDataUser = () => {
  dataUser.value = [...dataUser.value, {
    id: 1,
    name: "Test"
  }]
}

const dataMahasiswa: Ref<string[]>=ref(["adi","ado","ade"])

const changeData = () => {
  username.value = ("New Masgun")
  biodata.fullName = "Dadan"
  biodata.address = "Magelang"
}

const formLogin: IFormLogin = reactive({
  email:"",
  password:"",
  gender:""
})



const emitDiterima = (value: string) => {
  biodata.fullName = value
}

const handleForm = () => {
  alert("test")
  console.log(formLogin)
}
</script>

<template>
  <main>
    <RouterLink to="/about">
      about
    </RouterLink>
    <h1>Home</h1>
    <p>{{ username }}, {{ biodata.fullName }} {{ biodata.address }}</p>

    <button @click="changeData">Click</button>
    <hr/>
    <TheWelcome title="New Title" content="ini isi kontennya" @emitChangeFullname="(value) => emitDiterima(value)" />
    <button @mouseover="changeData">change</button>

    <form @submit.prevent="handleForm">
      <input type="text" placeholder="email" v-model="formLogin.email">
      <input type="password" placeholder="password" v-model="formLogin.password">
      <select name="gender" id="" v-model="formLogin.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button type="submit">submit</button>
    </form>

    <div v-if="formLogin.gender === 'Male'">
      pria
    </div>
    <div v-if="formLogin.gender === 'Female'">
      wanita
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in dataMahasiswa" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <hr/>
    <button @click="handleDataUser">Tambah data mahasiswa</button>

    <ul>
      <li v-for="(item, index) in dataUser" :key="index">
        {{ item.id }}. {{ item.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
  h1 {
    color: #f00 !important
  }  
</style>
