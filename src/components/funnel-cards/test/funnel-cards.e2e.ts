import { newE2EPage } from '@stencil/core/testing';

describe('funnel-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<funnel-cards></funnel-cards>');

    const element = await page.find('funnel-cards');
    expect(element).toHaveClass('hydrated');
  });
});
