import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Built by note investors. For note investors.</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">Designed by note investors to ease the pain in finding and analyzing deals.</p>
          <p className="main-info" key="2">Quickly filter, analyze, and keep track of deals. No more emailing spreadsheets around.</p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
