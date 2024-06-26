import * as React from 'react';
export declare const combineRefs: <T>(...refs: (React.Ref<T> | undefined)[]) => (refValue: T | null) => void;
export declare const getTextFromChildren: (children: React.ReactNode) => string;
