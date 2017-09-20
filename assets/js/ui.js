/*
 * UI is responsible for all interactions User <-> Application
 * It uses the Revealing Module Pattern
 * https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
*/

var ui = (function () {
    /*
     *	saves the date of loading the session - used for timer
     */
    var startTime = new Date();
    setInterval(function () {
        updateSessionTimer();
    }, 1000);

    function updateSessionTimer() {
        var time = new Date();
        var diff = time - startTime;
        diff = Math.round(diff / 1000);	// change from milliseconds to seconds
        var minutes = Math.floor(diff / 60);
        var seconds = diff - minutes * 60;

        // Add leading 0 to the string
        function pad(n) {
            return (n < 10) ? ("0" + n) : n;
        }

        $('#session-time-text').text(pad(String(minutes)) + ":" + pad(String(seconds)));
    };
    
    /*
     * Initialize jquery-ui elements
     */
    function initializeUI() {
        // Settings accordion
        $("#menu-accordion").accordion({
            collapsible: true,
            heightStyle: "content",
            header: "h4",
            active: false
        });
        
        // Maximum speed sliders
        $("#slider-speed-all").slider({
            value: 1,
            min: 0,
            max: 1,
            step: 0.05,
            slide: function (event, ui) {
                $("#value-speed-all").text(ui.value);
                $("#slider-speed-fl").slider("value", ui.value);
                $("#slider-speed-fr").slider("value", ui.value);
                $("#slider-speed-rl").slider("value", ui.value);
                $("#slider-speed-rr").slider("value", ui.value);
                $("#value-speed-fl").text(ui.value);
                $("#value-speed-fr").text(ui.value);
                $("#value-speed-rl").text(ui.value);
                $("#value-speed-rr").text(ui.value);
            }
        });
        $("#value-speed-all").text($("#slider-speed-all").slider("value"));
        
        $("#slider-speed-fl").slider({
            value: 1,
            min: 0,
            max: 1,
            step: 0.05,
            slide: function (event, ui) {
                $("#value-speed-fl").text(ui.value);
            }
        });
        $("#value-speed-fl").text($("#slider-speed-fl").slider("value"));

        $("#slider-speed-fr").slider({
            value: 1,
            min: 0,
            max: 1,
            step: 0.05,
            slide: function (event, ui) {
                $("#value-speed-fr").text(ui.value);
            }
        });
        $("#value-speed-fr").text($("#slider-speed-fr").slider("value"));

        $("#slider-speed-rl").slider({
            value: 1,
            min: 0,
            max: 1,
            step: 0.05,
            slide: function (event, ui) {
                $("#value-speed-rl").text(ui.value);
            }
        });
        $("#value-speed-rl").text($("#slider-speed-rl").slider("value"));
        
        $("#slider-speed-rr").slider({
            value: 1,
            min: 0,
            max: 1,
            step: 0.05,
            slide: function (event, ui) {
                $("#value-speed-rr").text(ui.value);
            }
        });
        $("#value-speed-rr").text($("#slider-speed-rr").slider("value"));
        
        // Checkboxes
        $("#advanced-interface-checkbox").checkboxradio({icon: false});
        $("#grab-radio").checkboxradio({icon: false});
        $("#drive-radio").checkboxradio({icon: false});
        $("#drive-radio").prop("checked", true).checkboxradio("refresh");
        
        // Manipulator sliders
        $("#slider-manipulator-axis1").slider({
            value: 3600,
            min: 2800,
            max: 4800,
            step: 50,
            slide: function (event, ui) {
                $("#value-axis1").text(ui.value);
            }
        });
        $("#value-axis1").text($("#slider-manipulator-axis1").slider("value"));

        $("#slider-manipulator-axis2").slider({
            value: 3600,
            min: 2800,
            max: 4800,
            step: 50,
            slide: function (event, ui) {
                $("#value-axis2").text(ui.value);
            }
        });
        $("#value-axis2").text($("#slider-manipulator-axis2").slider("value"));
        
        $("#slider-manipulator-gripper").slider({
            value: 3600,
            min: 2800,
            max: 4800,
            step: 50,
            slide: function (event, ui) {
                $("#value-gripper").text(ui.value);
            }
        });
        $("#value-gripper").text($("#slider-manipulator-gripper").slider("value"));
        
        $("#slider-manipulator-axis-x").slider({
            value: 0,
            min: 00,
            max: 249,
            step: 1,
            slide: function (event, ui) {
                $("#value-axis-x").text(ui.value);
            }
        });
        $("#value-axis-x").text($("#slider-manipulator-axis-x").slider("value"));
        
        $("#slider-manipulator-axis-y").slider({
            value: 180,
            min: 0,
            max: 249,
            step: 1,
            slide: function (event, ui) {
                $("#value-axis-y").text(ui.value);
            }
        });
        $("#value-axis-y").text($("#slider-manipulator-axis-y").slider("value"));
        
        // Camera settings
        $("#slider-camera-brightness").slider({
            value: 0,
            min: -64,
            max: 64,
            step: 1,
            slide: function (event, ui) {
                $("#value-brightness").text(ui.value);
            }
        });
        $("#value-brightness").text($("#slider-camera-brightness").slider("value"));
        
        $("#slider-camera-contrast").slider({
            value: 32,
            min: 0,
            max: 64,
            step: 1,
            slide: function (event, ui) {
                $("#value-contrast").text(ui.value);
            }
        });
        $("#value-contrast").text($("#slider-camera-contrast").slider("value"));  
        
        $("#slider-camera-saturation").slider({
            value: 60,
            min: 0,
            max: 128,
            step: 1,
            slide: function (event, ui) {
                $("#value-saturation").text(ui.value);
            }
        });
        $("#value-saturation").text($("#slider-camera-saturation").slider("value"));        
        
        $("#slider-camera-hue").slider({
            value: 0,
            min: -64,
            max: 64,
            step: 1,
            slide: function (event, ui) {
                $("#value-hue").text(ui.value);
            }
        });
        $("#value-hue").text($("#slider-camera-hue").slider("value"));
        
        $("#slider-camera-gamma").slider({
            value: 100,
            min: 72,
            max: 500,
            step: 1,
            slide: function (event, ui) {
                $("#value-gamma").text(ui.value);
            }
        });
        $("#value-gamma").text($("#slider-camera-gamma").slider("value"));    
        
        $("#slider-camera-gain").slider({
            value: 0,
            min: 0,
            max: 100,
            step: 1,
            slide: function (event, ui) {
                $("#value-gain").text(ui.value);
            }
        });
        $("#value-gain").text($("#slider-camera-gain").slider("value"));
        
        $("#slider-camera-sharpness").slider({
            value: 2,
            min: 0,
            max: 6,
            step: 1,
            slide: function (event, ui) {
                $("#value-sharpness").text(ui.value);
            }
        });
        $("#value-sharpness").text($("#slider-camera-sharpness").slider("value"));
        
        // Grab input
        $("#slider-gripper-input").slider({
            value: 4000,
            min: 3400,
            max: 4600,
            step: 10,
            slide: function (event, ui) {

            }
        });
    }

    /*
     * 	Init display language selector - user can choose GUI language
     */
    function initLanguageSelector() {
         var previousSessionLanguage = Cookies.get("language");
         if (previousSessionLanguage == undefined)
         previousSessionLanguage = "US";
         
         $("#languageSelector").attr({
            "data-selected-country": previousSessionLanguage
         });

        $("#languageSelector").flagStrap({
            countries: {
                "PL": "Poland",
                "US": "United States",
                "DE": "Germany",
                "RU": "Russia"
            },
            inputId: "languageSelect"
        });
        
        $("#languageSelect").on("selectmenuclose", languageChanged);
        var lng = $("#languageSelector select option:selected").val();
        console.log("Interface language: " + lng);
        return lng;
    }
    
    /*
     *	Set displayed language
     */
    function setLanguage(lng) {
        i18next.init({
            "debug": false,
            "lng": lng,
            "fallbackLng": 'us',
            "backend": {
                "loadPath": "/locales/{{lng}}.json"
            }}, function (err, t) {

            jqueryI18next.init(i18next, $, {
                tName: 't',
                i18nName: 'i18n',
                handleName: 'localize',
                selectorAttr: 'data-i18n',
            });
            // Initialized and ready to go!
            if (DEBUG)
                console.log("Initialized test: " + i18next.t('test'));
            // Start translation
            $('.localized').localize();
        });
    }

    /*
     * Change to new selected language
     */
    function languageChanged(e) {
        var newLanguage = e.target.value;
        console.log("new language: " + newLanguage);

        // Set cookie for the next visit
        Cookies.set("language", newLanguage);

        // Change displayed language
        newLanguage = newLanguage.toLowerCase();
        setLanguage(newLanguage);
    }

    /*
     * Initialize i18next, load JSON translations and change displayed language
     */
    function initializeMultilanguage() {
        // Display selector and read last used language (from cookies)
        var lng = String(initLanguageSelector()).toLowerCase();

        i18next.use(window.i18nextXHRBackend);
        setLanguage(lng);
    }
    
    /*
     * Hide or show advanced interface
     */
    function advancedInterfaceChanged(e) {
        if(e.target.checked === true) {
            $("#icon-adv-interface").removeClass("fa-toggle-off").addClass("fa-toggle-on");
            $(".adv-interface").fadeIn();
            Cookies.set("advanced-interface", true);
        } else {
            $("#icon-adv-interface").removeClass("fa-toggle-on").addClass("fa-toggle-off");
            $(".adv-interface").fadeOut();
            Cookies.set("advanced-interface", false);
        }
    };
    
    /*
     * Toggle fullscreen mode
     */
    function toggleFullScreen(e) {
        var elem = document.body;
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            $("#icon-fullscreen").addClass("fa-window-restore").removeClass("fa-window-maximize");
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            $("#icon-fullscreen").removeClass("fa-window-restore").addClass("fa-window-maximize");
        }
    }
    
    /*
     * Take schreenshot of the view and prompt to save
     */
    function takeScreenShot() {
        var video = $("#camera-video-tag").get(0);
        // drawImage will only work with readyState greater than 1
        if(video.readyState < 2) return;
        var canvas = $("#snap-background-canvas").get(0);
        var context = canvas.getContext('2d');
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
        
        /*
         * Draw also turtle logo
         */
        var img = new Image;
        img.src = '/assets/img/turtle-logo.png';
        var logoWidth = video.clientWidth / 12;
        var logoHeight = logoWidth * 0.265;
        context.drawImage(img, 25, 10, logoWidth, logoHeight);
        var d = new Date();
        var link = document.getElementById('snap-download-a');
        link.href = canvas.toDataURL();
        link.download = "turtle_" + d.getFullYear() + "_" + d.getMonth() + 1 + "_" + d.getDate() + "_" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + ".png";
    }

    function recordVideo() {
        amplify.publish("ui->webrtc", "start stop recording");
    }
    
    /*
     * Show GO button
     */
    function showGoButton() {
        $("#button-go").fadeIn();
    }
    
    /*
     *	Hide welcome screen when GO was pressed
     */
    function hideWelcomeScreen() {
        $("#welcome-screen").fadeOut("slow");
    }
    
    /*
     * Set different camera background 
     */
    function setCameraBackground(camera) {
        
    }
    
    /*
     * Show main screen with camera video and controls 
     */
    function displayCameraVideo() {
        $("#main-screen").fadeIn();
    }
    
    /*
     *	Display notification for a user using noty library
     */
    function displayNotification(id) {
        message = i18next.t(id);
        console.log(message);
        new Noty({
            layout: 'centerRight',
            theme: 'bootstrap-v4',
            type: 'warning',
            timeout: 5000,
            progressBar: false,
            closeWith: ['click'],
            text: message
        }).show();
    }
    
    function onGoButtonClick(e){
        var remoteVideoElement = $("#camera-video-tag").get(0);
        remoteVideoElement.play();
        toggleFullScreen();
        amplify.publish("ui->controller", "GO button is pressed");
    };
    
    function onControlRadioChanged(e) {
        if(e.target.id === "drive-radio") {
            $("#camera-video-tag").removeClass("camera-video-grab-mode");
            $("#camera-video-tag").addClass("camera-video-drive-mode");
            $("#right-navigation-cross-img").attr('src', '/assets/img/ui/right-cross.svg');
            $("#turtle-navigation-view-img").attr('src', '/assets/img/ui/right-rover.svg');
            amplify.publish("ui->controlCanvas", "set function to DRIVE");            
        } else {
            $("#camera-video-tag").removeClass("camera-video-drive-mode");
            $("#camera-video-tag").addClass("camera-video-grab-mode");
            $("#right-navigation-cross-img").attr('src', '/assets/img/ui/right-cross-mani.svg');
            $("#turtle-navigation-view-img").attr('src', '/assets/img/ui/right-manipulator.svg');
            amplify.publish("ui->controlCanvas", "set function to GRAB");            
        }
    };
    
    function onMinimizeLeftButtonClick(e) {
        $("#left-navigation-div").fadeToggle(400, "swing", function(){
            if($("#icon-toggle-left").hasClass("fa-window-minimize")){
                $("#icon-toggle-left").removeClass().addClass("fa fa-window-maximize");
            } else {
                $("#icon-toggle-left").removeClass().addClass("fa fa-window-minimize");
            }
        });
    }

    function onMinimizeRightButtonClick(e) {
        $("#right-navigation-div").fadeToggle(400, "swing", function(){
            if($("#icon-toggle-right").hasClass("fa-window-minimize")){
                $("#icon-toggle-right").removeClass().addClass("fa fa-window-maximize");
            } else {
                $("#icon-toggle-right").removeClass().addClass("fa fa-window-minimize");
            }
        });
    }    
    
    /*
     * Subscripe topics
     */
    amplify.subscribe("controller->ui", controllerMessageCallback);
    amplify.subscribe("all->ui", allMessageCallback);

    /*
     * Callback functions
     */
    function controllerMessageCallback(message) {
        if (DEBUG)
            console.log("controller->ui: " + message);

        switch (message) {
            case "hide welcome screen":
                hideWelcomeScreen();
                break;
            case "display camera video":
                displayCameraVideo();
                break;
            case "initialize ui":
                initializeUI();
                break;
            case "initialize multilanguage":
                initializeMultilanguage();
                break;
            case "change image source to camera":
                setCameraBackground(true);
                break;
            case "change image source to default background":
                setCameraBackground(false);
                break;
            case "wait until GO button is pressed":
                showGoButton();
                setLastStatusDone(true);
                addNewStatus(i18next.t('status.turtle-ready'));
                setTimeout(function () {
                    setLastStatusDone(true);
                    addNewStatus(i18next.t('status.battery-level'), "battery-level-text", false);
                    addNewStatus(i18next.t('status.signal-level'), "signal-strength-text", false);
                    addNewStatus(i18next.t('status.processor-temp'), "processor-temperature-text", false);
                }, 1000);
                break;
            case "turtle is awake":
                setLastStatusDone(true);
                addNewStatus(i18next.t('status.connecting'));
                break;
            default:
                console.log("unknown command: " + message);
        }
    };

    function allMessageCallback(message) {
        if (DEBUG)
            console.log("all->ui: " + message);

        switch (message) {
            case "notifications.processing":
                displayNotification(message);
                break;
            case "notifications.server-connection-error":
                displayNotification(message);
                break;
            case "notifications.client-already-connected":
                displayNotification(message);
                break;
            case "console button clicked":
                consoleButtonClicked();
                break;
            case "set last status done":
                setLastStatusDone(true);
                break;
            case "set last status error":
                setLastStatusDone(false);
                break;
            case "initialize camera...":
                addNewStatus(message);
                break;
            
            /* Remove this once battery voltage thresholds are set correct */
            case "notifications.battery-threshold-error":
                displayNotification(message);
                break;
            
            default:
                console.log("unknown command: " + message);
        }
    };
    
    /*
     * Event functions
     */
    $("#advanced-interface-checkbox").on("change", advancedInterfaceChanged);
    $("#button-fullscreen").on("click", toggleFullScreen);
    $("#button-snapshot").on("click", takeScreenShot);
    $("#button-record").on("click", recordVideo);
    $("#button-all-stop").on("click", controlCanvas.emergencyMotorStop);
    $("#grab-radio").on("change", onControlRadioChanged);
    $("#drive-radio").on("change", onControlRadioChanged);
    $("#button-go").on("click", onGoButtonClick);
    $("#button-minimize-left-ctrl").on("click", onMinimizeLeftButtonClick);
    $("#button-minimize-right-ctrl").on("click", onMinimizeRightButtonClick);
    
    $("#slider-camera-brightness").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-contrast").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-saturation").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-hue").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-gamma").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-gain").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});
    $("#slider-camera-sharpness").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "update camera settings");});

    $("#slider-gripper-input").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "set new gripper position");});
    $("#slider-manipulator-gripper").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "set new gripper position");});
    $("#slider-manipulator-axis1").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "set new mani position");});
    $("#slider-manipulator-axis2").on("slidechange", function(e, data) {amplify.publish("ui->port8080", "set new mani position");});

    $("#slider-manipulator-axis-x").on("slidechange", function() {amplify.publish("ui->manipulator", "move mani");});
    $("#slider-manipulator-axis-y").on("slidechange", function() {amplify.publish("ui->manipulator", "move mani");});
    
    /*
     * Status functions
     */
    function setLastStatusDone(stat) {
        if (stat == true) {
            $("#welcome-screen-status-text").children().last().attr('data-content', '[*]');
            $("#welcome-screen-status-text").children().last().removeClass('animation-typewriter');
        } else {
            $("#welcome-screen-status-text").children().last().attr('data-content', '[!]');
        }
    };

    function addNewStatus(status, id, before) {
        $("#welcome-screen-status-text").append("<p class='animation-typewriter' id='" + id + "'>" + status + "</p>");
        if (before != false)
            $("#welcome-screen-status-text").children().last().attr('data-content', '[ ]');
        else
            $("#welcome-screen-status-text").children().last().attr('data-content', "\00 \00");
    };
    
    /*
     * Get things rolling
     */
    amplify.publish("ui->controller", "ui is ready for operation");

    /*
     *	read settings from last session
     */
    $(function () {
        var previousSessionSetting = Cookies.get("advanced-interface");
        if (previousSessionSetting == undefined)
            previousSessionSetting = "true";

        if (previousSessionSetting == "false") {
            $("#advanced-interface-checkbox").prop('checked', false).checkboxradio("refresh");
        } else {
            $("#advanced-interface-checkbox").prop('checked', true).checkboxradio("refresh");
        }
        $("#advanced-interface-checkbox").trigger("change");
    });

    return {};
})();


