import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white p-4 text-center">
            © {new Date().getFullYear()} Leandro Sobrinho Auzier
        </footer>
    );
}
