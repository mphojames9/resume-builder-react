import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore menu Iteams here</h1>
            <p className='explore-menu-text'>Choose from clothing, phone laptops and viarity of almomost every you need need</p>
            <div className="explore-menu-list">
                {menu_list.map((iteam, index) => {
                    return (
                        <div key={index} className='explore-menu-list-iteam'>
                            <img src={iteam.menu_image} alt='menuImage'></img>
                            <p>{iteam.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    );
}

export default ExploreMenu;
