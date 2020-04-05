import React from 'react';

const Ninjas = ({ ninjas }) => {
    // const ninjaList = ninjas.map(ninja => {
    //     if ( ninja.age > 33){
    //     return (
    //     <div className='ninja' key={ ninja.id }>
    //         <div>Name: { ninja.name }</div>
    //         <div>Age: { ninja.age }</div>
    //         <div>Belt: { ninja.belt }</div>
    //     </div>
    //     )
    //   } else {
    //       return null
    //     }
    // })

// condition output without the if statement

    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 33 ? (
    //     <div className='ninja' key={ ninja.id }>
    //         <div>Name: { ninja.name }</div>
    //         <div>Age: { ninja.age }</div>
    //         <div>Belt: { ninja.belt }</div>
    //     </div>
    //     ) : null
    // })
   
// embedding the condition in the return
    return (
        <div className='ninja-list'>
            { 
                ninjas.map(ninja => {
                    return ninja.age > 33 ? (
                        <div className='ninja' key={ ninja.id }>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                        </div>
                    ) : null;
                })
            }
            </div>
    )
}

export default Ninjas