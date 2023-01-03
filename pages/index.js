import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>L Y R I C A L L Y.</h1>
          </div>
          <div className="header-subtitle">
            <h2>Please type the name of the song you want to understand.</h2>
          </div>
        </div>
      </div>
      <div className="prompt-container">
      <textarea
    placeholder="start typing here"
    className="prompt-box"
    value={userInput}
    onChange={onUserChangedText}
  />

<div className="prompt-buttons">
    <a className="generate-button" onClick={null}>
      <div className="generate">
        <p>Generate</p>
      </div>
    </a>
  </div>
        </div>
    </div>
  );
};

export default Home;
