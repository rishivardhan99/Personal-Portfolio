// src/api.js
import axios from "axios";
import { API_BASE } from "./config";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/",
});


export default API;

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
  const res = await API.get("projects/?featured=1"); // optionally filter server-side
  // else we filter client-side in Projects component
  return res.data;
};
