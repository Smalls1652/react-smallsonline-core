import React, { FunctionComponent } from 'react';

import { ISimpleTableItem } from './interfaces';

const SimpleTableItem: FunctionComponent<ISimpleTableItem> = ({ children }) => {
    return (
        <tr>
            <td>
                {children}
            </td>
        </tr>
    )
}

export default SimpleTableItem;