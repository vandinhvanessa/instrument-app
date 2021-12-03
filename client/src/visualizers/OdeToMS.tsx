// 3rd party library imports
import P5 from 'p5';
//import "lib/p5.js" from 'p5';
import * as Tone from 'tone';
//final-project-rekursive/client/node_modules/p5/lib/p5.js

// project imports
import { Visualizer } from '../Visualizers';


export const OdeToMS = new Visualizer(
    'OdeToMS',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
        p5.angleMode(p5.DEGREES);

        //p5.background(0, 0, 0, 255);
        //p5.background(255, 255, 255, 255);
        p5.strokeWeight(dim * 0.01);
        const values = analyzer.getValue();

        p5.stroke(1, 205, 254);
        p5.noFill();

        var vol = [];
        p5.beginShape();
        //p5.circle(width / 2, height / 2, width / 4);
        //p5.ellipse(width / 2, height / 2, width / 2, height / 4, width / 3);
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
            //console.log(values[i]);
            //p5.point(xx, yy);
            // Place vertex
            //p5.vertex(i, p5.map(, 0, 255, height, 0));
            p5.stroke(x, y, x);
            p5.vertex(xx, yy);
            p5.background(x, y, x, 0);
        }
        //p5.background(0, 0, 0, 0);

        //p5.ellipse(width / 2, height / 2, width / 4);
        // for (let i = 0; i < 360; i++) {
        //     const amplitude = values[i] as number;
        //     console.log(values);
        //     var r = p5.map(i, 0, values.length - 1, 10, 100);;
        //     var x = r * p5.cos(i);
        //     var y = r * p5.sin(i);
        //     //const x = p5.map(i, 0, values.length - 1, 0, width);
        //     //const y = height / 2 + amplitude * height;
        //     //p5.point(i, amplitude);
        //     // Place vertex
        //     p5.point(x, y);

        //     //p5.background(x, y, x, 255); 

        // }
        if (values.length > 360) {
            values.slice(0, 1);
        }
        p5.endShape();
    },
);
