import apiClient from "../../lib/api/client";
const endpoint = '/users';

const updateApplicationForm = async (data) => await apiClient.patch(`${endpoint}/update-application-form/${data.userId}` , data);


export default {
	updateApplicationForm,
};
