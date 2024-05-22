"use client";

import verifiyUser from "@/libs/api/auth/verifyUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }: any) {
    const router = useRouter();

    useEffect(() => {
        const asyncVerify = async () => {
            const isAuthenticated = await verifiyUser();
            
            if ( isAuthenticated ) router.push("/");
        };

        asyncVerify();
    });

    return children;
}
