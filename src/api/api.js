import axios from "axios";
async function fetchData(query) {
  const url = `https://dummyjson.com/products/${query}`;
  const RESPONSE = await axios.get(url);
  if (RESPONSE.status === 200 && RESPONSE.data) return RESPONSE;
}
export default fetchData;
