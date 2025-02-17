<script setup lang="ts">
import { ref } from "vue";

const youtubeUrl = ref("");

function onSubmit() {
    console.warn("äää onSubmit => ", youtubeUrl.value)
}
</script>

<template>
    <v-container class="d-flex flex-column align-center justify-center">
        <v-text-field 
            label="YouTube URL here" 
            class="mb-4"
            density="comfortable"
            variant="outlined"
            style="width: 400px; width: 100%;"
            v-model="youtubeUrl"
        ></v-text-field>
        <v-btn color="primary" variant="elevated" @click="onSubmit">Submit</v-btn>
    </v-container>
</template>

<style scoped>
</style>
