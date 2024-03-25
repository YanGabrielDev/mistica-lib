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

const IconDollarSymbolCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.997 18.349a.36.36 0 0 1-.36-.36v-.929l-.183-.015a5.43 5.43 0 0 1-2.597-.937c-.175-.123-.248-.265-.248-.45 0-.26.216-.479.491-.48a.67.67 0 0 1 .347.112c.643.428 1.3.699 1.96.799l.23.035-.001-3.754-.168-.027c-1.111-.182-1.758-.594-2.13-1.066-.374-.473-.49-1.032-.49-1.546 0-.784.253-1.43.697-1.9.445-.473 1.095-.784 1.912-.875l.178-.02v-.933c0-.198.162-.36.36-.36s.36.162.36.36v.936l.18.018c.744.074 1.427.293 1.966.625.215.132.308.301.308.468a.463.463 0 0 1-.464.464.7.7 0 0 1-.309-.088l-.005-.003-.008-.005a4.4 4.4 0 0 0-1.436-.508l-.232-.038.001 3.599.174.023c.954.127 1.663.424 2.132.865.472.444.72 1.05.72 1.818 0 .86-.312 1.574-.894 2.078-.475.414-1.139.68-1.953.773l-.178.02v.94a.36.36 0 0 1-.36.361m.598-5.847-.239-.047.001 3.669.23-.036c.548-.085 1.003-.29 1.324-.61.323-.323.496-.75.496-1.245 0-.326-.055-.694-.331-1.019-.274-.32-.736-.566-1.481-.712m-.96-1.127V7.862l-.233.04c-.41.068-.766.222-1.037.464-.358.32-.542.773-.542 1.292 0 .49.149.869.486 1.16.26.224.627.386 1.08.497z"
                />
                <path
                    fill={fillColor}
                    d="M19.087 4.723c1.685 1.622 2.555 4.058 2.555 7.273s-.87 5.647-2.555 7.273c-1.624 1.564-4.001 2.373-7.091 2.373s-5.467-.809-7.09-2.373C3.22 17.644 2.35 15.208 2.35 11.996s.87-5.648 2.555-7.273C6.53 3.159 8.906 2.35 11.996 2.35s5.467.809 7.09 2.373m-.59 13.935c1.468-1.416 2.295-3.596 2.295-6.662 0-3.067-.828-5.249-2.295-6.661C17.08 3.97 14.944 3.2 11.996 3.2c-2.947 0-5.084.77-6.5 2.134C4.026 6.75 3.2 8.932 3.2 11.996s.827 5.246 2.295 6.661c1.417 1.365 3.554 2.135 6.501 2.135s5.084-.77 6.5-2.135"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.904 16.044c-.143-.1-.213-.213-.213-.383a.41.41 0 0 1 .412-.398c.106.005.21.039.3.1.586.39 1.387.778 2.313.843v-3.91h-.005c-1.896-.24-2.779-1.154-2.779-2.566 0-1.601 1.087-2.623 2.782-2.715v-1.01a.28.28 0 0 1 .28-.28c.154 0 .28.126.28.28v1.01c.893.049 1.651.302 2.188.634.184.115.271.258.271.4 0 .21-.168.385-.38.385h-.003a.64.64 0 0 1-.286-.087c-.561-.305-1.142-.506-1.79-.558l.001 3.752.195.024c1.924.241 2.837 1.154 2.837 2.608 0 1.542-1.033 2.667-3.03 2.795v1.023c0 .154-.126.28-.28.28a.28.28 0 0 1-.28-.28v-1.013a5.3 5.3 0 0 1-2.813-.934m3.372.161c1.38-.095 2.214-.865 2.214-1.97 0-.95-.52-1.625-2.215-1.868zm-.561-4.743v-3.68c-1.267.08-1.968.838-1.968 1.876 0 .932.536 1.553 1.968 1.804"
                />
                <path
                    fill={fillColor}
                    d="M2.156 12c0 6.434 3.404 9.834 9.838 9.834 6.437 0 9.84-3.4 9.84-9.837 0-3.26-.877-5.76-2.602-7.423-1.664-1.605-4.098-2.418-7.238-2.418-6.434 0-9.838 3.41-9.838 9.843m2.989-7.023c1.555-1.499 3.86-2.26 6.849-2.26s5.294.761 6.851 2.263c1.614 1.554 2.432 3.919 2.432 7.02s-.818 5.462-2.432 7.016c-1.557 1.499-3.862 2.258-6.851 2.258s-5.294-.76-6.849-2.258c-1.61-1.552-2.429-3.916-2.429-7.02s.818-5.464 2.429-7.019"
                />
            </svg>
        );
    }
};

export default IconDollarSymbolCircleLight;