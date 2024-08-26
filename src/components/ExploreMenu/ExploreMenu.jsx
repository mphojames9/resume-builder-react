import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore menu Iteams here</h1>
            <p className='explore-menu-text'>Choose from clothing, phone laptops and viarity of almomost every you need need</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-iteam'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='menuImage'></img>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    );
}

export default ExploreMenu;
