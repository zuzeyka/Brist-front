import React from "react";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const NewCollection: React.FC = () => {
    return (
        <div className="bg-card2 rounded-lg p-8 max-w-md mx-auto shadow-lg w-[400px] rounded-2xl">
            <div className="flex justify-between items-start">
                <h2 className="text-heading-2 font-manrope font-bold">
                    Нова колекція
                </h2>
                <button className="text-button-1 leading-none">×</button>
            </div>
            <form className="mt-4">
                <div className="flex flex-col space-y-4">
                    <div>
                        <span className="text-sign-2 font-bold">Назва колекції</span>
                        <InputField placeholder="Придумайте назву колекції..." type="text" className="rounded-full text-sign-2" />
                    </div>
                    <div>
                        <span className="text-sign-2 font-bold">Додайте ігри</span>
                        <InputField placeholder="Пошук ігор за назвою..." type="password" className="rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <span>Ви можете додати ігри до колекції пізніше</span>
                        <Badge className="w-2/6 font-bold text-sign-2 text-typographySecondary bg-cardLight25">Название игры</Badge>
                    </div>
                    <Button className="mt-4 rounded-full text-background">Увійти</Button>
                </div>
            </form>
        </div>
    );
}

export default NewCollection;
