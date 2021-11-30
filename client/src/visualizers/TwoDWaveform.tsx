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

    p5.background(0, 0, 0, 255);

    p5.noStroke();
    p5.strokeWeight(dim*0.01);
    p5.stroke(150, 70, 120, 150);
    p5.noFill();
  

    function getRandom(value: number){
      return Math.floor(Math.random() * value);
    }

    function directionChange(){
      if(xDirection <= -800){
        xValue = 5;
      }else if(xDirection >= 700){
        xValue = -5;
      }
    }

    function yChange(){
      if(yDirection >= 200){
        yValue = -5;
      } else if(yDirection <= -200){
        yValue = 5;
      }
    }

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;

      if(hasDrawn === 0){
        p5.translate(800, height/2)
        p5.push()
        p5.rect(50 + xDirection , 50 + yDirection, 50 + x * amplitude * getRandom(10), 50 + y * amplitude * getRandom(10));
        p5.pop()

        p5.push()
        p5.rect(0 + xDirection , 100 + yDirection, 50 + x * amplitude * getRandom(10), 50 + y * amplitude * getRandom(10));
        p5.pop()

        p5.push()
        p5.rect(100 + xDirection , 100 + yDirection, 50 + x * amplitude * getRandom(10), 50 + y * amplitude * getRandom(10));
        p5.pop()

        p5.push()
        p5.rect(100 + xDirection ,0 + yDirection, 50 + x * amplitude * getRandom(10), 50 + y * amplitude * getRandom(10));
        p5.pop()

        p5.push()
        p5.rect(0 + xDirection , 0 + yDirection, 50 + x * amplitude * getRandom(10), 50 + y * amplitude * getRandom(10));
        p5.pop()
        
        p5.push()
        p5.circle(75 + xDirection ,75 + yDirection,50 + y * amplitude * getRandom(10))
        p5.pop();

        hasDrawn = 1;
        directionChange();
        yChange();
      }
    
      
      // Place vertex
      // if(i%5 === 0){
      //   p5.rect(x, y, 20, 100 * getRandom(amplitude))
      // }

        //p5.point(x * getRandom(x), y * getRandom(y))

        //p5.triangle(width/2 - 300 + amplitude * getRandom(width), 375 + amplitude * getRandom(height), width/2 + amplitude * getRandom(width), 220 + amplitude * getRandom(height), width/2 + 300 +amplitude * getRandom(width), 375 + amplitude * getRandom(height));

    }
    // const amplitude = values[10] as number;

    xDirection += xValue;
    yDirection += yValue;
    p5.endShape();
    hasDrawn = 0;

    
  },
);
