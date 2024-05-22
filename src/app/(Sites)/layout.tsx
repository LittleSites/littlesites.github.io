import "@/styles/globals.css";
import HeaderCom from "@/components/general/header";
import Footer from "@/components/general/Footer";

export const metadata = {
    title: "Sites",
    icons: {
        icon: "icon.svg", // /public path
    },
};

export default function RootLayout({ children }: any) {
	return (
        <>
            <HeaderCom />
            <main>
				{children}
			</main>
            <Footer />
        </>
    );
  }