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

const IconCreditBalancePoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.492 2c-3.13 0-5.68 2.665-5.68 5.938s2.55 5.939 5.68 5.939c.813 0 1.608-.181 2.358-.542a.38.38 0 0 0 .177-.494.35.35 0 0 0-.472-.185 4.75 4.75 0 0 1-2.063.475c-2.74 0-4.97-2.328-4.97-5.193s2.23-5.197 4.97-5.197 4.97 2.333 4.97 5.197a5.3 5.3 0 0 1-.277 1.7.374.374 0 0 0 .218.471.35.35 0 0 0 .45-.228 6 6 0 0 0 .318-1.943C18.171 4.665 15.622 2 12.492 2m8.537 14.342c-.186-.589-.704-.983-1.29-.983-.241 0-.477.066-.682.19l-2.662 1.624c-.018-.802-.645-1.444-1.418-1.444H9.752l-.808-.508a1.7 1.7 0 0 0-.886-.238H3.264a.363.363 0 0 0-.354.37c0 .205.159.372.354.372h2.84v4.08c0 .613-.477 1.112-1.063 1.112H3.264a.363.363 0 0 0-.354.37c0 .205.159.371.354.371h1.777c.577 0 1.086-.295 1.413-.741h2.449l3.957 1.026a1.736 1.736 0 0 0 1.327-.19l6.192-3.739a1.46 1.46 0 0 0 .65-1.672m-1.004 1.036-6.193 3.738a1.02 1.02 0 0 1-.804.114L9.03 20.19l-2.254-.01c.023-.118.037-.247.037-.375v-4.08h1.24q.309.002.527.133l.972.608h5.425c.391 0 .709.332.709.74 0 .41-.318.742-.709.742h-3.902a.363.363 0 0 0-.355.37c0 .205.16.37.354.37h3.903c.35 0 .668-.137.913-.355l3.526-2.152a.6.6 0 0 1 .318-.09.66.66 0 0 1 .618.47.72.72 0 0 1-.327.817m-3.63-6.47c.39 0 .709.332.709.74 0 .409-.319.742-.71.742s-.708-.333-.708-.742c0-.408.318-.74.709-.74m-5.143-2.414v1.112a.36.36 0 0 1-.35.37.363.363 0 0 0-.354.37c0 .205.159.371.354.371h3.017a.363.363 0 0 0 .354-.37c0-.204-.159-.37-.354-.37h-2.013c.036-.115.059-.243.059-.371V8.494h1.063a.363.363 0 0 0 .354-.37.363.363 0 0 0-.354-.371h-1.063V6.641c0-.408.318-.74.709-.74.2 0 .381.08.518.232a.34.34 0 0 0 .5.014.38.38 0 0 0 .013-.522 1.4 1.4 0 0 0-1.036-.466c-.781 0-1.417.665-1.417 1.482v1.112h-.178a.363.363 0 0 0-.354.37c0 .205.16.371.354.371z"
            />
        </svg>
    );
};

export default IconCreditBalancePoundLight;
