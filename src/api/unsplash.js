import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID JIwGHEdn0XYi6Jx0ay8owW1YP4ZveyJ7rNRgzADKX-o'
	}
});