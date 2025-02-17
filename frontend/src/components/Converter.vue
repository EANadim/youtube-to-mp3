<script setup lang="ts">
import { ref } from "vue";

const youtubeUrl = ref("");

async function onSubmit() {
  const formData = new URLSearchParams();
  formData.append("youtube_url", youtubeUrl.value);

  try {
    const response = await fetch("http://localhost:3000/download/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    // Assuming the server returns the file as a Blob
    const fileBlob = await response.blob();

    // Create a link element to trigger the download
    const link = document.createElement("a");
    const fileURL = URL.createObjectURL(fileBlob);
    link.href = fileURL;
    link.download = "downloadedFile";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(fileURL);
    
    console.log("Download initiated.");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-text-field
      label="YouTube URL here"
      class="mb-4"
      density="comfortable"
      variant="outlined"
      style="width: 400px; width: 100%"
      v-model="youtubeUrl"
    ></v-text-field>
    <v-btn color="primary" variant="elevated" @click="onSubmit">Submit</v-btn>
  </v-container>
</template>

<style scoped>
</style>
