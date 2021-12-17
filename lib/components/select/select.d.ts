import React, { HTMLAttributes } from 'react';
import { ComponentSize } from '../../config/sizes';
export declare type SelectOption = {
    label: string;
    value: string;
};
export declare type SelectChangeHandler = (option: SelectOption | undefined) => void;
export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'width' | 'option' | 'onChange'> {
    className?: string;
    size?: ComponentSize;
    disabled?: boolean;
    error?: boolean;
    width?: string;
    option?: SelectOption;
    listOptions?: SelectOption[];
    onChange?: SelectChangeHandler;
    placeholder?: string;
}
declare const _default: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=select.d.ts.map