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

const IconMultisaveFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.149 3.756c0 .467-.177.906-.495 1.236s-.745.51-1.194.51c-.45 0-.872-.184-1.19-.515a1.77 1.77 0 0 1-.494-1.236c0-.467.177-.906.495-1.237.317-.33.744-.514 1.193-.514s.872.184 1.19.514.495.774.495 1.242M9.866 5.78a.54.54 0 0 0-.53-.552H6.851a.54.54 0 0 0-.531.552.54.54 0 0 0 .53.552h2.484a.54.54 0 0 0 .531-.552M3.66 22h6.742v-.368c0-1.397.704-2.605 1.844-3.403-.518-.698-1.322-1.236-2.302-1.524a3.35 3.35 0 0 0 1.516-2.817c0-1.827-1.43-3.313-3.187-3.313s-3.187 1.486-3.187 3.313c0 1.189.608 2.232 1.516 2.817-1.752.515-2.942 1.826-2.942 3.45zm15.246-6.635c0 1.189-.609 2.232-1.517 2.817 1.753.515 2.942 1.827 2.938 3.45V22h-9.221v-.368c0-1.623 1.19-2.936 2.942-3.45a3.34 3.34 0 0 1-1.517-2.817c0-1.827 1.43-3.313 3.188-3.313 1.757 0 3.187 1.486 3.187 3.313M11.9 3.298a.603.603 0 0 0-.876 0 .65.65 0 0 0-.181.458c0 .174.063.335.181.457.232.246.64.246.876 0a.66.66 0 0 0 .182-.457.65.65 0 0 0-.182-.458m5.33 4.695c0 .468-.177.906-.494 1.237-.332.34-.763.51-1.19.514-.431 0-.862-.17-1.19-.51a1.8 1.8 0 0 1 0-2.477c.318-.33.74-.514 1.19-.514s.872.184 1.19.514.494.77.494 1.236m-1.248-.457a.58.58 0 0 0-.436-.184.6.6 0 0 0-.44.188c-.24.25-.24.661 0 .911s.635.25.876 0a.65.65 0 0 0 .181-.458.65.65 0 0 0-.181-.457m.822-4.314-5.675 5.9a.52.52 0 0 1-.754 0 .57.57 0 0 1 0-.784l5.675-5.9a.52.52 0 0 1 .754 0 .57.57 0 0 1 0 .784"
            />
        </svg>
    );
};

export default IconMultisaveFilled;