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

const IconVodFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.518 3.853v16.294c0 1.019-.79 1.853-1.765 1.853H4.235c-.97 0-1.765-.83-1.765-1.853V3.853C2.47 2.834 3.26 2 4.235 2h15.522c.97.005 1.76.834 1.76 1.853m-9.878 9.905c.875 0 1.589-.872 1.589-1.943 0-1.07-.713-1.943-1.59-1.943-.875 0-1.589.872-1.589 1.943s.714 1.943 1.59 1.943m4.415-3.796h.88c.876 0 1.59.825 1.59 1.848s-.714 1.853-1.59 1.853h-.88zm-8.253-.753-1.269 3.464L5.265 9.21a.52.52 0 0 0-.682-.318.56.56 0 0 0-.302.716l1.756 4.815.002.005.002.004a.4.4 0 0 0 .073.128q.003.008.009.012l.009.012a.6.6 0 0 0 .108.1.5.5 0 0 0 .104.056q.005-.001.018.005a.5.5 0 0 0 .171.033.5.5 0 0 0 .172-.033q.007.001.018-.005a.5.5 0 0 0 .117-.066c.03-.019.052-.044.077-.07l.018-.02c.01-.01.014-.014.018-.024a.6.6 0 0 0 .073-.128l.002-.004.002-.005 1.765-4.815c.095-.285-.04-.607-.311-.716a.52.52 0 0 0-.682.318m6.488 2.606c0-1.682-1.188-3.057-2.646-3.057S9 10.128 9 11.815s1.187 3.057 2.645 3.057 2.646-1.374 2.646-3.057m2.645-2.962h-1.941v5.924h1.941c1.459 0 2.646-1.327 2.646-2.962s-1.187-2.962-2.646-2.962"
            />
        </svg>
    );
};

export default IconVodFilled;
