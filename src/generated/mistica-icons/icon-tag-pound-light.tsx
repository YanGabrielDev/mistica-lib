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

const IconTagPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.428 2.603-1.26 1.322v9.407c0 .472-.185.925-.516 1.276l-3.654 3.828a.34.34 0 0 1-.502 0 .38.38 0 0 1 0-.527l3.65-3.828a1.1 1.1 0 0 0 .308-.748V4.67l-1.816 1.904a.33.33 0 0 1-.476 0 .37.37 0 0 1 0-.504l1.816-1.904h-8.225a.87.87 0 0 0-.696.305l-6.559 6.883a1.11 1.11 0 0 0 0 1.535l7.678 8.052c.388.412 1.032.421 1.433.028a.34.34 0 0 1 .502.019.38.38 0 0 1-.017.527 1.7 1.7 0 0 1-1.186.485c-.45 0-.9-.176-1.234-.532l-7.678-8.052a1.88 1.88 0 0 1 0-2.589l6.54-6.86c.287-.342.723-.54 1.217-.54h8.934l1.261-1.323a.33.33 0 0 1 .48 0 .364.364 0 0 1 0 .5m-7.127 16.36c-.379 0-.687.323-.687.721s.308.721.687.721.688-.323.688-.721-.309-.721-.688-.721M9.823 14.88c0-.199.154-.36.344-.36.392 0 .692-.31.683-.722v-1.807h-.344a.353.353 0 0 1-.344-.36c0-.2.155-.361.344-.361h.344V9.648c0-1.095.85-1.987 1.895-1.987.441 0 .873.161 1.19.448.146.13.164.356.04.508a.335.335 0 0 1-.485.037 1.13 1.13 0 0 0-.74-.272c-.675 0-1.203.554-1.203 1.262v1.627h1.723c.19 0 .344.162.344.36 0 .2-.155.361-.344.361h-1.723v1.807c0 .264-.067.509-.181.722h3.107c.19 0 .344.161.344.36s-.154.36-.344.36h-4.306a.353.353 0 0 1-.344-.36"
            />
        </svg>
    );
};

export default IconTagPoundLight;