<script setup lang="ts">
    import axios from 'axios'
    import {state, actions} from '@/store/user/user.store'
    import { onMounted } from 'vue';
    import { RouterLink } from 'vue-router';

    onMounted(async() => {
        try {
            actions.listUserPending()
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            actions.listUserFulfilled(response.data)
        } catch (error) {
            actions.listUSerError()
        }
    })
</script>

<template>
    <div>
        <h1>List User</h1>
        <div v-if="state.list.isLoading">
            Please wait ...
        </div>
        <div v-else-if="state.list.isError">
            Oops.. Error!
        </div>
        <div v-else>
            <ul>
                <li v-for="(item, index) in state.list.data" :key="index">
                    {{ item.id }}. {{ item.name }} - {{ item.email }}
                    <RouterLink :to="`/user/${item.id}`">
                        Details
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>