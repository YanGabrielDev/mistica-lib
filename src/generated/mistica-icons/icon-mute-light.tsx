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

const IconMuteLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.53 15.182V2.372a.38.38 0 0 0-.175-.322.34.34 0 0 0-.353 0l-7.51 4.59q-.016.012-.03.026-.007.01-.02.02L3.082 2.111a.335.335 0 0 0-.497 0 .38.38 0 0 0 0 .522l12.242 12.853v5.5l-9.171-5.6a.33.33 0 0 0-.177-.052H3.184V8.668h2.294a.4.4 0 0 0 .177-.047l.555-.337a.387.387 0 0 0 .131-.507.35.35 0 0 0-.483-.138l-.47.285H2.832a.36.36 0 0 0-.352.37v7.405c0 .204.158.37.352.37h2.552l9.618 5.874a.34.34 0 0 0 .352.005.38.38 0 0 0 .177-.323v-5.404l3.454 3.627a.34.34 0 0 0 .249.109c.09 0 .18-.038.248-.11a.376.376 0 0 0 0-.52zM7.945 7.218l6.882-4.201v11.426zM20.824 22c.387 0 .704-.332.704-.74 0-.407-.316-.74-.705-.74s-.704.333-.704.74c0 .408.316.74.704.74"
            />
        </svg>
    );
};

export default IconMuteLight;
