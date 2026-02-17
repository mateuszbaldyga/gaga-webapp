import { type ClassValue, clsx } from 'clsx';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// The ClassName type provides type safety for className props in React components
// and enables IDE autocompletion for Tailwind CSS classes
export type ClassName = HTMLProps<HTMLElement>['className'];
