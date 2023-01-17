import apiClient from "/Users/zakisb/Desktop/Homty/Homty-webapp/homty-front/lib/api/client";
const endpoint = '/users';

const signUp = async (user) => await apiClient.post(`${endpoint}/sign-up` , user);

const signInWithGoogle = async (user) => await apiClient.post(`${endpoint}/sign-in-with-google` , user);

export default {
    signUp,
    signInWithGoogle
};
