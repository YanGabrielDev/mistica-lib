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

const IconSupermarketLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.479 3.007a.417.417 0 0 1-.404-.432c.003-.235.151-.412.415-.42h.37c.417 0 .773.291.888.728.036.143.09.404.145.704h2.925c.13 0 .25.061.328.168a.43.43 0 0 1 .067.375s-.285 1.045-.44 1.589c-.148.535-.512.857-.963.857h-1.401c-.594 0-.942-.555-1.014-1.07a87 87 0 0 0-.241-1.418l-.003-.014c-.076-.42-.149-.801-.193-.97-.024-.094-.097-.1-.101-.1-.2.006-.378.003-.378.003m1.566 1.434a73 73 0 0 1 .157.936c.01.062.08.35.204.35h1.4c.09 0 .15-.132.18-.244.082-.285.2-.706.292-1.042zm1.095 5.82c.608 0 1.082.167 1.41.498.341.342.515.852.515 1.507 0 .659-.174 1.166-.518 1.508-.328.327-.802.493-1.41.493s-1.081-.168-1.409-.493c-.339-.345-.513-.85-.513-1.508 0-.655.171-1.165.513-1.507.33-.33.807-.499 1.412-.499m.846 2.899c.177-.174.264-.476.264-.894 0-.417-.09-.72-.267-.896q-.256-.257-.843-.258c-.386 0-.672.084-.84.258-.174.176-.264.479-.264.896s.09.717.26.894c.169.17.455.258.844.258.39 0 .675-.087.846-.258m-1.509-6.204-.015-.002h-.008c-.079.003-.373.031-.373.41 0 .38.297.408.376.411h.039c.075 0 .375-.03.375-.409 0-.375-.302-.406-.378-.409zm1.243-.002.015.002.016.001c.075.003.378.034.378.41 0 .377-.3.408-.375.408h-.034c-.081-.003-.375-.03-.375-.412 0-.378.294-.406.372-.409zm8.304 13.989h-2.437v-8.251h2.437zm-3.253 0-2.207.011v-5.077a.417.417 0 0 0-.41-.425H9.093a.417.417 0 0 0-.41.425v5.1l-2.232.008L6.444 9.26c.02-.042.152-.143.303-.143h10.73c.127 0 .239.073.28.1l.014.01zm-3.028-4.637v4.65l-5.24.018v-4.668zm-11.77 4.637v-8.251h2.438v8.25zm18.872-8.677a.417.417 0 0 0-.409-.426v-.002h-2.844V9.226c0-.512-.52-.96-1.115-.96H6.75c-.594 0-1.115.448-1.115.96v2.614h-3.07a.415.415 0 0 0-.41.426v9.103c0 .235.182.476.41.476h18.868c.227 0 .412-.24.412-.476z"
            />
        </svg>
    );
};

export default IconSupermarketLight;
