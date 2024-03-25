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

const IconWaitClockRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.17 17.383a.747.747 0 0 1 .819.62.68.68 0 0 1-.61.799l-3.805.582-.533-3.89c-.069-.403.212-.763.605-.837a.747.747 0 0 1 .818.619l.217 1.562A8.86 8.86 0 0 0 20.14 12c0-4.727-3.742-8.549-8.361-8.549S3.423 7.273 3.423 12s3.738 8.549 8.353 8.508c1.243 0 2.454-.255 3.557-.8a.754.754 0 0 1 .962.36c.144.366 0 .804-.353.985A9.7 9.7 0 0 1 11.78 22C6.375 22 2 17.531 2 12S6.37 2 11.78 2s9.784 4.469 9.784 10c0 2-.606 3.928-1.672 5.564z"
            />
            <path
                fill={fillColor}
                d="M11.066 5.456c0-.401.32-.73.714-.73a.71.71 0 0 1 .706.726v6.253l2.634 2.694a.71.71 0 0 1 0 1.016.7.7 0 0 1-.497.222.7.7 0 0 1-.497-.222l-2.843-2.907a.73.73 0 0 1-.217-.508z"
            />
        </svg>
    );
};

export default IconWaitClockRegular;