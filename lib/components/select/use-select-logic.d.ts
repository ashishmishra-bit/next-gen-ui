import React from 'react';
import { SelectOption, SelectChangeHandler } from './select';
interface Refs {
    headerRef: React.MutableRefObject<HTMLElement | null>;
    popoverRef: React.MutableRefObject<HTMLElement | null>;
}
export declare const useSelectLogic: (onChange: SelectChangeHandler | undefined, { headerRef, popoverRef }: Refs, disabled: boolean) => {
    onOptionClick: (option: SelectOption) => void;
    optionsListVisible: boolean;
    setOptionsListVisible: (isVisible: boolean) => void;
};
export {};
//# sourceMappingURL=use-select-logic.d.ts.map