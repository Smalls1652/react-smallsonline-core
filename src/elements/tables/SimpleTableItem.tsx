import React, { ReactElement } from "react";

import { ISimpleTableItem } from '../../interfaces';

const SimpleTableItem = ({ children }: ISimpleTableItem): ReactElement => {
    return (
        <tr>
            <td>
                {children}
            </td>
        </tr>
    )
}

export default SimpleTableItem;