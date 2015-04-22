var house = {
  address: '1313 mockingbird ln',
  city: 'Seattle',
  state: 'WA',
  squareFootage:23,
  amenities: ['pool', 'gym', 'etc'],
  appliances: [
    {
      type: 'dishwasher',
      brand: 'blah',
      model: 'etc'
    }
  ],
  heating: 'forced-air',
  propertyTax: '99%',
  propertyValue: 134141000,
  rooms: 4
  bedrooms: 2,
  baths: 1,
  schoolDistrict: '132',
  lotSize: 3511,
  coords:{lat:141, lng:141},
  listed: '1/2/15',
  getLotSizeinAcres: function() {
    return this.lotSize / 43560;
  },
  distanceTo: function(inputDistance) {
    //compute distance
  },
  daysOnMarket: function() {
    // compute days on market
    return 'something';
  }
};
