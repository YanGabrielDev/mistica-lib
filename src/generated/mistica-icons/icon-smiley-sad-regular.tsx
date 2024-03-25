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

const IconSmileySadRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846s3.622 9.84 9.84 9.84c6.219 0 9.846-3.134 9.846-9.84m-9.846 8.61c-5.792 0-8.61-2.817-8.61-8.61 0-5.798 2.818-8.616 8.61-8.616 5.799 0 8.617 2.82 8.617 8.616 0 5.793-2.821 8.61-8.617 8.61m.09-7.041c3.714.039 5.894 2.414 5.986 2.515a.615.615 0 0 1-.913.823l-.003-.002c-.08-.085-1.977-2.074-5.1-2.107h-.03c-.328 0-3.33.004-5.178 2.07a.616.616 0 0 1-.919-.818c2.333-2.616 6.003-2.487 6.157-2.481m-3.073-3.023c-.356 0-.652-.112-.86-.322-.204-.207-.305-.493-.305-.846 0-.723.448-1.17 1.165-1.17.72 0 1.165.447 1.165 1.17 0 .353-.103.639-.305.846-.207.21-.504.322-.86.322m5.112-.322c.207.21.504.322.86.322s.653-.112.857-.322c.205-.207.308-.493.308-.846 0-.723-.445-1.17-1.165-1.17-.717 0-1.165.447-1.165 1.17 0 .35.1.636.305.846"
            />
        </svg>
    );
};

export default IconSmileySadRegular;
