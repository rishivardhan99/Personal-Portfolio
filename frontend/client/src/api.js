// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://127.0.0.1:8000/api/",
  timeout: 10000,
});

export default API;

// -------- API helpers --------

export const fetchExperience = async () => {
  const res = await API.get("experience/");
  return res.data;
};

export const fetchCertificates = async () => {
  const res = await API.get("certificates/");
  return res.data;
};

export const fetchProjects = async () => {
  const res = await API.get("projects/");
  return res.data;
};

export const fetchFeaturedProject = async () => {
  const res = await API.get("projects/?featured=1");
  return res.data;
};
