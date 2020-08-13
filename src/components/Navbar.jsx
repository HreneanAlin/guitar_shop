import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const linkEl1 = useRef()
    const linkEl2 = useRef()
    const linkEl3 = useRef()
    const linkEl4 = useRef()
    const linkEl5 = useRef()
    const links = [linkEl1,linkEl2,linkEl3,linkEl4,linkEl5]



    useEffect(()=>{

        links.map(linkEl => {
            console.log(document.baseURI)
            if(linkEl.current.href === document.baseURI){
                return  linkEl.current.classList.add("active-link")
            }else
                return  linkEl.current.classList.remove("active-link")
        })

    },[document.baseURI])


    const closeMenu = () => {
        setMenuActive(false);
    }

    return (
        <nav>
            <div className="menu-container" onClick={() => setMenuActive(!menuActive)}>Menu</div>
            <ul className={menuActive ? 'active' : ''}>
                <li><Link to={"/"}
                          onClick={() => closeMenu()}
                          ref={linkEl1}>Home</Link></li>
                <li><Link to={"/products"}
                          onClick={() => closeMenu()}
                          ref={linkEl2}>Products</Link></li>
                <li><Link to={"/about"}
                          onClick={() => closeMenu()}
                          ref={linkEl3}>About us</Link></li>
                <li><Link to={"/contact"}
                          onClick={() => closeMenu()}
                          ref={linkEl4}>Contact</Link></li>
                <li><Link to={'/sales'}
                          onClick={() => closeMenu()}
                          ref={linkEl5}>Sales</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;
