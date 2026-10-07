import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@/components/ui/avatar/avatar';
import { MoreHorizontalIcon } from 'lucide-react';

interface PostHeaderProps {
    postInfo: string;
    postDate: string;
    imgUrl: string;
    isUser: boolean;
    className?: string;
}

// "Username card" (avatar + name), the post date, and a "more" button.
const PostHeader: React.FC<PostHeaderProps> = (props) => {
    const { t } = useTranslation();
    return (
    <div className={'flex items-start justify-between text-typography' + (props.className ? ' ' + props.className : '')}>
        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3 pr-4 bg-card2 rounded-[20px]'>
                <Avatar src={props.imgUrl || undefined} name={props.postInfo} alt='' className='size-9' />
                <p className={'font-artifakt font-bold text-sign-2 tracking-[-0.01em]' + (props.isUser ? '' : ' text-typographySecondary')}>{props.postInfo}</p>
            </div>
            <p className='font-artifakt text-sign-3 tracking-[-0.01em] text-typographySecondary'>{props.postDate}</p>
        </div>
        <button type="button" aria-label={t('shop.about.more')} className='hover:text-primaryHover' onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <MoreHorizontalIcon className='size-6' />
        </button>
    </div>
    );
};

export default PostHeader;
