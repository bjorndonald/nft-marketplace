import type { ElementType } from 'react';
import { createTwc, type TwcComponentProps } from 'react-twc';
import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {},
});

const cx = (...args: ClassNameValue[]) => twMerge(...args);
export const tw = createTwc({ compose: cx });
export default cx;

export type TWComponentProps<T extends ElementType> = Omit<
  TwcComponentProps<T>,
  'className'
> & {
  className?: string;
};
