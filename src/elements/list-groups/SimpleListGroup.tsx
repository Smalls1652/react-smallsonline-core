import React from "react";

import { ISimpleListGroup } from './interfaces'

const SimpleListGroup = ({ flush = false, className, children }: ISimpleListGroup) => {

    return (
        <div className={className}>
            <div className={`list-group ${flush === true ? "list-group-flush" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default SimpleListGroup;