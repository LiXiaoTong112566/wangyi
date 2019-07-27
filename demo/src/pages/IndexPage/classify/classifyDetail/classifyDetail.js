import React, { Component } from "react";
import "./classifyDetail.scss";
import { inject, observer } from "mobx-react";
import BScroll from "better-scroll";

@inject("classify")
@observer

//奇趣分类的页面
class ClassifyDetail extends Component {
  constructor() {
    super();
    this.state = {
      classifyIndex: -1,
      id: ""
    };
    this.classifyDetailScroll = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.id; //分类标题的id;
    console.log(id);
    let classifyId = localStorage.getItem("classifyId") //商品的id
    let index = localStorage.getItem("index"); //点击的下标
    console.log(classifyId, index);

    this.props.classify.getCatalogMsgModule({ id: id }); //获取导航的数据

     //获取到导航数据对应的标题
     this.props.classify.getCategoryNavModule({
      id: id
    });

    this.setState({
      classifyIndex: index,
      id: classifyId
    });

    //根据导航分类获取对应的商品
    //根据分类Id或者制造商Id获取商品
    this.props.classify.getGoodsModule({
      categoryId: classifyId,
      page: 1,
      size: 100
    });
   

    this.classifyDetailScrollData = new BScroll(
      this.classifyDetailScroll.current,
      {
        probeType: 2,
        click: true
      }
    );
  }

  changeInd(index, id) {
    this.setState({
      classifyIndex: index
    });
    //根据导航分类获取对应的商品
    //根据分类Id或者制造商Id获取商品
    this.props.classify.getGoodsModule({
      categoryId: id,
      page: 1,
      size: 100
    });

    //获取到导航数据对应的标题
    this.props.classify.getCategoryNavModule({
      id: id
    });
  }

  //跳转到商品详情
  jumpStoreDetail(id) {
    this.props.history.push({
      pathname: `/storeDetail/${id}`
    });
  }

  render() {
    let { classifyRightBoxData } = this.props.classify;

    console.log(this.props);
   
    
    let titleData = this.props.classify.getCategoryNavData.currentCategory;
     let NavData = this.props.classify.getCategoryNavData.brotherCategory;

    let { getGoodsData } = this.props.classify;
    console.log(NavData);

    return (
      <div className="classifyDetail_box">
        <div className="header">
          <span
            onClick={() => {
              this.props.history.push(`/main/classifyIndex`);
            }}
          >
            &lt;
          </span>
          奇趣分类
        </div>

        <ul className="classifyDetail_nav">
          {console.log(this.state.classifyIndex)}
          {NavData&&
            NavData.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={this.state.classifyIndex == index ? "active" : ""}
                  onClick={() => {
                    this.changeInd(index, item.id);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>

        <div className="classifyDetail_main" ref={this.classifyDetailScroll}>
          <div>
            <div className="title">
              <h3>{titleData && titleData.name}</h3>

              <div className="titleMain">
                {titleData && titleData.front_name}
              </div>
            </div>

            <div className="classifyDetail_mainBox">
              {getGoodsData.data &&
                getGoodsData.data.map((item, index) => {
                  return (
                    <dl
                      key={item.id}
                      onClick={() => {
                        this.jumpStoreDetail(item.id);
                      }}
                    >
                      <dt>
                        <img src={item.list_pic_url} alt="" />
                      </dt>
                      <dd>
                        <p>{item.name}</p>
                        <p className="price">￥{item.retail_price}元</p>
                      </dd>
                    </dl>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassifyDetail;
