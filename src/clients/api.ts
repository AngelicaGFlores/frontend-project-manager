import axios from "axios";

// export const apiClient = axios.create({
// 	baseURL: import.meta.env.VITE_BACKEND_URL,
	
// });

// apiClient.interceptors.request.use((config) => {
// 	const token = localStorage.getItem("pro-tasker-token");
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
// });


export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		Authorization:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzY1NzczZGE1MjAxNWY1YTRlOWUxMyIsInVzZXJuYW1lIjoiYW5nZWxpY2FmIiwiZW1haWwiOiJhbmdlbGljYUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjU0MTUyNjEsImV4cCI6MTc2NTUwMTY2MX0.7Uprnv2pa_6jk2V-nalHCdMUKeyOc6nHgcb5EYNKUos",
	},
});