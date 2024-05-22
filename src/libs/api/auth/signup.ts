import { UserData } from "@/libs/api/auth/authTypes";
import { API_URL } from "../env";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";

/**
 * Register a new user.
 * @function signup
 * 
 * @param { UserData } userData - The username data like username, password, mail, etc.
 *
 * @returns { Promise<boolean> } - The fetch response with boolean error(false)/success(true).
 */
export async function signup(userData: UserData): Promise<boolean> {
    const response = await fetch(` ${API_URL}/signup/`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        fireErrorAlert("Hubo un problema al crear la cuenta.");
        return false;
    }

    return true;
}
