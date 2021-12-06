// 3rd party library imports
import P5 from 'p5';
//import "lib/p5.js" from 'p5';
import * as Tone from 'tone';
//final-project-rekursive/client/node_modules/p5/lib/p5.js
//import background from '../img/tokyoTrees.jpeg';
// project imports
import { Visualizer } from '../Visualizers';


export const OdeToMS = new Visualizer(
    'OdeToMS',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
        //p5.imageMode(p5.CENTER);
        // var backgroundView = p5.loadImage(background);
        //p5.angleMode(p5.DEGREES);

        //p5.background(0, 0, 0, 255);
        //p5.image(backgroundView, 0, 0, width, height);
        p5.strokeWeight(dim * 0.01);
        const values = analyzer.getValue();

        p5.stroke(1, 205, 254);
        p5.noFill();

        var vol = [];
        p5.beginShape();
        p5.translate(width / 2, height / 2);

        for (let i = 0; i < 360; i++) {

            const amplitude = values[i] as number;
            vol.push(amplitude);
            const x = p5.map(i, 0, values.length - 1, 0, width);
            const y = height / 2 + amplitude * height;
            //var r = p5.map(i, 0, values.length - 1, 0, width / 4);
            var r = p5.map(amplitude, 0, 1, 0, width);
            var xx = r * p5.cos(i);
            var yy = r * p5.sin(i);

            p5.stroke(x, y, x);
            p5.vertex(xx, yy);
            p5.pop();
            p5.background(x, y, x, 0);
        }

        if (values.length > 360) {
            values.slice(0, 1);
            p5.push();
        }
        p5.endShape();
    },
);
