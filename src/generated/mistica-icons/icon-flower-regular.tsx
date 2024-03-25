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

const IconFlowerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.9 6.962c2.325-.656 4.098.358 4.748 2.722.647 2.37-.356 4.18-2.684 4.838q-.467.121-.952.126c.342.283.642.585.857.91v.003c.661.995.916 2.025.74 2.975-.177.955-.787 1.812-1.762 2.484-.787.547-1.577.816-2.325.816-1.149 0-2.202-.63-3.023-1.86a4.2 4.2 0 0 1-.462-1.003 4.4 4.4 0 0 1-.47 1.02c-.661.991-1.505 1.613-2.44 1.792-.19.04-.387.056-.583.056-.762 0-1.554-.274-2.325-.812-1.991-1.373-2.375-3.412-1.022-5.454.213-.322.507-.624.843-.905a4 4 0 0 1-1.014-.134c-2.325-.658-3.325-2.468-2.678-4.838.314-1.156.922-2.02 1.75-2.495.83-.474 1.866-.552 2.998-.227.457.131.919.392 1.373.714-.196-.557-.322-1.11-.32-1.616 0-2.451 1.443-3.919 3.857-3.919h.003c2.412.011 3.846 1.485 3.838 3.944 0 .49-.126 1.028-.317 1.574.454-.322.916-.582 1.37-.711m-2.277-.869c.005-1.753-.9-2.683-2.62-2.691-1.72 0-2.63.927-2.63 2.677-.005.81.51 2.068 1.42 3.499a.2.2 0 0 1 .045-.012l.023-.005q.208-.066.442-.106l.107-.017a3.95 3.95 0 0 1 1.729.12q.027.005.052.014c.916-1.434 1.432-2.686 1.432-3.479m.319 6.765c1.613.51 2.944.678 3.695.468 1.658-.474 2.291-1.616 1.829-3.305-.462-1.684-1.583-2.328-3.241-1.855-.74.21-1.76 1.023-2.843 2.255q.016.02.03.044l.02.032.05.081c.068.1.127.21.177.322q.06.13.106.263.02.055.035.112l.016.056q.045.167.076.337l.014.084.014.084q.067.509.022 1.022m3.465 5.445c.118-.63-.067-1.316-.546-2.039-.468-.697-1.647-1.465-3.28-2.143l-.023.031-.022.031a3 3 0 0 1-.23.325l-.027.036-.037.048a2.6 2.6 0 0 1-.37.325l-.049.03q-.03.016-.06.037a3 3 0 0 1-.342.182l-.074.031-.074.03q-.21.08-.429.127l-.034.01-.042.012c.014 1.796.28 3.202.745 3.9.967 1.45 2.227 1.697 3.647.714.71-.49 1.13-1.056 1.247-1.686M8.9 20.562c.619-.12 1.176-.546 1.658-1.269.462-.697.729-2.1.74-3.899l-.06-.017-.06-.016a2.6 2.6 0 0 1-.894-.342l-.058-.033q-.03-.014-.057-.032a2.3 2.3 0 0 1-.373-.316l-.043-.052-.043-.052a3 3 0 0 1-.222-.302l-.025-.035q-.015-.018-.025-.035c-1.614.675-2.776 1.434-3.23 2.117-.963 1.454-.723 2.74.698 3.72q1.064.737 1.994.563m-3.546-7.224c.762.221 2.092.048 3.703-.462a4.7 4.7 0 0 1 .036-1.149l.02-.103.017-.084a4 4 0 0 1 .131-.457l.017-.047q.019-.056.042-.11c.079-.179.165-.344.275-.493-1.076-1.23-2.09-2.039-2.83-2.252a3.6 3.6 0 0 0-.991-.154 2.1 2.1 0 0 0-1.076.266c-.546.314-.94.902-1.17 1.743-.23.843-.191 1.551.117 2.109.308.557.882.958 1.709 1.193m6.784.857c1.11-.042 1.392-.577 1.513-1.042v-.003q.092-.36.084-.73c0-.707-.185-1.2-.546-1.471a1 1 0 0 1-.096-.062q-.404-.249-1.098-.25c-.46 0-.832.088-1.106.259l-.05.029-.051.032c-.353.277-.532.768-.532 1.462q.001.19.02.376l.011.066q.006.03.01.06l.008.049q.01.08.03.155.012.03.022.065c.117.423.409.988 1.565 1.014h.076q.07-.009.14-.009"
            />
        </svg>
    );
};

export default IconFlowerRegular;