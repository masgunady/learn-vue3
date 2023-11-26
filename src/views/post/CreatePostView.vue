<script lang="ts" setup>
    import type {IPost} from '@/store/post/interface'
    import { reactive, ref, type Ref } from 'vue';
    import { usePostStore } from '@/store/post';

    const postStore = usePostStore()
    const isLoading: Ref<boolean> = ref(false)
    const isError: Ref<boolean> = ref(false)
        
    const payload: IPost = reactive({
        body:"",
        title: "",
        userId:0
    })

    const handleSubmit = async () => {
        try {
            isLoading.value = true
            const response = await postStore.create(payload)
            console.log(response)
        } catch (error) {
            isError.value = true
        }finally{
            isLoading.value = false
        }
    }
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div><input type="text" v-model="payload.userId"></div>
        <div><input type="text" v-model="payload.title"></div>
        <div><input type="text" v-model="payload.body"></div>
        <div>
            <button type="button" v-if="isLoading">Loading ...</button>
            <button type="submit" v-else>Submit</button>
        </div>
    </form>
</template>