var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useLoginLogic from './use-login-logic';
import FormControl from '../form-control';
import TextInput from '../text-input';
import Button from '../button';
import { ButtonWrapper, StyledForm } from './styled';
import { H3 } from '../typography';
import Link from '../link';
var Login = function (props, ref) {
    var _a = props.onSubmit, onSubmit = _a === void 0 ? function () { } : _a, _b = props.initialValues, initialValues = _b === void 0 ? {} : _b, _c = props.loading, loading = _c === void 0 ? false : _c, _d = props.registerLink, registerLink = _d === void 0 ? '#' : _d;
    var _e = useLoginLogic(onSubmit, initialValues), values = _e.values, errors = _e.errors, handleChange = _e.handleChange, handleSubmit = _e.handleSubmit;
    return (_jsxs(StyledForm, { children: [_jsx(H3, __assign({ align: 'center' }, { children: "Sign In" }), void 0), _jsx(FormControl, __assign({ label: 'Email', htmlFor: 'email', error: errors.email, forceLabel: true }, { children: _jsx(TextInput, { id: 'email', value: values.email, placeholder: 'Enter email', onChange: function (e) { return handleChange('email')(e.currentTarget.value); }, error: !!errors.email }, void 0) }), void 0), _jsx(FormControl, __assign({ label: 'Password', htmlFor: 'password', error: errors.password, forceLabel: true }, { children: _jsx(TextInput, { id: 'password', type: 'password', value: values.password, placeholder: 'Enter password', onChange: function (e) { return handleChange('password')(e.currentTarget.value); }, error: !!errors.password }, void 0) }), void 0), _jsxs(ButtonWrapper, { children: [_jsx(Link, __assign({ href: registerLink }, { children: "Create account" }), void 0), _jsx(Button, __assign({ onClick: handleSubmit, loading: loading }, { children: "Proceed" }), void 0)] }, void 0)] }, void 0));
};
export default React.forwardRef(Login);
//# sourceMappingURL=login.js.map