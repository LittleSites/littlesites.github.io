"use client";

import { useState } from "react";
import styles from "@/styles/components/general/header.module.css";
import Nav from "./nav";
import MainButton from "@/components/buttons/MainButton";

import downIcon from "/public/icons/editor/list-down-minimalistic-svgrepo-com.svg";
import upIcon from "/public/icons/editor/list-up-minimalistic-svgrepo-com.svg";
import showOptions from "/public/icons/editor/options-outline-svgrepo-com.svg";
import showingOptions from "/public/icons/editor/options-sharp-svgrepo-com.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import sitesCache from "@/libs/utils/cache";
import SiteManager from "@/libs/api/SiteManager";

export default function HeaderCom({
    setMenuContent = undefined,
    displayLogo = true,
    editor = false,
    handleSaveSite = undefined,
}) {
    const router = useRouter();
    const [menuDisplayed, setMenuDisplayed] = useState(false);
    const [optionsDisplayed, setOptionsDisplayed] = useState(false);
    let menuIcon = menuDisplayed ? upIcon : downIcon;
    let optionsIcon = optionsDisplayed ? showingOptions : showOptions;

    const menuOnClick = (content) => {
        setMenuDisplayed(!menuDisplayed);
        if (!menuDisplayed) setMenuContent(content);
        else setMenuContent("empty");
    };

    return (
        <section
            className={styles.Header}
        >
            {displayLogo && (
                <section className={styles.Header__Title}>
                    <h1
                        className={styles.Header__LogoTitle}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Sites
                    </h1>
                </section>
            )}

            {editor && (
                <section className={styles.Header__Options}>
                    <button
                        className={styles.Header__MenuButton}
                        onClick={() => menuOnClick("Componentes")}
                    >
                        <Image src={menuIcon} />
                    </button>

                    <button
                        className={styles.Header__MenuButton}
                        onClick={() => menuOnClick("Opciones")}
                    >
                        <Image src={optionsIcon} />
                    </button>
                </section>
            )}

            <section className={styles.Header__Options}>
                {editor && (
                    <>
                        <button
                            className={styles.Header__ExitButton}
                            onClick={() => {
                                const siteId = sitesCache.metadata.site.id;
                                SiteManager.deleteSite(siteId);
                                router.push("/");
                            }}
                        >
                            Salir sin guardar
                        </button>
                        <MainButton onClick={handleSaveSite}>
                            Guardar Site
                        </MainButton>
                    </>
                )}
                <Nav />
            </section>
        </section>
    );
}
