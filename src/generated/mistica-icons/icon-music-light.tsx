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

const IconMusicLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 2.365c0-.22-.144-.365-.363-.365-.22 0-.364.145-.364.365v10.44a3.63 3.63 0 0 0-2.914-1.466c-2.005 0-3.642 1.65-3.642 3.662s1.641 3.662 3.642 3.662S22 17.013 22 15.001zm-3.641 15.568c-1.606 0-2.915-1.322-2.915-2.932s1.313-2.93 2.915-2.93c1.6 0 2.914 1.32 2.914 2.93s-1.317 2.932-2.914 2.932M17.412 3.172c.18-.072.4.073.436.257.035.185-.076.402-.224.474L9.283 6.176v12.162C9.283 20.35 7.642 22 5.64 22S2 20.35 2 18.338s1.637-3.662 3.641-3.662c1.202 0 2.26.586 2.915 1.466V5.882c0-.18.112-.328.256-.365zM5.606 21.233c1.605 0 2.914-1.32 2.914-2.931S7.207 15.37 5.606 15.37 2.69 16.69 2.69 18.3 4 21.234 5.606 21.234M19.52 3.574a.73.73 0 0 0 .727-.73.73.73 0 0 0-.727-.732.73.73 0 0 0-.726.731c0 .404.325.731.726.731"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.799 4.712a.87.87 0 0 1 .812.86h.003V18.39H20.6q.002.033.007.062.006.037.007.078c0 3.093-2.692 3.3-3.232 3.308l-.28.003c-1.563-.022-3.236-.907-3.236-3.327s1.661-3.294 3.216-3.309l.291.003c.863.02 1.748.314 2.378.958V8.133l-9.6-2.56-.01 9.01h-.017c-.174 2.796-2.695 2.998-3.216 3.006a5 5 0 0 1-.285 0c-1.56-.022-3.233-.907-3.233-3.327s1.658-3.297 3.216-3.309q.074.003.15.002l.144.001c.857.02 1.742.311 2.372.955V3.018c0-.474.393-.863.877-.863l.112.017zm-9.65-1.691-.003 1.669 9.6 2.557V5.57l-.126-.026zM6.81 16.738h.077c.717-.014 2.384-.278 2.384-2.46s-1.675-2.456-2.395-2.473c-.084-.003-.18-.003-.266-.003-.71.006-2.359.26-2.359 2.46 0 2.204 1.667 2.467 2.38 2.476q.091.001.179 0m10.553 4.249c.717-.011 2.384-.277 2.387-2.454 0-2.182-1.678-2.456-2.398-2.473l-.266-.003c-.709.006-2.359.258-2.359 2.457 0 2.204 1.667 2.467 2.381 2.476z"
                />
            </svg>
        );
    }
};

export default IconMusicLight;
