import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../config/sizes';
export declare type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';
interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
/**
 * If href is supplied, button becomes an anchor link
 */
declare type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
/**
 * If `as` is supplied, button becomes a custom html node specified in `as`
 */
declare type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export declare type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map