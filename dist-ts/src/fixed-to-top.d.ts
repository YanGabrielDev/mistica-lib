import * as React from 'react';
export declare const TopDistanceContext: React.Context<number>;
type Props = {
    children: (topDistance: number) => React.ReactNode;
    height: number;
};
declare const FixedToTop: React.FC<Props>;
export default FixedToTop;
