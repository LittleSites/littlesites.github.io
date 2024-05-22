import Swal from "sweetalert2";
import colors from "../env";

export const fireAddSocialLinkAlert = async () => {
    const { value: formValue } = await Swal.fire({
        title: 'Coloca el enlace al perfil',
        background: colors.projectWhite,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        html: '<input id="addsociallink-social-link" class="swal2-input"> <br />',
        preConfirm: function () {
            // @ts-ignore
            return document.getElementById('addsociallink-social-link')?.value;
        },
    })

    return formValue;
};