import { type ClassValue, clsx } from 'clsx';
import { HTMLProps } from 'react';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-14px', 'text-16px'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// The ClassName type provides type safety for className props in React components
// and enables IDE autocompletion for Tailwind CSS classes
export type ClassName = HTMLProps<HTMLElement>['className'];
