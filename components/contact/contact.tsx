import React from "react";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/linkedin'
import 'react-social-icons/mailto'
import 'react-social-icons/github'

export default function Contact() {
    return (
        <section className="p-10 max-w-4xl mx-auto">
            <h2 className="section-title">Contato</h2>
            <div className="flex space-x-4 items-center">
                <div className="flex gap-4 items-center">
                    <SocialIcon network="mailto" url="mailto:leandroauzier02@gmail.com" target="_blank" fgColor="#fff" bgColor="#1e3a8a" />
                    <p>Email</p>
                </div>
                <div className="flex gap-4 items-center">
                    <SocialIcon network="linkedin" url="https://linkedin.com/in/leandro-auzier" target="_blank" fgColor="#fff" bgColor="#0077b5" />
                    <p>Linkedin</p>
                </div>
                <div className="flex gap-4 items-center">
                    <SocialIcon network="github" url="https://github.com/leandroauzier" target="_blank" fgColor="#fff" bgColor="#333" />
                    <p>Github</p>
                </div>
            </div>
        </section>
    );
}