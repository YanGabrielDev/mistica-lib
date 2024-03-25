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

const IconDataCloudFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.182 9.255a.74.74 0 0 0 1.023.279.77.77 0 0 0 .268-1.047 3.7 3.7 0 0 0-1.224-1.29c.564-2.146 2.486-3.672 4.685-3.672 2.174 0 4.1 1.501 4.679 3.642.11.406.52.646.918.533a.766.766 0 0 0 .52-.938C18.297 3.96 15.783 2 12.935 2c-2.82 0-5.297 1.921-6.085 4.644-.21-.039-.42-.063-.636-.063-2.06 0-3.733 1.71-3.733 3.818s1.673 3.818 3.733 3.818a.755.755 0 0 0 .746-.763.755.755 0 0 0-.746-.762c-1.238 0-2.242-1.027-2.242-2.293S4.98 8.106 6.213 8.106c.817 0 1.568.44 1.97 1.149m6.845.034a.36.36 0 0 1 .301 0l5.588 2.503-5.74 2.938-5.741-2.938zm-6.195 9.514c0 .146.082.278.206.342L14.62 22v-6.282L8.832 12.76zm6.907-3.085 5.789-2.958v6.043a.38.38 0 0 1-.206.342L15.74 22z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.183 5.83c2.325.207 4.658 1.627 4.658 5.039 0 3.756-2.84 5.095-5.271 5.095h-.41v1.37c-.148.266-.574.616-1.358.848-.795.241-1.84.37-2.955.37-1.12 0-2.168-.126-2.964-.37-.703-.207-1.218-.52-1.375-.84v-1.353l-.032.01a.3.3 0 0 1-.074.015l-.9.009c-2.103 0-4.347-1.115-4.347-4.247 0-2.45 1.375-3.468 2.448-3.885.196-5.445 5.412-5.728 6.474-5.728.818-.003 4.862.182 6.106 3.666m-.588 8.946c.966-.022 4.02-.297 4.02-3.91 0-3.387-2.734-3.838-3.905-3.869a.604.604 0 0 1-.575-.44c-.834-3.044-4.361-3.195-5.058-3.195-1.236 0-5.247.344-5.247 4.846v.112c0 .266-.18.504-.442.577-1.337.37-2.006 1.339-2.006 2.876 0 2.748 2.176 3.045 3.118 3.045l.893-.008h.009c.05 0 .072 0 .106.008.31.216.711.41 1.21.552.843.25 1.955.387 3.126.387s2.275-.138 3.118-.387c.482-.137.885-.328 1.196-.56zM7.55 10.614c.123.347.58.65 1.336.87.796.236 1.84.365 2.958.365 1.115 0 2.163-.132 2.958-.364.737-.219 1.19-.507 1.325-.843 0-.006.006-.011.006-.011-.098-.367-.547-.673-1.337-.905-.79-.233-1.84-.364-2.957-.364-1.115 0-2.169.131-2.964.364-.75.221-1.207.53-1.33.876l.005.007v.005m4.294 4.574c-1.115 0-2.162-.126-2.958-.359-.709-.21-1.221-.529-1.378-.848v-2.518c.291.226.692.42 1.21.568.849.25 1.958.387 3.126.387s2.277-.138 3.126-.387c.507-.148.902-.33 1.19-.557v2.501c-.142.269-.574.62-1.358.854-.793.233-1.843.359-2.958.359m3.126 3.54c-.843.25-1.952.387-3.126.387-1.168 0-2.28-.134-3.123-.39-.496-.148-.908-.341-1.21-.562v2.24c0 .446.46.81 1.364 1.076.804.233 1.854.364 2.964.364 1.111 0 2.162-.128 2.957-.364.905-.266 1.365-.63 1.365-1.075V18.16a3.7 3.7 0 0 1-1.19.569"
                />
            </svg>
        );
    }
};

export default IconDataCloudFilled;
