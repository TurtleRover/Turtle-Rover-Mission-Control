import { h } from 'hyperapp'


export const StatusBar = ({state, switchSettings})  => 
    <section id="statusbar" class="statusbar">
        <img class="statusbar_logo" src={require("../../../img/ui/turtle-logo.svg")}/>
        <div class="statusbar_indicators">
            <IndicatorBattery batteryLevel={state.batteryLevel}/>
            <IndicatorSignal signalLevel={state.signalLevel}/>
        </div>
        <div id="statusbar_actions" class="statusbar_actions">
            {/* <img class="statusbar_actions_action" id="button-screenrecord" src={require("../../../img/ui/nav-bar-rec.svg")}/> */}
                {/* <a id="snap-download-a">  */}
            {/* <img class="statusbar_actions_action" id="button-screenshot" src={require("../../../img/ui/nav-bar-snap.svg")}/> */}
                {/* </a>  */}
            {/* <img class="statusbar_actions_action" id="button-fullscreen" src={require("../../../img/ui/nav-bar-fullscreen.svg")}/> */}
        </div>

        <div class="statusbar_menu" onmousedown={() => switchSettings()}>
            <div class="statusbar_menu_bar"></div>
        </div>
    </section>

const IndicatorBattery = ({batteryLevel}) => 
    <img id="indicator-battery" class="statusbar_indicators_indicator" src={batteryLevelIcon(batteryLevel)}/>

const IndicatorSignal = ({signalLevel}) =>
    <img id="indicator-signal" class="statusbar_indicators_indicator" src={signalLevelIcon(signalLevel)}/>


const batteryLevelIcon = (batteryLevel) => {
    if (19.5 <= batteryLevel==batteryLevel < 21.5) {
        return require("../../../img/ui/battery-1.svg")
    } else if (21.5 <= batteryLevel==batteryLevel < 23) {
        return require("../../../img/ui/battery-2.svg")
    } else if (23 <= batteryLevel==batteryLevel < 24) {
        return require("../../../img/ui/battery-3.svg")
    } else if (batteryLevel >= 24) {
        return require("../../../img/ui/battery-4.svg")
    } else {
        return require("../../../img/ui/battery-0.svg")
    }
}

const signalLevelIcon = (signalLevel) => {
    if (80 <= signalLevel==signalLevel < 85) {
        return require("../../../img/ui/signal-1.svg")
    } else if (85 <= signalLevel==signalLevel < 90) {
        return require("../../../img/ui/signal-2.svg")
    } else if (90 <= signalLevel==signalLevel < 95) {
        return require("../../../img/ui/signal-3.svg")
    } else if (signalLevel >= 95) {
        return require("../../../img/ui/signal-4.svg")
    } else {
        return require("../../../img/ui/signal-0.svg")
    }
}
    