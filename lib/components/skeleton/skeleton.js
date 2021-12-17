import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledSkeleton } from './styled';
var Skeleton = function (props, ref) {
    var className = props.className, _a = props.width, width = _a === void 0 ? 100 : _a, _b = props.height, height = _b === void 0 ? 100 : _b, _c = props.borderRadius, borderRadius = _c === void 0 ? 'none' : _c;
    return (_jsx(StyledSkeleton, { ref: ref, className: className, width: width, height: height, borderRadius: borderRadius }, void 0));
};
export default React.forwardRef(Skeleton);
//# sourceMappingURL=skeleton.js.map