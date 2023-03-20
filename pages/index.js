import React,{Component, useState ,Fragment} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import parse from 'html-react-parser';

var ea="";
const Home = () => {
  var d="";
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

 
const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...",linkify(output.text))
 d=JSON.stringify(linkify(output.text))

//setApiOutput(`${linkify(output.text).ToString(Formatting.None)}`)
  setApiOutput(`${JSON.stringify(linkify(output.text).replace('\n', ''))}`);
  setIsGenerating(false);
}

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
function giveOutput(){
  return d;
}

  function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}




  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Between lines.</h1>
          </div>
          <div className="header-subtitle">
            <h2>Please type the name of the movie you want book recommendations for.</h2>
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
<a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>
   
  </div>
  
  
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    
    <div className="output-content">
      
    <div> <p>{parse(apiOutput)}</p> </div>
    
    


    </div>
  </div>
)}
        </div>
    </div>

    
    
  );
};

export default Home;
