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
import React, { useRef } from 'react';
import TextInput from '../text-input';
import { StyledWrapper, StyledHeader, StyledArrow, StyledPopover, List, ListItem } from './styled';
import { useSelectLogic } from './use-select-logic';
var Select = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, className = props.className, _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props.error, error = _c === void 0 ? false : _c, option = props.option, listOptions = props.listOptions, onChange = props.onChange, placeholder = props.placeholder, _d = props.width, width = _d === void 0 ? '100%' : _d;
    var textInputStyles = {
        size: size,
        disabled: disabled,
        error: error,
        width: '100%',
        placeholder: placeholder,
        readonly: true,
    };
    var headerRef = useRef(null);
    var popoverRef = useRef(null);
    var _e = useSelectLogic(onChange, { headerRef: headerRef, popoverRef: popoverRef }, disabled), onOptionClick = _e.onOptionClick, optionsListVisible = _e.optionsListVisible, setOptionsListVisible = _e.setOptionsListVisible;
    return (_jsxs(StyledWrapper, __assign({ className: className, width: width, innerSize: size }, { children: [_jsxs(StyledHeader, __assign({ ref: headerRef, onClick: function () { return setOptionsListVisible(true); } }, { children: [_jsx(TextInput, __assign({ value: option ? option.value : '' }, textInputStyles), void 0), _jsx(StyledArrow, { innerSize: size, upwards: optionsListVisible }, void 0)] }), void 0), _jsx(StyledPopover, __assign({ ref: popoverRef, width: width, visible: optionsListVisible }, { children: _jsx(List, { children: listOptions === null || listOptions === void 0 ? void 0 : listOptions.map(function (option) { return (_jsx(ListItem, __assign({ innerSize: size, onClick: function () { return onOptionClick(option); } }, { children: option.label }), option.value)); }) }, void 0) }), void 0)] }), void 0));
};
export default React.forwardRef(Select);
//# sourceMappingURL=select.js.map