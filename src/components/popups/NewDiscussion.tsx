import React from "react";

const NewDiscussion: React.FC = () => {
    return (
        <div className="flex flex-col px-10 py-8 rounded-3xl bg-zinc-100 max-md:px-5">
            <div className="flex gap-5 justify-between text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-xl max-md:max-w-full">Ваше обговорення</div>
                    <div className="flex gap-1.5 mt-1.5 text-2xl font-bold max-md:flex-wrap">
                        <div className="max-md:max-w-full">
                            Якась гра, яка дуже всім сподобається
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8b7475af0ef7ac4ea33414059697aa59e7dae8a0756803ae457d133be4bddd?"
                            className="shrink-0 w-8 aspect-square"
                        />
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
                            <div className="flex gap-2.5 justify-between px-3.5 py-2.5 text-black rounded-3xl bg-stone-300 max-md:flex-wrap max-md:max-w-full">
                                <div className="text-base">Тема обговорення</div>
                                <div className="text-sm">0/300</div>
                            </div>
                            <div className="flex flex-col items-start p-4 mt-4 rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full">
                                <div className="flex gap-5 justify-between">
                                    <div className="flex gap-2.5">
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
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6127886a7f7f03a0b68f38e656c6a00fe4536d3abce5ea2740213c1f9192feb?"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                    </div>
                                    <div className="flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d571794e32d429405a3cada224c54dd1f01f53eb33564f3f35a4ea5975a35a25?"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d79b17f37658245eabc563338c6ccf3c11283b405107690c48910e114da622?"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4cf26376ae6121b40f501362ec69dd3aeda4b8562d4ac9061a421ce8dec7784?"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 mb-48 text-base text-black max-md:mb-10">
                                    Що ви хочете обговорити?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-black max-md:mt-6">
                            <div className="text-xl">Правила рецензій</div>
                            <div className="flex flex-col px-4 pb-4 mt-4 text-base rounded-3xl bg-zinc-300">
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Публікуйте тільки оригінальний контент.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не допускайте образ та принижень на адресу інших гравців,
                                    розробників чи груп.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не включайте погрози або заохочення до заподіяння шкоди.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не завантажуйте контент, на який у вас немає прав.
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    Не рекламуйте комерційний контент
                                </div>
                                <div className="mt-4">
                                    Переконайтеся, що контент, який ви публікуєте, відповідає
                                    місцю, де він розміщується.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center self-center px-9 py-3.5 mt-8 max-w-full text-xl text-white whitespace-nowrap rounded-3xl bg-zinc-800 w-[348px] max-md:px-5">
                Опублікувати
            </div>
        </div>
    );
}

export default NewDiscussion;
