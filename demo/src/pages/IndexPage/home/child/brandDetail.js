import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';

@inject("indexPageModule")
@observer
class BrandDetail extends Component {
    componentDidMount(){
        let {indexPageModule}=this.props;
        let ids = this.props.match.params.id
       indexPageModule.brandDetail(ids)
    }
    render() {
      
        return (
            <div>
                制造商详情
            </div>
        )
    }
}
export default BrandDetail