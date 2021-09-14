import React, { ReactElement } from "react";

import { ISimpleListGroupHeader } from '../../interfaces';

const SimpleListGroupItemHeader = ({ children }: ISimpleListGroupHeader): ReactElement => {
    return (
        <h5>
            {children}
        </h5>
    )
}

export default SimpleListGroupItemHeader;