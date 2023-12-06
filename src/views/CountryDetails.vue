<template>
  <LayOut :colorAlter="bgColor" @click="toggleButtonFromParent">
    <BackComponent />
    <div class="details" :theme="colorAlter ? 'defaultColor' : 'whiteBg'">
      <img :src="countryInfo.flags?.png" alt="" />
      <div class="countryElements">
        <div class="conty">
          <div class="content">
            <h1>{{ countryInfo.name?.common }}</h1>
            <br />
            <p><strong>Region:</strong> {{ countryInfo?.region }}</p>
            <p><strong>Sub Region:</strong> {{ countryInfo?.subregion }}</p>
            <p><strong>Population:</strong> {{ countryInfo.population }}</p>
            <p>
              <strong>Capital:</strong>
              {{ countryCapital(countryInfo.capital) }}
            </p>
          </div>
          <div class="currency">
            <p>
              <strong>Currencies:</strong>
              {{ returnCurrencies(countryInfo?.currencies)?.name }}
            </p>
            <p class="language">
              <strong>Languages: </strong>
              <span
                v-for="lan in returnLanguages(countryInfo?.languages)"
                :key="lan"
                >{{ lan }}</span
              >
            </p>
          </div>
        </div>
        <div class="borderCountries">
          <p>
            <strong>Border Countries</strong>
            <button v-for="bord in countryInfo?.borders" :key="bord">
              {{ bord }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/Layout/LayOut.vue";
import BackComponent from "../components/Button/BackComponent.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, defineProps } from "vue";
import axios from "axios";

const countryInfo = ref({});
const countryDetails = async (name) => {
  try {
    const country = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log(country);

    countryInfo.value = country?.data[0];
  } catch (error) {
    console.log(error);
  }
};
const route = useRoute();
onMounted(() => {
  countryDetails(route.params.name);
});

let countryCapital = (arr) => {
  if (arr) {
    return arr[0];
  }
};

const returnCurrencies = (currency) => {
  if (currency) {
    return Object.values(currency)[0];
  }
};

const returnLanguages = (language) => {
  if (language) {
    return Object.values(language);
  }
};

defineProps({
  theme: {
    type: Boolean,
  },
});
</script>

<style scoped>
.details {
  display: flex;
  margin: 45px;
  gap: 80px;
}

img {
  width: 30%;
}

.content {
  margin-top: 50px;
}

.currency {
  margin-top: 100px;
}

.currency p {
  margin-bottom: 20px;
}
.content p {
  margin-bottom: 20px;
}

.language span::after {
  content: ",";
  margin-right: 3px;
}

.conty {
  display: flex;
  margin-bottom: 20px;
  gap: 70px;
}

.borderCountries button {
  width: 80px;
  border: none;
  padding: 10px;
  margin-left: 10px;
  background-color: transparent;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.defaultColor {
  background-color: black;
  color: white;
}

.whiteBg {
  color: black;
  background-color: white;
}
</style>
