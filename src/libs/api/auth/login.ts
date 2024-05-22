import sitesCache from "@/libs/utils/cache";
import { API_URL } from "../env";
import { setCookie } from "nookies";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";

/**
 * Login user and create cookie session.
 * @function login
 * 
 * @param { string } username - The username of the account.
 * @param { string } password - The password of the user.
 *
 * @returns { Promise<boolean> } - The fetch response with boolean error(false)/success(true).
 */
export async function loginUser(
    username: string,
    password: string
): Promise<boolean> {
    const credentials = {
        username,
        password,
    };

    const response = await fetch(`${API_URL}/login/`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        fireErrorAlert("Las credenciales son incorrectas.");
        return false;
    }

    const data = await response.json();
    const cokieName: string = "user_token";

    sitesCache.userData = data.user;
    setCookie(null, cokieName, data.token, {
        maxAge: 365 * 24 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });

    window.location.reload();

    return true;
}
