const  data = [
  {
    "city": {
        "name": "San Jose",
        "state": "CA"
    },
    "reachable_cities": [
      {
        "name": "Mountain View",
        "state": "CA",
        "transport": "land"
      },
      {
        "name": "New York City",
        "state": "NY",
        "transport": "air"
      }
    ]
  },
  {
    "city": {
      "name": "Mountain View",
      "state": "CA"
    },
    "reachable_cities": [{
      "name": "San Jose",
      "state": "CA",
      "transport": "land"
    }]
  },
  {
    "city": {
      "name": "New York City",
      "state": "NY"
    },
    "reachable_cities": [{
      "name": "San Jose",
      "state": "CA",
      "transport": "air"
    }]
  }
];

export default data;
