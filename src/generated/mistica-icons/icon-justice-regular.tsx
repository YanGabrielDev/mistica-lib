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

const IconJusticeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.43 9.345c.036 2.366 1.927 4.292 4.283 4.292 2.355 0 4.251-2.003 4.287-4.365 0-.037 0-.22-.108-.362l-3.571-6.548c-.108-.22-.252-.362-.608-.362H6.283c-.356 0-.5.147-.608.362L2.108 8.91C2 9.056 2 9.24 2 9.272c.036 2.366 1.928 4.36 4.283 4.36s4.251-1.93 4.283-4.29c0 0 0-.184-.108-.436l-2.96-5.452h3.784v17.088h-5.71a.724.724 0 0 0-.717.73c0 .402.324.728.716.728H18.43c.396 0 .716-.33.716-.729a.724.724 0 0 0-.716-.729h-5.715V3.454h3.783l-2.963 5.452c-.104.256-.104.44-.104.44M6.283 12.18a2.85 2.85 0 0 1-2.751-2.182h5.535c-.316 1.238-1.46 2.182-2.784 2.182M3.932 8.543l2.355-4.36 2.36 4.36zm13.785-4.36 2.355 4.36h-4.715zm-.004 7.996a2.85 2.85 0 0 1-2.752-2.182h5.503c-.324 1.238-1.427 2.182-2.751 2.182"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.352 15.383c-.216.216-.538.344-.96.373a59 59 0 0 1-1.906.002c-.444-.02-.786-.148-1.016-.375a1.3 1.3 0 0 1-.316-.584h4.511a1.25 1.25 0 0 1-.313.584m-2.308-7.654 2.37 5.758h-4.106zm-2.772 12.168q.7.001 1.039.338.17.175.259.456H7.425q.088-.281.256-.456c.222-.224.572-.338 1.039-.338zm-3.828-13.44h.173c.009 0 .017.006.026.006s.219-.003.398-.003v.003h.313c.009 0 .017-.006.026-.006h.17v12.128h-1.106zm-3.76 7.03H3.577l2.37-5.758zm-.162 1.896c-.228.227-.573.353-1.014.375a59.142 59.142 0 0 1-1.907-.003q-.631-.043-.962-.372a1.25 1.25 0 0 1-.313-.584h4.511q-.097.365-.315.584m14.475-1.241c0-.029-.014-.054-.017-.086a.6.6 0 0 0-.034-.17l-3-7.284c.137.06.262.128.359.222a.606.606 0 0 0 .888-.02.68.68 0 0 0-.02-.928c-.444-.444-1.048-.688-1.796-.725-.06-.003-3.387-.006-5.317-.006a1.4 1.4 0 0 0 .21-.165c.288-.29.436-.72.436-1.275 0-.56-.145-.99-.435-1.28-.276-.283-.678-.425-1.19-.425q-.005 0-.011.003V2h-.148c-.513 0-.914.142-1.19.424-.287.29-.435.72-.435 1.28 0 .556.145.986.435 1.276.06.063.134.117.21.165-1.932 0-5.26 0-5.316.006-.749.037-1.352.281-1.796.725a.675.675 0 0 0-.02.928.6.6 0 0 0 .453.202c.156 0 .313-.06.432-.182.094-.094.222-.165.356-.222l-3 7.284c-.023.054-.025.113-.034.17-.003.029-.017.057-.017.086v.003c0 .933.262 1.667.771 2.183.436.438 1.022.686 1.745.737a66 66 0 0 0 2.046.005c.763-.037 1.38-.284 1.833-.74.504-.503.757-1.218.772-2.114q0-.01.002-.017c0-.02.003-.034.003-.054 0-.037-.014-.069-.02-.103-.005-.031 0-.062-.008-.097L6.884 6.46c.928 0 2.217 0 3.307-.003v12.128H8.725c-.805 0-1.445.239-1.912.708-.484.487-.729 1.179-.729 2.052 0 .362.282.655.63.655.02 0 .036-.009.056-.011.017.002.034.011.054.011H17.18c.02 0 .037-.009.056-.011.018.002.035.011.055.011a.64.64 0 0 0 .629-.655c0-.876-.245-1.565-.729-2.052-.467-.47-1.107-.708-1.91-.708h-1.468V6.457c1.09 0 2.382 0 3.31.003l-2.257 7.485c-.012.034-.006.066-.012.097-.005.034-.02.066-.02.103q.002.025.003.054 0 .008.003.017c.014.896.27 1.61.771 2.114.456.456 1.073.703 1.836.74a65.907 65.907 0 0 0 2.04-.006c.72-.05 1.31-.298 1.745-.736.504-.518.766-1.253.766-2.186"
                />
            </svg>
        );
    }
};

export default IconJusticeRegular;
