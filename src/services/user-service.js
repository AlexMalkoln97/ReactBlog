export default class UserService {
  static getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      res.json()
    );
  }

  static getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    );
  }
}
