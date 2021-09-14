import { ReactElement } from "react";

export default interface IBootstrapRow {
    horizontalGutters?: number;
    verticalGutters?: number;
    className?: string;
    children?: ReactElement;
}