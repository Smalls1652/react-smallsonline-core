import React, { ReactElement, useEffect, useState } from "react";

import { IBootstrapRow } from "./interfaces";

const BootstrapRow = ({ horizontalGutters, verticalGutters, className, children }: IBootstrapRow): ReactElement => {
    const [classNameList, setClassNameList] = useState<string[]>(["row"]);

    useEffect(
        () => {

            if (horizontalGutters != null) {
                setClassNameList(
                    (current: string[]) => [
                        ...current,
                        `gx-${horizontalGutters}`
                    ]
                )
            }

            if (verticalGutters != null) {
                setClassNameList(
                    (current: string[]) => [
                        ...current,
                        `gy-${verticalGutters}`
                    ]
                )
            }

            if (className != null) {
                setClassNameList(
                    (current: string[]) => [
                        ...current,
                        className
                    ]
                )
            }
        }, []
    );

    return (
        <div
            className={classNameList.join(" ")}
        >
            {children}
        </div>
    )
}

export default BootstrapRow;