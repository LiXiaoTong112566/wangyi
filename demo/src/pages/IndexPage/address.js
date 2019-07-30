import React, { Component } from 'react'
import "./address.scss"

export class address extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <h3>地址管理</h3>
                    <span onClick={()=>this.props.history.goBack()}>&lt;</span>
                </div>
                <div className="subject">
                
                </div>
            </>
        )
    }
}

export default address
