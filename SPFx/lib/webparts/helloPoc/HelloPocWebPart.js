var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'HelloPocWebPartStrings';
import "reflect-metadata";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/Components/app.module';
require('zone.js');
var HelloPocWebPart = (function (_super) {
    __extends(HelloPocWebPart, _super);
    function HelloPocWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloPocWebPart.prototype.render = function () {
        window['webPartContext'] = this.context;
        this.domElement.innerHTML = '<my-spfx-app>Loading..</my-spfx-app>';
        platformBrowserDynamic().bootstrapModule(AppModule);
        /*  this.domElement.innerHTML = `
           <div class="${ styles.helloPoc }">
             <div class="${ styles.container }">
               <div class="${ styles.row }">
                 <div class="${ styles.column }">
                   <span class="${ styles.title }">Welcome to SharePoint!</span>
                   <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
                   <p class="${ styles.description }">${escape(this.properties.description)}</p>
                   <a href="https://aka.ms/spfx" class="${ styles.button }">
                     <span class="${ styles.label }">Learn more</span>
                   </a>
                 </div>
               </div>
             </div>
           </div>`; */
    };
    Object.defineProperty(HelloPocWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloPocWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloPocWebPart;
}(BaseClientSideWebPart));
export default HelloPocWebPart;
//# sourceMappingURL=HelloPocWebPart.js.map