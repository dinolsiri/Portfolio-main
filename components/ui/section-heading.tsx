import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-4", className)}>
      
      {/* Eyebrow */}
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-blue-400">
          {eyebrow}
        </p>
      ) : null}

      {/* Title */}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {/* Description */}
      {description ? (
        <div
  className={clsx(
    "max-w-3xl text-sm leading-7 text-white sm:text-base relative z-10",
    descriptionClassName
  )}
>
  {description}
</div>
      ) : null}
    </div>
  );
}