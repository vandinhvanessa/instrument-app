// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

let xDirection = 0;
let xValue = 10;
let yDirection = 0;
let yValue = 0;
export const FlyNotesVisualizer = new Visualizer(
  'FlyNotes',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    function getRandom(value: number){
      return Math.floor(Math.random() * value);
    }

    function directionChange(){
      // if(xDirection <= -width/2){
      if(xDirection <= -width/2 && yValue == 0){
        yValue = 10;
        xValue = 0;
      // } else if(yDirection >= height) {
      } else if(yDirection >= height/2 && xValue == 0) {
        yValue = 0;
        xValue = 10;
      // } else if(xDirection >= width/3){
      } else if(xDirection >= width/2 - 250 && yValue == 0){
        yValue = -10;
        xValue = 0;
      // } else if(yDirection <= height/2) {
      } else if(yDirection <= -height/2 && xValue == 0) {
        yValue = 0;
        xValue = -10;
      }
    }

    // p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * .01);

    p5.fill(getRandom(255), getRandom(255), getRandom(255));

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      let angle = p5.map(i, 0, values.length, 0, 360)
      const amplitude = values[i] as number;
      let radius = p5.map(amplitude * height, 0, 256, 50, 300)
      const x = radius * p5.cos(angle) + width/2;
      const y = radius * p5.sin(angle) + height/2;

      p5.stroke(getRandom(255 * amplitude), getRandom(255 * amplitude), getRandom(255 * amplitude));
      p5.curveVertex(x + xDirection, y + yDirection);
    }
    directionChange();
    xDirection += xValue;
    yDirection += yValue;

    p5.endShape();
  },
);
