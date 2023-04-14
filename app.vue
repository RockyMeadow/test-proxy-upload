<script setup lang="ts">
const input = ref<HTMLInputElement>();
const files = ref<File[]>();
const result = ref("");

async function upload() {
  if (!input.value || !input.value.files) return;

  const data = new FormData();

  files.value = [];

  for (const file of input.value.files) {
    files.value?.push(file);
    data.append("files", file);
  }

  // switch url http://localhost:3005/upload will return a correct size
  result.value = await $fetch("/api/upload", {
    method: "POST",
    body: data,
  });
}
</script>

<template>
  <div>
    <input type="file" name="" ref="input" @change="upload()" />

    <div>Result: {{ result }}</div>

    <div v-for="file in files">
      <span>{{ file.name }} {{ file.size }}</span>
    </div>
  </div>
</template>
