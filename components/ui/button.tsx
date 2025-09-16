import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, MotionProps } from "framer-motion"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 group overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-elevation-2 hover:shadow-elevation-3 hover:bg-primary/90 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        destructive:
          "bg-destructive text-destructive-foreground shadow-elevation-2 hover:shadow-elevation-3 hover:bg-destructive/90 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/30 active:scale-[0.98] transition-all duration-200",
        secondary:
          "bg-secondary text-secondary-foreground shadow-elevation-2 hover:shadow-elevation-3 hover:bg-secondary/80 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-[0.95] transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline active:scale-[0.98] transition-all duration-200",
        gradient: "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white shadow-elevation-3 hover:shadow-elevation-4 hover:from-primary-400 hover:via-secondary-400 hover:to-primary-500 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        success: "bg-success-500 text-white shadow-elevation-2 hover:shadow-elevation-3 hover:bg-success-600 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        warning: "bg-warning-500 text-white shadow-elevation-2 hover:shadow-elevation-3 hover:bg-warning-600 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        error: "bg-error-500 text-white shadow-elevation-2 hover:shadow-elevation-3 hover:bg-error-600 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
        "glass": "bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:border-white/30 active:scale-[0.98] shadow-elevation-2 hover:shadow-elevation-3",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 rounded-xl px-8 text-base",
        xl: "h-15 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
      loading: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
)

type MotionButtonProps = Omit<MotionProps, 'children'> & {
  children?: React.ReactNode
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  motionProps?: MotionButtonProps
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, loadingText, leftIcon, rightIcon, children, motionProps, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading

    const buttonContent = (
      <>
        {loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText && <span>{loadingText}</span>}
          </motion.div>
        )}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 relative z-10"
          >
            {leftIcon && (
              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {leftIcon}
              </motion.span>
            )}
            {children && <span>{children}</span>}
            {rightIcon && (
              <motion.span
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {rightIcon}
              </motion.span>
            )}
          </motion.div>
        )}
      </>
    )

    const defaultMotionProps: MotionButtonProps = {
      whileHover: {
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      },
      whileTap: {
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      },
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3
      },
      ...motionProps,
    }

    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, loading, className }))}>
          {children}
        </Slot>
      )
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={isDisabled}
        {...defaultMotionProps}
        {...(props as any)}
      >
        {buttonContent}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
