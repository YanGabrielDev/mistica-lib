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

const IconPinLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m8.662 5.295.735-.423-.735-.422a.38.38 0 0 1-.137-.514c.1-.177.327-.24.507-.139l.745.427v-.85c0-.206.166-.374.37-.374s.37.168.37.374v.855l.744-.427a.375.375 0 0 1 .507.14c.1.177.038.407-.137.513l-.735.422.735.423c.175.1.237.331.137.514a.37.37 0 0 1-.322.187.4.4 0 0 1-.185-.048l-.745-.428v.855a.373.373 0 0 1-.37.375.373.373 0 0 1-.37-.375v-.855l-.744.428a.375.375 0 0 1-.507-.14.39.39 0 0 1 .137-.518m2.594 14.207a.745.745 0 0 0-.74.749c0 .413.332.749.74.749s.74-.336.74-.749a.745.745 0 0 0-.74-.749m.35-9.535c.224-.135.48-.216.76-.216.815 0 1.484.672 1.47 1.502v4.504c0 .235-.057.576-.18.807l-.968 1.983a.37.37 0 0 1-.332.206.4.4 0 0 1-.166-.038.38.38 0 0 1-.166-.505l.977-1.997c.057-.105.1-.307.1-.46v-4.504a.745.745 0 0 0-.74-.75.745.745 0 0 0-.74.75v1.498a.373.373 0 0 1-.37.374.373.373 0 0 1-.37-.374v-2.622a.745.745 0 0 0-.74-.749.745.745 0 0 0-.739.75v1.497a.373.373 0 0 1-.37.375.373.373 0 0 1-.37-.375V9.751a.745.745 0 0 0-.74-.75.745.745 0 0 0-.74.75v1.872a.373.373 0 0 1-.37.375.373.373 0 0 1-.369-.375V5.622a.745.745 0 0 0-.74-.75.745.745 0 0 0-.74.75v9.367a.373.373 0 0 1-.37.374.373.373 0 0 1-.37-.374v-2.622a.745.745 0 0 0-.739-.749.745.745 0 0 0-.74.75v3.75c0 .158.043.35.105.45l2.062 3.486a.38.38 0 0 1-.128.514.4.4 0 0 1-.19.053.38.38 0 0 1-.317-.183l-2.063-3.485A1.75 1.75 0 0 1 2 16.117v-3.75a1.49 1.49 0 0 1 1.48-1.498c.27 0 .521.077.74.207v-5.46A1.49 1.49 0 0 1 5.698 4.12c.815 0 1.479.672 1.479 1.498v2.832a1.5 1.5 0 0 1 .74-.206c.54 0 1.01.302 1.27.74.257-.221.589-.36.954-.36.763 0 1.384.59 1.465 1.344m5.34-6.03a.37.37 0 0 0-.507-.14l-.745.427v-.85a.373.373 0 0 0-.37-.374.373.373 0 0 0-.37.374v.855l-.744-.427a.374.374 0 0 0-.507.14.385.385 0 0 0 .137.513l.735.422-.735.423a.38.38 0 0 0-.137.514.37.37 0 0 0 .322.187.4.4 0 0 0 .185-.048l.745-.428v.855c0 .207.166.375.37.375s.37-.168.37-.375v-.855l.744.428a.375.375 0 0 0 .507-.14.385.385 0 0 0-.137-.513l-.735-.423.735-.422c.18-.11.241-.341.137-.519m4.13.935.735.423a.387.387 0 0 1 .142.514.375.375 0 0 1-.507.139l-.744-.427v.854a.373.373 0 0 1-.37.375.373.373 0 0 1-.37-.375v-.854l-.744.427a.4.4 0 0 1-.185.048.37.37 0 0 1-.323-.187.38.38 0 0 1 .138-.514l.735-.423-.74-.417a.385.385 0 0 1-.138-.514.375.375 0 0 1 .508-.14l.744.428v-.855c0-.206.166-.374.37-.374s.37.168.37.374v.85l.744-.427a.366.366 0 0 1 .508.14.38.38 0 0 1-.138.513z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m15.791 2.424 5.785 5.812a.9.9 0 0 1 .266.636c0 .216-.084.42-.236.574q-1.151 1.154-2.467 1.35l-2.715 2.732c.39 2.036-.319 3.977-2.109 5.775-.255.255-.518.367-.798.367s-.546-.112-.745-.313l-3.745-3.773-6.146 6.134-.003.003a.42.42 0 0 1-.6-.006.43.43 0 0 1 .003-.605l6.138-6.134-3.67-3.695a1.06 1.06 0 0 1 .003-1.49l.333.271-.3-.302c2.23-2.244 4.331-2.437 5.765-2.165l2.715-2.731c.123-.877.557-1.698 1.297-2.44.187-.188.386-.269.599-.269a.9.9 0 0 1 .63.269m2.852 7.658a.4.4 0 0 1 .255-.123c.736-.079 1.44-.448 2.092-1.1l-5.798-5.827c-.67.644-1.028 1.341-1.098 2.075a.44.44 0 0 1-.123.26l-2.98 3.004a.42.42 0 0 1-.399.112c-1.787-.432-3.537.204-5.201 1.882l-.031.03a.196.196 0 0 0-.006.281l3.955 3.98.009.005.017.012.007.013.007.012 4.022 4.054c.04.039.092.061.146.061.056 0 .109-.022.145-.061 1.687-1.7 2.303-3.454 1.885-5.27a.43.43 0 0 1 .113-.4z"
                />
            </svg>
        );
    }
};

export default IconPinLight;