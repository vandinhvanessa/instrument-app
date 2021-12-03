// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import { Noise } from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

//Vanessa Van Dinh
export const AtomSpasmVisualizer = new Visualizer(
  'Atom Spasm',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    
    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    //p5.stroke(153, 204, 255);
    p5.noFill();

    
    
    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;

      let randomizer1 = Math.floor(Math.random() * 255);
      let randomizer2 = Math.floor(Math.random() * 255);
      let randomizer3 = Math.floor(Math.random() * 255);
      // Place vertex
      //p5.vertex(x * amplitude * ranX, y * amplitude * ranY);
      //p5.vertex(y + 400, x);
      p5.stroke(randomizer1, randomizer2, randomizer3);
      let s1 = 200 * p5.noise(0.01 * p5.frameCount + 60);
      let s2 = 50 * p5.noise(0.01 * p5.frameCount + 60);
      let s3 = 30 * p5.noise(0.01 * p5.frameCount + 60);
      p5.translate(300, 200);
     

      for(let i = 0; i < 10; i++){
        p5.push();
        p5.rotate((p5.TWO_PI * p5.noise(0.01 * p5.frameCount + 10)) + p5.TWO_PI * i / 7);
        p5.translate(200 * p5.noise(0.01 * p5.frameCount + 50), 0);
        p5.ellipse(0, 0, s1 + x * amplitude * Math.floor(Math.random() * 10), s2 + y * amplitude * Math.floor(Math.random() * 10));
        for(let j = 0; j < 6; j++){
          p5.push();
          p5.rotate((p5.TWO_PI * p5.noise(0.01 * p5.frameCount + 20)) + p5.TWO_PI * j / 6);
          p5.translate(60 * p5.noise(0.01 * p5.frameCount + 40), 0);
          p5.rotate(p5.TWO_PI * p5.noise(0.01 * p5.frameCount + 30));
          p5.ellipse(60 * p5.noise(0.01 * p5.frameCount + 40), 0, s2 + x * amplitude * Math.floor(Math.random() * 10), s2 + y * amplitude * Math.floor(Math.random() * 10));
          /*for(let k = 0; k < 4; k++){
            p5.push();
            p5.rotate(p5.TWO_PI * p5.noise(0.01 * p5.frameCount + 40) + p5.TWO_PI * k / 3);
            p5.translate(40 * p5.noise(0.01 * p5.frameCount + 60), 0);
            p5.rotate(p5.TWO_PI * p5.noise(0.01 * p5.frameCount + 40));
            p5.ellipse(40 * p5.noise(0.01 * p5.frameCount + 60), 0, s3 + x * amplitude * Math.floor(Math.random() * 10), s3  + y * amplitude * Math.floor(Math.random() * 10));
            p5.pop();
          }*/
          p5.pop();
        }
        p5.pop();
      }
      p5.translate(300, -200);
    }
    p5.endShape();
  },
);


