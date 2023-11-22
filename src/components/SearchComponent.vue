<template>
  <div class="search">
    <input
      :class="searchBg ? 'white' : 'darkblue'"
      placeholder="Search for a country"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <img :src="Image" alt="searchIcon" /> -->
    <span class="material-icons"> search </span>
  </div>
</template>

<script setup>
// import Image from "../assets/search-outline.svg";
// import { defineEmits } from "vue";
import { defineProps } from "vue";
defineProps({
  modelValue: {
    type: String,
  },
  searchBg: {
    type: Boolean,
  },
});
</script>
<style scoped>
.search {
  display: flex;
  align-items: center;
}
div input {
  width: 350px;
  padding: 5px;
  height: 40px;
  border: none;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding-left: 35px;
  /* background-color: red; */
}

div span {
  width: 15px;
  position: absolute;
  left: 38px;
}

.white {
  color: white;
  background-color: hsl(209, 23%, 22%);
}

.darkBlue {
  color: black;
  background-color: white;
}
</style>
