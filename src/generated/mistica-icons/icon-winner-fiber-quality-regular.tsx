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

const IconWinnerFiberQualityRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m17.873 14.69 2.056 3.62c.11.19.091.429-.045.595a.53.53 0 0 1-.567.184l-3.068-.922-.922 3.432a.53.53 0 0 1-.44.392q-.04.005-.073.004a.53.53 0 0 1-.458-.262l-2.378-4.24-2.374 4.23a.53.53 0 0 1-.463.277q-.028.001-.063-.005a.54.54 0 0 1-.45-.396l-.921-3.427-3.023.922a.53.53 0 0 1-.567-.18.55.55 0 0 1-.05-.6l1.997-3.653A7.78 7.78 0 0 1 4.353 9.75C4.353 5.464 7.766 2 11.978 2c4.216 0 7.624 3.469 7.624 7.75 0 1.876-.64 3.597-1.729 4.94m-9.281 2.665.722 2.69 1.452-2.634a7.54 7.54 0 0 1-3.93-1.933l-1.203 2.2 2.292-.701a.54.54 0 0 1 .413.046c.122.074.218.19.254.332M5.774 9.75c0 3.469 2.79 6.306 6.204 6.306 3.408 0 6.204-2.837 6.204-6.306 0-3.464-2.791-6.305-6.204-6.305-3.409 0-6.204 2.836-6.204 6.305m9.848 7.274a.53.53 0 0 1 .409-.046l2.31.696-1.24-2.181a7.54 7.54 0 0 1-4.02 1.932l1.552 2.662.735-2.73a.54.54 0 0 1 .254-.333"
            />
            <path
                fill={fillColor}
                d="M14.106 10.833V7.48c.518-.212.885-.729.885-1.333a1.43 1.43 0 0 0-1.416-1.44 1.43 1.43 0 0 0-1.416 1.44c0 .604.368 1.12.885 1.333v3.348h-2.128v-.825c.517-.212.885-.729.885-1.333a1.43 1.43 0 0 0-1.416-1.44 1.43 1.43 0 0 0-1.416 1.44c0 .604.367 1.12.885 1.333v.825a1.25 1.25 0 0 0-1.24 1.26v1.439c0 .3.237.54.532.54s.53-.24.53-.54v-1.435c0-.101.082-.18.178-.18h4.257c.1 0 .177.083.177.18v1.44c0 .3.236.54.53.54.296 0 .532-.24.532-.54v-1.44a1.255 1.255 0 0 0-1.244-1.259m-.53-5.046c.194 0 .353.161.353.36s-.159.36-.354.36a.357.357 0 0 1-.354-.36c0-.199.155-.36.354-.36M10.733 8.67c0 .198-.159.36-.354.36a.357.357 0 0 1-.354-.36c0-.198.159-.36.354-.36s.354.162.354.36"
            />
        </svg>
    );
};

export default IconWinnerFiberQualityRegular;