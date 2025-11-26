import React from "react";
import { cn } from "../../lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-surface/30 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
