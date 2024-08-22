// Mount Rebilly Instruments
RebillyInstruments.mount({
  publishableKey: 'pk_sandbox_123',
  organizationId: 'org-123',
  websiteId: 'my-website-id',
  apiMode: 'sandbox',
  items: [
      {
        planId: 'my-plan-id',
        quantity: 1
      },
  ]
});
// Optional
RebillyInstruments.on('instrument-ready', (instrument) => {
  console.info('instrument-ready', instrument);
});
RebillyInstruments.on('purchase-completed', (purchase) => {
  console.info('purchase-completed', purchase);
});
