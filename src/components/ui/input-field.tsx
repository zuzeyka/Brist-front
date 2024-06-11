import { cn } from '@/shared/lib/utils';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const InputField = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                'flex h-10 w-full rounded-md border !text-typography !border-secondary !bg-card1 px-3 py-2 !text-sign-2 ring-offset-background file:border-0 file:bg-card1 file:text-sm file:font-medium placeholder:text-typographySecondary focus-visible:outline-none focus-visible:ring-ring',
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
InputField.displayName = 'InputField';

export { InputField };
