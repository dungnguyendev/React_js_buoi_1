import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'
export default class body extends Component {
    render() {
        return (
            <div className='container1'>

                <div className='col-md-12'>
                    <Banner />
                </div>

                
                    <Item />
         
            </div>

        )
    }
}
