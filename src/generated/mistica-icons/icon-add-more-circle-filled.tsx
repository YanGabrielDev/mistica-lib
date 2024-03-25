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

const IconAddMoreCircleFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12C2 6.484 6.484 2 12 2s10 4.484 10 10-4.484 10-10 10S2 17.516 2 12m16.604.005a.534.534 0 0 0-.537-.538l-5.521-.011V5.924a.534.534 0 0 0-.538-.538.534.534 0 0 0-.537.538v5.532H5.938a.534.534 0 0 0-.537.537.534.534 0 0 0 .537.538l5.521.011v5.532a.534.534 0 0 0 .914.377.54.54 0 0 0 .161-.377v-5.532h5.533c.147 0 .28-.065.376-.161a.54.54 0 0 0 .161-.376"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.617 1c.287 0 .588.006.845.013 2.154.05 10.541.901 10.538 11.018 0 10.136-8.397 10.925-10.497 10.963-.195.003-.42.006-.649.006-.118 0-.24 0-.356-.003C9.288 22.966 1 22.167 1 11.966 1 1.776 9.209 1.019 11.42 1zm1.067 11.654h4.8a.69.69 0 0 0 .688-.685.69.69 0 0 0-.688-.689h-4.8V6.534a.689.689 0 0 0-1.378 0v4.743h-4.79a.689.689 0 1 0 0 1.377h4.79v4.812a.689.689 0 0 0 1.378 0z"
                />
            </svg>
        );
    }
};

export default IconAddMoreCircleFilled;
