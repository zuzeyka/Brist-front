import AvatarFallback from './avatar-fallback';
import AvatarImage from './avatar-image';

interface AvatarProps {
    alt: string;
    src?: string;
    className?: string;
    online?: boolean;
    name?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div className={'relative' + (props.className ? ' ' + props.className : '')}>
            {props.src ? (
                <AvatarImage name={props.name} alt={props.alt} src={props.src} />
            ) : (
                <AvatarFallback name={props.name} />
            )}
            {props.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-accent border-2 border-background"></div>
            )}
        </div>
    );
};

export default Avatar;
