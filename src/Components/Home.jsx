import React from 'react'
import Cards from './Cards'

function Home({products}) {
  return (
    <>
    <div className="container">
        <div className="row mt-3">
            {
                products.map(products=>{
                    return(
                        <div key={products.id} className="col-md-3 mb-3">
                        <Cards products={products}/> 
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Home
