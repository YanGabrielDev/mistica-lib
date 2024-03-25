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

const IconReadingQrLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.945 4.01c0-.22.179-.4.4-.4h2.66a.4.4 0 0 1 .4.4v2.65a.4.4 0 1 1-.8 0V4.41h-2.26a.4.4 0 0 1-.4-.4m-12.94-.39a.4.4 0 0 0-.4.4v2.66a.4.4 0 0 0 .8 0V4.42h2.25a.4.4 0 0 0 0-.8zm-1.48 7.98a.4.4 0 0 0 0 .8h11.76v2.28a.4.4 0 0 0 .8 0V12.4h6.39a.4.4 0 0 0 0-.8zm1.48 5.33a.4.4 0 0 0-.4.4v2.65c0 .22.18.4.4.4h2.66a.4.4 0 0 0 0-.8h-2.26v-2.25a.4.4 0 0 0-.4-.4m16.4.4a.4.4 0 1 0-.8 0v2.26h-2.26a.4.4 0 0 0 0 .8h2.66a.4.4 0 0 0 .4-.4zM7.065 7.22a.14.14 0 0 1 .14-.14h1.59a.14.14 0 0 1 .14.14v1.59a.14.14 0 0 1-.14.14h-1.59a.14.14 0 0 1-.14-.14zm.14-.94a.94.94 0 0 0-.94.94v1.59c0 .52.42.94.94.94h1.59c.52 0 .94-.42.94-.94V7.22a.94.94 0 0 0-.94-.94zm8.01.8a.14.14 0 0 0-.14.14v1.59c0 .077.063.14.14.14h1.59a.14.14 0 0 0 .14-.14V7.22a.14.14 0 0 0-.14-.14zm-.94.14c0-.52.42-.94.94-.94h1.59c.52 0 .94.42.94.94v1.59c0 .52-.42.94-.94.94h-1.59a.94.94 0 0 1-.94-.94zm-7.2 7.98a.14.14 0 0 1 .14-.14h1.59a.14.14 0 0 1 .14.14v1.59a.14.14 0 0 1-.14.14h-1.59a.14.14 0 0 1-.14-.14zm.14-.94a.94.94 0 0 0-.94.94v1.59c0 .52.42.94.94.94h1.59c.52 0 .94-.42.94-.94V15.2a.94.94 0 0 0-.94-.94zm4.39 3.08c0-.22.18-.4.4-.4h2.67a.4.4 0 0 1 0 .8h-2.67a.4.4 0 0 1-.4-.4m.81-10.66a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0m-.41 3.06a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8m.4 4.92a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0m4.94.42a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8m.4 2.26a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0"
            />
        </svg>
    );
};

export default IconReadingQrLight;