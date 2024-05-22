"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/general/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import USER_ICON_W from "../../../public/user-alt-1-svgrepo-com.svg";
import USER_ICON_B from "../../../public/b-user-alt-1-svgrepo-com.svg";
import MainButton from "../buttons/MainButton";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/libs/api/auth/logout";
import verifiyUser from "@/libs/api/auth/verifyUser";
import sitesCache from "@/libs/utils/cache";
import { getUserData } from "@/libs/api/auth/getUserData";

export default function Nav() {
    const [isUserDataFetched, setDataFetched] = useState(false);

    const [open, setOpen] = useState(false);
    const [inSession, setInSession] = useState(false);
    const router = useRouter();

    const menuStyle = open
        ? `${styles.Nav__Menu} ${styles.Nav__Menu_Active}`
        : `${styles.Nav__Menu}`;

    const redirect = (path) => {
        router.push(path);
    };

    const closeSession = () => {
        logoutUser();
        router.push('/login')
    };

    useEffect(() => {
        const fetchData = async () => {
            setInSession(await verifiyUser());
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            const isAuthenticated = await verifiyUser();

            if ( isAuthenticated ) {
                const userData = await getUserData();
                sitesCache.userData = userData;
                setDataFetched(true);
            }
        } 

        fetchUserData();
    })

    return (
        <nav className={styles.Nav}>
            {inSession ? ( isUserDataFetched &&
                <section
                    className={`
                        ${styles.profileMenu} 
                        ${open && styles.profileMenuOpen}`}
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src={open ? USER_ICON_B : USER_ICON_W}
                        alt={"profile photo"}
                        width={50}
                        height={50}
                        className={`
                            ${styles.icon} 
                            ${open && styles.iconWhenOpen}`}
                    />
                    <br />
                    <br />
                    <h3 
                        className={`
                            ${styles.userNameText} 
                            ${open && styles.userNameTextOpen}
                        `}
                    >
                        {sitesCache.userData.user}
                    </h3>
                    <p 
                        className={`
                            ${styles.email} 
                            ${open && styles.emailOpen}
                        `} 
                    >
                        {sitesCache.userData.email}
                    </p>
                    <br />
                    <Link 
                        href="/mysite" 
                        className={`
                            ${styles.menuOption} 
                            ${open && styles.menuOptionOpen}
                        `}
                    >
                        Mi site
                    </Link>
                    {/* <Link 
                        href="/premium" 
                        className={`
                            ${styles.menuOption} 
                            ${open && styles.menuOptionOpen}
                        `}
                    >
                        Actualizar plan
                    </Link> */}
                    <p 
                        className={`
                            ${styles.menuOption} 
                            ${open && styles.menuOptionOpen}
                        `}
                        onClick={closeSession}
                    >
                        Cerrar sesión
                    </p>
                </section>
            ) : (
                //   <section className={menuStyle}>
                //       <button
                //           className={styles.Nav__btn}
                //           onClick={() => setOpen(!open)}
                //       >
                //           <Image
                //               src={open ? USER_ICON_B : USER_ICON_W}
                //               alt={'profile photo'}
                //               width={40}
                //               height={40}
                //               className={styles.icon}
                //           />
                //       </button>

                //       <ul className={styles.Nav__Options} id="nav-ul">
                //           <Link href="/mysite" className={styles.Nav__Option}>
                //               My site
                //           </Link>
                //           <Link
                //               href="/login"
                //               className={styles.Nav__Option}
                //               onClick={closeSession}
                //           >
                //               Cerrar sesión
                //           </Link>
                //       </ul>
                //   </section>
                <MainButton onClick={() => redirect("/login")}>
                    Inicia Ahora
                </MainButton>
            )}
        </nav>
    );
}
