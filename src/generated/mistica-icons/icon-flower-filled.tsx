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

const IconFlowerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.655 9.688c.625 2.291-.342 4.04-2.588 4.678a3.9 3.9 0 0 1-1.47.11l-.144-.012c.569.386 1.073.82 1.393 1.3 1.308 1.972.938 3.944-.992 5.274-.75.521-1.518.787-2.252.787a3 3 0 0 1-.563-.056c-.897-.173-1.712-.776-2.353-1.74-.306-.459-.51-1.06-.653-1.705-.14.652-.347 1.26-.655 1.723-.645.963-1.46 1.565-2.356 1.74a3 3 0 0 1-.555.052c-.736 0-1.507-.269-2.257-.792-.947-.653-1.538-1.482-1.709-2.395-.17-.914.078-1.908.72-2.874.32-.48.826-.92 1.398-1.306l-.106.011a5 5 0 0 1-.497.034c-.389 0-.759-.04-1.09-.134-1.1-.314-1.92-.908-2.369-1.72-.448-.81-.524-1.835-.216-2.958.308-1.126.894-1.961 1.69-2.418.798-.456 1.8-.529 2.901-.212.647.184 1.32.633 1.956 1.179-.362-.796-.614-1.605-.608-2.317 0-2.37 1.392-3.787 3.725-3.787h.003c1.143.006 2.087.359 2.731 1.02.644.66.983 1.627.978 2.793 0 .691-.25 1.487-.605 2.268.636-.543 1.308-.988 1.955-1.173 2.246-.636 3.96.344 4.588 2.63m-9.648 4.802.007.002a.4.4 0 0 1 .131-.034c.98-.033 1.535-.425 1.748-1.224q0-.004.003-.007.002-.003.003-.007l.001-.01q0-.005.002-.01c.056-.215.084-.476.084-.772 0-.796-.219-1.362-.648-1.681q-.014-.012-.027-.028l-.014-.017-.03-.011a.2.2 0 0 1-.04-.017c-.306-.19-.72-.286-1.233-.286-.507 0-.927.098-1.24.294q-.022.011-.044.014l-.03.006-.013.018q-.013.017-.029.032c-.423.325-.636.891-.636 1.675q.002.446.087.788v.016l.01.017q.009.011.013.026c.215.781.806 1.173 1.8 1.196.035 0 .064.01.095.02"
            />
        </svg>
    );
};

export default IconFlowerFilled;
