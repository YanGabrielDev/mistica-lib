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

const IconBugRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.6 12.084c.337 0 .608.278.608.617v1.644a.613.613 0 0 1-.608.616.613.613 0 0 1-.607-.616v-1.028h-1.224v.088q.002.043.002.088c0 1.586-.126 2.953-.498 4.062l1.974.608a.62.62 0 0 1 .432.622l-.132 2.476a.61.61 0 0 1-.608.582h-.033a.616.616 0 0 1-.577-.647l.106-1.994-1.686-.518c-.832 1.316-2.28 2.05-4.745 2.05-2.474 0-3.922-.74-4.75-2.061l-1.726.529.106 1.994c.02.34-.24.63-.577.647h-.034a.615.615 0 0 1-.607-.582l-.132-2.476a.615.615 0 0 1 .431-.622l2.017-.62c-.367-1.106-.493-2.47-.493-4.05q0-.045.002-.09v-.086h-1.22v1.028a.613.613 0 0 1-.608.616.613.613 0 0 1-.608-.616V12.7c0-.34.272-.617.608-.617h1.87c.08-1.285.298-2.554.864-3.568L4.718 7.77a.62.62 0 0 1-.431-.622l.131-2.476a.613.613 0 0 1 .642-.583c.336.02.594.308.577.647L5.53 6.731l2.286.704c-.16-.384-.244-.83-.244-1.356 0-1.838.978-2.602 2.323-2.908a.62.62 0 0 1 .028-.829.6.6 0 0 1 .86 0l.644.653a14 14 0 0 1 1.148 0l.645-.653a.605.605 0 0 1 .862 0c.224.227.23.583.031.824 1.356.3 2.342 1.064 2.342 2.91 0 .515-.081.955-.235 1.333l2.215-.68-.106-1.995a.614.614 0 0 1 .577-.647c.322-.025.624.244.641.583l.132 2.476a.61.61 0 0 1-.431.622l-2.39.734c.49.862.77 2.014.866 3.582zM8.79 6.076c0 .333.043.58.107.773.813-.4 1.838-.597 3.11-.597 1.277 0 2.302.202 3.114.603.065-.19.115-.432.115-.776.003-1.264-.479-1.863-3.221-1.863s-3.224.6-3.224 1.86m7.763 7.417c0-2.882-.446-4.453-1.488-5.246-.675-.516-1.675-.765-3.058-.765-1.395 0-2.404.255-3.079.779-1.03.798-1.468 2.361-1.468 5.232 0 4.605 1.062 6.009 4.547 6.009s4.546-1.404 4.546-6.009M12.55 9.406a.613.613 0 0 0-.608-.616.61.61 0 0 0-.608.616v7.933c0 .34.272.617.608.617a.613.613 0 0 0 .608-.617z"
            />
        </svg>
    );
};

export default IconBugRegular;
