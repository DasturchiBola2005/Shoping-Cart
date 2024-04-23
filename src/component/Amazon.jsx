import React from 'react'
import { lists } from './prosucts'
import Cards from './Cards'
const Amazon = ({handlerClick}) => {
    return (
      <section>
            {
                lists.map((item, i) => {
                    return (
                    <Cards key={i}  item={item} handlerClick={handlerClick}/>
                )
                })
            }
        </section>
    )
}

export default Amazon