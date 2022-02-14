import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tf-vm',
  shadow: true,
})
export class TfVm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
