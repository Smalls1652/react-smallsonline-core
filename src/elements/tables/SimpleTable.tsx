import React from "react";

import { ISimpleTable } from './interfaces';

const SimpleTable = ({ title, items, className }: ISimpleTable) => {
    return (
        <div className={className}>
            <table className="table table-sm table-hover table-striped">
                <thead>
                    <tr>
                        <th>
                            {title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => item)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SimpleTable;