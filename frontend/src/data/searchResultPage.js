const data = {
  filters: [
    {
      id: "filter/01",
      title: "Trip Theme",
      filter: [
        { id: "radio/01", label: "Beach", groupName: "theme" },
        { id: "radio/02", label: "Adventure", groupName: "theme" },
        { id: "radio/03", label: "Cultural", groupName: "theme" },
        { id: "radio/04", label: "Romantic", groupName: "theme" },
        { id: "radio/05", label: "Family-friendly", groupName: "theme" },
        { id: "radio/06", label: "clear", groupName: "theme" },
        // { id: 'radio/06', label: 'eco-tourism', groupName: 'theme' },
      ],
    },
    {
      id: "filter/02",
      title: "Trip Duration",
      filter: [
        { id: "duration/01", label: "Weekend", groupName: "duration" },
        { id: "duration/02", label: "get away", groupName: "duration" },
        { id: "duration/04", label: "A week adventure", groupName: "duration" },
        {
          id: "duration/05",
          label: " month-long adventure",
          groupName: "duration",
        },
        { id: "duration/06", label: "clear", groupName: "duration" },
      ],
    },
    {
      id: "filter/03",
      title: "Weather",
      filter: [
        { id: "weather/01", label: "Sunny", groupName: "weather" },
        { id: "weather/02", label: "tropical", groupName: "weather" },
        { id: "weather/03", label: "temperate", groupName: "weather" },
        {
          id: "weather/04",
          label: "snowy",
          groupName: "weather",
        },
        { id: "weather/05", label: "clear", groupName: "weather" },
      ],
    },
  ],
  destination: [
    {
      id: "country",
      label: "Destination Country",
      options: [
        { id: "country/01", itemName: "USA" },
        { id: "country/02", itemName: "INDIA" },
        // { id: "country/03", itemName: "CLEAR" },
      ],
    },
    {
      id: "city",
      label: "Destination city",
      options: [
        { id: "city/01", itemName: "Vizag" },
        { id: "city/02", itemName: "Chennai" },
        // { id: "city/03", itemName: "CLEAR" },
      ],
    },
  ],
  stay: [
    {
      id: "accommodation",
      label: "accommodation",
      options: [
        { id: "accommodation/01", label: "hotels" },
        { id: "accommodation/02", label: "resorts" },
        { id: "accommodation/03", label: "vacation rentals" },
        { id: "accommodation/04", label: "boutique" },
      ],
    },
    {
      id: "activities",
      label: "activities",
      options: [
        { id: "activities/01", label: "hiking" },
        { id: "activities/02", label: "wildlife spotting" },
        { id: "activities/03", label: "historical sites " },
        { id: "activities/04", label: "culinary experiences" },
      ],
    },
  ],
};

export default data;
