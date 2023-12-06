<template>
  <div class="modeChange">
    <span>Where in the world?</span>
    <button
      :class="backgroundColor ? 'white' : 'darkBlue'"
      @click="emitFunction"
    >
      <span class="material-icons"> dark_mode </span>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

defineProps({
  backgroundColor: {
    type: Boolean,
  },
});

const colorChange = ref(true);

const emit = defineEmits(["toggle"]);
const emitFunction = () => {
  emit("toggle");
  localStorage.setItem(
    "backgroundColor",
    (colorChange.value = !colorChange.value)
  );
};
</script>

<style scoped>
.main {
  background-color: hsl(209, 23%, 22%);
}

.modeChange {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color: white; */
  height: 70px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.modeChange span {
  margin-left: 40px;
}

button {
  /* background-color: hsl(209, 23%, 22%); */
  border: none;
  cursor: pointer;
  color: rgb(51, 47, 47);
  margin: 0 50px;
  display: flex;
  gap: 5px;
  background-color: transparent;
}

button img {
  width: 20px;
  /* background-color: white; */
}

.darkBlue {
  color: rgb(51, 47, 47);
}

.white {
  color: white;
}
</style>
