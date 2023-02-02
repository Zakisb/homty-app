import apiClient from "../../lib/api/client";
const endpoint = '/properties';

const updateProperty = async (data, propertyId) => await apiClient.patch(`${endpoint}/${propertyId}` , data, {
	headers: {
		'content-type': 'multipart/form-data'
	}
});

const addProperty = async (data) => await apiClient.post(`${endpoint}/create`);

const updatePropertyTitle = async (data, propertyId) => await apiClient.patch(`${endpoint}/title-description/${propertyId}`, data)

const getProperty = async (id) => await apiClient.get(`${endpoint}/${id}`);

export default {
	addProperty,
	updateProperty,
	getProperty,
	updatePropertyTitle
};
