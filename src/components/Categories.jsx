/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'




function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }


    return (
        <div class="bottom_line">
          <nav>
            {items && items.map((name, index) => 
            <a className={activeItem === index ? 'active' : ''} onClick={()=> onSelectItem(index)} key={`${name}_${index}`}>
                {name}
            </a>
            )}
          </nav>
       </div>
    )
}
export default Categories;