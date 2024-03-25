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

const IconSunLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.914 11.53h2.513c.238 0 .423.195.418.42 0 .235-.185.42-.423.42h-2.514c-.042 0-.076-.009-.11-.017-.041 1.998-.602 3.396-1.398 4.375a.2.2 0 0 1 .104.067l1.6 1.586c.16.171.16.432 0 .6a.42.42 0 0 1-.305.117.4.4 0 0 1-.297-.117l-1.592-1.586q-.027-.03-.045-.062l-.014-.022c-1.55 1.426-3.59 1.653-4.422 1.678v2.438c0 .227-.194.42-.424.42a.424.424 0 0 1-.423-.42V18.99c-.888-.034-2.853-.277-4.36-1.667l-.017.029q-.011.023-.025.038l-1.6 1.592a.5.5 0 0 1-.177.1.45.45 0 0 1-.272.102.42.42 0 0 1-.297-.127.43.43 0 0 1 0-.6l1.754-1.734c.017-.017.034-.025.05-.034-.764-.978-1.305-2.36-1.355-4.332l-.006.002a.3.3 0 0 1-.081.015H2.578a.417.417 0 0 1-.423-.42c0-.228.185-.421.423-.421h2.618q.033.002.067.015l.034.01c.1-1.959.695-3.315 1.499-4.243a.2.2 0 0 0-.05-.033L4.982 5.526a.42.42 0 0 1 0-.6.413.413 0 0 1 .594 0l1.762 1.755.022.025q.009.013.02.025c1.491-1.264 3.363-1.457 4.201-1.474V2.575c0-.235.188-.42.423-.42.23 0 .424.185.424.42v2.682c.815.034 2.712.253 4.228 1.516.009-.008.017-.025.026-.042l1.821-1.804a.423.423 0 0 1 .603 0c.16.162.16.431 0 .6L17.285 7.33c-.008.008-.025.017-.042.025.83.928 1.432 2.276 1.542 4.198l.046-.01q.042-.013.082-.015m-7.17 6.618h.595c1.693-.033 5.624-.683 5.622-6.01 0-5.328-3.955-5.995-5.658-6.037-.152-.009-.323-.009-.49-.009h-.119c-1.678.017-5.574.634-5.574 6.012 0 5.389 3.93 6.02 5.625 6.044"
            />
        </svg>
    );
};

export default IconSunLight;