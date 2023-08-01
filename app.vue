<script setup lang="ts">
const input = ref<HTMLInputElement>();
const files = ref<File[]>();
const uploadResult = ref("");
const directUploadResult = ref("");

async function upload() {
  if (!input.value || !input.value.files) return;

  const data = new FormData();

  files.value = [];

  for (const file of input.value.files) {
    files.value?.push(file);
    data.append("files", file);
  }

  uploadResult.value = await $fetch("/api/upload", {
    method: "POST",
    body: data,
  });

  directUploadResult.value = await $fetch("http://localhost:3005/upload", {
    method: "POST",
    body: data,
  });
}
</script>

<template>
  <div>
    <input type="file" name="" ref="input" @change="upload()" />

    <p>Upload result via proxy: {{ uploadResult }}</p>

    <p>Direct upload result: {{ directUploadResult }}</p>

    <p>Selected files:</p>
    <ul>
      <li v-for="file in files">{{ file.name }} {{ file.size }}</li>
    </ul>
  </div>
</template>
