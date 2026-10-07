import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommentIcon, HeartOutlineIcon, ShareIcon } from '@/components/ui/icons';
import { formatCount } from '../about/review-list';

interface PostFooterProps {
    postLikes: number;
    postComments: number;
    postDate?: string;
    isShared: boolean;
    // Forces the date to show even when isShared — the profile's review cards show both.
    showDate?: boolean;
    className?: string;
}

const chip = 'flex items-center gap-2 rounded-lg bg-cardLight12 px-2 py-1 font-artifakt font-semibold text-button-2';

// Likes, comments and share ("Post button" chips).
const PostFooter: React.FC<PostFooterProps> = (props) => {
    const { t } = useTranslation();
    const showDate = !props.isShared || props.showDate;
    return (
        <div className={'flex items-center gap-3' + (showDate ? ' justify-between' : '') + (props.className ? ' ' + props.className : '')}>
            <div className='flex items-center gap-3'>
                <span className={chip + ' text-typographySecondary'}><HeartOutlineIcon className='text-accent' />{formatCount(props.postLikes)}</span>
                <span className={chip + ' text-typographySecondary'}><CommentIcon className='text-typography' />{formatCount(props.postComments)}</span>
                {props.isShared && (
                    <button type="button" className={chip + ' text-typography hover:bg-cardLight25'} onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <ShareIcon />{t('shop.community.share')}
                    </button>
                )}
            </div>
            {showDate && <p className='font-artifakt text-sign-3 text-typographySecondary'>{props.postDate}</p>}
        </div>
    );
};

export default PostFooter;
