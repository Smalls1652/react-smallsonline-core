import React, { FunctionComponent } from 'react';

import { IPageContentCard } from './interfaces/'

const PageContentCard: FunctionComponent<IPageContentCard> = ({ pageTitle, id, className, children }) => {
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