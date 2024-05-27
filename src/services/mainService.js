import axios from "axios";

class MainService {
  async scrapBySearchInput(query, resultsLimit) {
    return axios
      .get(`/scrape/${encodeURIComponent(query)}/${resultsLimit}`)
      .catch((err) => {
        console.error(err);
      });
  }

  async scrapByProductUrl(url) {
    return axios
      .get(`/product/scrape/${encodeURIComponent(url)}`)
      .catch((err) => {
        console.error(err);
      });
  }

  async saveSearchProduct(data) {
    return axios.post("/product-search/save", data).catch((err) => {
      console.error(err);
    });
  }

  async saveOwnProduct(data) {
    return axios.post("/product-own/save", data).catch((err) => {
      console.error(err);
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MainService();
