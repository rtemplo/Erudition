import axios from "axios";

export default {
  login: function(loginData) {
    return axios.post("/api/login", loginData);
  },
  logout: function() {
    return axios.post("/api/logout");
  },
  authenticate: function() {
    return axios.get("/api/account/auth");
  },
  // Gets the book with the given id
  getaccounts: function(sortcol) {
    return axios.get("/api/account/getaccounts/" + sortcol);
  },
  // Deletes the book with the given id
  getprofileU: function(id) {
    return axios.get("/api/account/getprofileU" + id);
  },
  // Saves a book to the database
  getprofileM: function(id) {
    return axios.get("/api/account/getprofileM", id);
  }
};
