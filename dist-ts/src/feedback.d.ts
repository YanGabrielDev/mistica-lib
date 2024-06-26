import * as React from 'react';
import type { DataAttributes, IconProps } from './utils/types';
import type { ButtonGroupProps } from './button-group';
type HapticFeedback = 'error' | 'success';
type FeedbackButtonsProps = ButtonGroupProps;
interface FeedbackProps extends FeedbackButtonsProps {
    title: string;
    description?: string | Array<string>;
    /**
     * @deprecated This field is deprecated, please use extra instead.
     */
    children?: React.ReactNode;
    extra?: React.ReactNode;
    unstable_inlineInDesktop?: boolean;
    dataAttributes?: DataAttributes;
}
interface AssetFeedbackProps extends FeedbackProps {
    imageUrl?: string;
    imageFit?: 'fit' | 'fill';
}
interface FeedbackScreenProps extends AssetFeedbackProps {
    hapticFeedback?: HapticFeedback;
    icon?: React.ReactNode;
    animateText?: boolean;
    isInverse?: boolean;
}
export declare const FeedbackScreen: React.FC<FeedbackScreenProps>;
export declare const SuccessFeedbackScreen: React.FC<AssetFeedbackProps>;
interface ErrorFeedbackScreenProps extends Omit<FeedbackProps, 'extra'> {
    errorReference?: string;
}
export declare const ErrorFeedbackScreen: React.FC<ErrorFeedbackScreenProps>;
interface InfoFeedbackScreenProps extends FeedbackProps {
    Icon?: React.FC<IconProps>;
}
export declare const InfoFeedbackScreen: React.FC<InfoFeedbackScreenProps>;
export declare const SuccessFeedback: React.FC<AssetFeedbackProps>;
export {};
