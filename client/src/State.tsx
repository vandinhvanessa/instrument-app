// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { PianoInstrument2 } from './instruments/mk1159';
import { BassInstrument } from './instruments/Bass';
import { PanFluteInstrument } from './instruments/PanFlute';
import { steelPan } from './instruments/Steelpan';

import { WaveformVisualizer } from './visualizers/Waveform';
import { FlyNotesVisualizer } from './visualizers/FlyNotes';
import { TwoDWaveformVisualizer } from './visualizers/TwoDWaveform';
import { rainDropVisualizer } from './visualizers/RainDrop';

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

const instruments = List([PianoInstrument, BassInstrument, PianoInstrument2, PanFluteInstrument, steelPan]);
const visualizers = List([WaveformVisualizer, FlyNotesVisualizer, TwoDWaveformVisualizer, rainDropVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
