'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMicrophoneRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.52 14.039v-8.52C8.52 3.545 10.05 2 12.005 2s3.485 1.546 3.485 3.518v8.52c0 1.973-1.531 3.52-3.485 3.52S8.52 16.01 8.52 14.037m8.257 7.221c0 .408-.33.74-.733.74H7.97a.737.737 0 0 1-.733-.74c0-.408.33-.74.733-.74h3.302v-.796c-2.687-.365-4.772-2.688-4.772-5.5 0-.408.329-.74.733-.74s.732.332.732.74c0 2.247 1.813 4.073 4.035 4.073s4.035-1.83 4.035-4.073c0-.408.328-.74.732-.74s.733.332.733.74c0 2.812-2.08 5.135-4.772 5.5v.797h3.302a.74.74 0 0 1 .747.74m-4.772-5.182c1.15 0 2.02-.877 2.02-2.04v-8.52c0-1.161-.87-2.039-2.02-2.039-1.151 0-2.02.878-2.02 2.04v8.52c0 1.162.869 2.039 2.02 2.039"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2.155c2.921 0 4.529 1.61 4.529 4.532v6.72c0 2.922-1.608 4.532-4.53 4.532-2.921 0-4.529-1.61-4.529-4.532v-6.72c0-2.921 1.608-4.532 4.53-4.532m3.308 11.252v-6.72c0-2.227-1.082-3.31-3.308-3.31s-3.309 1.08-3.309 3.31v6.72c0 2.227 1.082 3.311 3.309 3.311 2.226 0 3.308-1.084 3.308-3.31m-2.33 7.48a.957.957 0 0 0-.956-.959.957.957 0 0 0 0 1.913.956.956 0 0 0 .955-.955m2.372-1.914a.956.956 0 1 1-.003 1.913.956.956 0 0 1 .003-1.913m3.627-1.325a.956.956 0 0 0-1.91 0 .956.956 0 0 0 1.91 0m0-4.21a.814.814 0 1 1 0 1.63.814.814 0 1 1 0-1.63m-9.372 6.49a.956.956 0 1 0-1.913.002.956.956 0 0 0 1.913-.002m-3.628-3.235a.956.956 0 0 1 0 1.91.956.956 0 0 1 0-1.91M5.02 15.07a.814.814 0 0 0 .815-.815.814.814 0 1 0-.815.815"
                />
            </svg>
        );
    }
};

export default IconMicrophoneRegular;