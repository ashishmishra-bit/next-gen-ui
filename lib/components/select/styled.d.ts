/// <reference types="react" />
import { ComponentSize } from "../../config/sizes";
interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}
export declare const StyledWrapper: import("styled-components").StyledComponent<"div", any, StyledWrapperProps, never>;
export declare const StyledHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
interface StyledArrowProps {
    innerSize: ComponentSize;
    upwards: boolean;
}
export declare const StyledArrow: import("styled-components").StyledComponent<(props: import("react").SVGProps<SVGSVGElement>) => JSX.Element, any, StyledArrowProps, never>;
interface StyledPopoverProps {
    width: string;
    visible: boolean;
}
export declare const StyledPopover: import("styled-components").StyledComponent<"div", any, StyledPopoverProps, never>;
export declare const List: import("styled-components").StyledComponent<"ul", any, {}, never>;
interface ListItemProps {
    innerSize: ComponentSize;
}
export declare const ListItem: import("styled-components").StyledComponent<"li", any, ListItemProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map