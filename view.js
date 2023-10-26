export class View {
  constructor({ onNewPost }) {
    this.postsNode = document.getElementById("posts");
    this.titleInputNode = document.getElementById("titleInput");
    this.bodyInputNode = document.getElementById("Input");
    this.addPostBtnNode = document.getElementById("postBtn");
    this.warningsNode = document.getElementById("warningMessage");
    this.onNewPost = onNewPost;

    this.addPostBtnNode.addEventListener("click", this._handleBtnClick);
  }

  // TEST AND TBS - REMOVE IN PRODUCTION
  checkModuleLinkage = () => {
    console.log("HELLO, View module is connected!");
  };

  _handleBtnClick = () => {
    const title = this.titleInputNode.value;
    const body = this.bodyInputNode.value;

    this.onNewPost(title, body);

    console.log(title, body);
  };

  render = (posts, isError) => {
    this._clearView();

    if (isError) {
      this.warningsNode.innerText = `Заголовок больше 100 символов`;
    }

    posts.forEach((post) => {
      this.postsNode.innerHTML += `
      <li class="post">
        <p class="post__date">${this._buildDateString(post.timestamp)}</p>
        <p class="post__title">${post.title}</p>
        <p class="post__description">${post.body}</p>
      </li>
     `;
    });
  };

  _buildDateString(timestamp) {
    const date = new Date(timestamp);
    const currentMonth = date.getMonth() + 1;
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
    return `${date.getDate()}.${currentMonth}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  _clearView() {
    this.postsNode.innerHTML = "";
    this.warningsNode.innerText = "";
  }
}
