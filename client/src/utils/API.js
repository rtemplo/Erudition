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
  getaccounts: function(sortcol) {
    return axios.get("/api/account/getaccounts/" + sortcol);
  },
  getconfig: function() {
    return axios.get("/api/account/getconfig");
  },  
  getprofileU: function(id) {
    return axios.get("/api/account/getprofileU" + id);
  },
  // Saves a book to the database
  getprofileM: function(id) {
    return axios.get("/api/account/getprofileM", id);
  },
  getuserinfo: function() {
    return axios.get("/api/account/getuserinfo");
  }
};
