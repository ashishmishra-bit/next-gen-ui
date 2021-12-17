var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var StyledFormControl = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    position: relative;\n    margin-bottom: 20px;\n"], ["\n    box-sizing: border-box;\n    position: relative;\n    margin-bottom: 20px;\n"])));
export var StyledLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    position: relative;\n    z-index: 2;\n    transform: ", ";\n    opacity: ", ";\n    visibility: ", ";\n    transition: all 0.2s ease-in;\n    font-size: 0.8em;\n    font-weight: 500;\n    margin-bottom: 5px;\n    color: ", ";\n"], ["\n    display: block;\n    position: relative;\n    z-index: 2;\n    transform: ", ";\n    opacity: ", ";\n    visibility: ", ";\n    transition: all 0.2s ease-in;\n    font-size: 0.8em;\n    font-weight: 500;\n    margin-bottom: 5px;\n    color: ", ";\n"])), function (pr) { return pr.focused ? 'translateY(0)' : 'translateY(20px)'; }, function (pr) { return pr.focused ? 1 : 0; }, function (pr) { return pr.focused ? 'visible' : 'hidden'; }, function (pr) { return pr.error ? '#d93848' : '#000'; });
var StyledCaption = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    font-size: 0.75em;\n"], ["\n    position: absolute;\n    font-size: 0.75em;\n"])));
export var StyledError = styled(StyledCaption)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: #d93848;\n"], ["\n    color: #d93848;\n"])));
export var StyledHint = styled(StyledCaption)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: #545454;\n    font-style: italic;\n"], ["\n    color: #545454;\n    font-style: italic;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map