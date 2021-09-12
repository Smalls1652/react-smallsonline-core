import { ReactElement } from "react";

export default interface ISimpleDropdownMenu {
    title: string;
    isNavbarMenu: boolean;
    children?: ReactElement;
}