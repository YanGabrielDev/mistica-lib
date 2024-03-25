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

const IconOfferLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m14.137 18.574-1.823 3.243a.355.355 0 0 1-.621 0l-1.822-3.243-3.38 1.55a.35.35 0 0 1-.357-.036.36.36 0 0 1-.146-.33l.43-3.7-3.646-.736a.356.356 0 0 1-.192-.59l2.517-2.74-2.522-2.74a.36.36 0 0 1-.077-.351.37.37 0 0 1 .27-.238l3.645-.737-.43-3.7a.36.36 0 0 1 .503-.366l3.38 1.55 1.823-3.242c.127-.224.493-.224.62 0l1.824 3.243 3.38-1.55a.35.35 0 0 1 .36.036c.106.073.16.201.147.33l-.43 3.7 3.646.736a.356.356 0 0 1 .192.59l-2.517 2.74 2.521 2.748a.36.36 0 0 1 .078.353.37.37 0 0 1-.27.237l-1.754.353a.357.357 0 0 1-.141-.7l1.133-.229-2.312-2.515a.354.354 0 0 1 0-.485l2.311-2.516-3.343-.672a.36.36 0 0 1-.284-.394l.393-3.393-3.101 1.422a.36.36 0 0 1-.462-.15l-1.676-2.978-1.672 2.968a.356.356 0 0 1-.461.151L6.769 4.771l.393 3.393a.355.355 0 0 1-.284.394l-3.343.672 2.311 2.516a.354.354 0 0 1 0 .484l-2.311 2.516 3.343.672c.183.037.307.21.284.394l-.393 3.393 3.102-1.422a.36.36 0 0 1 .46.15l1.673 2.978 1.672-2.972a.356.356 0 0 1 .461-.151l3.102 1.422-.128-1.107a.36.36 0 0 1 .712-.082l.201 1.738a.36.36 0 0 1-.507.366zm3.933-2.653a.714.714 0 0 0-.712-.713.714.714 0 0 0 0 1.427c.392 0 .712-.32.712-.714"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.723 20.458c.353.64.716 1.298 1.281 1.298.566 0 .933-.664 1.289-1.314v-.002c.213-.386.504-.914.717-.97.229-.062.759.259 1.148.494l.003.002c.644.389 1.252.756 1.726.481.478-.277.464-.994.448-1.753-.012-.448-.023-1.065.14-1.227.16-.16.76-.149 1.207-.14h.024c.757.017 1.472.033 1.75-.448.274-.474-.093-1.082-.483-1.726-.235-.386-.557-.919-.495-1.151.055-.213.583-.504.97-.716l.002-.001c.644-.353 1.308-.72 1.308-1.289 0-.568-.667-.935-1.311-1.288l-.002-.001c-.386-.213-.914-.504-.97-.716-.062-.23.259-.76.494-1.149l.002-.003c.389-.644.756-1.252.481-1.725-.277-.479-.994-.465-1.753-.448-.448.011-1.065.022-1.227-.14-.16-.16-.149-.761-.14-1.208v-.023c.017-.758.032-1.473-.448-1.75-.474-.274-1.082.093-1.726.482-.386.235-.919.558-1.151.496-.213-.056-.503-.584-.716-.97l-.001-.002-.002-.004c-.353-.643-.716-1.307-1.284-1.307-.563 0-.926.655-1.281 1.296l-.01.018-.001.001c-.213.387-.504.915-.716.97-.23.062-.76-.258-1.149-.493l-.003-.002c-.644-.39-1.252-.756-1.725-.482-.479.277-.465.995-.448 1.754.011.448.022 1.064-.14 1.227-.16.16-.761.148-1.208.14H5.3c-.757-.017-1.472-.033-1.749.448-.274.473.093 1.081.482 1.725.235.387.558.922.496 1.152-.056.212-.584.503-.97.716h-.002l-.004.003c-.643.355-1.307.722-1.307 1.286 0 .566.667.933 1.31 1.286h.002c.387.213.915.504.97.717.062.23-.258.76-.493 1.148l-.002.003-.004.008c-.385.641-.748 1.246-.475 1.72.277.48.995.465 1.754.449.448-.011 1.064-.023 1.227.14.16.16.148.76.14 1.207v.024c-.017.758-.033 1.472.448 1.75.473.274 1.081-.093 1.725-.483.387-.235.922-.557 1.152-.495.212.056.503.584.716.97zm-.579-1.526a1 1 0 0 0-.207-.025c-.415 0-.885.283-1.378.58-.384.232-.967.585-1.154.476-.196-.112-.182-.801-.171-1.258V18.7c.014-.668.027-1.296-.306-1.628-.332-.333-.963-.32-1.63-.305h-.015c-.456.008-1.137.02-1.248-.171-.107-.184.231-.747.463-1.133l.013-.021c.35-.577.68-1.123.558-1.586-.118-.441-.661-.74-1.24-1.059l-.004-.002c-.406-.222-1.02-.56-1.02-.796 0-.233.602-.565 1.008-.789l.012-.006.018-.01c.57-.316 1.11-.614 1.226-1.055.123-.46-.208-1.008-.558-1.585-.232-.384-.585-.967-.476-1.154.112-.196.801-.182 1.258-.171h.005c.67.014 1.298.027 1.63-.305.333-.333.32-.964.306-1.632v-.014c-.009-.456-.021-1.137.17-1.248.183-.108.755.236 1.142.468l.013.008c.577.35 1.123.68 1.585.558.444-.118.743-.661 1.062-1.24l.003-.004c.22-.406.557-1.014.792-1.014.233 0 .565.602.79 1.008l.006.011.003.007c.316.575.615 1.12 1.058 1.237.459.123 1.004-.206 1.583-.555l.003-.002c.384-.233.966-.586 1.154-.476.192.11.18.77.171 1.227v.033c-.014.67-.027 1.298.305 1.63.333.333.964.32 1.631.306h.015c.456-.009 1.136-.021 1.248.17.108.183-.236.755-.469 1.142l-.008.013c-.35.577-.68 1.123-.557 1.585.117.441.66.74 1.239 1.059l.005.003c.406.22 1.02.56 1.02.795 0 .233-.602.565-1.009.79l-.011.006-.007.003c-.574.316-1.12.615-1.237 1.058-.123.459.206 1.004.556 1.583l.002.003c.232.383.585.966.476 1.154-.11.192-.774.18-1.23.171h-.033c-.667-.014-1.298-.028-1.63.305-.334.333-.32.963-.306 1.631v.014c.008.457.02 1.137-.171 1.249-.184.107-.747-.232-1.133-.464l-.021-.013c-.577-.35-1.123-.68-1.586-.557-.44.117-.74.66-1.058 1.239l-.003.005c-.222.406-.56 1.02-.796 1.02-.233 0-.565-.603-.789-1.009l-.006-.011-.004-.007c-.315-.575-.614-1.12-1.058-1.237"
                />
            </svg>
        );
    }
};

export default IconOfferLight;
