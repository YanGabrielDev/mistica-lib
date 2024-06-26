import * as React from 'react';
type ProviderProps = {
    children: React.ReactNode;
};
export type NestableContext<Value> = {
    Getter: React.FC<{
        children: (value: Value) => React.ReactNode;
    }>;
    Provider: React.FC<ProviderProps>;
    Setter: React.FC<{
        value: Value;
    }>;
    useValue: () => Value;
    useSetValue: (value: Value) => void;
};
export declare const createNestableContext: <Value>(defaultValue: Value, valuesReducer?: ((values: Value[]) => Value) | undefined) => NestableContext<Value>;
export {};
