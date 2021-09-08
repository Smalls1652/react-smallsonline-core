import React from "react";

import { ISimpleListGroupItem } from './interfaces';

const SimpleListGroupItem = ({ className, children }: ISimpleListGroupItem) => {
    return (
        <div className="list-group-item">
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default SimpleListGroupItem;