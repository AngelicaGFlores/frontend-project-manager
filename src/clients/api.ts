import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		Authorization:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzY1NzczZGE1MjAxNWY1YTRlOWUxMyIsInVzZXJuYW1lIjoiYW5nZWxpY2FmIiwiZW1haWwiOiJhbmdlbGljYUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjUyNjA4NTQsImV4cCI6MTc2NTM0NzI1NH0.tnfnLd5ObTtoqktrAi3jDkk9DgYMAWyxANqa-REZflU",
	},
});
