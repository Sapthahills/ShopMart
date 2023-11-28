import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collections'
const NewCollections = () => {
  return (
   <div className="popular new-collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="popular-item collections">
    {new_collection.map((item,index)=>{
                return <Item key={index}
                id={item.id} name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            })}
    </div>
   </div>
  )
}

export default NewCollections