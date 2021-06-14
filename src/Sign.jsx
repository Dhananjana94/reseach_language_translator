
import React, { useRef, useState } from "react";
// eslint-disable-next-line
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
import { drawHand } from "./utilities.js";

import * as fp from "fingerpose";

// import victoryDescription from './Gestures/Victory';
// import thumbsUpDescription from './Gestures/ThumbsUp';
// import hiDescription from './Gestures/Hi';
// import yesDescription from './Gestures/Yes';
// import callmeDescription from './Gestures/Callme';
// import good_luckDescription from './Gestures/GoodLuck';
// import whereDescription from './Gestures/Where';
// import whyDescription from './Gestures/Why';
// import iamDescription from './Gestures/Iam';
// import whoDescription from './Gestures/Who';

import oneDescription from './Signs/1';
import twoDescription from './Signs/2';
import threeDescription from './Signs/3';
import fourDescription from './Signs/4';
import fiveDescription from './Signs/5';
import sixDescription from './Signs/6';
import sevenDescription from './Signs/7';
import eightDescription from './Signs/8';
import nineDescription from './Signs/9';
import badDescription from './Signs/Bad';
import cannotDescription from './Signs/Cannot';
import comeDescription from './Signs/Come';
import dirtyDescription from './Signs/Dirty';
import easyDescription from './Signs/Easy';
import goodDescription from './Signs/Good';
import iloveyouDescription from './Signs/Iloveyou';
import maybeDescription from './Signs/Maybe';
import meDescription from './Signs/Me';
import noDescription from './Signs/No';
import surprisedDescription from './Signs/Surprised';
import thankyouDescription from './Signs/Thank-you';
import todayDescription from './Signs/Today';
import whatDescription from './Signs/What';
import whyDescription from './Signs/Why';
import yesDescription from './Signs/Yes';
import youDescription from './Signs/You';


const Sign = () => {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const signs = [];
  const transcript = [];

  const cq = new CircularQueue(4);
  const tail = cq.tail();

  const [emoji, setEmoji] = useState(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    // console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 2000);
  };
  runHandpose();

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);


      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          // victoryDescription,
          // thumbsUpDescription,
          // hiDescription,
          // yesDescription,
          // callmeDescription,
          // good_luckDescription,
          // whereDescription,
          // whyDescription,
          // iamDescription,
          // whoDescription,

          oneDescription,
          twoDescription,
          threeDescription,
          fourDescription,
          fiveDescription,
          sixDescription,
          sevenDescription,
          eightDescription,
          nineDescription,
          badDescription,
          cannotDescription,
          comeDescription,
          dirtyDescription,
          easyDescription,
          goodDescription,
          iloveyouDescription,
          maybeDescription,
          meDescription,
          noDescription,
          surprisedDescription,
          thankyouDescription,
          todayDescription,
          whatDescription,
          whyDescription,
          yesDescription,
          youDescription
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 8);
        // console.log(gesture);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(confidence);
          // console.log(gesture);
          setEmoji(gesture.gestures[maxConfidence].name);
          // console.log(emoji);
          signs.push(emoji);
          console.log(signs);
        }
      }
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
    if(tail !== emoji && emoji !== null ){
      // cq.enqueue(emoji);
      transcript.push(emoji);
      console.log(transcript);
    }
    cq.print();
  };

  return (
    <div>
      
      <header className="App-header">
      <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {emoji !== null ? (
          <span
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          >{emoji}</span>
        ) : (
          ""
        )}
      </header>
    </div>
  )
}



class CircularQueue {
  #list;
  #capacity;
  #tail = -1;
  #head = -1;
  #size = 0;

  constructor(capacity) {
    this.#capacity = Math.max(Number(capacity), 0) || 10;
    this.#list = Array(this.#capacity).fill(null);
  }

  get size() {
    return this.#size;
  }

  get isFull() {
    return this.size === this.#capacity;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    if (!this.isFull) {
      this.#tail = (this.#tail + 1) % this.#capacity;
      this.#list[this.#tail] = item;
      this.#size += 1;

      if (this.#head === -1) {
        this.#head = this.#tail;
      }
    }

    return this.size;
  }

  dequeue() {
    let item = null;
    if (!this.isEmpty) {
      item = this.#list[this.#head];
      this.#list[this.#head] = null;
      this.#head = (this.#head + 1) % this.#capacity;
      this.#size -= 1;

      if (!this.size) {
        this.#head = -1;
        this.#tail = -1;
      }
    }
    return item;
  }

  peek() {
    return this.#list[this.#head];
  }

  print() {
    // console.log(this.#list.filter((el) => el !== null));
  }
  tail(){
    return this.#list[this.#tail];
  }
}



export default Sign;
