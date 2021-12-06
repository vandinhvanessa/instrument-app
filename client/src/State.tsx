// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { PianoInstrument2 } from './instruments/mk1159';
import { PanFluteInstrument } from './instruments/PanFlute';
import { marimba } from './instruments/Marimba';
import { BassInstrument } from './instruments/Bass';
// import { BassInstrument } from './instruments/BassOld';
import { GuitarInstrument } from './instruments/Guitar';
import { UkeleleInstrument } from './instruments/Ukelele';

import { WaveformVisualizer } from './visualizers/Waveform';
import { StainedGlassVisualizer } from './visualizers/StainedGlass';
import { OdeToMS } from './visualizers/OdeToMS';
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
// const instruments = List([PianoInstrument, BassInstrument, PianoInstrument2, PanFluteInstrument, marimba]);
const instruments = List([PianoInstrument, BassInstrument, PianoInstrument2, PanFluteInstrument, marimba, GuitarInstrument, UkeleleInstrument]);
const visualizers = List([WaveformVisualizer, StainedGlassVisualizer, TwoDWaveformVisualizer, AtomSpasmVisualizer, OdeToMS]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
