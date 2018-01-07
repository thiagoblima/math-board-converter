/**
 * @name       : UserService
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User services are set here.
 */

export default class userServices {
  constructor($http) {
    this.$http = $http;
    this.postUser = this._postUser;
  }

  _postUser(user) {
    return this.$http
      .post("/api/signup", user)
      .then(this.postUserComplete)
      .catch(this.postUserError);
  }

  static postUserComplete(response) {
    return response.data.user;
  }

  static postUserError(err) {
    return console.info("An error occured!", err.data);
  }

  ngInit() {
    return {
      postUser: this.postUser
    };
  }
}
