import React from "react";
import Avatar from "@/components/ui/avatar/Avatar";

const InfoBar: React.FC = () => {
    return (
        <div className="flex flex-col pt-5 pb-6 rounded-3xl bg-cyan-950 max-w-[348px]">
            <div className="flex overflow-hidden relative flex-col justify-end self-center pt-20 pr-4 pb-5 pl-5 whitespace-nowrap rounded-xl aspect-square">
                <Avatar
                    src=""
                    alt="Avatar"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="relative mt-40 text-xl font-bold leading-6 text-white">
                    Юзернейм
                </div>
                <div className="relative mt-1 text-base tracking-normal text-rose-400">
                    онлайн
                </div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-5 w-full">
                <div className="flex gap-3 text-base tracking-normal text-sky-50 whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6151a35675ac96cfb5e465dea5a211301540a0ff264cb3ffcce3e7718af7768?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Сповіщення</div>
                </div>
                <div className="flex flex-col justify-center items-start px-5 py-1 my-auto border border-cyan-800 border-solid fill-slate-950 fill-opacity-40 stroke-[1px] stroke-cyan-800">
                    <div className="shrink-0 w-3.5 h-3.5 bg-rose-400 rounded-3xl" />
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b13354a7e9edcd7b8a245b1fc47a9bb5bf8d7d0563260903744d5012b57f63?"
                className="self-center mt-4 w-full border border-solid border-cyan-100 border-opacity-70 max-w-[308px] stroke-[1px] stroke-cyan-100 stroke-opacity-70"
            />
            <div className="flex gap-3 justify-between px-5 py-2 mt-4 w-full font-bold whitespace-nowrap rounded-xl">
                <div className="flex gap-3 text-base text-sky-50">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60386793433007fd8757c38d20c94f29de34fbd59ec667f0daca50c927e6f9e0?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Фото</div>
                </div>
                <div className="justify-center px-3 py-1 text-sm tracking-normal leading-4 rounded-3xl bg-sky-400 bg-opacity-30 text-cyan-100 text-opacity-70">
                    100
                </div>
            </div>
            <div className="flex gap-3 justify-between px-5 py-2 mt-1 w-full font-bold whitespace-nowrap rounded-xl">
                <div className="flex gap-3 text-base text-sky-50">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26c5f67e2bd2282d7d3709649b9d40bba547b7c4f640595c3d3e0c0d1b168f3?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Файли</div>
                </div>
                <div className="justify-center px-3 py-1 text-sm tracking-normal leading-4 rounded-3xl bg-sky-400 bg-opacity-30 text-cyan-100 text-opacity-70">
                    100
                </div>
            </div>
            <div className="flex gap-3 justify-between px-5 py-2 mt-1 font-bold rounded-xl">
                <div className="flex gap-3 text-base text-sky-50">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa1229bd2af5a7849b7aa9f78d2680aa9de238e9d9669c8072b1234411b4e64?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Голосові повідомлення</div>
                </div>
                <div className="justify-center px-3 py-1 text-sm tracking-normal leading-4 whitespace-nowrap rounded-3xl bg-sky-400 bg-opacity-30 text-cyan-100 text-opacity-70">
                    100
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b13354a7e9edcd7b8a245b1fc47a9bb5bf8d7d0563260903744d5012b57f63?"
                className="self-center mt-4 w-full border border-solid border-cyan-100 border-opacity-70 max-w-[308px] stroke-[1px] stroke-cyan-100 stroke-opacity-70"
            />
            <div className="flex flex-col items-start px-5 mt-4 w-full text-base font-semibold text-sky-50">
                <div className="flex gap-2 justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d0755378a974278e012abed81b84288f90b487b8c7cfd273a6ac6db204ffcc?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Видалити с друзів</div>
                </div>
                <div className="flex gap-2 justify-center mt-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd953ffa71dd018ed64b4fa706b7297227d9c337ddda1392e8e473cfdd94224e?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Очистити історію</div>
                </div>
                <div className="flex gap-2 justify-center mt-5 whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ebfde29ef4a0c0a8605f6b2474c4b0c56208136b6be58a905a1da4fe36c69f?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Заблокувати</div>
                </div>
                <div className="flex gap-2 justify-center mt-5 text-red-300 whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/922f85c284720f1a9114cac7d0a1f0b25dffecdd6a7c9dd83e2a18c0101cbe1a?"
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Поскаржитись</div>
                </div>
            </div>
        </div>
    );
}

export default InfoBar;
