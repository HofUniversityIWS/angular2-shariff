System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShariffScriptProtocol, ShariffLoader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            (function (ShariffScriptProtocol) {
                ShariffScriptProtocol[ShariffScriptProtocol["HTTP"] = 0] = "HTTP";
                ShariffScriptProtocol[ShariffScriptProtocol["HTTPS"] = 1] = "HTTPS";
                ShariffScriptProtocol[ShariffScriptProtocol["AUTO"] = 2] = "AUTO";
            })(ShariffScriptProtocol || (ShariffScriptProtocol = {}));
            exports_1("ShariffScriptProtocol", ShariffScriptProtocol);
            /* ALT CODE
            export class ShariffLoaderConfig {
                apiKey: string = null;
                apiVersion: string = '3';
                hostAndPath: string = 'maps.googleapis.com/maps/api/js';
                // pfad?!
                protocol: ShariffScriptProtocol = ShariffScriptProtocol.HTTPS;
            }
            
            
            const DEFAULT_CONFIGURATION = new ShariffLoaderConfig();
            
            ALT CODE ENDE */
            ShariffLoader = (function () {
                // ALT CODE
                // constructor(@Optional() private _config: ShariffLoaderConfig){}
                function ShariffLoader() {
                }
                ShariffLoader.prototype.ngInit = function () {
                    if (this._scriptLoadingPromise) {
                        return this._scriptLoadingPromise;
                    }
                    // JS-File einbinden
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.defer = true;
                    script.src = "../js/shariff.complete.js";
                    document.body.appendChild(script);
                    // CSS-File einbinden
                    var css = document.createElement('style');
                    css.type = 'text/css';
                    script.src = "../css/shariff.complete.css";
                    document.head.appendChild(css);
                    return this._scriptLoadingPromise;
                    /* ALT CODE
                        const script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.async = true;
                        script.defer = true;
                        const callbackName: string = `angular2googlemaps${new Date().getMilliseconds()}`;
                        script.src = this._getScriptSrc(callbackName);
                
                        this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
                            (<any>window)[callbackName] = () => { resolve(); };
                
                            script.onerror = (error: Event) => { reject(error); };
                        });
                
                        document.body.appendChild(script);
                        return this._scriptLoadingPromise;
                    ENDE ALT CODE */
                };
                ShariffLoader = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShariffLoader);
                return ShariffLoader;
            })();
            exports_1("ShariffLoader", ShariffLoader);
        }
    }
});

//# sourceMappingURL=angular2-shariff.loader.js.map
