export default class View {
  constructor() {
    this.postsNode = document.getElementById("posts");
  }

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
}
