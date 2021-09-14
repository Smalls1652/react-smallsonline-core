import { ReactElement } from "react";

export default interface ISimpleListGroup {
    flush: boolean;
    className?: string;
    children?: ReactElement;
}