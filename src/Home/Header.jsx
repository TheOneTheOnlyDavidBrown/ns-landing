import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper" href="https://notesleuth.com" target="_blank">
        <i className="logo" />
        <span>NoteSleuth</span>
      </a>
      <div className="button">
      {/* <Button onClick={() => window.location.href ="http://app.notesleuth.com/create-account"}>Register</Button>&nbsp;
      <Button type="primary" onClick={() => window.location.href ="http://app.notesleuth.com/login"}>Login</Button> */}
      <Button type="primary" onClick={() => window.location.href ="#join-waitlist"}>Join the Waitlist</Button>
      </div>
    </header>
  );
}
