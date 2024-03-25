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

const IconLightningFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.131 11.45a.6.6 0 0 0-.434-.428l-4.504-1.11 2.723-6.904a.625.625 0 0 0-.23-.745.58.58 0 0 0-.754.092l-8.916 9.569a.63.63 0 0 0-.142.597.6.6 0 0 0 .43.422l4.113 1.017-2.697 7.05a.62.62 0 0 0 .23.737.58.58 0 0 0 .747-.08l9.286-9.617a.63.63 0 0 0 .148-.6"
            />
        </svg>
    );
};

export default IconLightningFilled;