import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type PageBulletsProps = {
    currentIndex: number;
    numPages: number | ByBreakpoint<number>;
    onPress?: (index: number) => void;
};
export declare const PageBullets: ({ currentIndex, numPages, onPress }: PageBulletsProps) => JSX.Element;
type GoToPage = (pageIndex: number, animate?: boolean) => void;
type CarouselControls = {
    goPrev: () => void;
    goNext: () => void;
    goToPage: GoToPage;
    bulletsProps: PageBulletsProps;
};
export declare const CarouselContextProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useCarouselContext: () => CarouselControls;
export declare const CarouselContextConsumer: React.Consumer<CarouselControls>;
type DesktopItemsPerPage = {
    small?: number;
    medium?: number;
    large?: number;
} | number;
type ItemsPerPageProp = {
    mobile?: number;
    tablet?: number;
    desktop?: DesktopItemsPerPage;
} | number;
type CarouselProps = {
    items: ReadonlyArray<React.ReactNode>;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
    withBullets?: boolean;
    renderBullets?: (bulletsProps: PageBulletsProps) => React.ReactNode;
    initialActiveItem?: number;
    itemsPerPage?: ItemsPerPageProp;
    /** scrolls one page by default */
    itemsToScroll?: number;
    mobilePageOffset?: 'regular' | 'large';
    /** If true, scroll snap doesn't apply and the user has a free scroll */
    free?: boolean;
    autoplay?: boolean | {
        time: number;
        loop?: boolean;
    };
    onPageChange?: (newPageInfo: {
        pageIndex: number;
        shownItemIndexes: Array<number>;
    }) => void;
    dataAttributes?: DataAttributes;
    children?: void;
};
export declare const Carousel: (props: CarouselProps) => JSX.Element;
type CenteredCarouselProps = {
    items: ReadonlyArray<React.ReactNode>;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
    withBullets?: boolean;
    renderBullets?: (bulletsProps: PageBulletsProps) => React.ReactNode;
    initialActiveItem?: number;
    onPageChange?: (newPageInfo: {
        pageIndex: number;
        shownItemIndexes: Array<number>;
    }) => void;
    dataAttributes?: DataAttributes;
    children?: void;
};
export declare const CenteredCarousel: ({ items, itemStyle, itemClassName, withBullets, renderBullets, initialActiveItem, onPageChange, dataAttributes, }: CenteredCarouselProps) => JSX.Element;
type SlideshowProps = {
    items: ReadonlyArray<React.ReactNode>;
    withBullets?: boolean;
    autoplay?: boolean | {
        time: number;
        loop?: boolean;
    };
    initialPageIndex?: number;
    onPageChange?: (newPageIndex: number) => void;
    dataAttributes?: DataAttributes;
    inverseBullets?: boolean;
    children?: void;
};
export declare const useIsInsideSlideshowContext: () => boolean;
export declare const IsInsideSlideshowProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const Slideshow: ({ items, withBullets, autoplay, initialPageIndex, onPageChange, dataAttributes, inverseBullets, }: SlideshowProps) => JSX.Element;
export {};
