// Mount Rebilly Instruments
(async () => {

  // TODO: probably don't keep this, testing only
  const customerId = 'cus_01J6F7GYE4SDHGTE7CSW7HMPGR';

      const response = await fetch("/deposit-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ customerId }),
    });
    const { token, depositRequestId } = await response.json();

console.log({token, depositRequestId});
console.log('Did that help??');

  
  let config = {
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
    ],
    deposit: {
    },
    features: {
        hideConfirmation: true,
      },
  };
  RebillyInstruments.mount(config);
  
  // Optional
  RebillyInstruments.on('instrument-ready', (instrument) => {
    console.info('instrument-ready', instrument);
  });
  RebillyInstruments.on('purchase-completed', (purchase) => {
    console.info('purchase-completed', purchase);
  });
  
  const updateButton = document.querySelector('#update-plan');
  
  updateButton.addEventListener('click', updateRebillyInstrumentLocale);
  
  const appState = {
    isPlatinum: false,
  };
  
  RebillyInstruments.on('instrument-ready', validateEula);
  
  async function validateEula(instrument) {
    const e = document.querySelector("#eula");
    if (e.checked) {
      await RebillyInstruments.purchase(instrument);
    }
    else {
      document.write("EULA needs to be accepted.");
    }
  }
  async function updateRebillyInstrumentLocale(e) {
    e.preventDefault();
    e.target.disabled = true;
  
    appState.isPlatinum = !appState.isPlatinum;
  
    const planId = appState.isPlatinum ? 'exclusive-150' : 'standard-50';
    updateButton.textContent = appState.isPlatinum
      ? 'Update Plan to Premium'
      : 'Update Plan to Platinum'
  //  const newConfig = {locale: planId};
    config.items[0] = {planId: planId, quantity: 1};
  
    try {
      await RebillyInstruments.update(config);
    } catch (error){
      console.log('Error updating instruments: ', error);
    } finally {
      e.target.disabled = false;
    }
  }
  
});
