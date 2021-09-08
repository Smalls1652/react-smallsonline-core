import React from 'react';

import { ISimpleListGroupHeader } from './interfaces';

const SimpleListGroupItemHeader = ({ children }: ISimpleListGroupHeader) => {
    return (
        <h5>
            {children}
        </h5>
    )
}

export default SimpleListGroupItemHeader;