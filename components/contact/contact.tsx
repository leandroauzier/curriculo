import React from "react";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/linkedin'
import 'react-social-icons/mailto'
import 'react-social-icons/github'
import 'react-social-icons/whatsapp'

export default function Contact() {
    return (
        <section className="p-10 max-w-4xl mx-auto">
            <h2 className="section-title">Contato</h2>
            <div className="flex space-x-4 items-center">
                <div className="flex gap-4 items-center group">
                    <SocialIcon
                        className="group-hover:scale-110 transition-transform duration-300"
                        network="mailto"
                        url="mailto:leandroauzier02@gmail.com"
                        target="_blank"
                        fgColor="#fff"
                        bgColor="#1e3a8a"
                    />
                    <p className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Email
                    </p>
                </div>
                <div className="flex gap-4 items-center group">
                    <SocialIcon
                        className="group-hover:scale-110 transition-transform duration-300"
                        network="linkedin"
                        url="https://linkedin.com/in/leandro-auzier"
                        target="_blank"
                        fgColor="#fff"
                        bgColor="#0077b5"
                    />
                    <p className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Linkedin
                    </p>
                </div>
                <div className="flex gap-4 items-center group">
                    <SocialIcon
                        className="group-hover:scale-110 transition-transform duration-300"
                        network="github"
                        url="https://github.com/leandroauzier"
                        target="_blank"
                        fgColor="#fff"
                        bgColor="#333"
                    />
                    <p className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Github
                    </p>
                </div>
                <div className="flex gap-4 items-center group">
                    <SocialIcon
                        className="group-hover:scale-110 transition-transform duration-300"
                        network="whatsapp"
                        url="https://api.whatsapp.com/send/?phone=5596981114744&text=Ol%C3%A1%21%20Tudo%20bem%3F%20Vi%20seu%20perfil%20e%20fiquei%20muito%20interessado%28a%29%20no%20seu%20trabalho.%20Gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20proposta%20profissional.%20Podemos%20falar%20por%20aqui%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        fgColor="#fff"
                        bgColor="#25D366"
                    />
                    <p className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Whatsapp
                    </p>
                </div>
            </div>
        </section>
    );
}