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

const IconFastForwardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12m1.43 0c0-4.726 3.844-8.57 8.57-8.57s8.57 3.844 8.57 8.57-3.844 8.57-8.57 8.57S3.43 16.726 3.43 12m4.434 5.146 4.639-4.643a.714.714 0 0 0 0-1.01l-4.64-4.64a.714.714 0 0 0-1.01 1.01L10.99 12l-4.136 4.136a.714.714 0 0 0 1.01 1.01m10.713-4.643-4.644 4.643a.713.713 0 1 1-1.01-1.01L17.06 12l-4.136-4.136a.714.714 0 0 1 1.01-1.01l4.644 4.639a.714.714 0 0 1 0 1.01"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.001 2.155c-6.44 0-9.846 3.403-9.846 9.846 0 6.437 3.403 9.84 9.846 9.84 6.437 0 9.84-3.403 9.84-9.84 0-6.443-3.403-9.846-9.84-9.846m0 18.476c-5.731 0-8.636-2.904-8.636-8.63 0-5.731 2.905-8.636 8.636-8.636 5.728 0 8.63 2.905 8.63 8.636 0 5.726-2.904 8.63-8.63 8.63M7.659 9.805v3.79s3.168-1.885 3.171-1.885zm9.093 1.899L13.58 9.799v3.79zM6.446 8.734c0-.218.118-.42.308-.526a.61.61 0 0 1 .611.009l4.953 2.974q.02.013.031.03.01.015.024.027V8.729q.002-.166.087-.31a.605.605 0 0 1 .83-.208l4.952 2.98a.604.604 0 0 1-.003 1.037l-4.952 2.947a.606.606 0 0 1-.913-.521v-2.482a.2.2 0 0 0-.026.027.1.1 0 0 1-.033.032l-4.953 2.946a.61.61 0 0 1-.916-.52z"
                />
            </svg>
        );
    }
};

export default IconFastForwardRegular;