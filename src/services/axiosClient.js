import axios from 'axios'

const axiosOptions = {
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
}
const axiosClient = axios.create(axiosOptions)

// Interceptors
axiosClient.interceptors.request.use(
	request => {
		if (!request.headers.Authorization) {
			request.headers.Authorization =
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzQWN0aXZlIjp0cnVlLCJfaWQiOiI2MjJjMTY0MzA2ZmM0NzI1NjhmMjIyNTIiLCJ1c2VySWQiOiJ1c2VyaWRfdXV1dSIsImNvbXBhbnkiOiI2MjJjMTY0MjA2ZmM0NzI1NjhmMjIyMGIiLCJuYW1lIjoixJBvw6BuIDMgMSIsInN1cm5hbWUiOiJEZW1vIiwidXNlck5hbWUiOiJtZW1iZXIzMSIsImVtYWlsQWRkcmVzcyI6Im1lbWJlcjMxQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiMDk2NDIyNTEzMSIsInByb2ZpbGVQaWN0dXJlSWQiOm51bGwsIl9fdiI6MH0sImFjY2Vzc3Rva2VuIjoiNjIzOTU5MmUyZGM3MTc1Zjk1MmU5NzhiIiwiaWF0IjoxNjQ3OTI1NTUwfQ.RgHzJfGQS93C1Hg5tiSW9zOxBHWWLJvTIhOuaxzRtKA'
		}
		return request
	},
	error => Promise.reject(error)
)

axiosClient.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error.response?.data || error)
)

export default axiosClient
