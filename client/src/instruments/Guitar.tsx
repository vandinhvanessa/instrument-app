// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import {Stringed, InstrumentStrings } from './StringedInstrument'

/** ------------------------------------------------------------------------ **
 * Contains implementation of Guitar specific components.
 ** ------------------------------------------------------------------------ */

function Guitar(props: InstrumentProps): JSX.Element {
  const guitarStrings: InstrumentStrings = {
    strings: [
        {position: 0, firstOctave: 4, keyOffset: 4}, //firstNote: 'E4',
        {position: 1, firstOctave: 3, keyOffset: 11},//firstNote: 'B3',
        {position: 2, firstOctave: 3, keyOffset: 7}, //firstNote: 'G3'
        {position: 3, firstOctave: 3, keyOffset: 2}, //firstNote: 'D3'
        {position: 4, firstOctave: 2, keyOffset: 9}, //firstNote: 'A2',
        {position: 5, firstOctave: 2, keyOffset: 4}, //firstNote: 'E2',
  ]};

  const frets: number = 22; // sets the number of frets; 21 - 24 is common for guitar

  return Stringed(props, guitarStrings, frets)
}

export const GuitarInstrument = new Instrument('Guitar', Guitar);