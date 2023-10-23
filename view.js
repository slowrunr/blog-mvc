// Removed 'default' here:
export class View {
  constructor({ onNewPost }) {
    this.postsNode = document.getElementById("#posts");
    this.titleInputNode = document.getElementById("titleInput");
    this.textInputNode = document.getElementById("textInput");
    this.addPostBtnNode = document.getElementById("postBtn");

    this.onNewPost = onNewPost;

    this.addPostBtnNode.addEventListener("click", this.handleBtnClick);
  }

  // TEST AND TBS - REMOVE IN PRODUCTION
  checkModuleLinkage = () => {
    console.log("HELLO, View module is connected!");
  };

  renderPosts(posts) {
    this.postsNode.innerHTML = "";

    posts.forEach((post) => {
      this.postsNode.innerHTML += `
      <li class="post">
        <p class="post__title">${post.title}</p>
        <p class="post__description">${post.description}</p>
      </li>
     `;
    });
  }

  handleBtnClick = () => {
    const title = this.titleInputNode.value;
    const description = this.textInputNode.value;

    this.onNewPost(title, description);

    console.log(title, description);
  };
}
