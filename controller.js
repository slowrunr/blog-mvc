import { Model } from "./model.js";
// change import view from 'Model' to '{ Model }'
import { View } from "./view.js";

import { API } from "./api.js";

export class Controller {
  constructor() {
    this.model = new Model({
      onPostsChanged: this.handleModelPostsChanged,
    });

    this.view = new View({
      onNewPost: this.handleViewNewPost,
    });

    this.api = new API();
  }

  // intro init function with linkage test
  init = () => {
    this.api.fetchPosts().then((posts) => {
      this.model.setPosts(posts);
    });
    // TEST AND TBS - REMOVE IN PRODUCTION
    console.log("HELLO! INIT FUNCTION CARRIED OUT SUCCESFULLY");

    // TEST AND TBS - REMOVE IN PRODUCTION
    this.model.checkModuleLinkage();
    this.view.checkModuleLinkage();
    this.api.checkModuleLinkage();
  };

  handleModelPostsChanged = (posts, isError) => {
    this.view.render(posts, isError);
  };

  handleViewNewPost = (title, body) => {
    this.model.addPost(title, body);
  };
}
