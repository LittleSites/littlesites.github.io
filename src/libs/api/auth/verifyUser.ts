import { API_URL, USER_TOKEN } from "../env";

export default async function verifiyUser() {
    const response = await fetch(`${API_URL}/test_token`, {
        headers: {
            Authorization: `Token ${USER_TOKEN}`,
        },
    });

    return response.ok;
}