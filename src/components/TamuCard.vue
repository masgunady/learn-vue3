<script lang="ts">
    interface IProps {
        fullName: string,
        address: string
    }
</script>
<script setup lang="ts">
    import {ref, defineProps} from 'vue';
    const props = defineProps<IProps>()

    console.log(props)
</script>
<template>
    <main>
        <div class="container">
            <section class="wrapper1">
                <div class="photo-wrap"></div>
                <div class="bio-wrap">
                    <div class="bio-item">
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            {{ props.fullName }}
        </div>
    </main>
    <!-- <div class="wrapp">
        <div class="tamu-name">
            <h1>{{ props.fullName }}</h1>
        </div>
        <div>
            {{ props.address }}
        </div>
    </div> -->
</template>

<style scoped>
    
    .wrapp {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .tamu-name {
        font-weight: 600;
        text-transform: capitalize  ;
    }

</style>