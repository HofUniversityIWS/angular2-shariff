import {Injectable, OnInit, Optional} from 'angular2/core';

export enum ShariffScriptProtocol {
    HTTP,
    HTTPS,
    AUTO
}

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


@Injectable()
export class ShariffLoader {
    private _scriptLoadingPromise: Promise<void>;

    // ALT CODE
    // constructor(@Optional() private _config: ShariffLoaderConfig){}
    constructor()
    {

    }

    ngInit(): Promise<void> {
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }

        // JS-File einbinden
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = "src/js/shariff.complete.js";
        document.body.appendChild(script);

        // CSS-File einbinden
        const css = document.createElement('style');
        css.type = 'text/css';
        script.src = "src/css/shariff.complete.css";
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
    }

    /* wird vorerst nicht benötigt
    private _getScriptSrc(callbackName: string): string {
        let protocolType: ShariffScriptProtocol =
            (this._config && this._config.protocol) || DEFAULT_CONFIGURATION.protocol;
        let protocol: string;

        switch (protocolType) {
            case ShariffScriptProtocol.AUTO:
                protocol = '';
                break;
            case ShariffScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case ShariffScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }

        const hostAndPath: string = this._config.hostAndPath || DEFAULT_CONFIGURATION.hostAndPath;
        const apiKey: string = this._config.apiKey || DEFAULT_CONFIGURATION.apiKey;
        const queryParams: {[key: string]: string} = {
            v: this._config.apiVersion || DEFAULT_CONFIGURATION.apiKey,
            callback: callbackName
        };
        if (apiKey) {
            queryParams['key'] = apiKey;
        }
        const params: string = Object.keys(queryParams)
            .map((k: string, i: number) => {
                let param = (i === 0) ? '?' : '&';
                return param += `${k}=${queryParams[k]}`;
            })
            .join('');
        return `${protocol}//${hostAndPath}${params}`;
    }
    useless ... */
}
