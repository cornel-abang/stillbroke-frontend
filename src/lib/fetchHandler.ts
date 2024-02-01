"use client"

import axios from "axios";

// import userService from "./services/user.service"
// const API_BASEURL_ENDPOINT = `http://127.0.0.1:8000/api`

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
}

// Get Request
async function get(url: string) {
  return await axios.get(url);
}

// Post Request
async function post(url: string, resqData: unknown) {  
  return await axios.post(url, resqData);
}

// Put Request
async function put(url: string, resqData: unknown) {
  return await axios.put(url, resqData);
}

// Delete Request
async function _delete(url: string) {  
  return await axios.delete(url);
}


// helper function
// function authHeader(url: string) {
//   // return auth header with jwt if user is logged in and request is to the api url
//   const user = userService.retrieveUser()
//   const isLoggedIn = user && user.token

//   if(`${API_BASEURL_ENDPOINT}` !== undefined){
//     const isApiUrl = url.startsWith(`${API_BASEURL_ENDPOINT}`)

//     if (isLoggedIn && isApiUrl) {
//       return { Authorization: `Bearer ${user.token}` }
//     }
//   }
// }