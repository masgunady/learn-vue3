<script lang="ts">
    interface IProps {
        type: string
        placeholder: string
        label: string
        defaultValue: string
    }
    interface IEmit {
        (e: 'passingValue', value: string) : void
    }
</script>


<script setup lang="ts">
    import {defineProps, defineEmits, ref, type Ref, computed} from 'vue'
    const {type, placeholder, label, defaultValue} = defineProps<IProps>()

    const emits = defineEmits<IEmit>()
    const inputValue: Ref<string> = ref(defaultValue)

    const handleInputValue = computed({
        get(){
            return inputValue.value
        },
        set(value){
            inputValue.value = value
            emits("passingValue", inputValue.value)
        }
    })


</script>

<template>
    <div>
        <label for="">{{ label }}</label>
        <br />
        <input 
        :type="type"  
        :placeholder="placeholder"
        v-model="handleInputValue"
        style="padding: 5px; border-radius: 10px;">
    </div>
</template>