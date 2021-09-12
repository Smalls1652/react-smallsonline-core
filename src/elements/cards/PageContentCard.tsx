import React, { ReactElement } from "react";

import { IPageContentCard } from '../../interfaces';

const PageContentCard = ({ pageTitle, id, className, children }: IPageContentCard): ReactElement => {
    return (
        <div id={id} className={className}>
            <div className="card shadow-lg">
                <div className="card-header">
                    <h2 className="mt-2 mb-1">
                        {pageTitle}
                    </h2>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageContentCard;