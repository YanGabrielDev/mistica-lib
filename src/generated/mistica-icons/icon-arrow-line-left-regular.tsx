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

const IconArrowLineLeftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.315 11.375H6.277l5.885-6.228a.69.69 0 0 0-.05-.97.684.684 0 0 0-.947.027L4.187 11.59c-.03.032-.046.073-.07.11-.024.033-.051.065-.067.104a.7.7 0 0 0-.05.257v.005q.003.129.052.253c.016.04.044.073.069.107.022.034.036.075.066.107l6.852 7.252c.26.276.692.29.968.03q.001 0 .002-.003a.687.687 0 0 0 .027-.97l-5.76-6.095h13.039a.687.687 0 0 0 0-1.371"
            />
        </svg>
    );
};

export default IconArrowLineLeftRegular;