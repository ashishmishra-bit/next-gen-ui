import React, { ReactNode } from 'react';
export interface FormControlProps {
    label?: string;
    htmlFor?: string;
    error?: string;
    hint?: string;
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    forceLabel?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=form-control.d.ts.map