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
import React from "react";
import Button from "../button";
import TextInput from "../text-input";
import { SearchWrapper } from "./styled";
import SearchIcon from "../../icons/Search";
var Search = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? "default" : _a, className = props.className, value = props.value, onChange = props.onChange, placeholder = props.placeholder, _b = props.width, width = _b === void 0 ? "100%" : _b;
    var textInputStyles = {
        size: size,
        width: "100%",
        placeholder: placeholder,
    };
    return (_jsxs(SearchWrapper, __assign({ ref: ref, className: className, width: width }, { children: [_jsx(TextInput, __assign({ value: value, onChange: onChange, clearable: true }, textInputStyles), void 0), _jsx(Button, { type: "secondary", icon: SearchIcon }, void 0)] }), void 0));
};
export default React.forwardRef(Search);
//# sourceMappingURL=search.js.map