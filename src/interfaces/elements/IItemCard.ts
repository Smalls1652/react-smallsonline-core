import { ReactElement } from "react";

export default interface IItemCard {
    titleSection?: ReactElement;
    subtitle?: string;
    footerSection?: ReactElement;
    className?: string;
    children?: ReactElement;
}