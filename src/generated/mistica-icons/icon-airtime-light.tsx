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

const IconAirtimeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.188 3.788C16.676 2.732 15.616 2 14.388 2H8.13C6.403 2 5 3.44 5 5.214v13.572C5 20.56 6.403 22 8.13 22h6.262c1.727 0 3.13-1.44 3.13-3.214V13.07a.35.35 0 0 0-.347-.357.353.353 0 0 0-.348.357v5.716c0 1.38-1.09 2.5-2.435 2.5H8.13c-1.345 0-2.436-1.12-2.436-2.5v-.353h7.307c.192 0 .348-.16.348-.356a.353.353 0 0 0-.348-.357H5.695V6.284h7.904a4 4 0 0 0-.272 1.44q.001.819.316 1.57l-.73 2.797 2.726-.754c.485.215.997.325 1.527.325 2.11 0 3.83-1.76 3.834-3.928V7.71c0-2.154-1.701-3.91-3.812-3.923M5.695 5.219c0-1.38 1.09-2.501 2.436-2.501h6.26c.856 0 1.608.457 2.045 1.148a3.83 3.83 0 0 0-2.476 1.71H5.695zm11.47 5.73a3.1 3.1 0 0 1-1.348-.312l-.116-.054-1.804.498.481-1.852-.053-.119c-.2-.434-.303-.9-.303-1.385 0-1.779 1.412-3.224 3.153-3.224 1.719 0 3.121 1.431 3.13 3.196v.05c-.013 1.77-1.416 3.201-3.14 3.201"
            />
            <path
                fill={fillColor}
                d="M17.175 5.576a.35.35 0 0 0-.348.356V7.36h-1.042a.35.35 0 0 0-.347.356c0 .197.156.357.347.357h1.39c.191 0 .347-.16.347-.356V5.927a.35.35 0 0 0-.347-.352"
            />
        </svg>
    );
};

export default IconAirtimeLight;