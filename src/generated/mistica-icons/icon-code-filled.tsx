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

const IconCodeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.413 4.622c.787 0 1.428.62 1.428 1.379v12.008c0 .759-.641 1.378-1.428 1.378H3.586c-.79.003-1.431-.616-1.431-1.375V6c0-.76.641-1.379 1.431-1.379zM4.785 6.295a.55.55 0 0 0-.56.535v.002c0 .297.25.538.557.538a.55.55 0 0 0 .56-.538.55.55 0 0 0-.557-.537m15.852 11.717V8.348H3.36v9.664c0 .117.1.215.224.215h16.829a.22.22 0 0 0 .224-.215M7.02 6.832a.55.55 0 0 0-.558-.537H6.46a.55.55 0 0 0-.557.537c0 .297.25.538.557.538a.55.55 0 0 0 .56-.538m1.12-.537h-.003a.55.55 0 0 0-.56.535v.002c0 .297.25.538.56.538a.55.55 0 0 0 .56-.538.55.55 0 0 0-.557-.537m.955 5.736a.53.53 0 0 0 .02-.748.58.58 0 0 0-.796-.036l-2.294 2.006a.53.53 0 0 0-.006.801l2.295 2.036a.576.576 0 0 0 .815-.048.53.53 0 0 0-.05-.745l-1.844-1.641 1.84-1.608.01-.008zm6.538-.784 2.294 2.006c.115.1.182.246.185.397 0 .154-.067.3-.182.4l-2.294 2.043a.58.58 0 0 1-.384.146.57.57 0 0 1-.412-.174.53.53 0 0 1 .009-.748q.009-.01.022-.02l1.843-1.641-1.84-1.605a.53.53 0 0 1-.059-.745l.01-.011.01-.012a.58.58 0 0 1 .798-.036m-2.216.647a.534.534 0 0 0-.283-.717.57.57 0 0 0-.742.274l-1.86 4.003a.53.53 0 0 0 .283.715q.11.046.23.047a.56.56 0 0 0 .512-.32z"
            />
        </svg>
    );
};

export default IconCodeFilled;