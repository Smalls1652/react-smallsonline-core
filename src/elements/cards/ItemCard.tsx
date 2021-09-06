import React, { FunctionComponent } from 'react';

import { IItemCard } from './interfaces/index';

const ItemCard: FunctionComponent<IItemCard> = ({ titleSection, subtitle, footerSection, className, children }) => {
    const renderTitleSection = () => {
        if (titleSection != null) {
            return (
                <div className="card-header">
                    {titleSection}
                    {renderSubtitle()}
                </div>
            );
        }
        else {
            return null;
        }
    }

    const renderSubtitle = () => {
        if (subtitle != null) {
            return (
                <div className="card-subtitle">
                    <span className="font-bold-text">
                        {subtitle}
                    </span>
                </div>
            );
        }
        else {
            return null;
        }
    }

    const renderFooterSection = () => {
        if (footerSection != null) {
            return (
                <div className="card-footer">
                    {footerSection}
                </div>
            );
        }
        else {
            return null;
        }
    }

    return (
        <div className={`card ${className}`}>
            {
                renderTitleSection()
            }
            <div className="card-body">
                {children}
            </div>
            {
                renderFooterSection()
            }
        </div>
    )
}

export default ItemCard;