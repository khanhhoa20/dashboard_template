import { useState } from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { IoMdBookmark, IoMdPerson, IoMdHome, IoMdChatboxes, IoMdHammer, IoMdCall, IoMdClipboard, IoMdMenu, IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import './Header.css'


const Header = () => {
    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }


    return (
        <div className={active ? 'header' : 'header-mobile'}>
            <div className="menu-icon" onClick={activateNav}>
                {!active ? <IoMdMenu className='menu' /> : <IoMdClose className='close-icon' />}
            </div>
            <nav>
                <ul className={active ? 'ul-item' : 'ul-item oicon'}>
                    <li>
                        <IoImageOutline className='icon' />
                        <NavLink to='/'>Alumni</NavLink>
                    </li>
                    <li>
                        <IoMdBookmark className='icon' />
                        <NavLink to='/'>History</NavLink>
                    </li>


                    <li>
                        <IoMdPerson className='icon' />
                        <NavLink to='/'>Testimonials</NavLink>
                    </li>


                    <li>
                        <IoMdHome className='icon' />
                        <NavLink to='/'>Partners</NavLink>
                    </li>


                    <li>
                        <IoMdChatboxes className='icon' />
                        <NavLink to='/'>About</NavLink>
                    </li>


                    <li>
                        <IoMdHammer className='icon' />
                        <NavLink to='/'>Tutorials</NavLink>
                    </li>



                    <li>
                        <IoMdCall className='icon' />
                        <NavLink to='/'>Contact</NavLink>
                    </li>


                    <li>
                        <IoMdClipboard className='icon' />
                        <NavLink to='/'>FAQ</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header