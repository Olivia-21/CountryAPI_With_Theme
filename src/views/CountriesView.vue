<template>
  <div>
    <LayOut :colorAlter="bgColor" @click="toggleButtonFromParent">
      <div class="country">
        <div class="searchCountries">
          <SearchButton :searchBg="bgColor" type="text" v-model="search" />
          <!-- <SearchButton v-model="search" type="number" />
          <SearchButton v-model="search" type="date" /> -->
          <FilterComponent
            :filterBg="bgColor"
            :countryRegion="continent"
            v-model="filterContinent"
          />
        </div>
        <div class="countries">
          <div
            class="countryList"
            v-for="country in countriesReg"
            :key="country"
          >
            <CountryList :Country="country" />
          </div>
        </div>
      </div>
    </LayOut>
  </div>
</template>

<script setup>
import LayOut from "@/Layout/LayOut.vue";
import SearchButton from "../components/SearchComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import axios from "axios";
import CountryList from "../components/CountryList.vue";
import { onMounted, ref, watch } from "vue";

//declaring a variable to hold the api
const countriesReg = ref([]);
const countrySearch = ref([]);
const search = ref("");
const filterContinent = ref("");
const bgColor = ref(true);
const continent = ref([
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
  "Europe",
]);

//Afunction to toggle between the bgColor value
const toggleButtonFromParent = () => {
  bgColor.value = !bgColor.value;
};

// A function to contain the api fetched
const getCountry = async (endpoint) => {
  try {
    const countries = await axios.get(
      "https://restcountries.com/v3.1/" + endpoint
    );
    countrySearch.value = countries?.data;
    countriesReg.value = countries?.data;
  } catch (error) {
    console.log(error);
  }
};

// Mounting the api using the onMounted(accepts a callback function) function
onMounted(() => {
  getCountry("all");
});

watch(filterContinent, (value) => {
  getCountry("region/" + value);
});

watch(search, (newVal) => {
  // If newVal is truthy (not empty), filter the original list
  const filtered = newVal
    ? countrySearch.value.filter((country) =>
        country.name.common.toLowerCase().includes(newVal.toLowerCase())
      )
    : countrySearch.value;

  // Update countriesReg.value with the filtered or original list
  countriesReg.value = filtered;
});
</script>

<style scoped>
.country {
  width: 90%;
  margin-left: 30px;
}
.searchCountries {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
}

.countries {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  /* gap: 10px; */
}

.countryList {
  /* background-color: rgb(231, 226, 226); */
  margin-bottom: 20px;
  border-radius: 5px;
  /* border: 10px solid gray; */
}

/* #colorChange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

.layout {
  background-color: hsl(209, 23%, 22%);
}
</style>
