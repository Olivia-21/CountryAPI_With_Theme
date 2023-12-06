<template>
  <router-link :to="`/details/${Country.name}`">
    <div>
      <img :src="Country.flag" alt="" />

      <div class="content">
        <h3>{{ Country.name }}</h3>
        <br />
        <p>
          Population: <span>{{ Country.population }}</span>
        </p>
        <p>
          Region: <span>{{ Country.region }}</span>
        </p>
        <p>
          Capital:
          <span>{{ capital(Country.capital) }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
// import { useRouter } from "vue-router";

defineProps({
  Country: {
    type: Object,
  },
});

const capital = (arr) => {
  if (arr) {
    return arr[0];
  }
};
// const navigate = useRouter();
// const navigatePage = () => {
//   const country = props.Country;
//   navigate.push("/details/" + country.name.common);
// };
</script>

<style scoped>
div img {
  width: 270px;
  height: 200px;
}

.content {
  padding: 10px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  height: 150px;
  /* margin: 10px; */
}

a {
  text-decoration: none;
  color: inherit;
}

.content p {
  margin-bottom: 5px;
}
</style>
