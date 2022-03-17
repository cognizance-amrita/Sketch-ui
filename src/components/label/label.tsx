import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sk-label',
  styleUrl: 'label.css',
  shadow: true,
})
export class Label {
  /**
   * Theme based on which the label is styled.
   */
   @Prop() color:
   | 'primary'
   | 'outline-primary'
   | 'secondary'
   | 'outline-secondary'
   | 'tertiary'
   | 'outline-tertiary'
   | 'success'
   | 'outline-success'
   | 'warning'
   | 'outline-warning'
   | 'danger'
   | 'outline-danger'
   | 'light'
   | 'outline-light'
   | 'dark'
   | 'outline-dark'
   | 'blackcurrant'
   | 'outline-blackcurrant' = 'dark';
  /**
   * Size of the label.
   */
  @Prop() size: 'nano' | 'small' | 'medium' | 'large' = 'small';
  /**
   * display value of label .
   */
  @Prop() value = '';

  render() {
    return <span class={`sk-label sk-label--${this.color} sk-label--${this.size}`}><slot /></span>;
   }
}
