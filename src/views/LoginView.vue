<script setup lang="ts">
    import InputComponent from '@/components/InputComponent.vue';
    import {reactive} from 'vue'

    const formLogin = reactive({
        username: "",
        password: ""
    })

    const handleSubmit = () => {
        console.log(formLogin)
    }
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <InputComponent
                label="Username"
                type="text"
                placeholder="Username"
                default-value=""
                @passingValue="(value) => formLogin.username = value"

                />
            </div>
            <div>
                <InputComponent
                label="password"
                type="password"
                placeholder="password"
                default-value=""
                @passingValue="(value) => formLogin.password = value"

                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>