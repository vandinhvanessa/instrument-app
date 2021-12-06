// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

let hasDrawn = 0;
let xDirection = 0;
let xValue = 5;
let yDirection = 0;
let yValue = 5;
export const TwoDWaveformVisualizer = new Visualizer(
  'TwoDWaveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(255, 255, 255, 255);

    p5.noStroke();
    p5.strokeWeight(dim*0.01);
  
    p5.translate(width/2, height/2);
  

    function getRandom(value: number){
      return Math.floor(Math.random() * value);
    }

    function directionChange(){
      if(xDirection <= -width/2){
        xValue = 5;
      }else if(xDirection >= height/2){
        xValue = -5;
      }
    }

    function yChange(){
      if(yDirection >= height/2){
        yValue = -5;
      } else if(yDirection <= -height/2){
        yValue = 5;
      }
    }


    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      let angle = p5.map(i, 0, values.length, 0, 360)
      const amplitude = values[i] as number;
      let radius = p5.map(amplitude * height, 0, 256, 50, 300)
      const x = radius * p5.cos(angle);
      const y = radius * p5.sin(angle);

      p5.stroke(getRandom(255 * amplitude), getRandom(255 * amplitude), getRandom(255 * amplitude));
      p5.line(xDirection, yDirection, x + xDirection, y + yDirection);


    }
    
      
    
    directionChange();
    yChange();
    xDirection += xValue;
    yDirection += yValue;
    p5.endShape();    
  },
);
