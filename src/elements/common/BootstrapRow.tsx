import React from "react";

import { IBootstrapRow } from "./interfaces";

const BootstrapRow = ({ horizontalGutters, verticalGutters, className, children }: IBootstrapRow) => {
    function evalClassNameList(): string {
        let classNameList: string[] = [
            "row"
        ];

        if (horizontalGutters != null) {
            classNameList.push(`gx-${horizontalGutters}`);
        }

        if (verticalGutters != null) {
            classNameList.push(`gy-${verticalGutters}`);
        }

        if (className != null) {
            classNameList.push(className);
        }

        let classNameListJoined: string = classNameList.join(" ");
        console.log(classNameListJoined);

        return classNameListJoined;
    }

    return (
        <div
            className={evalClassNameList()}
        >
            {children}
        </div>
    )
}

export default BootstrapRow;