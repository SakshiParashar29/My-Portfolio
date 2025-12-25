"use client";

import { useTheme } from "../context/ThemeContext";
// import Navbar from ;
import Footer from "./Footer";
import Constellation from "./Constellation";
import Navbar from "./Navbar";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const { darkMode } = useTheme();

    return (
        <div className="relative min-h-screen">
            {darkMode && <Constellation />}

            <div className="relative z-20">
                <Navbar />
            </div>

            <main className="relative z-10">
                {children}
            </main>

            <div className="relative z-20">
                <Footer />
            </div>
        </div>
    );
}
