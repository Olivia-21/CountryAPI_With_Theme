<template>
  <router-view />
</template>

<script setup>
window.onstorage = function (e) {
  console.log(e);
  if (e.key === "backgroundColor") {
    console.log("New value for colorChange:", e.newValue);
  }
};
</script>

<style></style>
