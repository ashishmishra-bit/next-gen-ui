import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledSpinner } from './styled';
var Spinner = function (props, ref) {
    var className = props.className, _a = props.size, size = _a === void 0 ? 30 : _a, _b = props.light, light = _b === void 0 ? false : _b;
    return (_jsx(StyledSpinner, { ref: ref, className: className, size: size, light: light }, void 0));
};
export default React.forwardRef(Spinner);
//# sourceMappingURL=spinner.js.map