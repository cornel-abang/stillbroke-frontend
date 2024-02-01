"use client"

import Cookies from 'js-cookie'

import { LoginUserInputs } from '@/types'

import { fetchWrapper } from '../fetchHandler'

const API_BASEURL_ENDPOINT = `http://127.0.0.1:8000/api`

const userService = {
  retrieveUser,
  apiRegisterUser,
  apiLoginUser,
  apiLogoutUser,
  apiForgotPassword,
  apiResetPassword,
  apiUpdateRecord,
}
export default userService


function retrieveUser() {
  const userData = Cookies.get('stillbroke_user_details');

  if(userData)
    return JSON.parse(userData);
}

async function apiRegisterUser(resqData: unknown) {
  return await fetchWrapper.post(`${API_BASEURL_ENDPOINT}/auth/register`, resqData)
}

async function apiLoginUser(resqData: LoginUserInputs) {
  const { data: user, status } = await fetchWrapper.post(`${API_BASEURL_ENDPOINT}/auth/login`, resqData)

  // store in local storage to stay logged in between page refreshes
  typeof window !== 'undefined'
    ? localStorage.setItem('user', JSON.stringify(user))
    : null

  return { status, user }
}

function apiLogoutUser() {
  // remove user from local storage and redirect to login page
  typeof window !== 'undefined' ? localStorage.removeItem('user') : null
  Cookies.remove('stillbroke_user_token')
  Cookies.remove('stillbroke_user_details')
}

async function apiForgotPassword(resqData: unknown) {
  const { data, status } = await fetchWrapper.post(`${API_BASEURL_ENDPOINT}/auth/forgot`, resqData)

  typeof window !== 'undefined'
    ? localStorage.setItem('secretReference', JSON.stringify(data))
    : null

  return { data, status }
}

async function apiResetPassword(resqData: unknown) {
  return await fetchWrapper.post(`${API_BASEURL_ENDPOINT}/auth/reset`, resqData)
}

async function apiUpdateRecord(url: string, resqData: unknown) {
  const { data, status } = await fetchWrapper.put(`${API_BASEURL_ENDPOINT}/users/${url}`, resqData)
  
  // Retrieving User data object from localStorage
  const UserData = retrieveUser()
  
  // Modify the object (add or update a property)
  const modifiedUserData = {
    ...UserData,
  };
  
  // Store the modified object back in localStorage
  typeof window !== 'undefined'
    ? localStorage.setItem('user', JSON.stringify(modifiedUserData))
    : null

  return { data, status }
}