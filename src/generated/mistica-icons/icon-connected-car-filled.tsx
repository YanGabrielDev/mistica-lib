'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconConnectedCarFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.921 15.507-.325-1.04a1.7 1.7 0 0 0-1.353-1.117l-7.89-2.002-3.63-3.642H2v4.284h2.142a.714.714 0 1 1 0 1.428H2v.714h4.641a.714.714 0 1 1 0 1.428H2v4.284h8.622a3.407 3.407 0 1 1 6.319 0h3.927l.985-3.145c.169-.375.193-.8.068-1.192"
            />
            <path
                fill={fillColor}
                d="M13.781 16.631a1.977 1.977 0 1 0 0 3.955 1.977 1.977 0 0 0 0-3.955m-1.07-6.64h-.069a.8.8 0 0 1-.385-.186.71.71 0 0 1-.229-.496 2.413 2.413 0 0 0-2.57-2.317.714.714 0 0 1-.072-1.428 3.87 3.87 0 0 1 2.785 1 3.83 3.83 0 0 1 1.253 2.684.71.71 0 0 1-.182.511.71.71 0 0 1-.493.228z"
            />
            <path
                fill={fillColor}
                d="M14.495 9.741a.71.71 0 0 1-.643-.404.7.7 0 0 1-.07-.27A4.235 4.235 0 0 0 9.178 4.85a.714.714 0 0 1-.57-1.192.71.71 0 0 1 .488-.229 5.63 5.63 0 0 1 4.26 1.453 5.67 5.67 0 0 1 1.852 4.13.714.714 0 0 1-.678.715z"
            />
        </svg>
    );
};

export default IconConnectedCarFilled;