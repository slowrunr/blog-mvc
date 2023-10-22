export default class Controller {
  constructor() {
    this.model = new Model({
      onPostsChanged: this.handleModelPostsChanged,
    });

    this.view = new View();
  }

  handleModelPostsChanged = (posts) => {
    this.view.renderPosts(posts);
  };
}
import Model from "./model.js";
import View from "./view.js";
