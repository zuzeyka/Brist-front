import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';

interface AvatarProps {
    alt: string;
    src?: string;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div className={'relative' + (props.className ? ' ' + props.className : '')}>{props.src ? <AvatarImage alt={props.alt} src={props.src} className={props.className ? props.className : ''} /> : <AvatarFallback className={props.className ? props.className : ''} />}</div>
    );
};

export default Avatar;
