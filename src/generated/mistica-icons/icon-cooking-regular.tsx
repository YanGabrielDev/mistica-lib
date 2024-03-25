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

const IconCookingRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.2 7.98a.58.58 0 0 0 .712.4l13.972-3.977a.586.586 0 0 0 .4-.723.574.574 0 0 0-.714-.404L13.713 4.66l-.001-.035c-.001-.036-.002-.072-.013-.108-.269-.932-1.129-1.87-2.658-1.431-1.532.434-1.784 1.69-1.532 2.633l.036.129-4.944 1.409a.586.586 0 0 0-.4.723m7.157-3.768c.645-.185 1.057.03 1.23.633q.015.044.04.08l.022.04-1.989.566-.03-.114q-.244-.926.727-1.205M21.84 15.82c0-1.605-1.123-2.185-2.087-2.193h-.008l-.008.001-.001.001h-.002v-.983c.112-.073.213-.151.291-.224.277-.272.61-.759.61-1.563 0-.801-.33-1.291-.607-1.56a1.9 1.9 0 0 0-.608-.398 2.38 2.38 0 0 0-.667-1.246c-.319-.311-.893-.681-1.834-.681-.939 0-1.516.37-1.832.68q-.084.082-.16.174a2.6 2.6 0 0 0-1.132.373 2.8 2.8 0 0 0-.753-.098c-.311 0-.58.042-.812.112-.297-.255-.768-.6-1.516-.6-.73 0-1.204.348-1.504.6l-.075-.01a1 1 0 0 0-.144-.013c-.756 0-1.14.143-1.473.6-.004.005-.014.001-.024-.003s-.02-.008-.024-.003a.93.93 0 0 0-.815.387c-.535-.073-.91.112-1.154.412-.65-.034-1.025.235-1.246.453-.255.25-.56.7-.56 1.432v.367a1.18 1.18 0 0 0 .518.972v.82c-.958.02-2.062.6-2.062 2.19 0 1.603 1.129 2.189 2.095 2.203h.174c.056-.003.146-.009.297-.028.613 1.901 1.894 3.028 4.415 3.028.182 0 .355-.009.49-.02l4.666-.003c.168.011.34.023.524.023.185 0 .356-.009.49-.02h.219q.106 0 .199-.04c1.969-.251 2.977-1.4 3.496-2.966.128.012.31.023.364.026h.165c.966-.014 2.095-.6 2.095-2.202m-2.61-4.244q-.245.23-.687.244H11.71a.2.2 0 0 0-.036-.006h-1.53a.2.2 0 0 0-.036.006H4.856v-.345q0-.387.207-.59c.132-.13.325-.197.569-.197a1 1 0 0 1 .237.023c.029.005.049.008.077-.006.03-.014.042-.03.058-.062a.6.6 0 0 1 .107-.148q.202-.197.571-.196c.11 0 .21.02.294.048.028.01.05.016.079.008.023-.01.03-.023.04-.043l.005-.007c.028-.05.056-.101.098-.143.157-.157.39-.236.686-.236q.092 0 .177.012h.005q.022.006.04-.003c.013-.009.016-.02.019-.031a.8.8 0 0 1 .185-.305c.16-.157.395-.236.689-.236.258 0 .44.056.597.177l.007.003a.04.04 0 0 0 .023.008c.008 0 .01-.007.013-.012l.001-.002q.08-.237.233-.395.293-.283.826-.283.535 0 .826.283c.157.154.236.384.27.65 0 0 .016.059.064.075.036.012.092-.022.092-.022a.9.9 0 0 1 .174-.258c.213-.21.524-.316.922-.316.397 0 .711.106.924.316.017.017.02.02.042.017s.025-.005.036-.025c.053-.092.112-.174.188-.247.238-.235.585-.352 1.028-.352q.166.001.314.025.011 0 .02-.003.007-.005.01-.014.092-.295.289-.493.362-.353 1.028-.353.669.001 1.03.35.375.368.376 1.067c0 .115-.011.222-.025.325l-.001.007q-.005.01.004.019c.005.008.008.01.02.008q.095-.013.204-.014.447 0 .695.235.252.249.252.72 0 .473-.252.717m.498 5.275v.003h-.115l-.076-.007-.024-.002a15 15 0 0 0 .204-2.056l.013.003.018.003c.619.002.935.347.935 1.022 0 .678-.322 1.025-.955 1.034M18.58 12.98c-.003.389-.003.834-.003.89-.037 4.157-.854 5.715-3.129 5.95a1 1 0 0 0-.073.012l-.011.002h-.104c-.29.02-.565.022-.935 0H9.582q-.218.018-.451.02c-2.793 0-3.743-1.547-3.762-6.127v-.725l2.518-.017h2.182a1 1 0 0 0 .08-.005h1.523q.037.005.078.005h2.156l1.362-.003h3.266l.007-.001h.002l.003-.001h.032M4.397 16.85v.003h-.13c-.632-.01-.952-.358-.952-1.033 0-.67.314-1.011.928-1.023.03.737.092 1.423.204 2.05z"
            />
        </svg>
    );
};

export default IconCookingRegular;