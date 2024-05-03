import axios from "axios";

class MainService {
  async scrapBySearchInput(query, resultsLimit) {
    return axios.get(`/scrape/${query}/${resultsLimit}/`).catch((err) => {
      console.error(err);
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MainService();
