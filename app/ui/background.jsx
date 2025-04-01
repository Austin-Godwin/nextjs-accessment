import Image from "next/image";

export default function Background({ backgroundImage }) {
    return (
        <>
            <Image
                className="absolute inset-0 w-full h-full object-cover -z-10"
                src={backgroundImage}
                alt="Space Villa Background Image"
                fill
            />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
        </>
    );
}