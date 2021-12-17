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
import { useEffect, useState } from "react";
import { validate as validateEmail } from 'email-validator';
var validate = function (values) {
    var errors = {};
    if (!values.password) {
        errors.password = 'Field is required';
    }
    if (!values.email) {
        errors.email = 'Field is required';
    }
    else if (!validateEmail(values.email)) {
        errors.email = 'Please type a valid email address';
    }
    return errors;
};
var useLoginLogic = function (onSubmit, initialValues) {
    var _a = useState(initialValues), values = _a[0], setValues = _a[1];
    var _b = useState({}), errors = _b[0], setErrors = _b[1];
    var _c = useState(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    useEffect(function () {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            onSubmit(values);
        }
        setIsSubmitting(false);
    }, [errors]);
    var handleSubmit = function (event) {
        if (event)
            event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    var handleChange = function (fieldName) { return function (value) {
        setValues(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[fieldName] = value, _a)));
        });
    }; };
    return {
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        values: values,
        errors: errors,
    };
};
export default useLoginLogic;
//# sourceMappingURL=use-login-logic.js.map