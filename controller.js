import { Model } from "./model.js"; // change import view from 'Model' to '{ Model }'
import { View } from "./view.js";

export class Controller {
  constructor() {
    this.model = new Model({
      onPostsChanged: this.handleModelPostsChanged,
    });

    this.view = new View({
      onNewPost: this.handleViewNewPost,
    });
  }

  // intro init function with linkage test
  init = () => {
    // TEST AND TBS - REMOVE IN PRODUCTION
    console.log("HELLO! INIT FUNCTION CARRIED OUT SUCCESFULLY");

    // TEST AND TBS - REMOVE IN PRODUCTION
    this.model.checkModuleLinkage();
    this.view.checkModuleLinkage();
  };

  handleModelPostsChanged = (posts) => {
    this.view.renderPosts(posts);
  };

  handleViewNewPost = (title, description) => {
    this.model.addPost(title, description);
  };
}
