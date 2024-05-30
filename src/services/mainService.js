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

  async login(username, password) {
    return axios.post("/login", { username, password }).catch((err) => {
      console.error(err);
    });
  }

  async saveSearch(data) {
    return axios.post("/save-search", data).catch((err) => {
      console.error(err);
    });
  }

  async getSavedSearchesByUser(userId) {
    return axios
      .get("/get-searches", { params: { user_id: userId } })
      .catch((err) => {
        console.error(err);
      });
  }

  async getOwnProductsByUser(userId) {
    return axios
      .get("/get-own-products", { params: { user_id: userId } })
      .catch((err) => {
        console.error(err);
      });
  }

  async getSavedProductsByUser(userId) {
    return axios
      .get("/get-saved-products", { params: { user_id: userId } })
      .catch((err) => {
        console.error(err);
      });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MainService();
