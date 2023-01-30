import apiClient from "../../lib/api/client";
const endpoint = '/properties';

const addProperty = async (data) => await apiClient.post(`${endpoint}/` , data, {
	headers: {
		'content-type': 'multipart/form-data'
	}
});

const getProperty = async (id) => await apiClient.get(`${endpoint}/${id}`);

export default {
	addProperty,
	getProperty
};
