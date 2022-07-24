const ENDPOINT = '/api/stocks';

const fetchStocks = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchStocks;