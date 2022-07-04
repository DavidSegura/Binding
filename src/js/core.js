export class Core {
    constructor(json, dev, view, component){
        this.json = json;
        this.dev = dev;
        this.view = view;
        this.component = component;
    }

    getDevice(){
        try{
            if (this.json.hasOwnProperty(this.dev)) {
                return this.json[this.dev];
            } else {
                throw this.json[this.dev];
            }
        } catch (e) {
            console.error(e);
        }
    }

    getView(){
        try {
            if (this.getDevice().find( x => x.type == this.view) ) {
                return this.getDevice().find( x => x.type == this.view);
            } else {
                throw this.getDevice().find( x => x.type == this.view);
            }
        } catch (e) {
            console.error(e);
        }
    }

    getComponent(){
        try {
            if (this.getView().components?.hasOwnProperty(this.component) ) {
                return this.getView().components[this.component];
            } else {
                throw this.getView().components[this.component];
            }
        } catch (e) {
            console.error(e);
        }
    }
}