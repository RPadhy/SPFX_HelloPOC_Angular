import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloPocWebPart.module.scss';
import * as strings from 'HelloPocWebPartStrings';

export interface IHelloPocWebPartProps {
  description: string;
}

import "reflect-metadata";  
  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
import { AppModule } from './app/Components/app.module';


require('zone.js');  

export default class HelloPocWebPart extends BaseClientSideWebPart<IHelloPocWebPartProps> {

  public render(): void {
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
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
