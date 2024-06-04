import React from "react";

const NewScreenshot: React.FC = () => {
    return (
        <div className="flex flex-col px-10 py-8 rounded-3xl bg-zinc-100 max-md:px-5">
            <div className="flex gap-5 justify-between text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-xl max-md:max-w-full">Ваш скріншот</div>
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
                        <div className="flex flex-col grow self-stretch text-black max-md:mt-6 max-md:max-w-full">
                            <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-black border-dashed bg-stone-300 max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-3 mt-28 mb-16 max-md:my-10">
                                    <div className="my-auto text-base">
                                        Перетягніть файл сюди або
                                    </div>
                                    <div className="justify-center px-6 py-2.5 text-sm whitespace-nowrap rounded-3xl border border-black border-solid">
                                        Завантажити
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-start px-3.5 py-2.5 mt-4 text-base rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full">
                                Підпис до скріншота
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

export default NewScreenshot;
