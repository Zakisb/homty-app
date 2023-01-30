import apiClient from "../../lib/api/client";
const endpoint = '/users';

const updateApplicationForm = async (data) => await apiClient.post(`${endpoint}/update-application-form` , data);
const getApplicationForm = async (data) => await apiClient.post(`${endpoint}/get-application-form-data` , data);
const connectionTest = async () => await apiClient.get(`${endpoint}/test`);

export default {
	updateApplicationForm,
	getApplicationForm,
	connectionTest
};
