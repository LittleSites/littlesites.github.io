import Swal from "sweetalert2";
import colors from "../env";

export const fireAddNavTagAlert = async () => {
    const { value: formValues } = await Swal.fire({
        title: 'Añadir nuevo tag',
        background: colors.projectWhite,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        html:
            '<label for="addnavtagalert-tag-title">Titulo</label><input id="addnavtagalert-tag-title" class="swal2-input"> <br />' +
            '<label for="addnavtagalert-tag-value">Link</label><input id="addnavtagalert-tag-value" class="swal2-input">',
        preConfirm: function () {
            // @ts-ignore
            const title = document.getElementById('addnavtagalert-tag-title')?.value;
            // @ts-ignore
            const value = document.getElementById('addnavtagalert-tag-value')?.value;

            return {
                title,
                value,
            }
        },
    })

    return formValues;
};