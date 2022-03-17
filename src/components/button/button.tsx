import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
@Component({
  tag: 'sk-button',
  styleUrl: 'button.css',
})
export class Button {
  @Element() host: HTMLElement;
  /**
   *  Button type based on which actions are performed when the button is clicked.
   */
  @Prop() type: 'button' | 'reset' | 'submit' = 'button';
  /**
   * Disables the button on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * Identifier of  the theme based on which the button is styled.
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
    | 'outline-blackcurrant' = 'primary';
  /**
   * Size of the button.
   */
  @Prop() size: 'nano' | 'small' | 'medium' | 'large' = 'small';
  /**
   * Sets the button to a full-width block. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop() expand = false;
  /**
   *  Accepts the id of the sk-modal component to open it on click
   */
  @Prop() modalTriggerId = '';

  /**
   * Triggered when the button is clicked.
   */
  @Event() skClick!: EventEmitter<void>;

  /**
   * Triggered when the button comes into focus.
   */
  @Event() skFocus!: EventEmitter<void>;

  /**
   * Triggered when the button loses focus.
   */
  @Event() skBlur!: EventEmitter<void>;

  private onFocus() {
    this.skFocus.emit();
  }

  private onBlur() {
    this.skBlur.emit();
  }

  private handleClick(e: Event) {
    // for modal trigger
    if (this.modalTriggerId !== '') {
      const modal: any = document.getElementById(this.modalTriggerId);
      modal.visible = true;
    } else if (this.type === 'submit') {
      const form = this.host.closest('form');
      if (form) {
        e.preventDefault();
        const fakeSubmit = document.createElement('button');
        fakeSubmit.type = 'submit';
        fakeSubmit.style.display = 'none';
        form.appendChild(fakeSubmit);
        fakeSubmit.click();
        fakeSubmit.remove();
      }
    }
    this.skClick.emit();
  }

  render() {
    return (
      <Host onClick={(e: Event) => (this.disabled ? undefined : this.handleClick(e))} onFocus={() => this.onFocus()} onBlur={() => this.onBlur()}>
        <button
          aria-label="button"
          type={this.type}
          disabled={this.disabled}
          class={`sk-btn 
        sk-btn--${this.color.toLowerCase()} 
        sk-btn--${this.size}
        ${this.expand ? 'sk-btn--block' : ''}
        `}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
