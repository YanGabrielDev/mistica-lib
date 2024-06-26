import * as React from 'react';
import type { Theme } from './theme';
import type { ScreenSizeContextType } from './screen-size-context';
export declare const useTheme: () => Theme;
export declare const useDisableBodyScroll: (disable: boolean) => void;
export declare const useScreenSize: () => ScreenSizeContextType;
export declare const useElementDimensions: () => {
    width: number;
    height: number;
    ref: (node: HTMLElement | null) => void;
};
export declare const useAriaId: (id?: string) => string;
export declare const useWindowSize: () => {
    height: number;
    width: number;
    screenHeight: number;
    screenWidth: number;
};
export declare const useWindowHeight: () => number;
export declare const useWindowWidth: () => number;
export declare const useScreenHeight: () => number;
export declare const useIsWithinIFrame: () => boolean;
export declare const useIsomorphicLayoutEffect: typeof React.useLayoutEffect;
type IntersectionObserverOptions = {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | Array<number>;
};
export declare const useIsInViewport: (ref: React.RefObject<Element>, defaultValue: boolean, options?: IntersectionObserverOptions) => boolean;
export type BoundingRect = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    x: number;
    y: number;
};
export declare const useBoundingRect: (ref: React.RefObject<Element>, computeOnEveryFrame?: boolean, trackIfNotVisible?: boolean) => BoundingRect | undefined;
export {};
