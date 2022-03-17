import { Component , Prop , State , Watch , h } from "@stencil/core";

@Component({
    tag: 'sk-icon', 
    // styleUrl: 'icons.css',
    shadow: true 
})
export class Icon {
    @Prop() name: string;
    @Prop() size = 12; 
    @Prop() color = '';
    @Prop() svgHtml = "";


}