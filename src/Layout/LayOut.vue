<template>
  <div :class="colorAlter ? 'textDefault' : 'textColor'">
    <NavBar :backgroundColor="colorAlter" @toggle="toggleButton" />
    <slot></slot>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar/NavBar.vue";
import { defineEmits, defineProps } from "vue";

// accepting an emit function declared as @click from the parent component and storing it in the emit variable
const emit = defineEmits(["click"]);

//creating a function to hold the click method accepted
const toggleButton = () => {
  emit("click");
};
//receives props or data(bgColor) from the parent CountriesView and assigned to the variable colorAlter
defineProps({
  colorAlter: {
    type: Boolean,
  },
});
</script>

<style scoped>
.textDefault {
  color: white;
  background-color: hsl(209, 23%, 22%);
}

.textColor {
  color: hsl(209, 23%, 22%);
  background-color: white;
}
</style>
