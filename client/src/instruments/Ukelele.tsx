// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import {Stringed, InstrumentStrings } from './StringedInstrument'

/** ------------------------------------------------------------------------ **
 * Contains implementation of Ukelele specific components.
 ** ------------------------------------------------------------------------ */

function Ukelele(props: InstrumentProps): JSX.Element {
  const ukeleleStrings: InstrumentStrings = {
    strings: [
        {position: 0, firstOctave: 4, keyOffset: 9}, //firstNote: 'A4'
        {position: 1, firstOctave: 4, keyOffset: 4}, //firstNote: 'E4'
        {position: 2, firstOctave: 4, keyOffset: 0}, //firstNote: 'C4',
        {position: 3, firstOctave: 4, keyOffset: 6}, //firstNote: 'G4',
  ]};

  const frets: number = 11; // sets the number of frets; 22 - 24 is common for ukelele

  return Stringed(props, ukeleleStrings, frets)
}

export const UkeleleInstrument = new Instrument('Ukelele', Ukelele);