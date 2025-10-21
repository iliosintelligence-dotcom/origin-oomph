import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-['Poppins'] ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90 hover:shadow-lg hover:scale-105 active:scale-95",
        primary: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-95",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:scale-[1.02] active:scale-95",
        ghost: "hover:bg-accent/10 hover:text-accent transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-secondary via-secondary to-accent text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500",
        hero: "bg-gradient-to-r from-accent via-warning to-accent text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 font-bold bg-[length:200%_100%] animate-gradient",
      },
      size: {
        default: "h-11 px-6 py-2 min-h-[44px]",
        sm: "h-9 rounded-md px-4 text-xs min-h-[36px]",
        lg: "h-14 rounded-lg px-8 text-base min-h-[56px]",
        icon: "h-11 w-11 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
