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

const IconChangePlanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.836 8.34q.005.021.006.042l.002.018q0 .018.006.035v10.98c0 .21-.02.482-.182.709-.12.165-.353.364-.793.364h-9.162c-.675-.003-1.095-.423-1.095-1.1V4.588c0-.667.42-1.081 1.092-1.081h5.21l.033.001.023.002q.021 0 .042.005l.011.003.007.001.041.01h.006l.023.009.024.008h.003l.042.02.006.002.036.023.009.005.044.034a.3.3 0 0 1 .042.037l4.37 4.37q.018.016.036.038l.005.006.004.006.025.033.002.006.001.002.003.003q.013.017.022.037l.003.008.01.021.01.021.002.006.017.048v.005l.006.024.005.024a.03.03 0 0 1 .003.014M4.63 10.23a.42.42 0 0 0 .42-.42v-.832c0-.714.168-1.238.504-1.56.322-.31.835-.468 1.521-.468h.729c-.1.088-.208.18-.315.272l-.12.104a.418.418 0 1 0 .54.641l.003-.001.001-.001.003-.003c.137-.118.826-.71.95-.835.369-.37.366-.832-.006-1.207a23 23 0 0 0-.893-.797l-.054-.047a.42.42 0 0 0-.591.048.42.42 0 0 0 .047.591l.024.02c.063.054.243.209.427.372h-.748c-.91 0-1.619.236-2.103.703-.504.488-.762 1.216-.762 2.166v.832c.003.235.19.422.423.422m4.484 2.97L6.688 10.77a.56.56 0 0 0-.395-.165H3c-.501.003-.851.353-.851.851v8.157c0 .51.342.855.851.855h5.437c.493 0 .84-.348.84-.84v-6.034a.55.55 0 0 0-.165-.395m-4.94 5.434a.42.42 0 1 1 0-.84h3.095a.42.42 0 1 1-.003.84zm3.092-1.457H4.172a.42.42 0 1 1 0-.84h3.096a.42.42 0 1 1-.003.84m-3.093-1.456a.42.42 0 1 1 0-.84h3.096a.42.42 0 1 1-.003.84zm3.27-2.238c-.737 0-1.037-.3-1.037-1.037v-.372l1.409 1.409zm11.691 3.714c.308 0 .56-.252.56-.56a.56.56 0 0 0-.56-.56h-5.81a.56.56 0 0 0-.56.56c0 .308.252.56.56.56zm-5.81-2.754h5.81c.308 0 .56-.252.56-.56a.56.56 0 0 0-.56-.56h-5.81a.56.56 0 0 0-.56.56c0 .308.252.56.56.56m5.81-2.733c.308 0 .56-.253.56-.56a.56.56 0 0 0-.56-.561h-5.81a.56.56 0 0 0-.56.56c0 .308.252.56.56.56zm-1.244-4.25c.275.275.692.418 1.21.418h.832L17.475 5.42v.832c0 .518.14.933.414 1.207"
            />
        </svg>
    );
};

export default IconChangePlanFilled;
