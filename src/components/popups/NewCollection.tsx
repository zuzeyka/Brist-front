import React from "react";

const NewCollection: React.FC = () => {
    return (
        <div className="flex flex-col py-8 text-black rounded-3xl bg-zinc-100 max-w-[790px]">
            <div className="flex gap-5 items-start self-end mr-8 max-w-full text-3xl w-[474px] max-md:flex-wrap max-md:mr-2.5">
                <div className="flex-auto mt-3">Нова колекція</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a035ae9e36ebaeefb62f87745beb6a7ffc56d8ad39ac2c233c31573f602d61a0?"
                    className="shrink-0 w-6 aspect-square"
                />
            </div>
            <div className="flex flex-col px-10 mt-10 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2.5 justify-between px-3.5 py-2.5 rounded-3xl bg-stone-300 max-md:flex-wrap max-md:max-w-full">
                    <div className="text-base">Назва колекції</div>
                    <div className="text-sm">0/25</div>
                </div>
                <div className="mt-4 text-base max-md:max-w-full">
                    Ви можете додати ігри до колекції пізніше
                </div>
                <div className="justify-center items-start px-3.5 py-2.5 mt-2 text-base rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full">
                    Пошук ігор
                </div>
                <div className="flex flex-wrap gap-3 content-start items-start pr-14 mt-4 text-base max-md:pr-5">
                    <div className="flex flex-col self-stretch">
                        <div className="flex gap-3">
                            <div className="flex gap-1.5 py-1.5 pr-3.5 pl-5 rounded-3xl bg-zinc-300">
                                <div>Название игры</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d802bf31c65addc7f6e196282b35344d84adabe5a0f609869b3a6ab24164cbff?"
                                    className="shrink-0 w-5 aspect-square"
                                />
                            </div>
                            <div className="flex gap-1.5 py-1.5 pr-3.5 pl-5 rounded-3xl bg-zinc-300">
                                <div>Название игры</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d802bf31c65addc7f6e196282b35344d84adabe5a0f609869b3a6ab24164cbff?"
                                    className="shrink-0 w-5 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex gap-1.5 py-1.5 pr-3.5 pl-5 mt-3 rounded-3xl bg-zinc-300 max-md:px-5">
                            <div>Длинное название игры</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d802bf31c65addc7f6e196282b35344d84adabe5a0f609869b3a6ab24164cbff?"
                                className="shrink-0 w-5 aspect-square"
                            />
                        </div>
                    </div>
                    <div className="flex gap-1.5 py-1.5 pr-3.5 pl-5 whitespace-nowrap rounded-3xl bg-zinc-300">
                        <div>Игра</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d802bf31c65addc7f6e196282b35344d84adabe5a0f609869b3a6ab24164cbff?"
                            className="shrink-0 w-5 aspect-square"
                        />
                    </div>
                    <div className="flex gap-1.5 py-1.5 pr-3.5 pl-5 rounded-3xl bg-zinc-300">
                        <div>Название игры</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d802bf31c65addc7f6e196282b35344d84adabe5a0f609869b3a6ab24164cbff?"
                            className="shrink-0 w-5 aspect-square"
                        />
                    </div>
                </div>
                <div className="justify-center items-center self-center px-9 py-3.5 mt-20 max-w-full text-xl text-white whitespace-nowrap rounded-3xl bg-zinc-800 w-[348px] max-md:px-5 max-md:mt-10">
                    Створити
                </div>
            </div>
        </div>
    );
}

export default NewCollection;
