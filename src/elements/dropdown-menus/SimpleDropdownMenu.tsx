import React, { useState } from "react";

import { ISimpleDropdownMenu } from './interfaces';

const SimpleDropdownMenu= ({ title, isNavbarMenu, children }: ISimpleDropdownMenu) => {
    const [menuToggled, setMenuToggled] = useState(false);

    const toggleMenu = () => {
        console.log(`Before: ${menuToggled}`)
        if (menuToggled) {
            setMenuToggled(false);
        }
        else {
            setMenuToggled(true);
        }
        console.log(`After: ${menuToggled}`)
    }

    return (
        <div>
            <a
                onClick={() => toggleMenu()}
                role="button"
                className={`dropdown-toggle ${isNavbarMenu === true ? "nav-link" : ""}`}
            >
                {title}
            </a>
            <div
                className={`dropdown-menu dropdown-menu-dark bg-dark ${menuToggled === true ? "show" : ""}`}
            >
                {children}
            </div>
        </div>
    )
}

export default SimpleDropdownMenu;