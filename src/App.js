import React from "react";
import './App.css';
// eslint-disable-next-line
import logo from './assets/logo.jpg'
import Lottie from "react-lottie";
import animationData from "./lotties/66879-pulsing-heart.json";
import animationData2 from "./lotties/hearts.json";
import heartAnimation from "./lotties/6095-love-floating.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      //preserveAspectRatio: "xMidYMid slice"
    }

  };

  const heartOptions = {
    loop: true,
    autoplay: true,
    animationData: heartAnimation,
    rendererSettings: {
      //preserveAspectRatio: "xMidYMid slice"
    }

  };

  const countdown = () => {
    const countDate = new Date("Nov 19, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
  };
  setInterval(countdown, 1000);
  // eslint-disable-next-line
  const backgroundOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      //preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <div className="App border">
      <div className="wrapper">
        <div className="toptext orange">॥ श्री गणेशाय नमः ॥</div>
        <div className="padding-1 request brown">Together With Their Families</div>
        <div className="orange title">Laveena Soni</div>
        <div className="label data secondtext brown">D/O Mrs. Mona & Mr. Sunil Soni</div>
        <div className="orange title marginAnd">&</div>
        <div className="padding-1 orange title">Akshay Sharma</div>
        <div className="label data secondtext brown">S/O Mrs. Anita & Mr. Anil Sharma</div>
        <div className="request">Request your gracious presence at their Wedding </div>
      </div>
      <div id="melodies" onClick="playMusic()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
      </svg>
      </div>
      <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval="5000">
          <div>
            <div class="row">
              <div class="col-sm-6">
                <div class="card cardBorder">
                  <div class="card-body">
                    <h5 class="card-title inviteData">Wedding Details</h5>
                    <div className="map-data">Friday, November 19th,2021</div>
                    <div className="map-data margin-three">7 O'Clock in the evening</div>
                    <Lottie options={defaultOptions} height={20} width={20} />

                    <div className="map-data brown lighttext margin-three"><a href="https://www.google.com/maps/dir/23.8068096,86.4895453/sumerpur+choudhary+banquet+and+garden/@25.2303669,70.6541764,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3942ecaa866055ff:0xcfed109cf2d4158d!2m2!1d73.0850371!2d25.1480122">Choudhary Banquet & Garden, Sumerpur</a></div>
                    <div className="data brown"></div>
                    <div className="label data brown"><a href="https://www.google.com/maps/dir/23.8068096,86.4895453/sumerpur+choudhary+banquet+and+garden/@25.2303669,70.6541764,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3942ecaa866055ff:0xcfed109cf2d4158d!2m2!1d73.0850371!2d25.1480122">Pali, RAJASTHAN</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-sm-6">
                <div class="card cardBorder">
                  <div class="card-body">
                    <h5 class="card-title inviteData">Reception Details</h5>
                    <div className="map-data">Wednesday, November 24th,2021</div>
                    <div className="map-data margin-three">7 O'Clock in the evening</div>
                    <Lottie options={defaultOptions} height={20} width={20} />

                    <div className="map-data  brown lighttext margin-three"><a href="https://www.google.com/maps/place/CCWO+football+ground/@23.8188724,86.4608286,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipNz10hoPbc6Q7-Lo76WevYygk4SOMg_BykjQUTJ!2e10!3e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNz10hoPbc6Q7-Lo76WevYygk4SOMg_BykjQUTJ%3Dw152-h86-k-no!7i1920!8i1080!4m13!1m7!3m6!1s0x39f6bc7e5c4e97eb:0x970ebdf8c8b9d3a7!2sSteel+Gate,+Kusum+Vihar,+Chanakya+Nagar,+Dhanbad,+Jharkhand+826005!3b1!8m2!3d23.8137791!4d86.4612637!3m4!1s0x39f6bb2646dff18f:0x181709c73dce4d65!8m2!3d23.8188724!4d86.4608286">Nehru Complex, C.C.W.O Colony</a></div>
                    <div className="data brown"></div>
                    <div className="label data brown"><a href="https://www.google.com/maps/place/CCWO+football+ground/@23.8188724,86.4608286,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipNz10hoPbc6Q7-Lo76WevYygk4SOMg_BykjQUTJ!2e10!3e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNz10hoPbc6Q7-Lo76WevYygk4SOMg_BykjQUTJ%3Dw152-h86-k-no!7i1920!8i1080!4m13!1m7!3m6!1s0x39f6bc7e5c4e97eb:0x970ebdf8c8b9d3a7!2sSteel+Gate,+Kusum+Vihar,+Chanakya+Nagar,+Dhanbad,+Jharkhand+826005!3b1!8m2!3d23.8137791!4d86.4612637!3m4!1s0x39f6bb2646dff18f:0x181709c73dce4d65!8m2!3d23.8188724!4d86.4608286">Dhanbad, Jharkhand</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Carousel>
      </div>
      <div className="hashtag">#AllAkshNeedIsLav #LavAksh #AkshGotLav</div>
      <div class="coming-soon">
        <div>
          <h2 className="countdown-text brown">Let's countdown, share & come celebrate with us in</h2>
          <div class="countdown">
            <div class="container-day count-down-style">
              <h3 class="day">Time</h3>
              <p>Day</p>
            </div>
            <div class="container-hour count-down-style">
              <h3 class="hour">Time</h3>
              <p>Hour</p>
            </div>
            <div class="container-minute count-down-style">
              <h3 class="minute">Time</h3>
              <p>Minute</p>
            </div>
            <div class="container-second count-down-style">
              <h3 class="second">Time</h3>
              <p>Second</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
