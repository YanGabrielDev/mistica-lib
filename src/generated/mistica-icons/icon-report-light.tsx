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

const IconReportLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.929 18.799a.716.716 0 0 1-.715.714.716.716 0 0 1-.714-.714c0-.393.321-.715.714-.715s.715.322.715.715M5.214 17.37h7.143c.214 0 .357-.143.357-.357s-.143-.357-.357-.357H5.214c-.214 0-.357.143-.357.357s.143.357.357.357m0-3.571h5c.215 0 .357-.143.357-.357 0-.215-.142-.358-.357-.358h-5c-.214 0-.357.143-.357.358 0 .214.143.357.357.357M22 4.334c0 .429-.179.858-.464 1.143l-6.786 6.786c-.036.036-.071.071-.107.071l-2.857 1.429c-.036.036-.072.036-.143.036a.7.7 0 0 1-.25-.072c-.107-.107-.143-.25-.107-.393l1.071-3.214s.036-.107.072-.143l2.392-2.393V3.442H7.714v5h-5v12.142h12.5c.215 0 .357.143.357.358 0 .214-.142.357-.357.357H2V7.906l5.179-5.179h8.392V6.87l3.679-3.678a1.596 1.596 0 0 1 2.286 0c.321.321.464.714.464 1.142M7 7.727v-3.75l-3.75 3.75zm13.429-2.143L19.143 4.3l-5.929 5.928 1.286 1.286zm-6.536 6.322-1.036-1.036-.607 1.857zm7.393-7.572c0-.25-.107-.464-.25-.642a.905.905 0 0 0-1.286 0l-.107.107 1.286 1.285.107-.107a.86.86 0 0 0 .25-.643M15.57 16.656v-3.214c0-.215-.142-.358-.357-.358-.214 0-.357.143-.357.358v3.214c0 .214.143.357.357.357.215 0 .357-.143.357-.357"
            />
        </svg>
    );
};

export default IconReportLight;
