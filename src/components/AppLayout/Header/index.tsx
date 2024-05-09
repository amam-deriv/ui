import { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import { DerivLogo } from "./DerivLogo";
import { MenuItem } from "./MenuItem";
import "./Header.scss";

/**
 * Header component.
 * @param {object} PropsWithChildren - Props object with children.
 * @param {React.ReactNode} PropsWithChildren.children - The children nodes to be rendered inside the header.
 * @param {string} PropsWithChildren.className - Additional classes to be applied to the header.
 * @returns {JSX.Element} - Returns the header element.
 */
export const Header = ({
    children,
    className,
    ...rest
}: PropsWithChildren<ComponentProps<"header">>) => (
    <header className={clsx("deriv-header", className)} {...rest}>
        {children}
    </header>
);

Header.DerivLogo = DerivLogo;
Header.MenuItem = MenuItem;

Header.displayName = "Header";
