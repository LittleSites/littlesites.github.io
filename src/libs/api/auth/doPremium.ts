import { API_URL, USER_TOKEN } from "../env";

export const doPremiun = async (userId: number) => {
    const response = await fetch(`${API_URL}/updatePremium/${userId}/`, {
        method: "PUT",
        mode: "cors",
        headers: {
            Authorization: `Token ${USER_TOKEN}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify( { "isPremium": true})
    });

    return response.ok;
}