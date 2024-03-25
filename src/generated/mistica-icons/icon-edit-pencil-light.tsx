'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEditPencilLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.102 4.479c-1.38-1.472-3.617-1.472-4.996 0L5.12 14.04l-.004.004c-.38.413-.624.928-.694 1.483v.002l-.537 4.018v.002a.97.97 0 0 0 .242.805.9.9 0 0 0 .798.259h.002l3.775-.579h.003a2.33 2.33 0 0 0 1.414-.764L19.1 9.713c1.366-1.447 1.364-3.78 0-5.234m-4.376.58c1.043-1.112 2.712-1.112 3.755 0 1.059 1.13 1.057 2.953.002 4.07l-.001.001-.286.304-3.988-3.824zm-1.1 1.17 3.988 3.824-8.119 8.64-.007.008a1.48 1.48 0 0 1-.905.493l-3.783.58a.1.1 0 0 1-.051-.002l-.008-.004s-.006-.006-.01-.022a.2.2 0 0 1-.003-.088l.536-4.019v-.003c.048-.374.213-.727.477-1.015z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.891 19.42c-.387 0-.753-.165-1.022-.45a1.61 1.61 0 0 1-.345-1.553l1.524-4.837c.09-.26.24-.493.445-.672 4.19-3.958 8.692-8.264 9.003-8.589a3.35 3.35 0 0 1 2.434-1.168 3.52 3.52 0 0 1 2.566 1.157 4.13 4.13 0 0 1 1.112 2.731A3.85 3.85 0 0 1 19.496 8.7c-.555.625-9.025 8.645-9.112 8.726-.143.14-.314.244-.501.3l-4.535 1.607c-.149.065-.303.09-.457.087m15.157 1.263c.308 0 .555.258.555.58 0 .32-.25.58-.555.58H3.936a.565.565 0 0 1-.555-.58c0-.319.25-.58.555-.58zM4.67 18.16c.081.09.207.126.322.092L9.527 16.7a.3.3 0 0 0 .112-.07c1.4-1.33 8.591-8.17 9.067-8.68a2.72 2.72 0 0 0 .756-1.91 2.92 2.92 0 0 0-.745-1.934 2.44 2.44 0 0 0-1.767-.787 2.36 2.36 0 0 0-1.712.787c-.355.39-5.062 4.865-7.868 7.534l-1.168 1.11a.35.35 0 0 0-.1.152L4.58 17.767a.39.39 0 0 0 .09.393"
                />
            </svg>
        );
    }
};

export default IconEditPencilLight;