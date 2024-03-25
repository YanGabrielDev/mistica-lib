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

const IconDogLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.941 11.893q.422 0 .648-.225.233-.233.234-.686 0-.452-.234-.686-.226-.225-.648-.225-.421 0-.648.225-.234.233-.234.686 0 .452.234.686.227.224.648.225M14.707 11.668q-.227.224-.648.225c-.28 0-.499-.076-.649-.225q-.233-.234-.234-.686c0-.3.079-.532.234-.686q.226-.225.649-.225.421 0 .648.225.233.234.234.686 0 .453-.234.686"
            />
            <path
                fill={fillColor}
                d="M19.006 14.109c.491 4.614-2.502 6.89-6.927 6.89h-.159c-4.425 0-7.418-2.276-6.926-6.89q.03-.288.073-.58v.002l-.51-.04a3 3 0 0 1-.431-.063c-.614-.13-1.173-.434-1.56-.882-.695-.8-.713-1.878-.257-2.928.4-.921 1.02-1.826 1.831-2.691a11.7 11.7 0 0 1 1.967-1.715c.08-.057.378-.267.644-.394.252-.123.528-.193.809-.208a1.6 1.6 0 0 1 .36.018h.004l.01.002q.024.003.07.012l.028.006q.12.025.257.078c.227.09.44.217.625.381l.022.02-.004.004C9.717 4.395 10.726 4 11.923 4h.152c1.194 0 2.202.392 2.987 1.127l.023-.02c.184-.164.397-.292.624-.381q.137-.052.257-.078l.029-.006c.028-.006.054-.01.068-.012l.012-.002h.003c.012-.002.044-.008.084-.01q.143-.017.276-.008c.281.015.557.085.81.208a5 5 0 0 1 .681.423 11.7 11.7 0 0 1 1.93 1.686c.81.865 1.43 1.77 1.83 2.69.456 1.05.438 2.13-.256 2.93-.388.446-.947.751-1.56.88q-.215.046-.432.063l-.51.041q.043.292.074.578m-6.712 6.281c2.026-.035 3.642-.58 4.7-1.558 1.072-.991 1.656-2.506 1.427-4.657-.327-3.065-1.754-6.716-3.744-8.59-.67-.63-1.536-.978-2.601-.978h-.152c-1.066 0-1.932.348-2.601.978-1.99 1.874-3.418 5.525-3.745 8.59-.229 2.151.355 3.666 1.428 4.657 1.057.977 2.673 1.523 4.7 1.558V17.94a2 2 0 0 1-.324-.086 2.4 2.4 0 0 1-.3-.139 3.6 3.6 0 0 1-.597-.39c-.247-.198-.521-.472-.693-.84l-.004-.01a1.48 1.48 0 0 1-.01-1.235c.192-.42.529-.635.761-.739l.008-.003c.265-.117.553-.164.811-.168.635-.01.648-.01 1.283 0 .26.004.548.052.814.169h.002c.232.103.57.318.765.74.212.464.135.922-.012 1.24-.171.37-.445.645-.692.843l-.008.007a3.7 3.7 0 0 1-.617.399l-.003.002-.002.001-.002.001c-.022.011-.141.074-.268.121a2 2 0 0 1-.324.087zM8.534 5.533l-.019.021a1.5 1.5 0 0 0-.435-.26l-.002-.001-.001-.001a1 1 0 0 0-.163-.05l-.023-.004-.046-.008-.012-.002H7.83l-.039-.006h-.01l-.01-.002a1 1 0 0 0-.175-.004H7.59a1.5 1.5 0 0 0-.59.151l-.002.001a4 4 0 0 0-.555.343h-.001l-.002.002-.008.006-.013.01-.014.01c-.766.55-1.234.96-1.842 1.61-.773.825-1.349 1.671-1.716 2.514l-.002.006c-.394.91-.33 1.708.159 2.272.29.336.73.584 1.24.692h.001q.176.037.358.052l.491.04.072.005c.493-2.675 1.7-5.585 3.368-7.397m7.386-.24a1.5 1.5 0 0 0-.436.261c1.658 1.814 2.858 4.711 3.35 7.376l.071-.006.49-.04a3 3 0 0 0 .36-.05v-.001c.511-.108.95-.356 1.24-.692.49-.564.553-1.363.16-2.272l-.003-.006c-.367-.843-.943-1.689-1.716-2.514a11 11 0 0 0-1.842-1.61l-.013-.01-.013-.01-.009-.006-.001-.001-.002-.001a4 4 0 0 0-.555-.343h-.003a1.5 1.5 0 0 0-.588-.152h-.006a1 1 0 0 0-.175.004l-.01.002h-.01l-.039.005-.004.001-.012.002-.045.008-.023.004q-.084.019-.164.05zm-5.142 9.762-.007.003a.9.9 0 0 0-.462.44.85.85 0 0 0 .01.716l.003.007c.117.25.314.456.524.623.166.134.305.223.508.331l.004.003.005.003.012.006h.001c.023.013.115.06.206.095q.142.052.284.067h.002q.042.005.088.007h.088q.04-.001.089-.007c.092-.01.19-.032.285-.067.09-.034.181-.082.2-.092l.005-.002h.001a3 3 0 0 0 .526-.34l.008-.007c.209-.168.405-.374.52-.625a.85.85 0 0 0 .012-.718.9.9 0 0 0-.465-.441h-.001a1.6 1.6 0 0 0-.592-.121c-.63-.01-.636-.01-1.264 0-.2.003-.41.04-.59.12"
            />
        </svg>
    );
};

export default IconDogLight;
