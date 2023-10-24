// Removed 'default' here:
export class Model {
  constructor({ onPostsChanged }) {
    this.posts = [];
    this.onPostsChanged = onPostsChanged;
  }

  // TEST AND TBS - REMOVE IN PRODUCTION
  checkModuleLinkage = () => {
    console.log("HELLO, Model module is connected!");
  };

  addPost(title, description) {
    this.posts.push({
      title,
      description,
      timestamp: Date.now(),
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
