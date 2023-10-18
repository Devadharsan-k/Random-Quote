import { useEffect, useState } from "react";
import { FcSpeaker } from "react-icons/fc";
import { VscRefresh } from "react-icons/vsc";

import "./Quotes.css";

function Quotes() {
  const [quote, setQuote] = useState({
    text: "Intha ulagam jeichuruven nu sonna kekathu. Jeichavan sonna kekum. Nee ethu pesurathu irunthalum jeichutu vanthu pesu.",
    author: "Sivakarthikeyan",
  });

  const [quotes, setQuotes] = useState([]);

  async function loadQuotes() {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    setQuotes(data);
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote);
  };

  const handleSpeak = () => {
    const synth1 = new SpeechSynthesisUtterance(quote.text);
    speechSynthesis.speak(synth1);
    const synth2 = new SpeechSynthesisUtterance(quote.author.split(",")[0]);
    speechSynthesis.speak(synth2);
  };

  return (
    <div className="flex flex-col">
      <div className="m-10 font-semibold text-xl md:text-2xl">
        <p className="main">{quote.text}</p>
      </div>
      <div className="flex items-c`enter justify-between mx-10 mb-10 border-t border-t-black pt-8">
        <div className="space-x-10">
          <button onClick={handleSpeak}>
            <FcSpeaker size={30} />
          </button>
          <button onClick={handleRandom}>
            <VscRefresh size={30} />
          </button>
        </div>
        <p className="author text-xl md:text-2xl">{`${"- "} ${
          quote.author.split(",")[0]
        }`}</p>
      </div>
    </div>
  );
}

export default Quotes;
