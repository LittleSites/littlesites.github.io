import Swal from "sweetalert2";

export const warningAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "warning",
    title,
    text,
  });
};