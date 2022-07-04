import { Binding } from "./binding.js";

/* Como sabemos que device esta activo, por DOM o por variable */
var deviceActive = "desktop";
var viewActive = 1;
var componentActive = "video";

window.json = {
    desktop: [
        {
            type: 1,
            components: {
                video: {
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    typeVideo: false
                }
            }
        }
    ]
};

var app = new Binding(window.json, deviceActive, viewActive, componentActive);