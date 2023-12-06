import { ref } from "vue";
import axios from "axios";
import { url } from "../../components/Data/apiUrl.js";

const countriesReg = ref([]);
const countrySearch = ref([]);

const getCountry = async (endpoint) => {
  try {
    const country = await axios.get(url + endpoint);
    countriesReg.value = country?.data;
    countrySearch.value = country?.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCountry, countriesReg, countrySearch };
