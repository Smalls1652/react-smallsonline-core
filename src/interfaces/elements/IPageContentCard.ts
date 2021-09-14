import { ReactElement } from "react";

export default interface IPageContentCard {
    pageTitle: string;
    id?: string;
    className?: string;
    children?: ReactElement;
}