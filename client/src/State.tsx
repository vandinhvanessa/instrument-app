// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { PianoInstrument2 } from './instruments/mk1159';
import { BassInstrument } from './instruments/Bass';
import { PanFluteInstrument } from './instruments/PanFlute';
import { marimba } from './instruments/Marimba';

import { WaveformVisualizer } from './visualizers/Waveform';
import { FlyNotesVisualizer } from './visualizers/FlyNotes';
import { TwoDWaveformVisualizer } from './visualizers/TwoDWaveform';
import { AtomSpasmVisualizer } from './visualizers/AtomSpasm';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, BassInstrument, PianoInstrument2, PanFluteInstrument, marimba]);
const visualizers = List([WaveformVisualizer, FlyNotesVisualizer, TwoDWaveformVisualizer, AtomSpasmVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
