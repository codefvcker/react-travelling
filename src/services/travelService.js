export default class TravelService {
  constructor() {
    if (typeof TravelService.instance === "object") {
      return TravelService.instance;
    }
    this._apiBase = "https://react-travelling.firebaseio.com/";
    this.counter = 0;
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

  increaseValue = () => {
    this.counter++;
  };

  getCounter = () => {
    return this.counter;
  };

  // getAllUsersData = async () => {
  //   const response = await this.getResource("users.json");
  //   return response;
  // };
}
