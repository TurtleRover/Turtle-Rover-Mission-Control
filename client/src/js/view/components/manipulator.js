import { h } from 'hyperapp'


export const Manipulator = ()  => 
    <div class="manipulatorControl manipulatorControl-hide">
        <div class="range" id="axis1-slider">
            <span class="range_name">AXIS 1</span>
            <div class="range_labels">
                <span class="range_labelMin">0%</span>
                <span class="range_labelMax">100%</span>
            </div>
            <input type="range" class="range_input" id="axis1-slider-input" max="5000" min="2200" step="10" value="4600" />
        </div>

        <div class="range" id="axis2-slider">
            <span class="range_name">AXIS 2</span>
            <div class="range_labels">
                <span class="range_labelMin">0%</span>
                <span class="range_labelMax">100%</span>
            </div>
            <input type="range" class="range_input" id="axis2-slider-input" max="5000" min="2700" step="10" value="3400" />
        </div>
    </div>

