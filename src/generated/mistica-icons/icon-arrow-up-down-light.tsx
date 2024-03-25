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

const IconArrowUpDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.808 22h6.555l.004-6.644c0-.436-.28-.832-.707-1.02-.44-.184-.908-.104-1.21.204l-1.243 1.264-8.425-8.576-1.733 1.764c-.118.12-.303.104-.437.048-.13-.056-.279-.176-.279-.356v-5.96h5.844c.173 0 .295.156.35.284s.07.324-.047.444L9.747 5.216l6.924 7.04a.35.35 0 0 0 .495 0 .367.367 0 0 0 0-.504l-6.421-6.536 1.242-1.264c.294-.308.377-.796.2-1.232-.18-.436-.574-.72-1.002-.72H4.63v6.664c0 .436.279.832.707 1.02.44.184.908.104 1.21-.204l1.25-1.264 8.434 8.56 1.733-1.764c.118-.12.303-.104.436-.048.13.056.28.176.28.356v5.956h-5.856c-.173 0-.295-.156-.35-.284s-.07-.324.047-.444l1.717-1.764-4.456-4.536a.35.35 0 0 0-.495 0 .367.367 0 0 0 0 .504l3.961 4.032-1.242 1.264c-.295.308-.377.796-.2 1.232.18.436.574.72 1.002.72"
                />
                <path
                    fill={fillColor}
                    d="M8.14 13.78c.38 0 .699-.316.699-.712a.707.707 0 0 0-.7-.712c-.38 0-.7.316-.7.712 0 .388.311.712.7.712"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.503 12.014a.96.96 0 0 1-.96-.96l-.003-3.39-2.247-.02a.49.49 0 0 1-.44-.282.515.515 0 0 1 .085-.569l4.434-4.47a.5.5 0 0 1 .31-.169.49.49 0 0 1 .43.168l4.411 4.474.008.01.009.01a.51.51 0 0 1 .064.548.49.49 0 0 1-.442.283l-2.244.02.006 3.387c0 .529-.432.96-.961.96zm7.463 9.729c.09.07.193.103.3.103.14 0 .274-.059.37-.17l4.433-4.471a.515.515 0 0 0 .084-.569.49.49 0 0 0-.44-.283l-2.246-.02-.003-3.392c0-.529-.431-.96-.96-.96h-2.46c-.53 0-.96.431-.96.96l.005 3.39-2.244.02a.49.49 0 0 0-.442.282.51.51 0 0 0 .072.56l.009.009 4.412 4.473a.5.5 0 0 0 .07.068m.302-.49-4.286-4.342 2.177-.017h.006a.5.5 0 0 0 .484-.51l-.005-3.44a.4.4 0 0 1 .4-.4h2.46a.4.4 0 0 1 .4.4l.006 3.44a.5.5 0 0 0 .484.51h.006l2.176.017zm-8.165-10.2c0 .222.18.401.4.401h2.46a.4.4 0 0 0 .4-.4l-.005-3.437a.5.5 0 0 1 .484-.51h.006l2.176-.017L8.74 2.748 4.43 7.084l2.176.017h.006c.274.011.49.238.487.513z"
                />
            </svg>
        );
    }
};

export default IconArrowUpDownLight;