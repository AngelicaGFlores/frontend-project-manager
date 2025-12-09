import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		Authorization:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5Mzg2ZjA4NjY3MWMwNzU1ZWRlOWYwMiIsInVzZXJuYW1lIjoidXNlcmFuZyIsImVtYWlsIjoidXNlcmFuZ0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjUzMjMwMTksImV4cCI6MTc2NTQwOTQxOX0.gNJ_3lnR9QOTXYNcaUlFfZQ9EDDfyxxHXYH2uLv57uk",
	},
});
