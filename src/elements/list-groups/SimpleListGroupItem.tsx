import React, { FunctionComponent } from 'react';

import { ISimpleListGroupItem } from './interfaces';

const SimpleListGroupItem: FunctionComponent<ISimpleListGroupItem> = ({ className, children }) => {
    return (
        <div className="list-group-item">
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default SimpleListGroupItem;