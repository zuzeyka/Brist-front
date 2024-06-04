import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import React from "react";


const Password: React.FC<{ oldhash: string }> = ({ oldhash }) => {
    return (
        <div className="flex justify-center bg-gray-200 rounded-2xl w-full p-4">
            <div className="flex flex-col text-base text-black max-w-[596px]">
                <div className="self-center text-2xl font-semibold">Зміна паролю</div>
                <ul className="justify-center items-start p-2.5 mt-8 w-full leading-7 rounded-3xl bg-zinc-300 max-md:pr-5 max-md:max-w-full">
                    <li className="list-disc ml-6">Не використовуйте жодного з останніх 5 паролів</li>
                    <li className="list-disc ml-6">Використовуйте 7+ символів</li>
                    <li className="list-disc ml-6">Використовуйте принаймні 1 літеру</li>
                    <li className="list-disc ml-6">Використовуйте принаймні 1 цифру</li>
                    <li className="list-disc ml-6">Без пробілів</li>
                </ul>
                <div className="mt-8 w-full font-semibold max-md:max-w-full">
                    Старий пароль
                </div>
                <InputField type="password" placeholder="Ваш поточний пароль" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full" />
                <div className="mt-5 w-full font-semibold max-md:max-w-full">
                    Новий пароль
                </div>
                <InputField type="password" placeholder="Придумайте новий пароль" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full" />
                <InputField type="password" placeholder="Повторіть новий пароль" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full" />
                <Button className="justify-center items-center self-center px-9 py-3.5 mt-5 w-56 max-w-full text-white whitespace-nowrap rounded-3xl bg-zinc-800 max-md:px-5">
                    Зберегти
                </Button>
            </div>
        </div>
    );
};

export default Password;
