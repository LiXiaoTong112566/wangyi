import React, { Component } from "react";
import "./classifyDetail.scss";
import { inject, observer } from "mobx-react";
import BScroll from "better-scroll";
import ProgressiveImage from "react-progressive-image";

@inject("classify")
@observer

//奇趣分类的页面
class ClassifyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classId: this.props.match.params.id,
      id: "",
      page: 1,
      upText: "下拉刷新",
      downText: "上拉加载"
    };
    this.classifyDetailScroll = React.createRef();
  }

  componentDidMount() {
    let id = this.props.match.params.id; //分类标题的id;

    let { classify } = this.props;
    this.setState(
      {
        classId: id
      },
      () => {
        //根据导航分类获取对应的商品
        //根据分类Id或者制造商Id获取商品
        this.props.classify.getGoodsModule({
          categoryId: this.state.classId,
          page: this.state.page,
          size: 10
        });

        this.props.classify.getCatalogMsgModule({ id: id }); //获取导航的数据
        //获取到导航数据对应的标题
        this.props.classify.getCategoryNavModule({
          id: id
        });

        this.classifyDetailScrollData = new BScroll(
          this.classifyDetailScroll.current,
          {
            probeType: 2,
            click: true,
            pullDownRefresh: {
              threshold: 30
            },
            pullUpLoad: {
              threshold: 10
            }
          }
        );

        //拼接上拉后续请求参数
        this.classifyDetailScrollData.on("pullingUp", async () => {
          console.log("pullingup");
          this.setState({
            downText: "释放加载",
            page: this.state.page + 1
          });
          await classify.getGoodsModule({
            categoryId: this.state.classId,
            page: this.state.page,
            size: 10
          });

          //上拉加载完成之后重新
          this.classifyDetailScrollData.finishPullUp();
        });

        //下拉加载后请求参数

        this.classifyDetailScrollData.on("pullingDown", async () => {
          await classify.getGoodsModule({
            categoryId: this.state.classId,
            page: 1,
            size: 10
          });
          //下拉加载完成后执行
          this.classifyDetailScrollData.finishPullDown();
        });
      }
    );
  }

  //切换样式
  changeInd(index, id) {
    let { classify } = this.props;
    this.setState({
      classId: id,
      page: 1
    });
    //根据导航分类获取对应的商品
    //根据分类Id或者制造商Id获取商品
    this.props.classify.getGoodsModule({
      categoryId: id,
      page: 1,
      size: 10
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
    //let { classifyRightBoxData } = this.props.classify;
    let titleData = this.props.classify.getCategoryNavData.currentCategory;
    let NavData = this.props.classify.getCategoryNavData.brotherCategory;
    let { getGoodsListData } = this.props.classify;
    return (
      <div className="classifyDetail_box">
        <div className="header">
          <span
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            &lt;
          </span>
          奇趣分类
        </div>

        <ul className="classifyDetail_nav">
          {NavData &&
            NavData.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={
                    Number(item.id) === Number(this.state.classId)
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    this.changeInd(index, item.id);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>
        <div className="title">
          <h3>{titleData && titleData.name}</h3>
          <div className="titleMain">{titleData && titleData.front_name}</div>
        </div>

        <div className="classifyDetail_main" ref={this.classifyDetailScroll}>
          <div>
            <div className="upBox">{this.state.upText}</div>
            <div className="classifyDetail_mainBox">
              {getGoodsListData &&
                getGoodsListData.map((item, index) => {
                  return (
                    <dl
                      key={item.id}
                      onClick={() => {
                        this.jumpStoreDetail(item.id);
                      }}
                    >
                      <dt>
                        <ProgressiveImage
                          src={item.list_pic_url}
                          placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564683988647&di=089d64d919c0d8b1c2d7d34679951d4d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0168905ad83519a801213867ae45cf.gif"
                        >
                          {src => <img src={src} alt="" />}
                        </ProgressiveImage>
                      </dt>
                      <dd>
                        <p>{item.name}</p>
                        <p className="price">￥{item.retail_price}元</p>
                      </dd>
                    </dl>
                  );
                })}
            </div>
            {/* <div className="downBox">没有更多数据了</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassifyDetail;
