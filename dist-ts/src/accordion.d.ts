import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, TrackingEvent } from './utils/types';
import type { TouchableElement } from './touchable';
type AccordionContextType = {
    index: Array<number>;
    toogle: (item: number) => void;
};
export declare const useAccordionContext: () => AccordionContextType;
interface AccordionItemContentProps {
    children?: void;
    title: string;
    subtitle?: string;
    asset?: React.ReactNode;
    content: React.ReactNode;
    onToogle?: (value: boolean) => void;
    dataAttributes?: DataAttributes;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
}
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemContentProps & React.RefAttributes<TouchableElement>>;
type AccordionBaseProps = {
    children: React.ReactNode;
    /**
     * @deprecated This field is deprecated and it has no effect.
     */
    noLastDivider?: boolean;
    dataAttributes?: DataAttributes;
    onChange?: (index: number, value: boolean) => void;
};
type SingleOpenProps = {
    singleOpen: true;
    index?: number;
    defaultIndex?: number;
};
type MultipleOpenProps = {
    singleOpen?: false;
    index?: number | Array<number>;
    defaultIndex?: number | Array<number>;
};
type AccordionProps = AccordionBaseProps & ExclusifyUnion<SingleOpenProps | MultipleOpenProps>;
export declare const Accordion: React.FC<AccordionProps>;
interface BoxedAccordionItemProps extends AccordionItemContentProps {
    isInverse?: boolean;
}
export declare const BoxedAccordionItem: React.ForwardRefExoticComponent<BoxedAccordionItemProps & React.RefAttributes<HTMLDivElement>>;
type BoxedAccordionProps = Omit<AccordionProps, 'noLastDivider'>;
export declare const BoxedAccordion: React.FC<BoxedAccordionProps>;
export {};
