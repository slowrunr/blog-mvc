export class API {
  constructor() {
    this.baseURL = "https://jsonplaceholder.typicode.com";
  }

  // TEST AND TBS - REMOVE IN PRODUCTION
  checkModuleLinkage = () => {
    console.log("HELLO, API module is connected!");
  };

  fetchPosts() {
    return fetch(`${this.baseURL}/posts`).then((data) => data.json());
  }
}
