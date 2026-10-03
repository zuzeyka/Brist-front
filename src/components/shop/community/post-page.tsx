import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, BellPlusIcon, MoreHorizontalIcon, PlusIcon, ReplyIcon } from 'lucide-react';
import { GameComment, User } from '@/shared/lib/interfaces';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Avatar from '@/components/ui/avatar/avatar';
import { CommentIcon, HeartOutlineIcon } from '@/components/ui/icons';
import { formatCount, formatDate } from '../about/review-list';
import { isImageUrl, isVideoUrl, PostProps, textClass } from './post';
import PostHeader from './post-header';
import PostFooter from './post-footer';
import GameStats from './game-stats';

export interface OpenPost {
    id: string;
    props: PostProps;
}

interface PostPageProps {
    post: OpenPost;
    others: OpenPost[];
    gameName: string;
    subscribersCount: number;
    onlineCount: number;
    onBack: () => void;
    onOpen: (post: OpenPost) => void;
    onCreate: () => void;
}

type CommentWithAuthor = GameComment & { author?: User };

const chip = 'flex items-center gap-2 rounded-lg bg-cardLight12 px-2 py-1 font-artifakt font-semibold text-button-2';
const secondaryIconButton = 'p-2 rounded-[20px] bg-secondary hover:bg-secondaryHover text-typography';

const UsernameCard: React.FC<{ user?: User; small?: boolean }> = ({ user, small }) => (
    <div className='flex items-center gap-3 pr-4 bg-card2 rounded-[20px] w-fit'>
        <Avatar src={user?.image} name={user?.name} alt='' className={small ? 'size-7' : 'size-9'} />
        <span className='font-artifakt font-bold text-sign-2 tracking-[-0.01em]'>{user?.name ?? 'Гравець'}</span>
    </div>
);

// The comment being answered, quoted with a primary bar on the left.
const Quote: React.FC<{ comment: CommentWithAuthor }> = ({ comment }) => (
    <div className='flex flex-col gap-3 p-3 rounded-xl bg-card2 border-l-4 border-primary'>
        <UsernameCard user={comment.author} small />
        <p className={textClass + ' text-typographySecondary line-clamp-2'}>{comment.content}</p>
    </div>
);

// Small card in the "Інші обговорення" list.
const OtherPost: React.FC<{ post: OpenPost; onOpen: () => void }> = ({ post, onOpen }) => (
    <button type="button" onClick={onOpen} className='flex flex-col gap-3 p-4 bg-card1 hover:bg-card2 rounded-[20px] text-left text-typography'>
        <p className='font-artifakt font-bold text-sign-2 truncate w-full'>{post.props.postTitle || post.props.postText}</p>
        {post.props.postTitle && post.props.postText && <p className={textClass + ' line-clamp-2'}>{post.props.postText}</p>}
        {isImageUrl(post.props.postMediaUrl) && <img src={post.props.postMediaUrl} alt="" className='w-full h-40 object-cover rounded-xl' />}
        <div className='flex gap-3'>
            <span className={chip + ' text-typographySecondary'}><HeartOutlineIcon className='text-accent' />{formatCount(post.props.postLikes)}</span>
            <span className={chip + ' text-typographySecondary'}><CommentIcon />{formatCount(post.props.postComments)}</span>
        </div>
    </button>
);

const PostPage: React.FC<PostPageProps> = ({ post, others, gameName, subscribersCount, onlineCount, onBack, onOpen, onCreate }) => {
    const [comments, setComments] = useState<CommentWithAuthor[]>([]);
    const [sort, setSort] = useState('new');
    const [replyTo, setReplyTo] = useState<CommentWithAuthor>();
    const [draft, setDraft] = useState('');
    const { props } = post;

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch('http://localhost:5049/api/GameComment/bypostid/' + post.id);
                if (!res.ok) throw new Error('Network response was not ok');
                const data = await res.json() as GameComment[];
                const authors = await Promise.all(data.map(async (c) => {
                    const r = await fetch('http://localhost:5049/api/User/getbyuid/' + c.authorId);
                    return r.ok ? await r.json() as User : undefined;
                }));
                setComments(data.map((c, i) => ({ ...c, author: authors[i] })));
            } catch (error) {
                console.log('Fetch comments error:', error);
            }
        };
        setComments([]);
        setReplyTo(undefined);
        setDraft('');
        window.scrollTo({ top: 0 });
        load();
    }, [post.id]);

    const send = async () => {
        if (!draft.trim()) return;
        try {
            const res = await fetch('http://localhost:5049/api/GameComment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gamePostId: post.id, content: draft.trim(), authorId: '', replyToId: replyTo?.id }),
            });
            if (!res.ok) throw new Error('Network response was not ok');
            const created = await res.json() as GameComment;
            setComments((list) => [{ ...created, author: { name: 'Ви' } as User }, ...list]);
            setDraft('');
            setReplyTo(undefined);
        } catch (error) {
            console.log('Send comment error:', error);
        }
    };

    const sorted = [...comments].sort((a, b) => sort === 'popular'
        ? (b.likesCount ?? 0) - (a.likesCount ?? 0)
        : new Date(sort === 'old' ? a.createdAt : b.createdAt).getTime() - new Date(sort === 'old' ? b.createdAt : a.createdAt).getTime());
    const byId = (id?: string) => comments.find((c) => c.id === id);

    return (
        <div className='flex gap-6 items-start pt-8'>
            <div className='w-[1092px] min-w-0 flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4 text-typography'>
                        <button type="button" aria-label="Назад" onClick={onBack} className='hover:text-primaryHover'><ArrowLeftIcon className='size-6' /></button>
                        <PostHeader className='flex-1 items-center' postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postAuthorAvatarUrl ?? ''} isUser={true} />
                    </div>
                    <article className='flex flex-col gap-6 p-6 bg-card1 rounded-[20px] text-typography'>
                        <div className='flex flex-col gap-3'>
                            {props.postTitle && <h1 className='font-manrope font-bold text-heading-2'>{props.postTitle}</h1>}
                            {props.postText && <p className={textClass}>{props.postText}</p>}
                            {isImageUrl(props.postMediaUrl) && <img className='w-full rounded-2xl' src={props.postMediaUrl} alt="" />}
                            {isVideoUrl(props.postMediaUrl) && <video className='w-full rounded-2xl bg-black' src={props.postMediaUrl} poster={props.postPosterUrl} controls />}
                        </div>
                        <PostFooter postLikes={props.postLikes} postComments={Math.max(props.postComments, comments.length)} isShared={true} />
                    </article>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2.5'>
                        <span className='font-artifakt text-block-2 tracking-[-0.01em] text-typographySecondary'>Сортування:</span>
                        <Select value={sort} onValueChange={setSort}>
                            <SelectTrigger className="w-auto h-auto p-0 gap-0.5 !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt font-semibold">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                <SelectItem value="new">Спочатку нові</SelectItem>
                                <SelectItem value="old">Спочатку старі</SelectItem>
                                <SelectItem value="popular">Спочатку популярні</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-3 p-3 rounded-[20px] border border-secondary bg-background40'>
                        {replyTo && <Quote comment={replyTo} />}
                        <textarea
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            placeholder='Написати відповідь...'
                            rows={2}
                            className='w-full resize-none bg-transparent px-1 font-artifakt text-sign-2 text-typography placeholder:text-typographySecondary focus:outline-none'
                        />
                        <div className='flex justify-end items-center gap-4'>
                            <button type="button" onClick={() => { setDraft(''); setReplyTo(undefined); }} className='font-artifakt font-semibold text-button-2 text-negative hover:opacity-80'>Відхилити</button>
                            <button type="button" onClick={send} disabled={!draft.trim()} className='h-10 px-5 rounded-[20px] bg-primary hover:bg-primaryHover disabled:opacity-50 text-background font-artifakt font-semibold text-button-2'>Надіслати</button>
                        </div>
                    </div>

                    {sorted.map((comment) => {
                        const quoted = byId(comment.replyToId);
                        return (
                            <article key={comment.id} className='flex flex-col gap-4 p-6 bg-card1 rounded-[20px] text-typography'>
                                <PostHeader postInfo={comment.author?.name ?? 'Гравець'} postDate={formatDate(comment.createdAt)} imgUrl={comment.author?.image ?? ''} isUser={true} />
                                {quoted && <Quote comment={quoted} />}
                                <p className={textClass}>{comment.content}</p>
                                <div className='flex gap-3'>
                                    <span className={chip + ' text-typographySecondary'}><HeartOutlineIcon className='text-accent' />{formatCount(comment.likesCount ?? 0)}</span>
                                    <button type="button" onClick={() => { setReplyTo(comment); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={chip + ' text-typography hover:bg-cardLight25'}>
                                        <ReplyIcon className='size-6' />Відповісти
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            <aside className='w-[348px] shrink-0 sticky top-6 flex flex-col gap-8'>
                <div className='flex flex-col gap-5'>
                    <GameStats gameName={gameName} subscribersCount={subscribersCount} onlineCount={onlineCount} mini />
                    <div className='flex gap-2'>
                        <button type="button" onClick={onCreate} className='flex-1 h-10 flex items-center justify-center gap-2 rounded-[20px] bg-primary hover:bg-primaryHover text-background font-artifakt font-semibold text-button-2'>
                            <PlusIcon className='size-5' />Створити пост
                        </button>
                        <button type="button" aria-label="Підписатися на сповіщення" className={secondaryIconButton}><BellPlusIcon className='size-6' /></button>
                        <button type="button" aria-label="Більше" className={secondaryIconButton}><MoreHorizontalIcon className='size-6' /></button>
                    </div>
                </div>
                {others.length > 0 && (
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-manrope font-bold text-heading-3 text-typography'>Інші обговорення</h2>
                        {others.map((other) => <OtherPost key={other.id} post={other} onOpen={() => onOpen(other)} />)}
                    </div>
                )}
            </aside>
        </div>
    );
};

export default PostPage;
