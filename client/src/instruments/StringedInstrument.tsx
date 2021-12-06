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
 * Contains implementation of components for Stringed Instruments.
 ** ------------------------------------------------------------------------ */

interface StringedKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  string: number; // affects verticality and starting octave/key
  index: number; // octave + index together give a location for the string key
}

export function StringedKey({
  note,
  synth,
  string,
  index,
}: StringedKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the stringed instrument.
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

function StringedType({ title, onClick, active }: any): JSX.Element {
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

interface InstrumentString {
    position: number,
    firstOctave: number,
    keyOffset: number
}

export interface InstrumentStrings {
    strings: InstrumentString[]
}

export function Stringed({ synth, setSynth }: InstrumentProps, instrumentStrings: InstrumentStrings, frets: number): JSX.Element {
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
          {instrumentStrings.strings.map(
            string =>
              Range(0, frets).map(
                fret =>
                  {
                    const localKey = noteKeys[(string.keyOffset + fret) % 12];
                    const octave = string.firstOctave + Math.floor((string.keyOffset + fret) / 12);
                    const note = `${localKey.note}${octave}`;
                    return (
                      <StringedKey
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
          <StringedType
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
