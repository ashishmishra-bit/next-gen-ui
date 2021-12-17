import { LoginModel, SubmitHandler } from "./login";
export declare type ErrorModel = {
    [key in keyof LoginModel]?: string;
};
declare const useLoginLogic: (onSubmit: SubmitHandler, initialValues: LoginModel) => {
    values: LoginModel;
    errors: ErrorModel;
    handleChange: (fieldName: string) => (value: any) => void;
    handleSubmit: (event: any) => void;
};
export default useLoginLogic;
//# sourceMappingURL=use-login-logic.d.ts.map