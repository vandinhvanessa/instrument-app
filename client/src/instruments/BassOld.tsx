// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps, noteKeys } from '../Instruments';
import backgroundImage from '../img/wood-background3.png';
import pick from '../img/pick.png';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Bass.
 ** ------------------------------------------------------------------------ */

interface BassKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  string: number; // affects verticality and starting octave/key
  index: number; // octave + index together give a location for the bass key
}

export function BassKey({
  note,
  synth,
  string,
  index,
}: BassKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the bass.
   * See `BassKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'black bg-white': 1, // major keys are white
      })}
      style={{
        // CSS
        top: `${string * 2}rem`,
        height: '2rem',
        left: `${index * 4}rem`,
        zIndex: string, // z-index determines whats on top; should be by string
        width: '4rem',
        background: `url(${backgroundImage})`,
        cursor: `url(${pick}), auto`
      }}
    ></div>
  );
}

function BassType({ title, onClick, active }: any): JSX.Element {
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

function Bass({ synth, setSynth }: InstrumentProps): JSX.Element {
  const bassStrings = List([
    {position: 0, firstOctave: 3, keyOffset: 7}, //firstNote: 'G3'
    {position: 1, firstOctave: 3, keyOffset: 2}, //firstNote: 'D3'
    {position: 2, firstOctave: 2, keyOffset: 9}, //firstNote: 'A2',
    {position: 3, firstOctave: 2, keyOffset: 4}, //firstNote: 'E2',
  ]);

  const myStrings = bassStrings;
  const frets = 24; // sets the number of frets; 22 - 24 is common for bass

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
          {myStrings.map(
            string =>
              Range(0, frets).map(
                fret =>
                  {
                    const localKey = noteKeys[(string.keyOffset + fret) % 12];
                    const octave = string.firstOctave + Math.floor((string.keyOffset + fret) / 12);
                    const note = `${localKey.note}${octave}`;
                    return (
                      <BassKey
                        key={note} //react key
                        note={note}
                        synth={synth}
                        string={string.position}
                        index={fret}
                      />
                    );
                  },
                
              )
          )}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <BassType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const BassInstrument = new Instrument('Bass', Bass);
