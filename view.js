// Removed 'default' here:
export class View {
    constructor() {
        this.postsNode = document.getElementById("posts");
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
}
