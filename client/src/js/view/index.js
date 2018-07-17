import { h} from 'hyperapp'

import { BootScreen } from './bootscreen'
import { StatusBar } from './components/statusbar'
import { Stream } from './components/stream'
import { Settings } from "./components/settings"
import { Manipulator } from "./components/manipulator";
import { Joystick } from "./components/joystick";
import { Gripper } from "./components/gripper";
import { ModeChooser } from "./components/modechooser";

const view = (state, actions) => (
    <main>
        <BootScreen state={state.showBootScreen}/>
        <div id="wrapper" class="wrapper">
            <StatusBar state={state.telemetry} switchSettings={actions.settings.setVisibility}/>
            <Settings state={state.settings} actions={actions.settings}/>
            <div class="crosshair"></div>
            <div class="dots"></div>
            <div class="controls-box-right">
                <Manipulator mode={state.mode} state={state.manipulator}/>
                <Joystick mode={state.mode} joystick={actions.joystick} motors={actions.motors}/>
            </div>
            <div class="controls-box-left">
                <Gripper state={state.gripper}/>
                <ModeChooser mode={state.mode} setMode={actions.setMode}/>
            </div>
            <Stream/>
        </div>
    </main>
)

export default view