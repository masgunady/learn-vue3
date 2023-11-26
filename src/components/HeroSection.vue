<script lang="ts" setup>
import ParagraphSection from './ParagraphSection.vue';
</script>

<template>
    <div>
        <h1>Ini Hero</h1>
        <slot name="header"></slot>
        <slot name="footer"></slot>
        <slot></slot>
    </div>
    <hr />
    <ParagraphSection/>
</template>