import React, { FunctionComponent } from 'react';

import { ISimpleListGroup } from './interfaces'

const SimpleListGroup: FunctionComponent<ISimpleListGroup> = ({ flush = false, className, children }) => {

    return (
        <div className={className}>
            <div className={`list-group ${flush === true ? "list-group-flush" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default SimpleListGroup;