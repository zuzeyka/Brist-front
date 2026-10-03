// Icons from the Figma UI kit. They use currentColor so they follow the theme.

interface IconProps {
    className?: string;
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M14 18C13.7 18 13.5 17.9 13.3 17.7L8.3 12.7C7.9 12.3 7.9 11.7 8.3 11.3L13.3 6.3C13.7 5.9 14.3 5.9 14.7 6.3C15.1 6.7 15.1 7.3 14.7 7.7L10.4 12L14.7 16.3C15.1 16.7 15.1 17.3 14.7 17.7C14.5 17.9 14.3 18 14 18Z" fill="currentColor" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L13.6 12L9.3 7.7C8.9 7.3 8.9 6.7 9.3 6.3C9.7 5.9 10.3 5.9 10.7 6.3L15.7 11.3C16.1 11.7 16.1 12.3 15.7 12.7L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21.3 22.3C21 22.3 20.8 22.2 20.6 22L16.2 17.7C14.7 18.9 12.8 19.6 10.8 19.6C5.9 19.6 2 15.6 2 10.8C2 6 6 2 10.8 2C15.6 2 19.6 6 19.6 10.8C19.6 12.9 18.9 14.8 17.6 16.4L22 20.7C22.4 21.1 22.4 21.7 22 22.1C21.8 22.2 21.6 22.3 21.3 22.3ZM10.7 3.9C6.9 3.9 3.9 7 3.9 10.7C3.9 14.5 7 17.5 10.7 17.5C14.5 17.5 17.5 14.4 17.5 10.7C17.6 7 14.5 3.9 10.7 3.9Z" fill="currentColor" />
    </svg>
);
