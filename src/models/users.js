import { api } from "./api";

export async function GetFriends() {
    const x = await api("users")
    return x;
}

export const getFriends2 = () => api("users"); //same as getFriends

export async function Register(data) {
    const x = await api("users", data)
    return x;
}