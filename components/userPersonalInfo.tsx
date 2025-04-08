import Image from "next/image";

type userPersonalInfoProps = {};

export default function UserPersonalInfo({ }: userPersonalInfoProps) {
    return (
        <div className="flex justify-center items-center border rounded-xl p-6 gap-4">
            <Image className="rounded-full" alt="Leandro Sobrinho" src="/images/leandro.jpg" width={300} height={300} />
            <div className="">
                <h1 className="text-2xl">Leandro Sobrinho Auzier</h1>
                <h3 className="text-xl">Desenvolvedor fullstack</h3>
                <p>Stack:</p>
            </div>
        </div>
    );
}