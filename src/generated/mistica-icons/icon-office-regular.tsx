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

const IconOfficeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.796 2H20.2c.494 0 .885.398.89.887V22H10.007v-6.667H7.343v6.661H2.91V2.887c0-.489.397-.887.886-.887m7.98 11.553v6.666h7.54V3.776H4.68V20.22h.886v-6.667z"
            />
            <path
                fill={fillColor}
                d="M18.43 17.552h-5.768v-3.999h5.768zm-1.334-2.662H13.99v1.33h3.105zM11.334 9.332H5.567V5.333h5.767zM10 6.664H6.895v1.331H10zM18.43 9.332h-5.768V5.333h5.768zm-1.334-2.668H13.99v1.331h3.105z"
            />
        </svg>
    );
};

export default IconOfficeRegular;
