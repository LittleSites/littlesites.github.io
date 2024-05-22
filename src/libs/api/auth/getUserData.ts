import { UserData } from "@/libs/api/auth/authTypes"
import { API_URL, USER_TOKEN } from "../env";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";

export async function getUserData(): Promise<UserData> {
    const response = await fetch(`${API_URL}/test_token`, {
        headers: {
            Authorization: `Token ${USER_TOKEN}`,
        },
    });

    if (!response.ok) {
        const status = response.status;

        if (!(status === 404 || response.status === 403)) {
            fireErrorAlert(
                "Hubo un error al obtener la informacion del usuario, contacte al administrador.",
                await response.text()
            );
        }
    }

    return await response.json() as UserData;
}
 