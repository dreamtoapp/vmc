import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow-elevation-2 transition-all duration-300 overflow-hidden relative",
  {
    variants: {
      variant: {
        default: "hover:shadow-elevation-3 hover:-translate-y-1",
        flat: "shadow-none border-none",
        elevated: "shadow-elevation-3 hover:shadow-elevation-4 hover:-translate-y-2",
        interactive: "cursor-pointer hover:shadow-elevation-4 hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]",
        glass: "bg-white/10 backdrop-blur-lg border-white/20 shadow-elevation-2 hover:bg-white/20",
        gradient: "bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-primary-100 hover:from-primary-100 hover:to-secondary-100",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  motionProps?: Omit<MotionProps, 'children'>
  animated?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, motionProps, animated = true, children, ...props }, ref) => {
    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      whileHover: variant === 'interactive' ? {
        scale: 1.02,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      } : {},
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.4
      },
      ...motionProps,
    }

    if (!animated) {
      return (
        <div
          ref={ref}
          className={cn(cardVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </div>
      )
    }

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        {...defaultMotionProps}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { animated?: boolean }
>(({ className, animated = true, children, ...props }, ref) => {
  const content = (
    <div ref={ref} className={cn("flex flex-col space-y-2", className)} {...props}>
      {children}
    </div>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      ref={ref}
      className={cn("flex flex-col space-y-2", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { animated?: boolean }
>(({ className, animated = true, children, ...props }, ref) => {
  const content = (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold leading-tight tracking-tight text-card-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className={cn(
        "text-xl font-semibold leading-tight tracking-tight text-card-foreground",
        className
      )}
      {...props}
    >
      {children}
    </motion.h3>
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { animated?: boolean }
>(({ className, animated = true, children, ...props }, ref) => {
  const content = (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    >
      {children}
    </motion.p>
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { animated?: boolean }
>(({ className, animated = true, children, ...props }, ref) => {
  const content = (
    <div ref={ref} className={cn("pt-0", className)} {...props}>
      {children}
    </div>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className={cn("pt-0", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { animated?: boolean }
>(({ className, animated = true, children, ...props }, ref) => {
  const content = (
    <div ref={ref} className={cn("flex items-center pt-4", className)} {...props}>
      {children}
    </div>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className={cn("flex items-center pt-4", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
})
CardFooter.displayName = "CardFooter"

// New specialized card components
const FeatureCard = React.forwardRef<
  HTMLDivElement,
  CardProps & {
    icon?: React.ReactNode
    title: string
    description: string
    badge?: string
  }
>(({ icon, title, description, badge, className, ...props }, ref) => (
  <Card
    ref={ref}
    variant="interactive"
    className={cn("group", className)}
    {...props}
  >
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors"
            >
              {icon}
            </motion.div>
          )}
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
        {badge && (
          <span className="px-2 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
))
FeatureCard.displayName = "FeatureCard"

const StatCard = React.forwardRef<
  HTMLDivElement,
  CardProps & {
    value: string | number
    label: string
    trend?: {
      value: number
      label: string
      positive?: boolean
    }
    icon?: React.ReactNode
  }
>(({ value, label, trend, icon, className, ...props }, ref) => (
  <Card
    ref={ref}
    variant="elevated"
    className={cn("text-center", className)}
    {...props}
  >
    <CardContent className="p-6">
      <div className="flex items-center justify-center space-x-2 mb-2">
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-primary-600"
          >
            {icon}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="text-3xl font-bold text-primary-600 mb-1"
      >
        {value}
      </motion.div>
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      {trend && (
        <div className={cn(
          "flex items-center justify-center gap-1 text-xs font-medium",
          trend.positive ? "text-success-600" : "text-error-600"
        )}>
          <span>{trend.positive ? "↗" : "↘"}</span>
          <span>{trend.value}% {trend.label}</span>
        </div>
      )}
    </CardContent>
  </Card>
))
StatCard.displayName = "StatCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  FeatureCard,
  StatCard,
  cardVariants
}