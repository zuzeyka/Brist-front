import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import GameStats from "./GameStats";
import { Image } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface GameInfo {
    gameName: string;
    cancel: () => void;
}

const CreatePost: React.FC<GameInfo> = ({ gameName, cancel }) => {
    const [image, setImage] = useState<string | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [needImage, setNeedImage] = useState(false);

    const handleNeedImage = () => {
        setNeedImage(!needImage);
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="col-span-2 flex justify-between space-x-5 mt-5">
            <div className="flex flex-col flex-1">
                <div className="self-center text-3xl font-bold mb-5">
                    Створення поста
                </div>
                <Tabs defaultValue="post" className="bg-card1 rounded-xl">
                    <TabsList className="grid w-full grid-cols-4 bg-card1 !font-artifakt !text-subheding-1 !text-typography">
                        <TabsTrigger value="post">Обговорення</TabsTrigger>
                        <TabsTrigger value="screenshot">Скріншот</TabsTrigger>
                        <TabsTrigger value="video">Відео</TabsTrigger>
                        <TabsTrigger value="guide">Гайд</TabsTrigger>
                    </TabsList>
                    <TabsContent value="post">
                        <div className="flex flex-col w-full rounded-b-3xl bg-card1 max-md:max-w-full">
                            <div
                                className="flex flex-col px-5 pb-5 w-full text-base max-md:max-w-full"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <div className="my-3 text-sign-2 font-bold max-md:max-w-full">
                                    Заголовок
                                </div>
                                <InputField className="justify-center items-start px-4 py-3 mb-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full" placeholder="Тема вашого обговорення..." />
                                {image && !needImage && <img src={image} alt="Uploaded" className="rounded-3xl max-h-96 object-cover" />}
                                {needImage && !image && (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                Перетягніть файл сюди або
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="fileUpload" className="cursor-pointer">
                                                    Завантажити
                                                    <input
                                                        type="file"
                                                        id="fileUpload"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handleImageUpload}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center my-3 text-sign-2 font-bold max-md:max-w-full">
                                    Текст
                                    <Image className="ml-2 w-5 h-5 hover:text-accent" onClick={handleNeedImage} />
                                </div>
                                <Textarea className="justify-center items-start px-4 py-3 mb-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full h-60" placeholder="Що ви хочете обговорити?" />
                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>Відхилити</Button>
                                    <Button className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background">
                                        Опублікувати
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="screenshot">
                        <div className="flex flex-col w-full rounded-b-3xl bg-card1 max-md:max-w-full">
                            <div
                                className="flex flex-col px-5 pb-5 mt-5 w-full text-base max-md:max-w-full"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                {image ? (
                                    <img src={image} alt="Uploaded" className="rounded-3xl max-h-96 object-cover" />
                                ) : (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                Перетягніть файл сюди або
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="fileUpload" className="cursor-pointer">
                                                    Завантажити
                                                    <input
                                                        type="file"
                                                        id="fileUpload"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handleImageUpload}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                    Підпис
                                </div>
                                <InputField className="justify-center items-start px-4 py-3 mt-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full" placeholder="Ваш коментар до скріншота..." />

                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>Відхилити</Button>
                                    <Button className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background">
                                        Опублікувати
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="video">
                        <div className="flex flex-col w-full rounded-b-3xl bg-card1 max-md:max-w-full">
                            <div className="flex flex-col px-5 pb-5 mt-5 w-full text-base max-md:max-w-full">

                                {videoSrc ? (
                                    <video controls className="rounded-3xl max-h-60 mt-5 object-cover">
                                        <source src={videoSrc} type="video/mp4" />
                                        Ваш браузер не підтримує відео тег.
                                    </video>
                                ) : (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full"
                                        onDrop={handleDrop} onDragOver={handleDragOver}>
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                Перетягніть файл сюди або
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="videoUpload" className="cursor-pointer">
                                                    Завантажити
                                                    <input
                                                        type="file"
                                                        id="videoUpload"
                                                        accept="video/*"
                                                        className="hidden"
                                                        onChange={handleVideoUpload}
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                    Підпис
                                </div>
                                <InputField className="justify-center items-start px-4 py-3 mt-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full" placeholder="Ваш коментар до відео...">
                                </InputField>
                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>Відхилити</Button>
                                    <Button className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background">
                                        Опублікувати
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="guide">
                        <div className="flex flex-col self-stretch px-5 pb-5">
                            <div className="justify-end max-md:max-w-full mb-5">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-sign-2 max-md:mt-3 max-md:max-w-full">
                                            <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                                Обкладинка
                                            </div>
                                            {image ? (
                                                <img src={image} alt="Uploaded" className="rounded-3xl max-h-96 object-cover" />
                                            ) : (
                                                <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                                    <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                                        <div className="my-auto text-sign-2 text-typographySecondary">
                                                            Перетягніть файл сюди або
                                                        </div>
                                                        <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                            <label htmlFor="fileUpload" className="cursor-pointer">
                                                                Завантажити
                                                                <input
                                                                    type="file"
                                                                    id="fileUpload"
                                                                    accept="image/*"
                                                                    className="hidden"
                                                                    onChange={handleImageUpload}
                                                                />
                                                            </label>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow self-stretch max-md:mt-3 max-md:max-w-full">
                                            <div className="flex justify-between gap-0 whitespace-nowrap max-md:flex-wrap">
                                                <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                                    Заголовок
                                                </div>
                                                <div className="mt-3 text-sign-2 text-typographySecondary font-bold max-md:max-w-full">
                                                    0/100
                                                </div>
                                            </div>
                                            <Textarea className="justify-center items-start px-4 py-3 mt-2 rounded-2xl h-32 !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full" placeholder="Про що ваш гайд? ">
                                            </Textarea>
                                            <div className="flex justify-between gap-0 mt-3 whitespace-nowrap max-md:flex-wrap">
                                                <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                                    Опис
                                                </div>
                                                <div className="mt-3 text-typographySecondary text-sign-2 font-bold max-md:max-w-full">
                                                    0/300
                                                </div>
                                            </div>
                                            <Textarea className="justify-center items-start px-4 py-3 mt-2 rounded-2xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full h-full" placeholder="Опишіть тему детальніше...">
                                            </Textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {image && !needImage && <img src={image} alt="Uploaded" className="rounded-3xl max-h-96 object-cover" />}
                            {needImage && !image && (
                                <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                        <div className="my-auto text-sign-2 text-typographySecondary">
                                            Перетягніть файл сюди або
                                        </div>
                                        <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                            <label htmlFor="fileUpload" className="cursor-pointer">
                                                Завантажити
                                                <input
                                                    type="file"
                                                    id="fileUpload"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={handleImageUpload}
                                                />
                                            </label>
                                        </Button>
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-between gap-0 whitespace-nowrap max-md:flex-wrap">
                                <div className="flex items-center my-3 text-sign-2 font-bold max-md:max-w-full">
                                    Заголовок
                                    <Image className="ml-2 w-5 h-5 hover:text-accent" onClick={handleNeedImage} />
                                </div>
                                <div className="mt-3 text-sign-2 text-typographySecondary font-bold max-md:max-w-full">
                                    0/1000
                                </div>
                            </div>
                            <Textarea className="justify-center items-start px-4 py-3 mt-2 h-60 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full" placeholder="Текст вашого гайду..." />
                            <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>Відхилити</Button>
                                <Button className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background">
                                    Опублікувати
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="flex flex-col text-sign-2 max-w-96">
                <GameStats gameName={gameName} subscribersCount={1000} onlineCount={500} mini={true} />
                <div className="mt-6 w-full text-heading-3 font-bold font-manrope">
                    Правила спільноти
                </div>
                <div className="flex flex-col px-4 pt-4 pb-5 mt-4 w-full rounded-3xl bg-card2">
                    <div className="mb-3">Публікуйте тільки оригінальний контент.</div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        Не допускайте образ та принижень на адресу інших гравців, розробників чи груп.
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        Не включайте погрози або заохочення до заподіяння шкоди.
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        Не завантажуйте контент, на який у вас немає прав.
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3 leading-[150%]">
                        Не рекламуйте комерційний контент
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="mt-3">
                        Переконайтеся, що контент, який ви публікуєте, відповідає місцю, де він розміщується.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
