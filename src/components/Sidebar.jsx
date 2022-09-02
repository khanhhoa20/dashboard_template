import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import InfoIcon from '@mui/icons-material/Info';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CommentIcon from '@mui/icons-material/Comment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InventoryIcon from '@mui/icons-material/Inventory';
import { FaBars } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <GridViewSharpIcon />
        },
        {
            path: "/about",
            name: "About",
            icon: <InfoIcon />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <AnalyticsIcon />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <CommentIcon />
        },
        {
            path: "/product",
            name: "Product",
            icon: <ProductionQuantityLimitsIcon />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <InventoryIcon />
        },
    ]
    return (
        <div className='container'>
            <div style={{ width: isOpen ? "250px" : "50px" }} className='sidebar'>
                <div className="top_section">
                    <h1
                        style={{ display: isOpen ? "block" : "none" }}
                        className="logo">Logo</h1>
                    <div
                        style={{ marginLeft: isOpen ? "50px" : "0px" }}
                        className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, i) => (
                        <NavLink to={item.path} key={i} className="link">
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{ display: isOpen ? "block" : "none" }}
                                className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main><Outlet /></main>
        </div>
    )
}

export default Sidebar