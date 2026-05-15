import * as React from "react"
import { cn } from "@/lib/utils"

// 1. Remove 'type' from the destructuring as it's not valid for textarea
// 2. Use React.ComponentProps<"textarea"> for the cleanest typing
export interface TextareaProps extends React.ComponentProps<"textarea"> {}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                data-slot="input"
                rows={4}
                className={cn(
                    "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex min-h-[80px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    className
                )}
                {...props}
            />
        )
    }
)

TextAreaInput.displayName = "TextAreaInput"

export { TextAreaInput }
