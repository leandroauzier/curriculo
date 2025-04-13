import React from "react";

export default function Footer() {
    return (
        <footer className="bg-green-600 text-white p-4 text-center">
            <div className="flex flex-col">
                <p>
                    © {new Date().getFullYear()} -  Leandro Sobrinho Auzier
                </p>
            </div>
        </footer>
    );
}
