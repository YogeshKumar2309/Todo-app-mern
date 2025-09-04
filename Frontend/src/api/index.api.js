// src/api/api.js
import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/tasks"; // your backend URL

// API call function
export const searchItems = async (query) => {//serarch api
  try {
    const res = await axios.get(`${BASE_URL}/search?query=${query}`);
    console.log(res.data,"search result")
    return res.data.tasks;
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};

export const todoLists = async (page, limit,status) => {//get all todo
  try {
    const res = await axios.get(`${BASE_URL}/?page=${page}&limit=${limit}${status ? `&status=${status}` : ''}`);
    console.log("api response", res)
      return res.data;
  } catch (error) {
    console.error("API Error:" , error);
    return [];    
  }
}

export const updateTodoStatus = async (id , isDone) => {//done task
  try {
    const response = await axios.put(`${BASE_URL}/updateTask/${id}`,{isDone});
    return response.data;
  } catch (error) {
    console.log("Error updating todo status", error);
    throw error;        
  }
}

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteTask/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export const editTodo = async (id, updatedTodoObj) => {
  try {
    const response = await axios.put(`${BASE_URL}/updateTask/${id}`,updatedTodoObj);
    return response;
  } catch (error) {
    throw error;
  }
}


export const addTodoApi = async (taskName) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/addTask`,
      {taskName},    
    );
    return res;
  } catch (error) {
      throw error;
  }
}

