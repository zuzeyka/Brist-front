import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';

interface AvatarProps {
    alt: string;
    src?: string;
    className?: string;
    online?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div className={'relative' + (props.className ? ' ' + props.className : '')}>
            {props.src ? (
                <AvatarImage alt={props.alt} src={props.src} className={props.className ? props.className : ''} />
            ) : (
                <AvatarFallback className={props.className ? props.className : ''} />
            )}
            {props.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500"></div>
            )}
        </div>
    );
};

export default Avatar;
