import Image from "next/image";
import StackList from "./stack/stackList";

export default function UserPersonalInfo() {
    return (
        <div className="flex flex-col lg:flex-row  items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center rounded-xl px-6 py-16 gap-4">
                <Image
                    className="rounded-full border-6 border-green-500"
                    alt="Leandro Sobrinho"
                    src="/images/leandro.png"
                    width={300}
                    height={300}
                />
                <div className="border-r-0 lg:border-r py-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl bg-transparent dark:text-green-500">Leandro Sobrinho Auzier</h1>
                        <h3 className="px-6 text-xl dark:text-green-500">Desenvolvedor fullstack</h3>
                    </div>
                </div>
            </div>
            <div className="font-semibold dark:text-green-500 px-8 lg:px-2">
                <p>Stack:</p>
                <StackList />
                <div className="py-6 font-semibold text-zinc-500">
                    <a
                        href="https://www.flaticon.com/free-icons/react"
                        title="react icons">
                        React icons created by Vectors Market - Flaticon
                    </a>
                </div>
            </div>
        </div>
    );
}