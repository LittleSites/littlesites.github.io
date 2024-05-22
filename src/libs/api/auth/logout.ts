import { destroyCookie } from "nookies";
import { API_URL, USER_TOKEN } from "../env";

export async function logoutUser(): Promise<boolean> {
    const response = await fetch(`${API_URL}/logout/`, {
        method: "GET",
        mode: "cors",
        headers: {
            Authorization: `Token ${USER_TOKEN}`,
        },
    });

    if (response.ok) {
        destroyCookie(null, "user_token");
        return true;
    }

    return false;
}