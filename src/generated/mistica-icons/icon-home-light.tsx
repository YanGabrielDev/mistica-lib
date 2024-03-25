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

const IconHomeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.14 2.782c-.287-.283-.712-.432-1.148-.432s-.859.15-1.145.432l-8.083 7.953c-.412.4-.523.962-.303 1.466.231.535.798.894 1.45.894h.586v7.133c0 .758.684 1.408 1.56 1.408h11.756c.876 0 1.559-.65 1.559-1.411v-7.133h.704c.652 0 1.218-.358 1.45-.893.22-.503.107-1.063-.304-1.467zm-1.148.418c.259 0 .453.09.552.188l8.082 7.95c.093.091.136.183.152.262a.42.42 0 0 1-.03.257l-.003.005c-.081.189-.317.38-.669.38h-1.554v7.983c0 .12-.05.25-.175.364a.8.8 0 0 1-.534.197H6.056a.8.8 0 0 1-.534-.197.49.49 0 0 1-.175-.361v-7.983H3.911c-.352 0-.588-.192-.67-.38l-.001-.005a.43.43 0 0 1-.032-.26.5.5 0 0 1 .148-.255l8.087-7.957.001-.001c.097-.096.29-.187.548-.187"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.01 2 9.43 10.284c.1.108.103.252.065.392-.038.144-.171.216-.308.216h-1.7v4.464c0 .212-.134.356-.34.356-.202 0-.339-.14-.339-.356v-5.18h1.631L12.01 3.072l-8.404 9.104H5.21v9.108h4.083v-6.428h5.439v6.432h4.421c.203 0 .34.144.34.356s-.134.356-.34.356H14.05v-6.428H9.967V22H4.524v-9.104h-1.7q-.206 0-.308-.216a.34.34 0 0 1 .068-.396z"
                />
                <path
                    fill={fillColor}
                    d="M19.161 20.212c.377 0 .682-.32.682-.716s-.305-.716-.682-.716-.682.32-.682.716.305.716.682.716"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.003 21.837h2.938c.874 0 1.585-.644 1.585-1.437v-7.283h.726c.655 0 1.232-.359 1.473-.91.227-.519.107-1.093-.308-1.502l-8.26-8.115c-.597-.585-1.729-.585-2.325 0l-8.258 8.12a1.33 1.33 0 0 0-.311 1.502c.244.552.82.908 1.473.908h.611v7.283c0 .792.709 1.437 1.583 1.437h3.109a.42.42 0 0 0 .426-.412v-4.045h5.112v4.042a.417.417 0 0 0 .425.412m2.938-.824h-2.513l-.003-4.045a.42.42 0 0 0-.425-.411H9.036a.42.42 0 0 0-.426.412v4.047H5.927c-.4 0-.728-.274-.728-.613v-7.695a.42.42 0 0 0-.426-.412H3.736c-.375 0-.6-.21-.686-.406a.53.53 0 0 1 .132-.608l8.26-8.115c.278-.274.827-.274 1.107 0l8.257 8.112a.52.52 0 0 1 .132.608c-.087.196-.31.406-.686.406h-1.154a.42.42 0 0 0-.426.412V20.4c0 .339-.328.613-.731.613"
                />
            </svg>
        );
    }
};

export default IconHomeLight;