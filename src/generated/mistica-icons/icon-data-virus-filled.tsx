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

const IconDataVirusFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.085 4.04c.18.524.863.98 1.98 1.314 1.182.353 2.732.552 4.384.549 1.653 0 3.205-.196 4.384-.55 1.095-.324 1.765-.761 1.963-1.268 0-.008.009-.017.009-.017-.146-.549-.81-1.014-1.98-1.364-1.171-.353-2.732-.549-4.384-.549s-3.21.196-4.392.549c-1.112.333-1.793.796-1.972 1.32.008.008.008.008.008.016m2.176 6.653a.44.44 0 0 0-.42.468l.045.619-.378.115.007-.073q.009-.072.01-.146c0-1.409-1.373-1.409-1.958-1.409-.586 0-1.958 0-1.958 1.409q.002.116.017.224l-.4-.123.033-.614a.45.45 0 0 0-.423-.47c-.252-.031-.457.176-.47.423l-.051.963c-.012.205.12.39.316.448l.729.222c-.138.32-.21.68-.244 1.05H5.57a.445.445 0 0 0-.446.446v.638a.445.445 0 1 0 .891 0v-.193h.07c.006.457.048.9.151 1.297l-.61.182a.444.444 0 0 0-.317.45l.05.962a.446.446 0 0 0 .446.423h.028a.445.445 0 0 0 .42-.468l-.034-.614.404-.123c.364.468.952.773 1.935.773.98 0 1.569-.302 1.933-.767l.39.117-.034.614a.445.445 0 0 0 .423.468h.022a.45.45 0 0 0 .446-.423l.05-.961a.45.45 0 0 0-.316-.451l-.594-.18c.106-.397.148-.84.154-1.299h.07v.193a.445.445 0 1 0 .89 0v-.638a.445.445 0 0 0-.445-.446h-.543a3.6 3.6 0 0 0-.247-1.056l.712-.216a.444.444 0 0 0 .316-.448l-.05-.963c-.014-.247-.224-.457-.47-.423zm-2.705.462c1.062 0 1.064.215 1.067.51v.003l-.003.02a3.4 3.4 0 0 0-1.067-.158c-.415 0-.762.056-1.062.157l-.001-.008-.002-.009c0-.3 0-.515 1.068-.515m-.003 5.524c-1.247 0-1.586-.457-1.588-2.13 0-1.041.148-1.598.498-1.867.23-.174.588-.26 1.09-.26.498 0 .854.083 1.084.254.353.266.504.826.504 1.874 0 1.672-.342 2.129-1.588 2.129m-.025-3.594c.246 0 .445.199.445.445v2.39a.448.448 0 0 1-.896.003V13.53a.45.45 0 0 1 .45-.445m5.198-2.23-.005.341q-.002.239-.009.514v.005c0 .098 0 .202-.005.3 0 .12 0 .24-.009.364q.002.167-.008.339-.001.134-.01.27l-.007.15q0 .294-.025.586.002.108-.008.218a43 43 0 0 1-.103 1.49q-.003.027-.004.05l-.05.412v.009a6 6 0 0 1-.065.47 1.5 1.5 0 0 1-.114.373 3 3 0 0 1-.227.415q-.006.005-.007.009-.004.007-.01.007a4.5 4.5 0 0 1-.715.835l-.025.025a11 11 0 0 1-1.486 1.175l-.018.013c-.347.244-.706.462-1.04.664h-.008a22 22 0 0 1-1.218.664c-1.473-.729-4.583-2.588-4.86-4.177-.252-1.431-.308-4.476-.316-5.812h.016c1.163 0 1.925-.502 2.608-.955.706-.47 1.373-.908 2.552-.908.163 0 .303.016.45.032l.02.002h.009a3.5 3.5 0 0 1 1.12.314q.026.008.042.025.229.11.449.235.021.02.047.034.209.13.415.266l.025.017c.669.438 1.418.93 2.6.93zm1.465.077q.128.004.258.005c1.65 0 3.21-.185 4.373-.53 1.168-.356 1.8-.89 2.014-1.286V5.343q-.644.515-1.762.84c-1.258.38-2.902.583-4.63.583-1.729 0-3.37-.202-4.63-.583-.774-.221-1.365-.513-1.796-.86v2.193a4 4 0 0 0-.462-.025h-.009c-1.54 0-2.432.588-3.218 1.105l-.02.013c-.74.489-1.323.873-2.406.703a.61.61 0 0 0-.745.615c0 .42-.007 4.748.333 6.654.454 2.616 5.258 4.947 5.796 5.204q.125.051.26.056a.7.7 0 0 0 .26-.056 23 23 0 0 0 2.348-1.32c1.18.331 2.684.516 4.283.516 1.641 0 3.202-.193 4.38-.54 1.348-.406 2.023-.956 2.023-1.628V15.43c-.454.35-1.056.646-1.762.86-1.249.37-2.89.582-4.63.582-.303 0-.592-.016-.886-.033h-.016l.016-.052c.021-.066.044-.136.057-.2v-.01c.03-.17.056-.38.081-.59l.25.01q.245.014.495.015c1.65 0 3.21-.204 4.381-.552 1.168-.356 1.801-.882 2.014-1.285v-3.813c-.454.356-1.056.647-1.762.849-1.249.38-2.89.583-4.63.583q-.136-.001-.267-.005-.128-.003-.254-.004.006-.224.008-.429.003-.23.009-.428.12 0 .246.004"
            />
        </svg>
    );
};

export default IconDataVirusFilled;
