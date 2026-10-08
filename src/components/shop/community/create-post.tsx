import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GameStats from "./game-stats";
import { Image, XIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/components/authorization/auth-context";

interface GameInfo {
    gameId: string;
    gameGroupId: string;
    gameName: string;
    cancel: () => void;
    onCreated: () => void;
}

const API_BASE = "http://localhost:5049/api/";

const CreatePost: React.FC<GameInfo> = ({ gameId, gameGroupId, gameName, cancel, onCreated }) => {
    const { t } = useTranslation();
    const { userId } = useAuth();
    const [image, setImage] = useState<string | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [needImage, setNeedImage] = useState(false);

    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [screenshotCaption, setScreenshotCaption] = useState('');
    const [videoCaption, setVideoCaption] = useState('');
    const [guideTitle, setGuideTitle] = useState('');
    const [guideDescription, setGuideDescription] = useState('');
    const [guideContent, setGuideContent] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

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
            setVideoFile(file);
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

    const submitJson = async (path: string, body: unknown) => {
        if (!userId) {
            setErrorMsg(t('shop.createPost.needLogin'));
            return false;
        }
        setSubmitting(true);
        setErrorMsg('');
        try {
            const res = await fetch(API_BASE + path, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            onCreated();
            return true;
        } catch (error) {
            console.error('Create post error:', error);
            setErrorMsg(t('shop.createPost.publishError'));
            return false;
        } finally {
            setSubmitting(false);
        }
    };

    const submitPost = () => {
        if (!postTitle.trim() || !postText.trim()) {
            setErrorMsg(t('shop.createPost.fillTitleAndText'));
            return;
        }
        submitJson('GamePost', {
            title: postTitle,
            likesCount: 0,
            gameId,
            authorId: userId,
            content: postText,
            contentUrl: image,
        });
    };

    const submitScreenshot = () => {
        if (!image) {
            setErrorMsg(t('shop.createPost.addImage'));
            return;
        }
        submitJson('Screenshot', {
            title: screenshotCaption,
            likesCount: 0,
            gameId,
            authorId: userId,
            contentUrl: image,
        });
    };

    const submitVideo = async () => {
        if (!videoFile) {
            setErrorMsg(t('shop.createPost.addVideo'));
            return;
        }
        if (!userId) {
            setErrorMsg(t('shop.createPost.needLogin'));
            return;
        }
        setSubmitting(true);
        setErrorMsg('');
        try {
            // Video has no file in its own body; it's created first with no content,
            // then the file is attached via the dedicated upload endpoint below.
            const createRes = await fetch(API_BASE + 'Video', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: videoCaption,
                    likesCount: 0,
                    gameId,
                    authorId: userId,
                    contentUrl: null,
                }),
            });
            if (!createRes.ok) {
                throw new Error('Network response was not ok');
            }
            const created = await createRes.json();

            const formData = new FormData();
            formData.append('title', videoCaption);
            formData.append('gameId', gameId);
            formData.append('authorId', userId);
            formData.append('likesCount', '0');
            formData.append('file', videoFile);

            const uploadRes = await fetch(API_BASE + 'Video/' + created.id, {
                method: 'PUT',
                credentials: 'include',
                body: formData,
            });
            if (!uploadRes.ok) {
                throw new Error('Network response was not ok');
            }

            onCreated();
        } catch (error) {
            console.error('Create video post error:', error);
            setErrorMsg(t('shop.createPost.publishError'));
        } finally {
            setSubmitting(false);
        }
    };

    const submitGuide = () => {
        if (!guideTitle.trim() || !guideContent.trim()) {
            setErrorMsg(t('shop.createPost.fillGuideTitleAndText'));
            return;
        }
        submitJson('GameGuide', {
            title: guideTitle,
            description: guideDescription,
            likesCount: 0,
            gameId,
            authorId: userId,
            gameGroupId,
            content: guideContent,
            contentUrl: image,
        });
    };

    return (
        <div className="col-span-2 flex justify-between space-x-5 mt-5">
            <div className="flex flex-col flex-1">
                <div className="self-center text-3xl font-bold mb-5">
                    {t('shop.createPost.title')}
                </div>
                {errorMsg && (
                    <div className="mb-3 text-sm text-negative">{errorMsg}</div>
                )}
                <Tabs defaultValue="post" className="bg-card1 rounded-xl">
                    <TabsList className="grid w-full grid-cols-4 bg-card1 !font-artifakt !text-subheding-1 !text-typography">
                        <TabsTrigger value="post">{t('shop.createPost.tabPost')}</TabsTrigger>
                        <TabsTrigger value="screenshot">{t('shop.createPost.tabScreenshot')}</TabsTrigger>
                        <TabsTrigger value="video">{t('shop.community.videos')}</TabsTrigger>
                        <TabsTrigger value="guide">{t('shop.createPost.tabGuide')}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="post">
                        <div className="flex flex-col w-full rounded-b-3xl bg-card1 max-md:max-w-full">
                            <div
                                className="flex flex-col px-5 pb-5 w-full text-base max-md:max-w-full"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <div className="my-3 text-sign-2 font-bold max-md:max-w-full">
                                    {t('shop.createPost.titleLabel')}
                                </div>
                                <InputField
                                    className="justify-center items-start px-4 py-3 mb-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full"
                                    placeholder={t('shop.createPost.discussionTopicPlaceholder')}
                                    value={postTitle}
                                    onChange={(e) => setPostTitle(e.target.value)}
                                />
                                {image && (<div className="relative">
                                    <img src={image} alt="Uploaded" className="rounded-3xl w-full max-h-96 object-cover" />
                                    <XIcon onClick={() => setImage(null)} className="w-5 h-5 text-typographySecondary hover:text-accent absolute top-5 right-5" fill="currentColor"></XIcon>
                                </div>)}
                                {needImage && !image && (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                {t('shop.createPost.dragDropOr')}
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="fileUpload" className="cursor-pointer">
                                                    {t('shop.createPost.upload')}
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
                                    {t('shop.createPost.textLabel')}
                                    <Image className="ml-2 w-5 h-5 hover:text-accent" onClick={handleNeedImage} />
                                </div>
                                <Textarea
                                    className="justify-center items-start px-4 py-3 mb-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full h-60"
                                    placeholder={t('shop.createPost.discussionTextPlaceholder')}
                                    value={postText}
                                    onChange={(e) => setPostText(e.target.value)}
                                />
                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>{t('settings.discard')}</Button>
                                    <Button disabled={submitting} className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background" onClick={submitPost}>
                                        {t('shop.createPost.publish')}
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
                                    <div className="relative">
                                        <img src={image} alt="Uploaded" className="rounded-3xl w-full max-h-96 object-cover" />
                                        <XIcon onClick={() => setImage(null)} className="w-5 h-5 text-typographySecondary hover:text-accent absolute top-5 right-5" fill="currentColor"></XIcon>
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                {t('shop.createPost.dragDropOr')}
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="fileUpload" className="cursor-pointer">
                                                    {t('shop.createPost.upload')}
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
                                    {t('shop.createPost.caption')}
                                </div>
                                <InputField
                                    className="justify-center items-start px-4 py-3 mt-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full"
                                    placeholder={t('shop.createPost.screenshotCommentPlaceholder')}
                                    value={screenshotCaption}
                                    onChange={(e) => setScreenshotCaption(e.target.value)}
                                />

                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>{t('settings.discard')}</Button>
                                    <Button disabled={submitting} className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background" onClick={submitScreenshot}>
                                        {t('shop.createPost.publish')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="video">
                        <div className="flex flex-col w-full rounded-b-3xl bg-card1 max-md:max-w-full">
                            <div className="flex flex-col px-5 pb-5 mt-5 w-full text-base max-md:max-w-full">
                                {image && (<div className="relative">
                                    <img src={image} alt="Uploaded" className="rounded-3xl w-full max-h-96 object-cover" />
                                    <XIcon onClick={() => setImage(null)} className="w-5 h-5 text-typographySecondary hover:text-accent absolute top-5 right-5" fill="currentColor"></XIcon>
                                </div>)}
                                {videoSrc ? (
                                    <div className="relative">
                                        <video controls className="rounded-3xl w-full max-h-60 mt-5 object-cover">
                                            <source src={videoSrc} type="video/mp4" />
                                            {t('shop.createPost.noVideoSupport')}
                                        </video>
                                        <XIcon onClick={() => { setVideoSrc(null); setVideoFile(null); }} className="w-5 h-5 text-typographySecondary hover:text-accent absolute top-10 right-5" fill="currentColor"></XIcon>
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full"
                                        onDrop={handleDrop} onDragOver={handleDragOver}>
                                        <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                            <div className="my-auto text-sign-2 text-typographySecondary">
                                                {t('shop.createPost.dragDropOr')}
                                            </div>
                                            <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                <label htmlFor="videoUpload" className="cursor-pointer">
                                                    {t('shop.createPost.upload')}
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
                                    {t('shop.createPost.caption')}
                                </div>
                                <InputField
                                    className="justify-center items-start px-4 py-3 mt-2 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full"
                                    placeholder={t('shop.createPost.videoCommentPlaceholder')}
                                    value={videoCaption}
                                    onChange={(e) => setVideoCaption(e.target.value)}
                                />
                                <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                    <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>{t('settings.discard')}</Button>
                                    <Button disabled={submitting} className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background" onClick={submitVideo}>
                                        {t('shop.createPost.publish')}
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
                                                {t('shop.createPost.cover')}
                                            </div>
                                            {image ? (
                                                <div className="relative">
                                                    <img src={image} alt="Uploaded" className="rounded-3xl w-full max-h-96 object-cover" />
                                                    <XIcon onClick={() => setImage(null)} className="w-5 h-5 text-typographySecondary hover:text-accent absolute top-5 right-5" fill="currentColor"></XIcon>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-center px-4 py-20 rounded-3xl border-2 border-secondary border-dashed bg-background40 max-md:px-5 max-md:max-w-full">
                                                    <div className="flex gap-3 mt-12 mb-6 max-md:mt-10">
                                                        <div className="my-auto text-sign-2 text-typographySecondary">
                                                            {t('shop.createPost.dragDropOr')}
                                                        </div>
                                                        <Button className="justify-center px-5 py-2 font-semibold whitespace-nowrap bg-secondary text-button-2 hover:bg-secondaryHover rounded-3xl">
                                                            <label htmlFor="fileUpload" className="cursor-pointer">
                                                                {t('shop.createPost.upload')}
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
                                                    {t('shop.createPost.titleLabel')}
                                                </div>
                                                <div className="mt-3 text-sign-2 text-typographySecondary font-bold max-md:max-w-full">
                                                    {guideTitle.length}/100
                                                </div>
                                            </div>
                                            <Textarea
                                                className="justify-center items-start px-4 py-3 mt-2 rounded-2xl h-32 !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full"
                                                placeholder={t('shop.createPost.guideTopicPlaceholder')}
                                                maxLength={100}
                                                value={guideTitle}
                                                onChange={(e) => setGuideTitle(e.target.value)}
                                            />
                                            <div className="flex justify-between gap-0 mt-3 whitespace-nowrap max-md:flex-wrap">
                                                <div className="mt-3 text-sign-2 font-bold max-md:max-w-full">
                                                    {t('shop.createPost.description')}
                                                </div>
                                                <div className="mt-3 text-typographySecondary text-sign-2 font-bold max-md:max-w-full">
                                                    {guideDescription.length}/300
                                                </div>
                                            </div>
                                            <Textarea
                                                className="justify-center items-start px-4 py-3 mt-2 rounded-2xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full h-full"
                                                placeholder={t('shop.createPost.guideDescriptionPlaceholder')}
                                                maxLength={300}
                                                value={guideDescription}
                                                onChange={(e) => setGuideDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between gap-0 whitespace-nowrap max-md:flex-wrap">
                                <div className="flex items-center my-3 text-sign-2 font-bold max-md:max-w-full">
                                    {t('shop.createPost.textLabel')}
                                </div>
                                <div className="mt-3 text-sign-2 text-typographySecondary font-bold max-md:max-w-full">
                                    {guideContent.length}/1000
                                </div>
                            </div>
                            <Textarea
                                className="justify-center items-start px-4 py-3 mt-2 h-60 rounded-3xl !bg-background40 placeholder:typographySecondary border-solid max-md:pr-5 max-md:max-w-full"
                                placeholder={t('shop.createPost.guideTextPlaceholder')}
                                maxLength={1000}
                                value={guideContent}
                                onChange={(e) => setGuideContent(e.target.value)}
                            />
                            <div className="flex gap-3 justify-between self-end pl-2 mt-5 font-semibold whitespace-nowrap">
                                <Button className="my-auto !text-negative text-button-2 font-semibold bg-transparent hover:bg-cardLight12 rounded-3xl" onClick={cancel}>{t('settings.discard')}</Button>
                                <Button disabled={submitting} className="justify-center px-5 py-2 bg-primary text-button-2 hover:bg-primaryHover rounded-3xl text-background" onClick={submitGuide}>
                                    {t('shop.createPost.publish')}
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="flex flex-col text-sign-2 max-w-96">
                <GameStats gameName={gameName} subscribersCount={1000} onlineCount={500} mini={true} />
                <div className="mt-6 w-full text-heading-3 font-bold font-manrope">
                    {t('shop.createPost.communityRules')}
                </div>
                <div className="flex flex-col px-4 pt-4 pb-5 mt-4 w-full rounded-3xl bg-card2">
                    <div className="mb-3">{t('shop.createPost.rule1')}</div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        {t('shop.createPost.rule2')}
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        {t('shop.createPost.rule3')}
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3">
                        {t('shop.createPost.rule4')}
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="my-3 leading-[150%]">
                        {t('shop.createPost.rule5')}
                    </div>
                    <hr className="border-cardLight25" />
                    <div className="mt-3">
                        {t('shop.createPost.rule6')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
