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

const IconMuseumLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.38 18.004h1.992c.23 0 .418.187.418.42v3.003c0 .232-.185.42-.418.42H2.627a.42.42 0 0 1-.417-.42v-3.003c0-.233.185-.42.417-.42h2.025v-8.44H2.574a.42.42 0 0 1-.4-.294.42.42 0 0 1 .162-.47l9.426-6.57c.143-.1.333-.1.476 0l9.426 6.57a.42.42 0 0 1 .16.47.414.414 0 0 1-.399.294h-2.044zm1.572 3.002v-2.162H3.045v2.162zM5.487 18.005h1.616v-8.44H5.487zm14.602-9.28L12 3.088 3.908 8.724h1.154l.005-.002.004-.001.004.001.004.002h2.434l.005-.002.004-.001.004.001.004.002h3.252l.004-.002.005-.001.004.001.004.002h2.434l.004-.002.005-.001.004.001.004.002h3.252l.004-.002h.003V8.72l.006.001.004.002h2.434l.004-.002.005-.001.004.001.004.002zm-6.428 9.28h2.434v-8.44h-2.434zm-.835 0v-8.44H11.21v8.44zm-4.888 0h2.434v-8.44H7.938zm10.608 0v-8.44H16.93v8.44z"
            />
        </svg>
    );
};

export default IconMuseumLight;
