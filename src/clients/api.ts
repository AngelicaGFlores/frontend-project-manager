import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		Authorization:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzcxOTA2NjBlMjUzNzI0YmJlMzRiNCIsInVzZXJuYW1lIjoiYW5nZWxpY2F1c2VyIiwiZW1haWwiOiJhbmdlbGljYTFAZ21haWwuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MjE4NTg3LCJleHAiOjE3NjUyMjU3ODd9.p969End5pDe29Tx_ozKRjBETr5aMCXbXMTEI1KEd4p0",
	},
});
