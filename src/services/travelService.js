export default class TravelService {
  constructor() {
    if (typeof TravelService.instance === "object") {
      return TravelService.instance;
    }
    this._apiBase = "https://react-travelling.firebaseio.com/";
    TravelService.instance = this;
    return this;
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

  getAllData = async () => {
    const response = await this.getResource("data.json");
    return response;
  };

  getAllCities = async () => {
    const response = await this.getResource("data/cities.json");
    return response.map(this._toCitiesTransformer);
  };

  getAllUsers = async () => {
    const response = await this.getResource("data/users.json");
    return response.map(this._toUsersTransformer);
  };

  // Because it isnt a full app, but only MVP

  _toCitiesTransformer = data => {
    const { photos, name } = data;
    return { photos, name };
  };

  _toUsersTransformer = data => {
    const { photo, altname } = data;
    return { photo, altname };
  };
}
