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

const IconMobileEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.25 5.922v-.708C18.25 3.44 16.85 2 15.126 2H8.874C7.15 2 5.75 3.44 5.75 5.214v13.572C5.75 20.56 7.15 22 8.874 22h6.248c1.724 0 3.124-1.44 3.124-3.214V5.931l.002-.004q.001 0 .002-.005M8.874 2.713h6.248c1.342 0 2.43 1.12 2.43 2.5v.353H6.443v-.352c0-1.38 1.089-2.5 2.43-2.5m0 18.57c-1.342 0-2.43-1.12-2.43-2.501v-.357h7.291c.191 0 .347-.16.347-.356a.35.35 0 0 0-.347-.357H6.443V6.279h11.11v12.503c0 1.38-1.09 2.5-2.431 2.5zm7.638-3.215a.704.704 0 0 1-.693.714.704.704 0 0 1-.693-.713c0-.394.311-.714.693-.714s.693.32.693.713m-3.297-2.495c.636 0 1.267-.179 1.822-.508.165-.1.222-.32.125-.489a.343.343 0 0 0-.476-.128c-.449.27-.96.411-1.475.411-1.329 0-2.449-.905-2.822-2.144h2.995c.191 0 .347-.16.347-.356a.35.35 0 0 0-.347-.357H10.27q-.007-.09-.009-.178.001-.274.05-.535h3.07c.19 0 .346-.16.346-.356a.35.35 0 0 0-.346-.357h-2.862c.462-1.051 1.489-1.787 2.684-1.787.515 0 1.027.141 1.475.411.165.1.378.041.476-.128a.363.363 0 0 0-.125-.49 3.54 3.54 0 0 0-1.822-.507c-1.582 0-2.928 1.047-3.43 2.501h-.907a.35.35 0 0 0-.346.357c0 .196.155.356.346.356h.738c-.022.174-.04.352-.04.535q.002.09.009.178h-.702a.35.35 0 0 0-.347.357c0 .196.156.356.347.356h.804c.391 1.637 1.826 2.858 3.537 2.858"
            />
        </svg>
    );
};

export default IconMobileEuroLight;
