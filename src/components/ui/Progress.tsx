import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/shared/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    value: number;
    minValue?: number;
    maxValue?: number;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ className, value, minValue = 0, maxValue = 100, ...props }, ref) => {
    const range = maxValue - minValue;
    const adjustedValue = Math.max(minValue, Math.min(value, maxValue));
    const progressPercentage = ((adjustedValue - minValue) / range) * 100;

    return (
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-slate-900 transition-all dark:bg-slate-50"
                style={{ transform: `translateX(-${100 - progressPercentage}%)` }}
            />
        </ProgressPrimitive.Root>
    );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
