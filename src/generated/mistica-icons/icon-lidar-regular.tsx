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

const IconLidarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.354 2h9.292a.71.71 0 0 1 .704.73v14.154a.72.72 0 0 1-.215.506.7.7 0 0 1-.498.219h-2.858v3.666c0 .4-.32.725-.714.725a.72.72 0 0 1-.713-.725V17.61h-.713v3.666c0 .4-.32.725-.713.725a.72.72 0 0 1-.714-.725V17.61H7.354a.72.72 0 0 1-.713-.725V2.724c0-.399.32-.724.713-.724m.718 14.159h7.86V3.454h-7.86zM12 10.718c1.788 0 3.214-1.45 3.214-3.267S13.788 4.179 12 4.179 8.786 5.63 8.786 7.446s1.426 3.271 3.214 3.271m2.145-3.267c0 1.199-.965 2.18-2.145 2.18S9.856 8.65 9.856 7.45 10.82 5.27 12 5.27s2.145.981 2.145 2.18M12 11.805c-1.001 0-1.788.8-1.788 1.817S11 15.439 12 15.439s1.788-.8 1.788-1.817c0-1.018-.787-1.817-1.788-1.817m-.713 1.817c0-.4.32-.725.713-.725a.72.72 0 0 1 .713.725c0 .4-.32.725-.713.725a.72.72 0 0 1-.713-.725M12 8.9c.787 0 1.427-.656 1.427-1.45C13.427 6.656 12.782 6 12 6s-1.427.655-1.427 1.45S11.213 8.9 12 8.9m.357-1.455c0 .219-.142.363-.357.363s-.357-.144-.357-.363c0-.218.142-.362.357-.362s.357.144.357.362M5.393 8.464c-.32-.256-.535-.618-.535-1.018s.178-.762.498-1.018c.252-.18.284-.506.142-.762-.178-.255-.498-.288-.75-.144-.608.474-.965 1.162-.965 1.924a2.3 2.3 0 0 0 .965 1.887.55.55 0 0 0 .32.107q.266-.002.43-.219c.178-.25.11-.613-.105-.757m-1.358-3.16a2.91 2.91 0 0 0-.965 2.142c0 .8.357 1.599.965 2.142.215.182.215.544.036.762a.59.59 0 0 1-.393.182.46.46 0 0 1-.357-.145C2.466 9.664 2 8.571 2 7.448c0-1.125.462-2.217 1.321-2.942a.51.51 0 0 1 .75.037.53.53 0 0 1-.036.762m15.217.255c-.252-.18-.572-.106-.75.145-.178.25-.105.58.142.762.32.218.498.618.498 1.017 0 .4-.178.762-.498 1.018-.252.181-.284.506-.142.762a.55.55 0 0 0 .43.218.6.6 0 0 0 .32-.106c.608-.474.965-1.162.965-1.924s-.357-1.455-.965-1.892m.677-1.013a.51.51 0 0 1 .75-.037C21.539 5.234 22 6.326 22 7.451c0 1.124-.498 2.179-1.322 2.941a.46.46 0 0 1-.356.144.58.58 0 0 1-.393-.181.53.53 0 0 1 .036-.762 2.91 2.91 0 0 0 .965-2.142c0-.8-.357-1.599-.965-2.143-.215-.18-.215-.543-.036-.762"
            />
        </svg>
    );
};

export default IconLidarRegular;
