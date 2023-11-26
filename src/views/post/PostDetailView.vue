<script lang="ts" setup>
    import { usePostStore } from '@/store/post';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const postId = useRoute().params.id.toString()

    const postStore = usePostStore()

    onMounted(() => {
        postStore.getDetail(postId)
    })

    const detailPost = postStore.detail.data
    
</script>

<template>
    <div>
        <div>
            {{ detailPost?.title }}
        </div>
        <div>
            {{ detailPost?.body }}
        </div>
    </div>
</template>