import apiClient from "../../lib/api/client";
const endpoint = '/users';

const signUp = async (user) => await apiClient.post(`${endpoint}/sign-up` , user);
const signIn = async (user) => await apiClient.post(`${endpoint}/sign-in` , user);
const checkOnboarding = async (email) => await apiClient.post(`${endpoint}/check-onboarding` , email);
const signInWithGoogle = async (user) => await apiClient.post(`${endpoint}/sign-in-with-google` , user);
const signInWithFacebook = async (user) => await apiClient.post(`${endpoint}/sign-in-with-facebook` , user);

export default {
    signIn,
    checkOnboarding,
    signUp,
    signInWithGoogle,
    signInWithFacebook
};
