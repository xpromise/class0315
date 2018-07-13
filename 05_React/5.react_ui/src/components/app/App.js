import React, {Component} from 'react';
import { Grid, Button, Toast, Carousel, WingBlank } from 'antd-mobile';

import './index.css';

class App extends Component {
  state = {
    data: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'xxxxx'
      },{
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'xxxxx'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'xxxxx'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'xxxxx'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: 'xxxxx'
      },
    ],
    imgHeight: 176
  }
  render () {
    const {data} = this.state;
    return (
      <div>
        {/*<div className="sub-title">Always square grid item </div>*/}
        <Grid data={data} activeStyle={false} />
        <Button type="primary" onClick={() => Toast.success('Load success !!!', 1)}>primary</Button>
        <div className="myCarousel">
          <WingBlank>
            <Carousel className="space-carousel"
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      autoplay
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val, index) => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src="http://file25.mafengwo.net/M00/0A/AC/wKgB4lMC26CAWsKoAALb5778DWg60.rbook_comment.w1024.jpeg"
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
      </div>
    )
  }
}

export default App;

