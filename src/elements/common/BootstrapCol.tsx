import React, { ReactElement, useEffect, useState } from "react";

import { IBootstrapCol } from "../../interfaces";

const BootstrapCol = ({ xs, sm, md, lg, xl, xxl, className, children }: IBootstrapCol): ReactElement => {
    const [classNameStringList, setClassNameStringList] = useState<string[]>([]);

    useEffect(
        () => {
            if ((xs == null) && (sm == null) && (md == null) && (lg == null) && (xl == null) && (xxl == null)) {
                // If any size settings aren't provided, then add 'col' by default.
                setClassNameStringList(
                    (currentListState) => [
                        ...currentListState,
                        "col"
                    ]
                )
            }
            else {
                // If size settings were provided, set each 'col-{sizeName}-{sizeNum}' that were provided.
                if (xs != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-${xs}`
                        ]
                    )
                }

                if (sm != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-sm-${sm}`
                        ]
                    )
                }

                if (md != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-md-${md}`
                        ]
                    )
                }

                if (lg != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-lg-${lg}`
                        ]
                    )
                }

                if (xl != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-xl-${xl}`
                        ]
                    )
                }

                if (xxl != null) {
                    setClassNameStringList(
                        (currentListState) => [
                            ...currentListState,
                            `col-xxl-${xxl}`
                        ]
                    )
                }
            }

            // Add extra class names that were provided to the class name list, if needed.
            if (className != null) {
                setClassNameStringList(
                    (currentListState) => [
                        ...currentListState,
                        className
                    ]
                )
            }
        }, []
    );

    return (
        <div
            className={classNameStringList.join(" ")}
        >
            {children}
        </div>
    )
}

export default BootstrapCol;