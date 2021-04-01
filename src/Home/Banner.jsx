import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h2 key="h2a">Mortgage Note Analysis.</h2>
            <h2 key="h2b">Streamlined.</h2>
            <p className="main-info" key="p">
              Waste less time reviewing deals and more time closing.
            </p>
            <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" key="a">
            <Button>
                Register
              </Button>&nbsp;
              <Button type="primary">
                Login
              </Button>
            </a>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
