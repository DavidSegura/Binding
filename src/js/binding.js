import { Core } from "./core.js";

export class Binding extends Core {
    constructor(obj, dev, view, component){
        super(obj, dev, view, component);
        this.obj = obj;

        /* Load data check */
        $("[data-check]").each((key, ele) => {
            ele.checked = this.obj[ele.dataset.check];
            this.hiddenOptions(ele.dataset, ele.checked);
        });

        /* Change data check */
        $("[data-check]").on("click", (e) => {
            if (this.getComponent().hasOwnProperty(e.currentTarget.dataset.check)){
                this.getComponent()[e.currentTarget.dataset.check] = e.currentTarget.checked;
            }
            
            this.hiddenOptions(e.currentTarget.dataset, e.currentTarget.checked);
        });
    }

    hiddenOptions(data, value){
       $(`#${data.hidden}`).attr("hidden", !value);
    }

}