import { h } from 'hyperapp';

export const SettingsAbout = ({ state }) =>
    <div class="settings_content">
        <div>Turtle Control Software v{state.system_info.tcs_ver}</div>
        <div>Shield Firmware v{state.system_info.firmware_ver}</div>
        <div>External WiFi: {state.system_info.wifi_dongle}</div>
        <div>
            {
                state.system_info.video_devices.map(device => (<VideoDevice device={device} />))
            }
        </div>
        <p>
            Please refer to docs.turtlerover.com to know more about the control options and the Rover maintenance.
            Feel free to contact us if you have any issue. We're constantly improving the UI, but it's still a long way to go.
            We'd love to have you participate in the project and get any feedback!
        </p>
        <span>Turtle Team</span>
        <span>contact@turtlerover.com</span>
        <span>www.turtlerover.com</span>
    </div>;

const VideoDevice = ({ device }) =>
    <div>Video device: {device.model} at {device.device}</div>;
