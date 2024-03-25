import * as React from 'react';
type OverscrollColorConfig = {
    topColor?: string;
    bottomColor?: string;
};
type ProviderProps = {
    children: React.ReactNode;
};
export declare const OverscrollColorProvider: ({ children }: ProviderProps) => JSX.Element;
/**
 * @deprecated use useSetOverscrollColor hook instead
 */
declare const OverscrollColor: () => JSX.Element;
export declare const useSetOverscrollColor: (config: OverscrollColorConfig) => void;
export default OverscrollColor;
