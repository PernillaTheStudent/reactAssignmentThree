import React, { useState } from 'react';
import './App.css';
import { calculateLetters } from './calculateLetters';
import { parse, format } from "date-fns";
import useInterval from "use-interval";
import person from "./assets/img/person.png";
import twitter from "./assets/img/twitter.png";
import facebookAppLogo from "./assets/img/facebookAppLogo.png";
import ringChart from "./assets/img/ringChart.png"

function App() {
  const [bgColors, setBgColors] = useState({ bg1: "#4F64D9", bg2: "#1427A7" });
  const [width, setWidth] = useState(40);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState({ words: 0, letters: 0 });
  const [minutes, setMinutes] = useState("00.00");
  const [isTimeOn, setIsTimeOn] = useState(false);

  useInterval(() => {
    let minuteNow = format(new Date(), "HH.mm");
    setMinutes(minuteNow)
    setIsTimeOn(true);
    console.log(minutes);
  }, 30000)

  const buttonStyle = {
    background: `linear-gradient(${bgColors.bg1}, ${bgColors.bg2})`,
    width: `${width}%`,
  }

  const buttonHover = () => {
    setBgColors({ bg1: "#8E91F4", bg2: "#8E91F4" });
    setWidth(50)
  }

  const buttonLeave = () => {
    setBgColors({ bg1: "#4F64D9", bg2: "#1427A7" });
    setWidth(40);
  }

  const updateQuery = ({ target }) => {
    setQuery(target.value);
    // console.log("query:", query);
  }

  const handleClick = () => {
    console.log("click");
    console.log("click query:", query)
    const result = calculateLetters(query);
    setAmount((prev) => ({ ...prev, words: result.words, letters: result.letters }));
    // console.log(result)  // this update
    // console.log(amount)  // previous update
  }

  const keyPressed = ({ key }) => {
    if (key === "Enter") {
      handleClick();
    }
  }
  const submitHandler = e => {
    // console.log("submitHandler:", e);
    e.preventDefault();
    e.isDefaultPrevented();
  }

  const toDayDate = () => {
    const today = format(new Date(), "EEEE do LLLL y");
    return today;
  }

  return (
    <div className="App">
      <div className="outerContainer">
        <div className="topMenu">
          <div className='userSection'>
            <img src={person} alt="" width="70" height="70" />
            <div className='userInfo'>
              <h4>Bianca Lynch</h4>
              <p>bianca.lynch@gmail.com</p>
            </div>
          </div>
          <nav></nav>
          <div className="infoSection">
            <div className="timeSection">
              <h3>
                {!isTimeOn ?
                  (
                    <>
                      {format(new Date(), "HH.mm")}
                    </>
                  ) : (
                    <>
                      {minutes}
                    </>
                  )}
              </h3>
              <p>{toDayDate()}</p>
            </div>
            <div className="searchBar"></div>
            <div className="messages"></div>
            <div className="notifications">
              <div className="notificationsNumber">22</div>
            </div>
          </div>
        </div>
        <main>
          <aside>
            <div className="wrapper">
              <h4>Source of users</h4>
              <div className='chart'>
                <img className="ringChart" src={ringChart} alt="Ring Chart of source of users" width="410" height="415" />
              </div>
            </div>
            <div className='wrapper-social'>
              <div className="twitter">
                <h4>Twitter</h4>
                <div className='socialLogo'>
                  <img src={twitter} alt="Twitter logo" width="70" height="auto" />
                  <div className='activity'>
                    <p>Followers</p>
                    <h3>261.6k</h3>
                  </div>
                </div>
              </div>
              <div className="facebook">
                <h4>Facebook</h4>
                <div className='socialLogo'>
                  <img src={facebookAppLogo} alt="Facebook App logo" width="60" height="auto" />
                  <div className='activity'>
                    <p>Followers</p>
                    <h3>695k</h3>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section className="content">
            <div className="wrapper">
              <h1>Assignment <span style={{ color: "var(--accent-cerise)" }}>03</span></h1>
              <h4>Calculate number of words and letters</h4>
              <p>Ignores empty spaces and punctuations.</p>
              <form onSubmit={submitHandler}>
                <label>
                  <input
                    className="inputText"
                    placeholder="Write your sentence(s) here..."
                    type="text"
                    onChange={updateQuery}
                    onKeyPress={keyPressed}
                  />
                </label>
                <button
                  className="calculate"
                  style={buttonStyle}
                  type="button"
                  onMouseLeave={() => buttonLeave()}
                  onMouseEnter={() => buttonHover()}
                  onClick={handleClick}
                >
                  <span>Calculate</span>
                </button>
              </form>
              {/* {amount.words > 0 ? ( */}
                <>
                  <div className="result">
                    <p>Number of words in phrase:
                      <span style={{ color: "var(--accent-turquoise)", fontSize: "3.6rem" }}>
                        {` ${amount.words}`}
                      </span>
                    </p>
                    <p>Number of letters in phrase:
                      <span style={{ color: "var(--accent-turquoise)", fontSize: "3.6rem" }}>
                        {` ${amount.letters}`}
                      </span>
                    </p>
                  </div>
                </>
              {/* ) : (
                <>
                </>
              )} */}
            </div>
          </section>
        </main>
        <div className="footer">
          <p>Credit: <a href="https://dribbble.com/shots/10894364-Free-UI-Presentation-file-XD-PSD?utm_source=Clipboard_Shot&utm_campaign=EmranXDr&utm_content=Free%20UI%20%26%20Presentation%20file%20(XD%2BPSD)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=EmranXDr&utm_content=Free%20UI%20%26%20Presentation%20file%20(XD%2BPSD)&utm_medium=Social_Share" target="_blank">UI & Presentation Design</a></p>
        </div>

      </div>
    </div >
  )
}

export default App
