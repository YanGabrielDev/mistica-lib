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

const IconBeachUmbrellaFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.429 5.678a.38.38 0 0 0-.101-.291c-1.454-1.569-3.084-2.577-4.846-3-1.555-.373-3.21-.294-4.941.221 2.218.263 5.134 1.305 7.994 4.356l1.698-1.003a.4.4 0 0 0 .196-.283M18.306 7.69l-5.169 3.053L9.08 3.975c1.647-.221 5.462-.18 9.226 3.714M7.921 4.79c-.939 1.485-2.42 4.849-.583 9.378l4.583-2.706zm-1.81 10.101c-1.655-3.888-1.12-7.059-.269-9.134-1.641 1.406-2.683 2.988-3.084 4.73-.397 1.693-.185 3.536.636 5.477a.4.4 0 0 0 .252.216c.198.053.257.018.335-.03l.021-.012zm1.7-10.244-.372-.622a.67.67 0 0 1 .266-.93.735.735 0 0 1 .975.255l.35.586zm11.356 16.174-6.025-10.053-1.218.714 6.005 10.017c.132.218.37.342.62.342q.182 0 .352-.09a.666.666 0 0 0 .266-.93"
            />
        </svg>
    );
};

export default IconBeachUmbrellaFilled;
