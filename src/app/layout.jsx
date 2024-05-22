import "@/styles/globals.css";
export const metadata = {
    title: "Sites",
    icons: {
        icon: "icon.svg", // /public path
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}
