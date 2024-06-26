import * as React from 'react';
import type { DataAttributes } from './utils/types';
declare const CLOSE_ACTIONS: readonly ["DISMISS", "TIMEOUT", "CONSECUTIVE", "BUTTON"];
type SnackbarType = 'INFORMATIVE' | 'CRITICAL';
type CloseAction = (typeof CLOSE_ACTIONS)[number];
export type SnackbarCloseHandler = (result: {
    action: CloseAction;
}) => unknown;
export type Props = {
    buttonText?: string;
    duration?: number;
    message: string;
    onClose?: SnackbarCloseHandler;
    type?: SnackbarType;
    children?: void;
    dataAttributes?: DataAttributes;
    withDismiss?: boolean;
};
export type ImperativeHandle = {
    close: SnackbarCloseHandler;
};
declare const Snackbar: React.ForwardRefExoticComponent<Props & React.RefAttributes<ImperativeHandle & HTMLDivElement>>;
export default Snackbar;
