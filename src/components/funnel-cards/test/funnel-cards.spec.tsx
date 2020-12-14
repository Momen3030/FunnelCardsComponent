import { newSpecPage } from '@stencil/core/testing';
import { FunnelCards } from '../funnel-cards';

describe('funnel-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FunnelCards],
      html: `<funnel-cards></funnel-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <funnel-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </funnel-cards>
    `);
  });
});
