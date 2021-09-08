import React from 'react';

import { ISimpleTableItem } from './interfaces';

const SimpleTableItem = ({ children }: ISimpleTableItem) => {
    return (
        <tr>
            <td>
                {children}
            </td>
        </tr>
    )
}

export default SimpleTableItem;