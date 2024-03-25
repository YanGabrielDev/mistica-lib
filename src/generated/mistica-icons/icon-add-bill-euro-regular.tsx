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

const IconAddBillEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22.391 7.556c0-2.058-1.572-3.74-3.552-3.878C18.37 2.688 17.383 2 16.233 2H7.899C6.299 2 5 3.327 5 4.963V22h14.131V11.4c1.841-.27 3.26-1.886 3.26-3.844M6.451 4.967c0-.815.65-1.479 1.448-1.479h8.333c.4 0 .761.171 1.02.437a3.89 3.89 0 0 0-2.471 3.635c0 1.826 1.238 3.357 2.898 3.774v9.192H6.452zm9.42 2.589c0-1.531 1.22-2.778 2.717-2.778s2.718 1.247 2.718 2.778-1.22 2.778-2.718 2.778-2.717-1.247-2.717-2.778m5.069 0a.546.546 0 0 1-.543.554h-1.266v1.295a.546.546 0 0 1-.543.554.546.546 0 0 1-.542-.554v-1.29H16.78a.546.546 0 0 1-.543-.555c0-.308.241-.554.543-.554h1.266V5.712c0-.308.241-.555.542-.555s.543.247.543.555v1.294h1.266a.54.54 0 0 1 .543.55m-7.606 7.04h-3.028c.255-1.37 1.433-2.409 2.847-2.4.505 0 1.006.138 1.447.399.26.152.594.061.742-.204a.563.563 0 0 0-.2-.758 3.9 3.9 0 0 0-1.994-.55c-2.012 0-3.677 1.536-3.942 3.517h-.584a.546.546 0 0 0-.543.555c0 .308.242.554.543.554h.584c.265 1.982 1.93 3.518 3.942 3.518.696 0 1.387-.19 1.995-.55a.563.563 0 0 0 .199-.759.534.534 0 0 0-.742-.203c-.44.26-.941.398-1.447.398-1.415 0-2.592-1.038-2.847-2.408h3.028a.546.546 0 0 0 .543-.555.546.546 0 0 0-.543-.555"
            />
        </svg>
    );
};

export default IconAddBillEuroRegular;