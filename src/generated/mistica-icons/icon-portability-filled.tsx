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

const IconPortabilityFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.47 18.664c1.494 1.446 3.673 2.18 6.474 2.18 1.902 0 3.527-.34 4.835-1.009a.56.56 0 0 0-.513-.997c-1.145.588-2.599.888-4.322.888-2.501 0-4.417-.628-5.694-1.863-1.323-1.283-1.995-3.252-1.995-5.86s.672-4.58 1.995-5.86C6.527 4.908 8.443 4.28 10.944 4.28s4.418.628 5.695 1.863c1.318 1.28 1.99 3.24 1.994 5.837V12q0 .733-.072 1.402c-.231-.258-.57-.651-1.012-1.164l-.344-.4a.56.56 0 1 0-.849.73l.345.402.075.086c.638.741 1.028 1.194 1.244 1.41.317.316.658.476 1.003.476.347 0 .697-.163 1.025-.485.238-.236.517-.562.792-.884l.068-.08c.277-.327.566-.666.79-.89a.561.561 0 0 0-.793-.793c-.247.247-.54.59-.826.925l-.025.03-.03.034-.315.367a15 15 0 0 0 .045-1.163c0-2.921-.787-5.165-2.336-6.664-1.493-1.445-3.673-2.179-6.474-2.179-2.8 0-4.98.734-6.473 2.18-1.55 1.498-2.336 3.742-2.336 6.663s.787 5.163 2.336 6.661"
            />
            <path
                fill={fillColor}
                d="M14.51 6.028c-.263-.277-.74-.61-1.53-.61H9.522c-.3 0-.588.12-.798.333L6.549 7.958a1.12 1.12 0 0 0-.322.787v7.239c0 .733.291 1.196.535 1.456.263.277.74.61 1.53.61h4.691c.787 0 1.266-.33 1.53-.61.244-.26.535-.723.535-1.457V7.486c-.003-.734-.294-1.196-.538-1.457m-5.799 7.617V12.56h3.81v1.085zM11.622 12v-1.103h.9V12zm-.563 0h-.896v-1.103h.896zm-2.35 0v-1.103h.894V12zm.002 2.205h.894v1.076h-.894zm2.348 0v1.076h-.896v-1.076zm.56 0h.9v1.076h-.9z"
            />
        </svg>
    );
};

export default IconPortabilityFilled;