import { ReactElement } from "react";

export default interface IBootstrapCol {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    className: string,
    children: ReactElement
}