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

const IconRewindRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12m1.43 0c0-4.726 3.844-8.57 8.57-8.57s8.57 3.844 8.57 8.57-3.844 8.57-8.57 8.57S3.43 16.726 3.43 12m13.716 5.146a.715.715 0 0 0 0-1.01L13.01 12l4.136-4.136a.715.715 0 0 0-1.01-1.01l-4.639 4.643a.714.714 0 0 0 0 1.01l4.644 4.644a.7.7 0 0 0 1.005-.005m-6.07-1.01a.714.714 0 0 1 0 1.01.72.72 0 0 1-.507.215.7.7 0 0 1-.502-.21l-4.644-4.644a.714.714 0 0 1 0-1.01l4.644-4.643a.714.714 0 0 1 1.01 1.01L6.94 12z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.727 15.158a.55.55 0 0 0 .286.079q.144.001.277-.073a.56.56 0 0 0 .283-.487v-2.594a.6.6 0 0 0 .134.112l4.99 2.969a.55.55 0 0 0 .285.078c.095 0 .19-.025.277-.072a.56.56 0 0 0 .283-.488V8.716a.558.558 0 0 0-.849-.48l-4.989 2.998a.6.6 0 0 0-.131.11V8.71a.558.558 0 0 0-.849-.479l-4.989 2.997a.56.56 0 0 0-.271.482c0 .196.106.378.274.48zm-.275-1.465-3.336-1.988 3.336-2.003zm2.63-1.983 3.34-2.005v3.991z"
                />
                <path
                    fill={fillColor}
                    d="M4.763 19.425c1.673 1.61 4.107 2.428 7.236 2.428s5.563-.815 7.238-2.426c1.736-1.672 2.616-4.17 2.616-7.423 0-3.255-.88-5.75-2.616-7.425-1.675-1.611-4.11-2.429-7.238-2.429-3.13 0-5.563.818-7.236 2.426C3.03 6.25 2.15 8.749 2.15 12.002s.88 5.75 2.613 7.422m-1.523-7.42c0-5.816 2.946-8.765 8.759-8.765 5.815 0 8.762 2.95 8.764 8.764 0 5.813-2.95 8.76-8.764 8.76s-8.76-2.947-8.76-8.76"
                />
            </svg>
        );
    }
};

export default IconRewindRegular;