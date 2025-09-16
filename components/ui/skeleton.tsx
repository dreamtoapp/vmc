import * as React from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-200 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-muted",
        pulse: "animate-pulse bg-muted",
        shimmer: "animate-shimmer bg-shimmer bg-200",
        wave: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
      },
      size: {
        sm: "h-4",
        default: "h-6",
        lg: "h-8",
        xl: "h-10",
      },
    },
    defaultVariants: {
      variant: "shimmer",
      size: "default",
    },
  }
)

export interface SkeletonProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  >,
  VariantProps<typeof skeletonVariants> {
  animated?: boolean
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, animated = true, ...props }, ref) => {
    if (!animated) {
      return (
        <div
          ref={ref}
          className={cn(skeletonVariants({ variant, size }), "animate-none bg-muted", className)}
          {...props}
        />
      )
    }

    return (
      <motion.div
        ref={ref as any}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(skeletonVariants({ variant, size }), className)}
        {...(props as any)}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

// Specialized skeleton components
const SkeletonCard = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & { animated?: boolean }
>(({ className, animated = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={animated ? { opacity: 0, scale: 0.95 } : false}
    animate={animated ? { opacity: 1, scale: 1 } : false}
    className={cn("rounded-xl border border-muted bg-card p-6 shadow-elevation-2", className)}
    {...props}
  >
    <div className="flex items-start space-x-4">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </div>
    </div>
  </motion.div>
))
SkeletonCard.displayName = "SkeletonCard"

const SkeletonText = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    lines?: number
    animated?: boolean
  }
>(({ className, lines = 3, animated = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={animated ? { opacity: 0 } : false}
    animate={animated ? { opacity: 1 } : false}
    className={cn("space-y-2", className)}
    {...props}
  >
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className={cn(
          "h-4",
          i === lines - 1 ? "w-3/4" : "w-full"
        )}
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </motion.div>
))
SkeletonText.displayName = "SkeletonText"

const SkeletonButton = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    size?: "sm" | "default" | "lg" | "xl"
    animated?: boolean
  }
>(({ className, size = "default", animated = true, ...props }, ref) => {
  const sizeClasses = {
    sm: "h-9 w-20",
    default: "h-11 w-24",
    lg: "h-13 w-28",
    xl: "h-15 w-32",
  }

  return (
    <motion.div
      ref={ref}
      initial={animated ? { opacity: 0, scale: 0.95 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : false}
      className={cn(
        "rounded-lg",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <Skeleton className="h-full w-full" />
    </motion.div>
  )
})
SkeletonButton.displayName = "SkeletonButton"

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    size?: "sm" | "default" | "lg" | "xl"
    animated?: boolean
  }
>(({ className, size = "default", animated = true, ...props }, ref) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  }

  return (
    <motion.div
      ref={ref}
      initial={animated ? { opacity: 0, scale: 0.8 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : false}
      className={cn("rounded-full", sizeClasses[size], className)}
      {...props}
    >
      <Skeleton className="h-full w-full rounded-full" />
    </motion.div>
  )
})
SkeletonAvatar.displayName = "SkeletonAvatar"

const SkeletonTable = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    rows?: number
    columns?: number
    animated?: boolean
  }
>(({ className, rows = 5, columns = 4, animated = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={animated ? { opacity: 0 } : false}
    animate={animated ? { opacity: 1 } : false}
    className={cn("space-y-3", className)}
    {...props}
  >
    {/* Header */}
    <div className="flex space-x-4">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton
          key={`header-${i}`}
          className="h-6 flex-1"
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={`row-${rowIndex}`} className="flex space-x-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton
            key={`cell-${rowIndex}-${colIndex}`}
            className={cn(
              "h-4 flex-1",
              colIndex === 0 ? "w-1/4" : colIndex === columns - 1 ? "w-1/6" : ""
            )}
            style={{ animationDelay: `${(rowIndex * columns + colIndex) * 0.02}s` }}
          />
        ))}
      </div>
    ))}
  </motion.div>
))
SkeletonTable.displayName = "SkeletonTable"

const SkeletonForm = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    fields?: number
    animated?: boolean
  }
>(({ className, fields = 4, animated = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={animated ? { opacity: 0 } : false}
    animate={animated ? { opacity: 1 } : false}
    className={cn("space-y-6", className)}
    {...props}
  >
    {Array.from({ length: fields }).map((_, i) => (
      <motion.div
        key={i}
        initial={animated ? { opacity: 0, y: 20 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ delay: i * 0.1 }}
        className="space-y-2"
      >
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-11 w-full rounded-lg" />
      </motion.div>
    ))}
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.95 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : false}
      transition={{ delay: fields * 0.1 + 0.2 }}
    >
      <SkeletonButton size="lg" className="w-full" animated={false} />
    </motion.div>
  </motion.div>
))
SkeletonForm.displayName = "SkeletonForm"

const SkeletonChart = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    type?: "bar" | "line" | "pie" | "area"
    animated?: boolean
  }
>(({ className, type = "bar", animated = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={animated ? { opacity: 0 } : false}
    animate={animated ? { opacity: 1 } : false}
    className={cn("p-6 border rounded-xl bg-card", className)}
    {...props}
  >
    <div className="space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Chart Area */}
      <div className="h-64 flex items-end justify-between space-x-2">
        {type === "bar" &&
          Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              initial={animated ? { scaleY: 0 } : false}
              animate={animated ? { scaleY: 1 } : false}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 origin-bottom"
            >
              <Skeleton
                className="w-full"
                style={{
                  height: `${Math.random() * 100 + 50}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            </motion.div>
          ))
        }

        {type === "line" && (
          <div className="w-full h-full relative">
            <Skeleton className="absolute inset-0 rounded-lg" />
            <div className="absolute inset-4 flex items-center justify-between">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {type === "pie" && (
          <div className="w-full h-full flex items-center justify-center">
            <Skeleton className="h-48 w-48 rounded-full" />
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
))
SkeletonChart.displayName = "SkeletonChart"

// Loading spinner component
const LoadingSpinner = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > & {
    size?: "sm" | "default" | "lg" | "xl"
    variant?: "default" | "dots" | "bars" | "pulse"
  }
>(({ className, size = "default", variant = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  if (variant === "dots") {
    return (
      <div ref={ref} className={cn("flex space-x-1", className)} {...props}>
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn("rounded-full bg-primary", sizeClasses[size])}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "bars") {
    return (
      <div ref={ref} className={cn("flex items-end space-x-1", className)} {...props}>
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary rounded-full"
            animate={{
              height: ["12px", "24px", "12px"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "pulse") {
    return (
      <motion.div
        ref={ref}
        className={cn("rounded-full bg-primary", sizeClasses[size], className)}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        {...props}
      />
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "border-2 border-muted border-t-primary rounded-full",
        sizeClasses[size],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      {...props}
    />
  )
})
LoadingSpinner.displayName = "LoadingSpinner"

export {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonButton,
  SkeletonAvatar,
  SkeletonTable,
  SkeletonForm,
  SkeletonChart,
  LoadingSpinner,
  skeletonVariants
}