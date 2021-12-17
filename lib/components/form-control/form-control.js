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
import React, { useState } from 'react';
import { StyledFormControl, StyledLabel, StyledError, StyledHint } from './styled';
var FormControl = function (props, ref) {
    var _a = props.label, label = _a === void 0 ? '' : _a, _b = props.htmlFor, htmlFor = _b === void 0 ? '' : _b, _c = props.error, error = _c === void 0 ? '' : _c, _d = props.hint, hint = _d === void 0 ? '' : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, children = props.children, _f = props.onBlur, onBlur = _f === void 0 ? function () { } : _f, _g = props.onFocus, onFocus = _g === void 0 ? function () { } : _g, _h = props.forceLabel, forceLabel = _h === void 0 ? false : _h;
    var _j = useState(false), focused = _j[0], setFocused = _j[1];
    return (_jsxs(StyledFormControl, __assign({ ref: ref, className: className, onFocus: function (e) { setFocused(true); onFocus(e); }, onBlur: function (e) { setFocused(false); onBlur(e); } }, { children: [label ? _jsx(StyledLabel, __assign({ htmlFor: htmlFor, focused: forceLabel || disabled || focused || error !== '', error: error !== '' }, { children: label }), void 0) : null, children, error ? _jsx(StyledError, { children: error }, void 0) : (hint ? _jsx(StyledHint, { children: hint }, void 0) : null)] }), void 0));
};
export default React.forwardRef(FormControl);
//# sourceMappingURL=form-control.js.map