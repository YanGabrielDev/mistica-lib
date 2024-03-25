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

const Icon4GRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.4 18v2A1.6 1.6 0 0 0 4 21.6h1A1.6 1.6 0 0 0 6.6 20v-2A1.6 1.6 0 0 0 5 16.4H4A1.6 1.6 0 0 0 2.4 18m1.6-.4h1c.22 0 .4.18.4.4v2a.4.4 0 0 1-.4.4H4a.4.4 0 0 1-.4-.4v-2c0-.22.18-.4.4-.4M7.4 14A1.6 1.6 0 0 1 9 12.4h1a1.6 1.6 0 0 1 1.6 1.6v6a1.6 1.6 0 0 1-1.6 1.6H9A1.6 1.6 0 0 1 7.4 20zm1.6-.4a.4.4 0 0 0-.4.4v6c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4v-6a.4.4 0 0 0-.4-.4zM12.4 11v9a1.6 1.6 0 0 0 1.6 1.6h1a1.6 1.6 0 0 0 1.6-1.6v-9A1.6 1.6 0 0 0 15 9.4h-1a1.6 1.6 0 0 0-1.6 1.6m1.6-.4h1c.22 0 .4.18.4.4v9a.4.4 0 0 1-.4.4h-1a.4.4 0 0 1-.4-.4v-9c0-.22.18-.4.4-.4M17.4 6A1.6 1.6 0 0 1 19 4.4h1A1.6 1.6 0 0 1 21.6 6v14a1.6 1.6 0 0 1-1.6 1.6h-1a1.6 1.6 0 0 1-1.6-1.6zm1.6-.4a.4.4 0 0 0-.4.4v14c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4V6a.4.4 0 0 0-.4-.4zM5 8.432h1.626V7.274h.762V5.842h-.762V2.104H4.38L2 6.004v1.27h3zm0-4.905v2.315H3.57zM7.832 5.273c0 2.01 1.523 3.272 3.394 3.272 1.185 0 2.097-.483 2.774-1.233V4.836h-3.028v1.357h1.439v.531c-.254.209-.696.38-1.185.38-1.025 0-1.749-.797-1.749-1.831s.724-1.831 1.75-1.831c.591 0 1.071.332 1.325.75l1.354-.722c-.46-.787-1.307-1.47-2.68-1.47-1.871 0-3.394 1.262-3.394 3.273"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.857 15.57c-1.97 0-3.57-1.6-3.57-3.57a3.572 3.572 0 0 1 6.07-2.55.71.71 0 0 1 .009 1.01.71.71 0 0 1-1.01.009 2.14 2.14 0 0 0-1.5-.613 2.144 2.144 0 1 0 2.02 2.861h-1.448a.714.714 0 0 1 0-1.426h2.285c.393 0 .713.32.713.713a3.57 3.57 0 0 1-3.57 3.565"
                />
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12m1.43 0c0-4.726 3.844-8.57 8.57-8.57s8.57 3.844 8.57 8.57-3.844 8.57-8.57 8.57S3.43 16.725 3.43 12"
                />
                <path
                    fill={fillColor}
                    d="M8.787 14.856a.714.714 0 1 0 1.426-.004v-.713h.357a.714.714 0 0 0 0-1.426h-.357v-3.57A.714.714 0 0 0 9.5 8.43h-.356a.72.72 0 0 0-.572.284L5.36 13a.72.72 0 0 0-.068.75c.123.242.37.392.64.392h2.856zm-.005-2.143H7.356l1.426-1.901z"
                />
            </svg>
        );
    }
};

export default Icon4GRegular;