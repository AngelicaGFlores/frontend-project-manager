import axios from "axios";

export const apiClient = axios.create({
	baseURL: "http://localhost:4000",
	headers: {
		Authorization:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzY1NzczZGE1MjAxNWY1YTRlOWUxMyIsInVzZXJuYW1lIjoiYW5nZWxpY2FmIiwiZW1haWwiOiJhbmdlbGljYUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjUxNjkwMjgsImV4cCI6MTc2NTE3NjIyOH0.E2jlDrtyn5c880WpjKgxtO0Ef34PoJhpQTunPd94X1k",
	},
});
