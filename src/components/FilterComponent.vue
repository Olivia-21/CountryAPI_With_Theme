<template>
  <div>
    <select
      name=""
      id=""
      :class="filterBg ? 'defaultColor' : 'whiteColor'"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Filter by Regions</option>
      <option
        :value="region"
        v-for="(region, index) in countryRegion"
        :key="index"
      >
        {{ region }}
      </option>
    </select>
  </div>
</template>

<script setup>
// import {ref, reactive} from 'vue'
import { defineProps } from "vue";

defineProps({
  filterBg: {
    type: Boolean,
  },
  countryRegion: {
    type: Array,
  },
  modelValue: {
    type: String,
  },
});
</script>

<style scoped>
div select {
  border: none;
  width: 140px;
  height: 40px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: hsl(209, 23%, 22%);
}

.defaultColor {
  /* background-color: hsl(209, 23%, 22%); */
  color: white;
}

.whiteColor {
  background-color: white;
  color: black;
}

@media screen and (max-width: 375px) {
  div {
    margin-left: 10px;
  }
}
</style>
