"use client";

import verifiyUser from "@/libs/api/auth/verifyUser";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }: any) {
    const router = useRouter();

    useEffect(() => {
        const asyncVerify = async () => {
            const isAuthenticated = await verifiyUser();

            if ( !isAuthenticated ) {
                fireErrorAlert('Para acceder a esta página necesitas iniciar sesión.');
                router.push("/login");
            }
        };

        asyncVerify();
    });

    return children;
}
