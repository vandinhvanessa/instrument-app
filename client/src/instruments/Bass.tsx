// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import {Stringed, InstrumentStrings } from './StringedInstrument'

/** ------------------------------------------------------------------------ **
 * Contains implementation of Bass specific components.
 ** ------------------------------------------------------------------------ */

function Bass(props: InstrumentProps): JSX.Element {
  const bassStrings: InstrumentStrings = {
    strings: [
    {position: 0, firstOctave: 3, keyOffset: 7}, //firstNote: 'G3'
    {position: 1, firstOctave: 3, keyOffset: 2}, //firstNote: 'D3'
    {position: 2, firstOctave: 2, keyOffset: 9}, //firstNote: 'A2',
    {position: 3, firstOctave: 2, keyOffset: 4}, //firstNote: 'E2',
  ]};

  const frets: number = 24; // sets the number of frets; 22 - 24 is common for bass

  return Stringed(props, bassStrings, frets)
}

export const BassInstrument = new Instrument('Bass', Bass);