import React, { Component } from 'react';

class Ninjas extends Component {
    render () {
        // console.log(this.props)
        // return (
        //     <div className='ninja'>
        //         <div>Name: { this.props.name }</div>
        //         <div>Age: { this.props.age }</div>
        //         <div>Belt: { this.props.belt }</div>
        //     </div>

        //destructing is another way to store property
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
            <div className='ninja' key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
            )
        })
            return (
                <div className='ninja-list'>
                    { ninjaList }
                </div>
        )
    }
}

export default Ninjas