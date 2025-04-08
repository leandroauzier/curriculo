import React from "react";

export default function Stack() {
    return (
        <section className="p-10 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Minha Stack</h2>
            <ul className="list-disc pl-5">
                <li>React.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
            </ul>
        </section>
    );
}