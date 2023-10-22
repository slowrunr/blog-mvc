export default class Model {
  constructor({ onPostsChanged }) {
    this.posts = [];
    this.onPostsChanged = onPostsChanged;
  }

  addPost(title, description) {
    this.posts.push({
      title,
      description,
    });

    // notify(this.posts);

    this.onPostsChanged(this.posts);
  }

  getPosts() {
    return this.posts;
  }
}

// class Model2 {
//   constructor({ onExpenseChanged }) {
//     this.expenses = [];
//     this.onExpenseChanged = onExpenseChanged;
//   }

//   trackExpense(expense) {
//     this.expense.push(expense);
//     this.onExpenseChanged(this.expense);
//   }
// }
