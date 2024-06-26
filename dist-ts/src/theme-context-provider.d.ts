import * as React from 'react';
import type { ThemeConfig } from './theme';
export declare const useIsOsDarkModeEnabled: () => boolean;
type Props = {
    theme: ThemeConfig;
    as?: string;
    children?: React.ReactNode;
};
declare const ThemeContextProvider: React.FC<Props>;
export default ThemeContextProvider;
