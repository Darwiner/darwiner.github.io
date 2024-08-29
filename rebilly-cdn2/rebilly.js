// Mount Rebilly Instruments
RebillyInstruments.mount({
  publishableKey: 'pk_sandbox_1C0lQkYH59ir1Jrb7c_mmIE80D3PBU6P8KJbLZR',
  organizationId: 'phronesis-rentavilla',
  websiteId: 'darwiner-github-io',
  apiMode: 'sandbox',
  items: [
    {
      planId: 'standard-50',
      quantity: 1
    },
  ],
  addons: [
    {
      planId: 'one-time-99',
      quantity: 1,
    },
  ],
  bumpOffer: [
    {
      planId: 'exclusive-150',
      quantity: 1,
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
