import React from "react";

const Notifications: React.FC = () => {
    return (
        <div className="flex flex-col p-5 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
            <div className="flex gap-4 justify-between">
                <div className="my-auto text-2xl font-medium text-black">
                    Сповіщення
                </div>
                <div className="flex justify-center items-center p-2.5 bg-gray-200 rounded-2xl h-[38px] w-[38px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/560623133d45b5921db5d53a2b60d1d027ec7a020b24fbdae8437580021c22d4?"
                        className="w-5 aspect-square"
                    />
                </div>
            </div>
            <div className="flex flex-col items-start p-3 mt-4 w-full text-base text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between self-stretch w-full text-sm">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2ac392f3ace3694231edb7bd9c251dfde4223baf3cd80f41a4c4dfa9b224a2?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Знижки на Бажане</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="mt-3.5 font-medium">Название игры</div>
                <div className="flex gap-1.5 items-center mt-3 whitespace-nowrap">
                    <div className="justify-center self-stretch px-3 py-1.5 text-sm rounded-3xl bg-stone-300">
                        -40%
                    </div>
                    <div className="self-stretch my-auto">100₴</div>
                    <div className="self-stretch my-auto text-black text-opacity-50">
                        365₴
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between w-full text-sm whitespace-nowrap">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ba40f170724210d7ef173e63314094a449b22d72737d54147be679f72d5150?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Профіль</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <div className="shrink-0 rounded-full bg-neutral-600 h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-medium">Юзернейм</div>
                        <div className="mt-2">Новий коментар під вашим профілем</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between w-full text-sm whitespace-nowrap">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc2746cad0cce73048ea8a9deff64915057f419704fe3f490cbd2d704026b3d?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <div className="shrink-0 rounded-full bg-neutral-600 h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-medium">Юзернейм</div>
                        <div className="mt-2">Ваш запит на дружбу прийнято</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-base text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between w-full text-sm">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2ac392f3ace3694231edb7bd9c251dfde4223baf3cd80f41a4c4dfa9b224a2?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Великий розпродаж</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="mt-3.5 font-medium">Зимовий розпродаж 2024</div>
                <div className="mt-1">Знижки на ігри до 80% до 22.10.2022 </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between w-full text-sm whitespace-nowrap">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc2746cad0cce73048ea8a9deff64915057f419704fe3f490cbd2d704026b3d?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <div className="shrink-0 rounded-full bg-neutral-600 h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-medium">Юзернейм</div>
                        <div className="mt-2">Ваш запит на дружбу відхилено</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-black rounded-3xl bg-neutral-200">
                <div className="flex gap-5 justify-between w-full text-sm whitespace-nowrap">
                    <div className="flex gap-1.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc2746cad0cce73048ea8a9deff64915057f419704fe3f490cbd2d704026b3d?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <div className="shrink-0 rounded-full bg-neutral-600 h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-medium">Юзернейм</div>
                        <div className="mt-2">Новий запит на дружбу</div>
                    </div>
                </div>
            </div>
            <div className="justify-center self-center px-7 py-2.5 mt-4 text-base text-white rounded-3xl bg-zinc-800">
                Очистити усі
            </div>
        </div>
    );
}

export default Notifications;
