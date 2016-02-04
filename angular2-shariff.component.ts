import {Component, OnInit, OnChanges, Input, ElementRef, SimpleChange} from 'angular2/core';

declare var Shariff: Function;

@Component({
    selector: 'shariff',
    styleUrls: ['src/css/shariff.complete.css'],
    template: `
        <div class="shariff" [attr.data-services]="_shariffServices" [attr.data-orientation]="_shariffOrientation" [attr.data-theme]="_shariffTheme"></div>
    `,
    inputs: ['orientation', 'services', 'theme']
})

export class ShariffComponent implements OnInit, OnChanges
{
    @Input()
    orientation: String = "horizontal";
    @Input()
    services: String = "facebook,twitter,xing,googleplus";
    @Input()
    theme: String = "standard";


    protected _shariffServices: String = '';
    protected _shariffElement: HTMLElement;
    protected _shariffOrientation: String = '';
    protected _shariffTheme: String = '';

    // Import von javascript-File laut Googlesuche...
    // ##
    // constructor(){
    //     System.import('path/to/your/file').then(refToLoadedScript => {
    //             refToLoadedScript.someFunction();
    //         }
    //    );
    // ##

    constructor(protected _elementRef: ElementRef)
    {
    }

    getServicesJson(): String
    {
        return JSON.stringify(this.services+",");
        // +"," => Eine Schleife läuft 1x zu wenig durch, somit wird jeder Eintrag angezeigt.
    }

    getOrientationJson(): String
    {
        return JSON.stringify(this.orientation);
    }

    getThemeJson(): String
    {
        return JSON.stringify(this.theme);
    }

    ngOnInit()
    {
    }

    ngOnChanges(changes: {[key: string]: SimpleChange})
    {
        var orientation = this.getOrientationJson().replace("\"","").replace("\"","");
        // Anführungszeichen müssen entfernt werden, sonst greift Shariff-Funct. nicht.

        var services = this.getServicesJson().replace("\"","").split(",");
        // Anführungszeichen müssen entfernt werden, sonst greift Shariff-Funct. nicht.

        var theme = this.getThemeJson().replace("\"","").replace("\"","");
        // Anführungszeichen müssen entfernt werden, sonst greift Shariff-Funct. nicht.

        this._shariffElement = this._elementRef.nativeElement.querySelector('.shariff');
        if (changes['services']) {
            var x = new Shariff(this._shariffElement, {orientation, services,theme});
        }
    }
}