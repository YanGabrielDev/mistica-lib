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

const IconVolumeUpLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.703 2.368V21.63a.37.37 0 0 1-.185.323.363.363 0 0 1-.37-.005l-1.384-.811a.372.372 0 0 1 .375-.64l.83.483V3.012l-9.636 5.6a.36.36 0 0 1-.185.053H2.74v6.668h2.408q.1 0 .185.052l4.993 2.892a.37.37 0 1 1-.374.64l-4.908-2.845H2.37a.37.37 0 0 1-.37-.37V8.295a.37.37 0 0 1 .37-.37h2.679l10.1-5.875a.37.37 0 0 1 .37 0 .36.36 0 0 1 .184.318M12 19.036a.74.74 0 0 0 0 1.48.74.74 0 0 0 0-1.48m7.776-7.407h1.854a.37.37 0 0 1 0 .74h-1.854v1.854a.37.37 0 0 1-.74 0v-1.854h-1.853a.37.37 0 0 1 0-.74h1.854V9.775a.37.37 0 0 1 .74 0z"
            />
        </svg>
    );
};

export default IconVolumeUpLight;
