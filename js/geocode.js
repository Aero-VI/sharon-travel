// Geocode database for Sharon's travel locations
const GEOCODE = {
  busStations: {},
  airports: {},
  ports: {
    // Panorama transpacific
    'Singapore':[1.2644,103.8200],
    'Singapore Cruise Centre':[1.2644,103.8200],
    'Phu My (Ho Chi Minh City)':[10.5458,107.0143],
    'Ho Chi Minh City':[10.8231,106.6297],
    'Kota Kinabalu':[5.9749,116.0724],
    'Manila':[14.5995,120.9842],
    'Guam':[13.4443,144.7937],
    'Hagatna':[13.4443,144.7937],
    'Honolulu':[21.3069,-157.8583],
    'Long Beach':[33.7542,-118.2165],
    'Port of Long Beach':[33.7542,-118.2165],
    // Mardi Gras transatlantic
    'Barcelona':[41.3784,2.1699],
    'Port of Barcelona':[41.3784,2.1699],
    'Malaga':[36.7213,-4.4214],
    'Cadiz':[36.5298,-6.2926],
    'Cadiz (Seville)':[36.5298,-6.2926],
    'Santa Cruz de Tenerife':[28.4636,-16.2518],
    'Tenerife':[28.4636,-16.2518],
    'Freeport':[26.5285,-78.6967],
    'Celebration Key':[26.5285,-78.6967],
    'Cape Canaveral':[28.4084,-80.6101],
    'Port Canaveral':[28.4084,-80.6101],
    // Mardi Gras Caribbean
    'Charlotte Amalie':[18.3358,-64.9307],
    'St. Thomas':[18.3358,-64.9307],
    'Philipsburg':[18.0237,-63.0458],
    'St. Maarten':[18.0237,-63.0458],
    'San Juan':[18.4655,-66.1057],
    'Puerto Plata':[19.7934,-70.6884],
    'Amber Cove':[19.7934,-70.6884],
    'Nassau':[25.048,-77.3554],
    // Sapphire Princess Baltic
    'Copenhagen':[55.6761,12.5683],
    'Copenhagen Cruise Port':[55.6961,12.6136],
    'Oslo':[59.9139,10.7522],
    'Skagen':[57.7209,10.5835],
    'Bornholm':[55.1036,14.9142],
    'Visby':[57.6349,18.2948],
    'Stockholm':[59.3293,18.0686],
    'Helsinki':[60.1699,24.9384],
    'Tallinn':[59.4370,24.7536],
    'Riga':[56.9496,24.1052],
    'Gdynia':[54.5189,18.5305],
    'Gdansk (Gdynia)':[54.5189,18.5305],
    // Liberty of the Seas
    'Southampton':[50.8998,-1.4044],
    'Port of Southampton':[50.8998,-1.4044],
    'Hamburg':[53.5461,9.9937],
    'Zeebrugge':[51.3285,3.1757],
    'Bruges (Zeebrugge)':[51.3285,3.1757]
  },
  trains: {},
  events: {},
  cities: {
    'Singapore':[1.3521,103.8198],
    'Ho Chi Minh City':[10.8231,106.6297],
    'Kota Kinabalu':[5.9749,116.0724],
    'Manila':[14.5995,120.9842],
    'Hagatna':[13.4443,144.7937],
    'Honolulu':[21.3069,-157.8583],
    'Long Beach':[33.7542,-118.2165],
    'Barcelona':[41.3874,2.1686],
    'Malaga':[36.7213,-4.4214],
    'Cadiz':[36.5298,-6.2926],
    'Santa Cruz de Tenerife':[28.4636,-16.2518],
    'Freeport':[26.5285,-78.6967],
    'Cape Canaveral':[28.4084,-80.6101],
    'St. Thomas':[18.3358,-64.9307],
    'St. Maarten':[18.0237,-63.0458],
    'San Juan':[18.4655,-66.1057],
    'Puerto Plata':[19.7934,-70.6884],
    'Nassau':[25.048,-77.3554],
    'Copenhagen':[55.6761,12.5683],
    'Oslo':[59.9139,10.7522],
    'Skagen':[57.7209,10.5835],
    'Bornholm':[55.1036,14.9142],
    'Visby':[57.6349,18.2948],
    'Stockholm':[59.3293,18.0686],
    'Helsinki':[60.1699,24.9384],
    'Tallinn':[59.4370,24.7536],
    'Riga':[56.9496,24.1052],
    'Gdynia':[54.5189,18.5305],
    'Southampton':[50.8998,-1.4044],
    'Hamburg':[53.5461,9.9937],
    'Zeebrugge':[51.3285,3.1757]
  }
};

function geocode(type, name, city, code) {
  if (type === 'Flight' && code && GEOCODE.airports[code]) return GEOCODE.airports[code];
  if (type === 'Cruise') {
    if (GEOCODE.ports[name]) return GEOCODE.ports[name];
    if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  }
  if (type === 'Bus') {
    if (GEOCODE.busStations[name]) return GEOCODE.busStations[name];
    if (GEOCODE.busStations[city]) return GEOCODE.busStations[city];
  }
  if (type === 'Train') {
    if (GEOCODE.trains[name]) return GEOCODE.trains[name];
    if (GEOCODE.trains[city]) return GEOCODE.trains[city];
  }
  if (GEOCODE.cities[name]) return GEOCODE.cities[name];
  if (GEOCODE.cities[city]) return GEOCODE.cities[city];
  if (GEOCODE.ports[name]) return GEOCODE.ports[name];
  if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  if (GEOCODE.events[city]) return GEOCODE.events[city];
  if (GEOCODE.events[name]) return GEOCODE.events[name];
  return null;
}
