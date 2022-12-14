// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, {useEffect} from 'react';
import fluteKey from '../img/bambooimage.jpg'

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface PanFluteProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function PanFluteKey({
  note,
  synth,
  minor,
  index,
}: PanFluteProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <img
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('pointer absolute dim', {
        'black bg-white': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
        height: `${35 - (1+index) * 1.5}rem`,
      }}
      src={fluteKey}
      alt=""
    ></img>
  );
}

// eslint-disable-next-line
function PianoKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: PanFluteProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'img',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames(' pointer absolute dim',),
      src: "./img/jGlzr.png",
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
        height: `${index + 5}rem`
      },
    },
    [],
  );
}

function PanFluteType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}


function PanFlute({synth, setSynth}: InstrumentProps): JSX.Element {

  
  const keys = List([
    { note: 'C', idx: 0 },
    //{ note: 'Db', idx: 1 },
    { note: 'D', idx: 1 },
    //{ note: 'Eb', idx: 3 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    //{ note: 'Gb', idx: 6 },
    { note: 'G', idx: 4 },
    //{ note: 'Ab', idx: 8 },
    { note: 'A', idx: 5 },
    //{ note: 'Bb', idx: 10 },
    { note: 'B', idx: 6 },
  ]);


  const setOscillator = () => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
          "volume": 1,
          "detune": 0,
          "portamento": 0,
          "envelope": {
            "attack": 10,
            "attackCurve": "linear",
            "decay": 0.3,
            "decayCurve": "exponential",
            "release": 0.8,
            "releaseCurve": "exponential",
            "sustain": 0.4
          },
          "oscillator": {
            "partialCount": 8,
            "partials": [
              1.2732395447351628,
              0,
              0.4244131815783876,
              0,
              0.25464790894703254,
              0,
              0.18189136353359467,
              0
            ],
          "phase": 0
          },
            }).toDestination();
    });
  };

  useEffect(() =>{
    setOscillator();
  },[])

  return (
    <div className="pv3">
      <div className="relative dib h4 w-75" style={{right: "200px"}}>
        {Range(3, 5).map(octave =>
          keys.map(key => {
            //const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave}`;
            return (
              <PanFluteKey
                key={note} //react key
                note={note}
                //minor={isMinor}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

export const PanFluteInstrument = new Instrument('PanFlute', PanFlute);
