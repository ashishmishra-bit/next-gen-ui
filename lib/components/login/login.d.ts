import React, { HTMLAttributes } from 'react';
export interface LoginModel {
    email?: string;
    password?: string;
}
export declare type SubmitHandler = (fieldValues: LoginModel) => void;
export interface LoginProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: SubmitHandler;
    initialValues?: LoginModel;
    loading?: boolean;
    registerLink?: string;
}
declare const _default: React.ForwardRefExoticComponent<LoginProps & React.RefAttributes<HTMLFormElement>>;
export default _default;
//# sourceMappingURL=login.d.ts.map