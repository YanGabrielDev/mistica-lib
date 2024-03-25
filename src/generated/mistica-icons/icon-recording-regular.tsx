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

const IconRecordingRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12m1.43 0c0-4.726 3.844-8.57 8.57-8.57s8.57 3.844 8.57 8.57-3.844 8.57-8.57 8.57S3.43 16.725 3.43 12M12 17.357A5.364 5.364 0 0 1 6.644 12 5.364 5.364 0 0 1 12 6.644 5.364 5.364 0 0 1 17.357 12 5.364 5.364 0 0 1 12 17.357M8.074 12A3.934 3.934 0 0 0 12 15.926 3.934 3.934 0 0 0 15.926 12 3.93 3.93 0 0 0 12 8.074 3.93 3.93 0 0 0 8.074 12"
            />
        </svg>
    );
};

export default IconRecordingRegular;