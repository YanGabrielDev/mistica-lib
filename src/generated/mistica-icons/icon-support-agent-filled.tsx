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

const IconSupportAgentFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.739 11.642h4.417c1.217 0 2.21-.964 2.207-2.144v-.204c0-3.884-3.184-7.157-7.099-7.289-2.016-.072-3.93.636-5.382 1.992C5.43 5.354 4.63 7.182 4.63 9.138c0 .396.33.716.738.716a.73.73 0 0 0 .738-.716c0-1.564.644-3.028 1.803-4.117 1.159-1.084 2.689-1.648 4.306-1.596 3.13.108 5.68 2.74 5.68 5.865v.204a.73.73 0 0 1-.739.716h-4.417a.73.73 0 0 0-.739.716.73.73 0 0 0 .739.716"
                />
                <path
                    fill={fillColor}
                    d="M12.739 12.715h2.206c2.66.788 4.426 2.692 4.422 5.024V22H4.63v-4.253c0-2.328 1.728-4.184 4.384-4.968-1.101-.852-1.806-2.16-1.806-3.629 0-1.252.515-2.388 1.353-3.224l.03-.034.031-.034c.095-.092.19-.172.285-.252q.016-.016.032-.03.014-.011.026-.022.016-.013.033-.025a8 8 0 0 1 .338-.24 6 6 0 0 1 .396-.232 7 7 0 0 1 .42-.192 10 10 0 0 1 .403-.14l.039-.012a4 4 0 0 1 .441-.104q.008 0 .017-.004c.107-.021.225-.036.338-.05l.037-.006q.02-.002.04-.007l.05-.009A5 5 0 0 1 12 4.51c.109 0 .21.007.317.015l.022.001q.117.004.235.02l.06.008q.06.006.117.016.167.024.334.06h.004c2.058.488 3.626 2.34 3.696 4.517h-4.046c-1.015 0-1.84.8-1.84 1.784 0 .985.825 1.785 1.84 1.785"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.625 3.712C15.555 2.68 14 2.155 12.01 2.155c-1.79 0-3.233.423-4.283 1.26-1.1.877-1.756 2.188-1.952 3.894a.56.56 0 0 0 1.112.129c.16-1.403.677-2.46 1.535-3.146.846-.672 2.053-1.017 3.582-1.017 1.692 0 2.983.418 3.84 1.244.889.852 1.337 2.174 1.34 3.927l-.009.544v.008c0 .185-.03.432-.17.574q-.171.168-.553.168h-2.529c-.157-.232-.429-.367-.782-.367-.577 0-.938.359-.938.933 0 .283.084.513.247.678s.403.255.689.255.526-.087.689-.255a.7.7 0 0 0 .098-.123h2.518c.56 0 1.011-.165 1.339-.49s.504-.799.504-1.364l.008-.544v-.008c.009-2.076-.557-3.67-1.669-4.743M20.471 21.85H3.538a.56.56 0 0 1-.56-.56v-1.64c0-1.565.49-2.904 1.42-3.87 1.011-1.05 2.513-1.605 4.34-1.605h6.534c1.826 0 3.328.554 4.339 1.605.93.966 1.42 2.305 1.42 3.87v1.64c0 .31-.25.56-.56.56"
                />
                <path
                    fill={fillColor}
                    d="M12.05 11.376c.275.278.65.423 1.09.423.415 0 .776-.131 1.042-.38h1.563c-.711 1.128-1.977 1.725-3.73 1.725-2.838 0-4.401-1.563-4.401-4.4s1.563-4.401 4.4-4.401 4.401 1.563 4.401 4.4q-.001.223-.014.437h-2.23c-.263-.238-.619-.367-1.03-.367-.437 0-.807.143-1.082.415-.274.272-.417.644-.417 1.078 0 .429.143.799.409 1.07"
                />
            </svg>
        );
    }
};

export default IconSupportAgentFilled;
