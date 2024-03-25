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

const IconRouterLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.14 18.069c0 .786.64 1.426 1.426 1.426s1.426-.64 1.426-1.426c0-.787-.64-1.427-1.426-1.427-.787 0-1.427.64-1.427 1.427m2.143 0a.714.714 0 0 1-1.426 0 .714.714 0 0 1 1.426 0m9.642-13.034c1.348 0 2.66.576 3.597 1.578a.355.355 0 0 1-.018.502.354.354 0 0 1-.503-.018A4.18 4.18 0 0 0 15.93 5.75c-1.166 0-2.263.48-3.072 1.348a.355.355 0 0 1-.503.018.355.355 0 0 1-.018-.502 4.9 4.9 0 0 1 3.589-1.578m-5.733-.077a.355.355 0 0 1-.01-.503A7.9 7.9 0 0 1 15.93 2a7.9 7.9 0 0 1 5.746 2.455.354.354 0 0 1-.009.503.35.35 0 0 1-.247.1.35.35 0 0 1-.256-.11 7.2 7.2 0 0 0-5.23-2.235 7.2 7.2 0 0 0-5.229 2.236.366.366 0 0 1-.512.009M22 18.068a3.22 3.22 0 0 1-2.811 3.187.356.356 0 0 1-.398-.311.356.356 0 0 1 .31-.398 2.5 2.5 0 0 0 2.186-2.477c0-1.381-1.12-2.501-2.5-2.501H5.213a2.501 2.501 0 0 0 0 5.001h9.64a.357.357 0 0 1 0 .713h-9.64A3.215 3.215 0 0 1 2 18.07a3.215 3.215 0 0 1 3.214-3.214h10.359V9.497a.357.357 0 0 1 .713 0v5.358h2.5A3.22 3.22 0 0 1 22 18.069m-4.288 2.858a.714.714 0 0 1-1.426 0 .714.714 0 0 1 1.426 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.463 6.748c-.025-2.38-1.534-3.818-1.597-3.878l-.002-.001a.411.411 0 0 1 .549-.611c.075.067 1.84 1.689 1.87 4.465.006.104.102 2.829-1.842 4.566a.41.41 0 0 1-.58-.034.41.41 0 0 1 .034-.58c1.655-1.473 1.57-3.902 1.568-3.927m8.378 10.445c0-.952-.252-1.694-.745-2.207-.515-.532-1.277-.801-2.272-.801H7.874V6.776a.41.41 0 0 0-.818 0v7.406H5.17c-.992 0-1.754.272-2.269.804-.496.513-.745 1.255-.745 2.207v1.64c0 .952.25 1.694.745 2.206.515.535 1.277.804 2.269.804h13.658c.992 0 1.754-.269 2.27-.804.492-.512.744-1.255.744-2.207zm-.82 1.64c0 .733-.174 1.282-.516 1.638-.353.367-.916.552-1.675.552H5.169c-.76 0-1.322-.185-1.675-.552q-.514-.536-.516-1.639v-1.639c0-.733.174-1.283.516-1.638.35-.367.916-.552 1.675-.552H18.83c.76 0 1.322.185 1.675.552.342.356.515.905.515 1.638zm-15.437-.819c0-.454-.264-.664-.67-.664s-.67.21-.67.664c0 .219.06.381.169.49.117.12.291.177.501.177.213 0 .384-.059.501-.177.107-.112.169-.271.169-.49m2.437 0c0-.454-.264-.664-.67-.664s-.67.21-.667.664c0 .219.06.381.168.49.118.12.289.177.502.177.21 0 .38-.059.498-.177.107-.112.169-.271.169-.49M9.915 4.43c.04.037.943.89.96 2.346v.002c.001.064.035 1.493-.941 2.365a.41.41 0 0 0-.034.58l.003.003a.41.41 0 0 0 .577.03c1.28-1.148 1.218-2.94 1.216-3.002-.02-1.821-1.182-2.888-1.233-2.933a.41.41 0 0 0-.549.608z"
                />
            </svg>
        );
    }
};

export default IconRouterLight;