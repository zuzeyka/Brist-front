import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface NotificationProps {
    isBigSale: boolean;
    isWishSale: boolean;
    isNewComment: boolean;
    isNewFriendRequest: boolean;
    isAcceptFriendRequest: boolean;
    isDeclineFriendRequest: boolean;
    isNewMessage: boolean;
    isNewMessageSound: boolean;
}

const Notification: React.FC<NotificationProps> = (props) => {
    const [isBigSale, setIsBigSale] = useState(props.isBigSale);
    const [isWishSale, setIsWishSale] = useState(props.isWishSale);
    const [isNewComment, setIsNewComment] = useState(props.isNewComment);
    const [isNewFriendRequest, setIsNewFriendRequest] = useState(props.isNewFriendRequest);
    const [isAcceptFriendRequest, setIsAcceptFriendRequest] = useState(props.isAcceptFriendRequest);
    const [isDeclineFriendRequest, setIsDeclineFriendRequest] = useState(props.isDeclineFriendRequest);
    const [isNewMessage, setIsNewMessage] = useState(props.isNewMessage);
    const [isNewMessageSound, setIsNewMessageSound] = useState(props.isNewMessageSound);

    return (
        <div className="bg-card1 rounded-2xl w-full p-4">
            <div className="flex flex-col items-start p-8 rounded-3xl bg-card1 max-md:px-5">
                <div className="text-heading-3 font-manrope font-bold max-md:max-w-full">
                    Беззвучні сповіщення
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-5 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Великий розпродаж</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isBigSale} onClick={() => setIsBigSale(!isBigSale)} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Знижка на ігри з мого Бажаного</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isWishSale} onClick={() => setIsWishSale(!isWishSale)} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Новий коментар під моїм профілем</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isNewComment} onClick={() => setIsNewComment(!isNewComment)} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Новий запит на дружбу</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isNewFriendRequest} onClick={() => setIsNewFriendRequest(!isNewFriendRequest)} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Мій запит на дружбу прийнято</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isAcceptFriendRequest} onClick={() => setIsAcceptFriendRequest(!isAcceptFriendRequest)} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">Мій запит на дружбу відхилено</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={isDeclineFriendRequest} onClick={() => setIsDeclineFriendRequest(!isDeclineFriendRequest)} />
                    </div>
                </div>
                <div className="mt-20 text-heading-3 font-manrope font-bold max-md:mt-10 max-md:max-w-full">
                    Чат
                </div>
                <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[701px] max-md:flex-wrap">
                    <div className="self-end mt-8 text-block-2">
                        Нове повідомлення у чаті
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="flex flex-col">
                            <div className="text-subheading-2 font-bold text-center">
                                Сповіщення
                            </div>
                            <div className="flex flex-col justify-center items-center self-center px-5 mt-3 w-10 fill-neutral-400">
                                <Switch checked={isNewMessage} onClick={() => setIsNewMessage(!isNewMessage)} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-subheading-2 font-bold text-center">
                                Звук
                            </div>
                            <div className="flex flex-col justify-center items-center px-5 mt-3 fill-neutral-400">
                                <Switch checked={isNewMessageSound} onClick={() => setIsNewMessageSound(!isNewMessageSound)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;

