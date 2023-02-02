import apiClient from "../../lib/api/client";
const endpoint = '/rooms';

const updateRoom = async (data, roomId) => await apiClient.patch(`${endpoint}/${roomId}` , data, {
	headers: {
		'content-type': 'multipart/form-data'
	}
});

const addRoom = async (data, propertyId) => await apiClient.post(`${endpoint}/?propertyId=${propertyId}`, data)

const getRoom = async (id) => await apiClient.get(`${endpoint}/${id}`);

const deleteRoom = async (id) => await apiClient.delete(`${endpoint}/${id}`);

const getRooms = async (id) => await apiClient.get(`${endpoint}?propertyId=${id}`);

export default {
	addRoom,
	updateRoom,
	getRoom,
	getRooms,
	deleteRoom,
};
