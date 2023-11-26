<script lang="ts" setup>
    import { usePostStore } from '@/store/post';
    import { onMounted, ref, type Ref } from 'vue';
    import { storeToRefs } from 'pinia';

    const postStore = usePostStore()
    onMounted(() => {
        postStore.getAll()
    })

    const search: Ref<string> = ref("")
    const {filterPost, totalPost} = storeToRefs(postStore)
</script>

<template>
    <div>
        <h1>Post List</h1>
        <RouterLink to="/post/create">
            Create
        </RouterLink>
        <div v-if="postStore.list.isLoading">
            Loading ...
        </div>
        <div v-else-if="postStore.list.isError">
            Error ..
        </div>
        <div v-else>
            <div>
                <input type="searh" v-model="search"/>
                {{ totalPost }}
            </div>
            <ul>
                <li v-for="(item, index) in filterPost(search)" :key="index">
                    {{ item.title }}  - <RouterLink :to="`/post/detail/${item.id}`">Detail</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>