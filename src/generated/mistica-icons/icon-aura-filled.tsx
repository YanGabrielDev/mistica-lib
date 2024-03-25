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

const IconAuraFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.2 19.99a1.34 1.34 0 0 1 1.896.307c.44.62.306 1.488-.3 1.938a1.34 1.34 0 0 1-1.897-.307 1.407 1.407 0 0 1 .3-1.937m-5.528-.239a.765.765 0 0 1 1.083-.175.804.804 0 0 1 .172 1.107.765.765 0 0 1-1.084.175.804.804 0 0 1-.171-1.107m11.573-.175a.765.765 0 0 1 1.083.175.804.804 0 0 1-.171 1.107.765.765 0 0 1-1.084-.175.804.804 0 0 1 .171-1.107M7.58 15.045a1.913 1.913 0 0 1 2.71-.439 2.01 2.01 0 0 1 .429 2.768 1.913 1.913 0 0 1-2.71.439 2.01 2.01 0 0 1-.429-2.768m6.13-.44a1.913 1.913 0 0 1 2.71.438 2.01 2.01 0 0 1-.43 2.768 1.913 1.913 0 0 1-2.709-.438 2.01 2.01 0 0 1 .429-2.768m6.165-.967a1.35 1.35 0 0 1 1.71.89c.233.729-.157 1.512-.87 1.748a1.35 1.35 0 0 1-1.712-.89c-.232-.728.159-1.511.872-1.748m-17.272.5a1.34 1.34 0 0 1 1.897-.308c.607.45.741 1.318.3 1.938a1.34 1.34 0 0 1-1.896.307 1.407 1.407 0 0 1-.3-1.938m2.939-4.079c.33-1.04 1.425-1.61 2.444-1.273s1.576 1.456 1.246 2.497-1.425 1.61-2.444 1.273c-1.02-.338-1.577-1.456-1.246-2.497m10.469-1.275c1.019-.338 2.113.231 2.444 1.272.332 1.041-.226 2.16-1.245 2.498-1.018.338-2.113-.232-2.444-1.272s.226-2.16 1.245-2.498m-13.974.11a.773.773 0 0 1 .978-.509c.407.135.63.582.498.999a.773.773 0 0 1-.978.509.796.796 0 0 1-.498-.999m18.946-.509a.773.773 0 0 1 .978.509.796.796 0 0 1-.498.999.77.77 0 0 1-.978-.509.796.796 0 0 1 .498-.999m-8.986-3.12c1.072 0 1.94.887 1.94 1.981S13.072 9.228 12 9.228c-1.071 0-1.94-.886-1.94-1.98 0-1.095.868-1.983 1.94-1.983m5.131-1.66c.75 0 1.358.621 1.358 1.387S17.88 6.38 17.13 6.38s-1.358-.621-1.358-1.387.607-1.387 1.357-1.388m-11.546.956a1.35 1.35 0 0 1 1.711-.89c.713.236 1.104 1.018.872 1.747a1.35 1.35 0 0 1-1.71.89c-.714-.236-1.104-1.018-.873-1.747M12 1.5c.428 0 .776.355.776.793a.784.784 0 0 1-.776.792.784.784 0 0 1-.776-.792c0-.438.347-.793.776-.793"
            />
        </svg>
    );
};

export default IconAuraFilled;
