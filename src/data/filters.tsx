const defaults = {
  type: { personal: true, business: true },
  issuer: {
    americanexpress: true,
    chase: true,
    bankofamerica: true,
    usbank: true,
    capitalone: true,
    citi: true,
    barclays: true,
    wellsfargo: true,
    discover: true,
  },
  network: {
    americanexpress: true,
    visa: true,
    mastercard: true,
    discover: true,
  },
  utility: { cashback: true, travel: true },
  misc: { highestoffer: true },
};
export default defaults;
