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

const IconChangePlanRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.138 11.707h-5.81a.56.56 0 0 1-.56-.56c0-.309.253-.56.56-.56h5.81c.308 0 .56.251.56.56 0 .308-.252.56-.56.56M19.138 14.443h-5.81a.56.56 0 0 1-.56-.56c0-.308.253-.56.56-.56h5.81c.308 0 .56.252.56.56s-.252.56-.56.56M13.329 17.197h5.81c.307 0 .56-.252.56-.56a.56.56 0 0 0-.56-.56h-5.81a.56.56 0 0 0-.56.56c0 .308.252.56.56.56"
            />
            <path
                fill={fillColor}
                d="M20.063 20.488h-8.35c-.676 0-1.096-.423-1.096-1.1V4.588c0-.667.42-1.081 1.093-1.084h5.21a.55.55 0 0 1 .395.165l4.37 4.37a.55.55 0 0 1 .165.395v10.978c0 .21-.02.481-.182.708-.118.166-.35.364-.793.364q-.404.004-.812.003m.666-11.49h-1.624c-.824 0-1.516-.258-2.003-.745s-.742-1.18-.742-2V4.628h-4.622v14.74h8.991zm-.793-1.12L17.48 5.42v.832c0 .518.143.936.415 1.207.271.272.689.418 1.21.418zM7.645 8.068a.42.42 0 0 1-.274-.74c.145-.124.3-.257.438-.378h-.73c-.686 0-1.198.157-1.52.468-.334.322-.505.846-.505 1.56v.832a.42.42 0 1 1-.84 0v-.832c0-.95.255-1.68.762-2.165.484-.465 1.19-.703 2.103-.703h.742c-.173-.151-.34-.294-.411-.355l-.036-.031a.42.42 0 0 1-.048-.591.42.42 0 0 1 .59-.048l.055.046c.169.146.682.586.893.797.372.375.375.838.005 1.207-.098.098-.537.479-.79.698l-.16.137a.44.44 0 0 1-.274.098M4.177 15.72h3.096a.42.42 0 1 0 0-.84H4.177a.42.42 0 1 0 0 .84M4.177 17.177h3.096a.42.42 0 1 0 0-.84H4.177a.42.42 0 1 0 0 .84M7.273 18.634H4.177a.42.42 0 1 1 0-.84h3.096a.42.42 0 1 1 0 .84"
            />
            <path
                fill={fillColor}
                d="M5.771 20.469H3.007c-.51 0-.852-.345-.852-.858v-8.156c0-.499.35-.85.852-.85h3.288c.149 0 .291.06.398.163l2.428 2.429a.55.55 0 0 1 .166.395v6.03c0 .497-.345.841-.84.841zm2.392-1.12v-5.026h-.717c-.6 0-1.067-.165-1.389-.487s-.487-.79-.487-1.39v-.72H3.275v7.622zm-.344-5.866-1.41-1.41v.373c0 .737.3 1.037 1.037 1.037z"
            />
        </svg>
    );
};

export default IconChangePlanRegular;