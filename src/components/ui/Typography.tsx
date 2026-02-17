import { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassName, cn } from '@/utils/tailwind';

const typographyVariants = cva(undefined, {
  variants: {
    variant: {
      body1: 'text-16px font-sans leading-[1.2] font-[400] tracking-[-.02em] normal-case',
      body2: 'text-14px font-sans leading-[1.2] font-[400] tracking-normal normal-case',
    },
  },
});

export type TypographyProps = {
  as?: React.ElementType;
  className?: ClassName;
  children: React.ReactNode;
  title?: string;
  onClick?(): void;
  href?: string;
  target?: '_blank';
  type?: 'button';
} & VariantProps<typeof typographyVariants>;

const Typography: FC<TypographyProps> = ({ as: Component = 'div', variant = 'body1', className, ...props }) => {
  return <Component className={cn(typographyVariants({ variant }), className)} {...props} />;
};

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
