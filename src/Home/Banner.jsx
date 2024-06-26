import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import Helmet from "react-helmet"
import { Button, Input, Col, Row } from 'antd';
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
            <p className="main-info" key="p" id="join-waitlist">
              Waste less time reviewing deals and more time closing.
            </p>
            <br />
            <Row gutter={24}>
              <Col>
                <div id="getWaitlistContainer" data-waitlist_id="18177" data-widget_type="WIDGET_2" />
                <Helmet>
                  <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
                  <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />
                </Helmet>
              </Col>
            </Row>

          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
