import { vars } from './skins/skin-contract.css';
type ColorKeys = keyof typeof vars.colors;
type ColorValues = (typeof vars.colors)[ColorKeys];
export declare const sprinkles: ((props: {
    readonly isolation?: "isolate" | undefined;
    readonly position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    readonly display?: "none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
    readonly flexDirection?: "column" | "row" | undefined;
    readonly justifyContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    readonly alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
    readonly flexShrink?: 0 | 1 | undefined;
    readonly flexGrow?: 0 | 1 | undefined;
    readonly flex?: 1 | undefined;
    readonly width?: 0 | "auto" | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "100%" | undefined;
    readonly height?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "100%" | undefined;
    readonly minWidth?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "100%" | undefined;
    readonly minHeight?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    readonly maxWidth?: "100%" | undefined;
    readonly maxHeight?: "100%" | undefined;
    readonly border?: "regular" | "none" | undefined;
    readonly borderRadius?: (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | 2 | 4 | 8 | 16 | 20 | "50%" | undefined;
    readonly cursor?: "pointer" | undefined;
    readonly overflow?: "auto" | "hidden" | "visible" | undefined;
    readonly overflowY?: "auto" | "hidden" | "visible" | undefined;
    readonly top?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    readonly left?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    readonly right?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    readonly bottom?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    readonly objectFit?: "cover" | undefined;
} & {
    paddingTop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    paddingBottom?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    paddingLeft?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    paddingRight?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    columnGap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    rowGap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    gridColumnGap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    gridRowGap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    padding?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    paddingX?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
    paddingY?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | {
        mobile?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        tablet?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
        desktop?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | undefined;
    } | undefined;
} & {
    color?: ColorValues | "transparent" | "inherit" | undefined;
    background?: `var(--${string})` | "transparent" | "inherit" | undefined;
}) => string) & {
    properties: Set<"background" | "border" | "alignItems" | "bottom" | "color" | "columnGap" | "cursor" | "display" | "flexDirection" | "flexGrow" | "flexShrink" | "height" | "isolation" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "objectFit" | "overflowY" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "top" | "width" | "borderRadius" | "flex" | "overflow" | "padding" | "gridColumnGap" | "gridRowGap" | "paddingX" | "paddingY">;
};
export type Sprinkles = Parameters<typeof sprinkles>[0];
export {};
