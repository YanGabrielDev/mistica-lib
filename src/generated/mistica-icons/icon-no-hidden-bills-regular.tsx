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

const IconNoHiddenBillsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.318 20.78-2.564-2.693V4.545c0-1.18-.915-2.144-2.042-2.144H7.189c-.914 0-1.685.63-1.946 1.5L3.63 2.208a.66.66 0 0 0-.962 0 .74.74 0 0 0 0 1.01l14.726 15.463v1.577H6.51V9.902c0-.394-.305-.714-.68-.714-.374 0-.679.32-.679.713v11.784h13.607v-1.577l1.602 1.682a.654.654 0 0 0 .958 0 .74.74 0 0 0 0-1.01M6.51 5.235v-.69c0-.393.304-.713.679-.713h9.527c.374 0 .68.32.68.713v12.117zm8.504 1.81h-1.616c.222-.722.858-1.248 1.616-1.248.274 0 .54.069.783.201a.5.5 0 0 0 .688-.228.55.55 0 0 0-.218-.722 2.6 2.6 0 0 0-1.258-.325c-1.328 0-2.434 1.001-2.673 2.322h-.392a.52.52 0 0 0-.51.535.52.52 0 0 0 .51.534h.392c.24 1.321 1.345 2.322 2.673 2.322.444 0 .867-.11 1.258-.324a.545.545 0 0 0 .218-.722.497.497 0 0 0-.688-.229 1.6 1.6 0 0 1-.784.201c-.761 0-1.397-.525-1.615-1.248h1.616a.52.52 0 0 0 .509-.534.52.52 0 0 0-.51-.535"
            />
        </svg>
    );
};

export default IconNoHiddenBillsRegular;