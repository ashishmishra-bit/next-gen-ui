import { useEffect, useState, useCallback } from 'react';
export var useSelectLogic = function (onChange, _a, disabled) {
    if (onChange === void 0) { onChange = function () { }; }
    var headerRef = _a.headerRef, popoverRef = _a.popoverRef;
    var _b = useState(false), optionsListVisible = _b[0], __setOptionsListVisible = _b[1];
    var onOptionClick = function (option) {
        onChange(option);
        setOptionsListVisible(false);
    };
    var setOptionsListVisible = useCallback(function (isVisible) {
        if (!disabled) {
            __setOptionsListVisible(isVisible);
        }
    }, [disabled]);
    useEffect(function () {
        /**
         * Alert if clicked on outside of element
         */
        var handleClickOutside = function (event) {
            if (headerRef.current
                && popoverRef.current
                && !headerRef.current.contains(event.target)
                && !popoverRef.current.contains(event.target)) {
                setOptionsListVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [headerRef, popoverRef, setOptionsListVisible]);
    return {
        onOptionClick: onOptionClick,
        optionsListVisible: optionsListVisible,
        setOptionsListVisible: setOptionsListVisible
    };
};
//# sourceMappingURL=use-select-logic.js.map