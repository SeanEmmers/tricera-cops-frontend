import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeSix = ({showCurtains}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Pff, useless! Take a look elswhere in the room, there must be more clues!"
    )
  }

  const letterContent = () => {
    return(
      <div>
      <p>I know you took that money from my business</p>
      <p>I won't stand for this,</p>
      <p>I will come and get it from you myself tonight if I have too. </p>
      <p>P</p>
    </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    showCurtains(true);
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeSix" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeSix;