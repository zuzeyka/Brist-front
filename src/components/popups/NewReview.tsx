import React from "react";

const NewReview: React.FC = () => {
    return (
        <div className="flex flex-col px-10 py-8 rounded-3xl bg-zinc-100 max-md:px-5">
            <div className="flex gap-5 justify-between text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-xl max-md:max-w-full">Ваша рецензія на</div>
                    <div className="mt-1.5 text-2xl font-bold max-md:max-w-full">
                        Якась гра, яка дуже всім сподобається
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a035ae9e36ebaeefb62f87745beb6a7ffc56d8ad39ac2c233c31573f602d61a0?"
                    className="shrink-0 self-start w-6 aspect-square"
                />
            </div>
            <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="my-auto text-xl text-black">
                                    Ваша оцінка цієї гри
                                </div>
                                <div className="flex gap-2">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd2f670f9e5b036cf9b681c3eb7cfcbdb5c7ce7f12738359572fe2cfad8a569?"
                                        className="shrink-0 aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd2f670f9e5b036cf9b681c3eb7cfcbdb5c7ce7f12738359572fe2cfad8a569?"
                                        className="shrink-0 aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd2f670f9e5b036cf9b681c3eb7cfcbdb5c7ce7f12738359572fe2cfad8a569?"
                                        className="shrink-0 aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd2f670f9e5b036cf9b681c3eb7cfcbdb5c7ce7f12738359572fe2cfad8a569?"
                                        className="shrink-0 aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd2f670f9e5b036cf9b681c3eb7cfcbdb5c7ce7f12738359572fe2cfad8a569?"
                                        className="shrink-0 aspect-square w-[30px]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start p-4 mt-4 rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full">
                                <div className="flex gap-2.5 pr-20 max-md:pr-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69784d56d27199c8bd720211621ae0155d021bd178ac2879294040ea6ec1c009?"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ce1624af4ba51e9c62414c14fa70672a10083c363e36e2cd0ad95fab4960d3b?"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b801f00b7144b95fe6e049046844e0759112ebb28d8fd57834fd11a37bf6894c?"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7beda7a2ba024b05a03a0b2d6a9e09f4349795a33afcc967d019f80af0477159?"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e5ac79f440a3db610d8d92885cc69905d0251ab92094cb0fc9373583b14dd8?"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                </div>
                                <div className="mt-5 mb-40 text-base text-black max-md:mb-10">
                                    Що вам сподобалось або не сподобалось?
                                </div>
                            </div>
                            <div className="flex gap-2.5 self-start mt-4 text-base text-black">
                                <div className="shrink-0 w-6 h-6 bg-gray-200 rounded-md border border-solid border-neutral-600" />
                                <div className="my-auto">Заборонити коментування</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-black max-md:mt-6">
                            <div className="text-xl">Правила рецензій</div>
                            <div className="flex flex-col px-4 pb-5 mt-4 text-base rounded-3xl bg-zinc-300">
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не допускайте образ та принижень на адресу інших гравців,
                                    розробників чи груп.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не включайте погрози або заохочення до заподіяння шкоди.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не використовуйте відгуки в комерційних цілях. Приклади
                                    включають: рекламу, реферали або промо-акції.
                                </div>
                                <div className="mt-4">
                                    Не впливайте штучно на оцінки в оглядах. Приклади:
                                    використання декількох облікових записів для залишення
                                    відгуків; примушування інших гравців залишати відгуки;
                                    прийняття платежів або іншої компенсації за залишення
                                    відгуків.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center self-center px-9 py-3.5 mt-8 text-xl text-white rounded-3xl bg-zinc-800 max-md:px-5">
                Опублікувати рецензію
            </div>
        </div>
    );
}

export default NewReview;
