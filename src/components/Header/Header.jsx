import React from 'react';
import './Header.css'

const Header = () => {
    return (
    <div>
        <header className='p-3 mb-3 border-bottom'>
            <div className='container'>
            <div className='d-flex align-items-center justify-content-between'>
                
                <div>
                <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                <li><a href='/home' className='nav-link px-2 link-secondary'>Contents</a></li>
                <li><a href='/home' className='nav-link px-2 link-body-emphasis'>News</a></li>
                <li><a href='/home' className='nav-link px-2 link-body-emphasis'>Research Paper</a></li>
                <li><a href='/home' className='nav-link px-2 link-body-emphasis'>Donation</a></li>
                </ul>
                </div>
                
                <div className='d-flex align-items-center'>
                    <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
                    <input type='search' className='form-control' placeholder='Search...' aria-label='Search'/>
                    </form>

                    <div className='dropdown text-end'>
                    <a href='#' className='d-block link-body-emphasis text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                        <img src='https://github.com/mdo.png' alt='mdo' width='32' height='32' className='rounded-circle'/>
                    </a>
                    <ul className='dropdown-menu text-small'>
                        <li><a className='dropdown-item' href='/home'>New Content</a></li>
                        <li><a className='dropdown-item' href='/home'>Settings</a></li>
                        <li><a className='dropdown-item' href='/home'>Profile</a></li>
                        <li><hr className='dropdown-divider' /></li>
                        <li><a className='dropdown-item' href='/home'>Sign out</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </header>
    </div>
    );
};

export default Header;