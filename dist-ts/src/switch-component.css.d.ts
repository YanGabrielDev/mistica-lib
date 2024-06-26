export declare const vars: {
    top: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    left: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    transformOrigin: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    minWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    maxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export declare const checkboxVariants: Record<"default" | "disabled" | "ios" | "disabledIos", string>;
export declare const switchCheckboxContainerVariants: Record<"default" | "ios", string>;
export declare const switchCheckboxLabel: string;
export declare const barVariants: Record<"default" | "ios" | "iosDark" | "checked" | "checkedIos", string>;
export declare const container: string;
export declare const containerDisabled: string;
export declare const disabled: string;
export declare const ballVariants: Record<"default" | "ios" | "checked" | "checkedIos", string>;
