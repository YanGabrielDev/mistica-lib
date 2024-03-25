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

const IconBillQueriesEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.97 7.56c0 2.556 2.057 4.632 4.578 4.632.122 0 .244-.01.366-.019V22H5V3.854C5 2.83 5.825 2 6.832 2h10.25c.674 0 1.26.38 1.579.934l-.056-.002-.057-.003c-2.525 0-4.578 2.076-4.578 4.632m-.183 8.334a.55.55 0 0 0-.548-.554v.01h-3.06c.257-1.37 1.448-2.409 2.877-2.409.51 0 1.017.137 1.462.398a.55.55 0 0 0 .75-.204.56.56 0 0 0-.202-.758 4 4 0 0 0-2.015-.55c-2.034 0-3.716 1.536-3.983 3.517h-.59a.55.55 0 0 0-.549.555.55.55 0 0 0 .548.555h.59c.268 1.981 1.95 3.517 3.984 3.517a4 4 0 0 0 2.015-.55.56.56 0 0 0 .202-.758.543.543 0 0 0-.75-.204c-.445.26-.951.398-1.462.398-1.43 0-2.62-1.038-2.877-2.408h3.06a.55.55 0 0 0 .548-.555m4.762-4.442c-2.119 0-3.843-1.744-3.843-3.887s1.724-3.887 3.843-3.887 3.842 1.745 3.842 3.887-1.724 3.887-3.842 3.887m-2.747-3.887c0 1.531 1.233 2.778 2.747 2.778s2.746-1.247 2.746-2.778-1.233-2.778-2.747-2.778-2.746 1.247-2.746 2.778m2.643 2.404a.55.55 0 0 1-.548-.555.55.55 0 1 1 1.097 0 .55.55 0 0 1-.549.555m-.553-1.934a.55.55 0 0 0 .549.554.54.54 0 0 0 .543-.554c0-.166.066-.323.183-.441l.323-.327c.427-.432.38-1.166.066-1.579a1.33 1.33 0 0 0-1.06-.53h-.06c-.45 0-.872.246-1.101.644a.56.56 0 0 0 .201.758.55.55 0 0 0 .75-.203.18.18 0 0 1 .155-.09h.06c.07 0 .146.033.188.09a.4.4 0 0 1 .028.123l-.323.327a1.74 1.74 0 0 0-.502 1.228"
            />
        </svg>
    );
};

export default IconBillQueriesEuroFilled;