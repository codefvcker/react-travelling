export default class TravelService {
  constructor() {
    this._apiBase = "https://react-travelling.firebaseio.com/";
  }

  getResource = async url => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(
        `Couldnt get data from ${url}, because ${response.error}`
      );
    }

    return response.json();
  };

  getAllCitiesData = async () => {
    const response = await this.getResource("cities.json");
    return response;
  };

  getAllUsersData = async () => {
    const response = await this.getResource("users.json");
    return response;
  };
}
