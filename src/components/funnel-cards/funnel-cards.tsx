import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'funnel-cards',
  styleUrl: 'funnel-cards.css',
  shadow: true,
})
export class FunnelCards {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
