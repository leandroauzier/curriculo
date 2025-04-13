import React from "react";
import '@/components/animations/spinner.css';
import { CodeBracketIcon } from "@heroicons/react/20/solid";

export default function Projects() {

    // Spinner Component
    const LoadingSpinner = () => (
        <div className="sk-folding-cube">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
        </div>
    );

    return (
        <div className="py-40 px-4 md:px-8 max-w-5xl">
            <div className="flex items-start gap-2">
                <CodeBracketIcon className="dark:text-green-500" width={50} />
                <h2 className="text-3xl font-bold mb-8 dark:text-green-500">Meus projetos</h2>
            </div>
            <p className="text-xl text-center font-semibold text-green-700">Em Breve...</p>
            <LoadingSpinner />
        </div>
    );
}
