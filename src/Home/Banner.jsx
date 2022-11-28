import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
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

  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: '', email:'', loading: false, success: false };
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
            <Row gutter={24} >
            {!this.state.success && (
              <React.Fragment>
                <Col xs={24} lg={8}>
                  First Name: <Input name="first_name" onChange={(e) => {
                    this.state = {...this.state, first_name: e.target.value}
                  }}/>
                </Col>
                <Col xs={24} lg={8}>
                  Last Name: <Input name="last_name" onChange={(e) => {
                    this.state = {...this.state, last_name: e.target.value}
                  }}/>
                </Col>
                <Col xs={24} lg={8}>
                  Email: <Input name="email" onChange={(e) => {
                    this.state = {...this.state, email: e.target.value}
                  }}/>
                </Col>
              </React.Fragment>
            )}
            </Row>
            <br />
            <Row gutter={24}>
            <Col>
              {!this.state.success && <Button type="primary" loading={this.state.loading} onClick={async () => {
                this.setState({...this.state, loading: true})
                await fetch('https://notesleuth-be-production.up.railway.app/waitlist/add', {
                  method: 'POST', // or 'PUT'
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.state),
                })
                .then(response => response.json())
                .then(data => {
                  if(data.error){
                    this.setState({...this.state, loading: false})
                  }else{
                    this.setState({...this.state, loading: false, success: true})
                  }
                  console.log('Success:', data);
                })
                .catch((error) => {
                  this.setState({...this.state, loading: false})
                  console.error('Error:', error);
                });
              }}>
                Join the Waitlist!
              </Button>}
              {this.state.success && 'Thanks for signing up to the waitlist!'}

            </Col>
            </Row>

          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
