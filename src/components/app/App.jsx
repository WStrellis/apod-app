import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';
import styled from "styled-components";

const  Div = styled.div`
  height: 200px;
  width: 300px;
  background-color: blue;
`;

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Div/>
    </div>
  );
}

export default App;
