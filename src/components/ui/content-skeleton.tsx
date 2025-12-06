import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContentSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className }: ContentSkeletonProps) {
  return (
    <div className={cn("rounded-lg bg-muted overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        animate={{
          background: [
            "linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted-foreground)/0.1) 50%, hsl(var(--muted)) 100%)",
          ],
          backgroundPosition: ["-200% 0", "200% 0"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 100%" }}
      >
        <div className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-lg bg-muted-foreground/10" />
          <div className="h-6 w-3/4 rounded bg-muted-foreground/10" />
          <div className="h-4 w-full rounded bg-muted-foreground/10" />
          <div className="h-4 w-2/3 rounded bg-muted-foreground/10" />
        </div>
      </motion.div>
    </div>
  );
}

export function ImageSkeleton({ className }: ContentSkeletonProps) {
  return (
    <div className={cn("rounded-lg bg-muted overflow-hidden aspect-video", className)}>
      <motion.div
        className="h-full w-full flex items-center justify-center"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-12 h-12 text-muted-foreground/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function TextSkeleton({ className, lines = 3 }: ContentSkeletonProps & { lines?: number }) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "h-4 rounded bg-muted",
            i === lines - 1 ? "w-2/3" : "w-full"
          )}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export function StatSkeleton({ className }: ContentSkeletonProps) {
  return (
    <div className={cn("bg-secondary rounded-2xl p-8", className)}>
      <motion.div
        className="space-y-4"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-primary/20" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
        </div>
        <div className="h-12 w-32 rounded bg-secondary-foreground/10" />
        <div className="h-5 w-48 rounded bg-secondary-foreground/10" />
        <div className="h-4 w-36 rounded bg-secondary-foreground/5" />
      </motion.div>
    </div>
  );
}

export function TestimonialSkeleton({ className }: ContentSkeletonProps) {
  return (
    <div className={cn("bg-background rounded-lg p-8 border border-border", className)}>
      <motion.div
        className="space-y-6"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-3/4 rounded bg-muted" />
        </div>
        <div className="pt-4 border-t border-border space-y-2">
          <div className="h-5 w-24 rounded bg-muted" />
          <div className="h-4 w-32 rounded bg-muted/60" />
        </div>
      </motion.div>
    </div>
  );
}
