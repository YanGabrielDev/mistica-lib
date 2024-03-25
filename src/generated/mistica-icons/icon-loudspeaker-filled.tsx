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

const IconLoudspeakerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.733 18.513c.084.025.176.04.266.04a.94.94 0 0 0 .54-.175.97.97 0 0 0 .4-.787V6.407a.97.97 0 0 0-.4-.788.92.92 0 0 0-.807-.134L3.242 9.238c-.006-.28-.247-.504-.546-.504-.302 0-.546.233-.546.516v5.51c0 .285.244.515.546.515s.546-.23.546-.515l3.18.956-.18.573a.82.82 0 0 0 .538 1.028l2.27.711q.122.041.246.04c.131 0 .26-.031.378-.096a.8.8 0 0 0 .403-.482l.195-.618zm-8.365-2.154.07-.224 1.748.549-.07.224zM19.055 8.174a.545.545 0 0 1-.387-.933l1.546-1.546a.548.548 0 0 1 .773.773l-1.546 1.546a.55.55 0 0 1-.386.16M19.122 12.283a.545.545 0 1 1 0-1.092h2.185a.545.545 0 1 1 0 1.092zM20.206 17.715a.545.545 0 0 0 .773 0 .55.55 0 0 0 0-.773l-1.507-1.508a.548.548 0 0 0-.773.774z"
            />
        </svg>
    );
};

export default IconLoudspeakerFilled;