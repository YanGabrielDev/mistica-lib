import * as React from 'react';
import type { Props as TouchableProps } from './touchable';
type MainNavigationBarSection = {
    href: string;
    to?: undefined;
    onPress?: undefined;
    title: string;
} | {
    to: string;
    href?: undefined;
    onPress?: undefined;
    title: string;
} | {
    onPress: () => void;
    to?: undefined;
    href?: undefined;
    title: string;
};
type MainNavigationBarPropsBase = {
    sections: ReadonlyArray<MainNavigationBarSection>;
    selectedIndex?: number;
    right?: React.ReactElement;
    logo?: React.ReactElement;
    isInverse?: boolean;
    children?: undefined;
    topFixed?: boolean;
    withBorder?: boolean;
    burgerMenuExtra?: React.ReactNode;
    large?: boolean;
};
type MainNavigationBarProps = MainNavigationBarPropsBase;
export declare const MainNavigationBar: React.FC<MainNavigationBarProps>;
interface NavigationBarCommonProps {
    isInverse?: boolean;
    onBack?: () => void;
    title?: string;
    right?: React.ReactElement;
    withBorder?: boolean;
    children?: undefined;
}
interface NavigationBarTopFixedProps extends NavigationBarCommonProps {
    topFixed?: true;
    paddingX?: undefined;
}
interface NavigationBarNotFixedProps extends NavigationBarCommonProps {
    topFixed: false;
    paddingX?: number;
}
type NavigationBarProps = NavigationBarTopFixedProps | NavigationBarNotFixedProps;
export declare const NavigationBar: React.FC<NavigationBarProps>;
type FunnelNavigationBarProps = {
    isInverse?: boolean;
    logo?: React.ReactElement;
    right?: React.ReactElement;
    topFixed?: boolean;
    children?: undefined;
    withBorder?: boolean;
};
export declare const FunnelNavigationBar: React.FC<FunnelNavigationBarProps>;
type NavigationBarActionGroupProps = {
    children: React.ReactNode;
};
export declare const NavigationBarActionGroup: React.FC<NavigationBarActionGroupProps>;
type NavigationBarActionProps = TouchableProps;
export declare const NavigationBarAction: React.FC<NavigationBarActionProps>;
export {};
