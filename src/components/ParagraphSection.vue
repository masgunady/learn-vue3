<script lang="ts" setup>
import { inject } from 'vue';

const angka = inject('angka')
const huruf = inject('huruf')
const iniTextReverse = inject('text')
</script>

<template>
    <div>
        <h1>Ini teh paragraph</h1>
    </div>
    <div>
        {{ angka }}
    </div>
    <div>
        {{ huruf }}
    </div>
    <div>
        {{ iniTextReverse }}
    </div>
</template>