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

const IconFireFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.14 11.307a9.4 9.4 0 0 0-1.424-1.238c-4.11-2.989-2.347-7.16-2.272-7.336a.42.42 0 0 0-.058-.432.41.41 0 0 0-.412-.137c-1.843.437-3.737 1.395-5.33 2.698-5.27 4.308-5.28 11.05-2.967 13.991 1.04 1.322 2.524 2.255 4.157 2.726a4 4 0 0 1-.756-.58 3.393 3.393 0 0 1-.163-4.647q.313-.358.7-.653c1.586-1.238.886-3.005.877-3.022a.62.62 0 0 1 .104-.642.63.63 0 0 1 .619-.196c.888.227 1.798.717 2.56 1.387 1.706 1.496 3.056 4.98 1.386 7.258a4.05 4.05 0 0 1-1.773 1.355c.225-.033.449-.061.673-.114.08-.012 2.01-.292 3.77-1.905 1.202-1.101 1.896-2.588 1.955-4.185.056-1.597-.53-3.135-1.647-4.328"
            />
        </svg>
    );
};

export default IconFireFilled;