import { useAuth } from "@/components/authorization/auth-context";
import EmailConfirmation from "@/components/authorization/email-confirmation";
import Avatar from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

interface BaseProps {
    avaterUrl?: string;
    backgroundUrl?: string;
    name: string;
    email: string;
    about: string;
}

const Base: React.FC<BaseProps> = (props) => {
    const [backgroundUrl, setBackgroundUrl] = useState(props.backgroundUrl);
    const [avatarUrl, setAvatarUrl] = useState(props.avaterUrl);
    const [emailChanged, setEmailChanged] = useState(false);
    const { logout } = useAuth();

    const handleAvatarChange = (fileUrl: string) => {
        setAvatarUrl(fileUrl);
    };

    const handleBackgroundChange = (fileUrl: string) => {
        setBackgroundUrl(fileUrl);
    };
    return (
        <div className="bg-card1 rounded-2xl w-full">
            <div className="flex flex-col pb-6 rounded-3xl bg-card1 gap-52">
                <div>
                    <label htmlFor="background-upload" className="relative w-full h-72 bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 rounded-t-2xl flex items-center justify-center cursor-pointer">
                        {!backgroundUrl ? (
                            <img src={backgroundUrl} alt="User background" className="w-full h-full object-cover rounded-t-2xl" />
                        ) : (
                            <div className="flex items-center justify-center text-white rounded-t-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                        )}
                        <input id="background-upload" type="file" className="hidden" onChange={(event) => {
                            if (event.target.files && event.target.files[0]) {
                                const reader = new FileReader();
                                reader.onload = (file) => {
                                    const fileUrl = file.target?.result as string;
                                    if (fileUrl) {
                                        handleBackgroundChange(fileUrl);
                                    }
                                };
                                reader.readAsDataURL(event.target.files[0]);
                            }
                        }} />
                    </label>
                    <div className="self-center mt-6 px-5 w-full max-w-[1045px] max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                                <div className="relative">
                                    {avatarUrl ? (
                                        <Avatar className="h-[198px] rounded-[120px] w-[198px] max-md:mt-10" src="" alt="User avater" />
                                    ) : (
                                        <div className="flex flex-col items-center px-16 pt-20 mx-auto mt-3.5 bg-neutral-500 font-bold text-5xl h-[198px] rounded-[120px] w-[198px] max-md:mt-10">U</div>
                                    )}
                                    <label htmlFor="avatar-upload" className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition-all cursor-pointer">
                                        <input id="avatar-upload" type="file" className="hidden" onChange={(event) => {
                                            if (event.target.files && event.target.files[0]) {
                                                const reader = new FileReader();
                                                reader.onload = (file) => {
                                                    const fileUrl = file.target?.result as string;
                                                    if (fileUrl) {
                                                        handleAvatarChange(fileUrl);
                                                    }
                                                };
                                                reader.readAsDataURL(event.target.files[0]);
                                            }
                                        }} />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col gap-5 grow px-5 max-md:mt-7 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-wrap">
                                        <div className="flex flex-col">
                                            <div className="text-sign-2 font-bold">
                                                Нікнейм
                                            </div>
                                            <div className="flex gap-2.5 mt-2">
                                                <InputField placeholder={props.name} className="flex-1 justify-center items-start px-3.5 py-2.5 text-sign-2 whitespace-nowrap rounded-3xl placeholder:typographySecondary !bg-background40 border-1 border-secondary max-md:pr-5" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-1 text-base">
                                            <div className="text-sign-2 font-bold">Ел. пошта</div>
                                            <InputField placeholder={props.email} className="justify-center items-start px-3.5 py-2.5 mt-2 whitespace-nowrap rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border-1 border-secondary max-md:pr-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sign-2 font-bold max-md:max-w-full">
                                            Про себе
                                        </div>
                                        <Textarea placeholder={props.about} className="flex-1 text-sign-2 placeholder:typographySecondary !bg-background40 border-1 border-secondary mt-2 max-md:max-w-full">
                                        </Textarea>
                                    </div>
                                    <div>
                                        <div className="text-sign-2 font-bold max-md:max-w-full">
                                            Мова сайту
                                        </div>
                                        <Select>
                                            <SelectTrigger className="flex gap-2.5 justify-between px-3.5 py-2.5 mt-2 max-w-full !bg-background40 border-1 border-secondary whitespace-nowrap rounded-3xl w-[407px] bg-stone-300" id="sort">
                                                <SelectValue placeholder="Українська" />
                                            </SelectTrigger>
                                            <SelectContent className="flex gap-2.5 justify-between px-3.5 py-2.5 mt-2 max-w-full whitespace-nowrap rounded-3xl w-[407px] !bg-background40 border-1 border-secondary">
                                                <SelectItem className="hover:!bg-background40" value="Українська">Українська</SelectItem>
                                                <SelectItem className="hover:!bg-background40" value="English">English</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex justify-between">
                                        {!emailChanged ? (<Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="justify-center items-center px-9 py-3.5 text-negative rounded-3xl border-0 bg-accent text-button-2 max-md:px-5 hover:bg-cardLight25">Пiдтвердити пошту</Button>
                                            </DialogTrigger>
                                            <DialogContent className="w-auto !bg-card2">
                                                <EmailConfirmation emailChange={setEmailChanged} />
                                            </DialogContent>
                                        </Dialog>) : null}
                                        <Button onClick={logout} className="justify-center items-center px-9 py-3.5 rounded-3xl border-0 bg-transparent text-button-2 max-md:px-5 hover:bg-negative">Вийти з акаунта</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-end px-5 self-end mr-6 max-w-full text-base whitespace-nowrap w-[472px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
                    <Button className="justify-center items-center px-9 py-3.5 text-negative rounded-3xl border-0 bg-transparent text-button-2 max-md:px-5 hover:bg-cardLight25">
                        Відхилити
                    </Button>
                    <Button className="justify-center items-center px-9 py-3.5 !text-background rounded-3xl border-0 bg-primary text-button-2 hover:bg-primaryHover max-md:px-5">
                        Зберегти
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Base;
