import React, { FunctionComponent } from 'react';

import { ISimpleListGroupHeader } from './interfaces';

const SimpleListGroupItemHeader: FunctionComponent<ISimpleListGroupHeader> = ({ children }) => {
    return (
        <h5>
            {children}
        </h5>
    )
}

export default SimpleListGroupItemHeader;