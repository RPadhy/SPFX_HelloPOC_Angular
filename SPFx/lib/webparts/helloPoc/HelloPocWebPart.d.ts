import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IHelloPocWebPartProps {
    description: string;
}
import "reflect-metadata";
export default class HelloPocWebPart extends BaseClientSideWebPart<IHelloPocWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
