import axios from "axios";

export default {
  authenticate: function() {
    return axios.get("/api/account/auth");
  },
  // Gets the book with the given id
  getdashdata: function(sortcol) {
    return axios.get("/api/account/getdashdata/" + sortcol);
  },
  // Deletes the book with the given id
  getprofileU: function(id) {
    return axios.delete("/api/account/getprofileU" + id);
  },
  // Saves a book to the database
  getprofileM: function(id) {
    return axios.post("/api/account/getprofileM", id);
  }
};
