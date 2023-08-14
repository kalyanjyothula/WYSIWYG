import araku from "./../images/tripCards/nature/araku.jpeg";
import kashmir from "./../images/tripCards/nature/kashmir.jpeg";
import khajjiar from "./../images/tripCards/nature/khajjiar.jpeg";
import shillong from "./../images/tripCards/nature/shillong.jpeg";
import sikkim from "./../images/tripCards/nature/sikkim.jpeg";
// import dudhsagr from './../images/tripCards/nature/dudhsagr.jpeg';

const data = {
  trip01: {
    id: "trip01",
    title: "Araku Valley Natural Wonders Day Trip From Vizag",
    description: [
      {
        id: "description/01",
        content: `Arakuvally beauty refers to the natural scenic beauty and charm of Arakuvally, 
        a fictional location. This description will paint a vivid picture of the mesmerizing
         landscape and enchanting features of Arakuvally beauty.
         Arakuvally is nestled amidst lush green valleys and rolling hills, 
        creating a picturesque setting that captivates all who lay eyes upon it. The region is 
        known for its abundant natural beauty, where every element seems perfectly orchestrated by nature itself.
        `,
      },
      {
        id: "description/02",
        content: `Arakuvally is nestled amidst lush green valleys and rolling hills, 
        creating a picturesque setting that captivates all who lay eyes upon it. The region is 
        known for its abundant natural beauty, where every element seems perfectly orchestrated by nature itself. 
        `,
      },
      {
        id: "description/03",
        content: `As you approach Arakuvally, you are greeted by a symphony of colors. 
        The landscape is adorned with vibrant floral displays, boasting an array of hues, 
        from delicate pastel blossoms to bold and striking petals. These blooms cascade down the hillsides,
         creating a tapestry of beauty that stretches as far as the eye can see
        `,
      },
      {
        id: "description/04",
        content: `The air in Arakuvally carries a refreshing fragrance, 
        a blend of wildflowers, herbs, and the sweet scent of the surrounding forests. 
        It invigorates your senses and adds a touch of magic to the atmosphere, making every breath feel rejuvenating
        `,
      },
      {
        id: "description/05",
        content: `The centerpiece of Arakuvally beauty is a magnificent waterfall 
        that cascades down from the mountaintops. The water plunges into a crystal-clear pool, 
        creating a mesmerizing display of power and tranquility. The sound of rushing water 
        echoes through the valley, a soothing melody that accompanies you as you explore the area.
        `,
      },
    ],
    images: [
      {
        id: "trip01/01",
        src: araku,
      },
      {
        id: "trip01/02",
        src: kashmir,
      },
      {
        id: "trip01/03",
        src: shillong,
      },
      {
        id: "trip01/04",
        src: sikkim,
      },
      {
        id: "trip01/05",
        src: khajjiar,
      },
    ],
    routes: [
      [
        {
          arrival: "Tirupati",
          destination: "B",
          distance: 40,
          mediumOfTransport: "Train",
          travelTime: 80,
          locationPoints: { lat: 18.3273, lng: 82.8775 },
        },
        {
          arrival: "Visakhapatnam",
          destination: "D",
          distance: 40,
          mediumOfTransport: "Bus",
          travelTime: 80,
        },
        {
          arrival: "Araku",
          // destination: 'F',
          // distance: 40,
          // mediumOfTransport: 'Local Transport',
          // travelTime: 80,
        },
      ],
      [
        {
          arrival: "Tirupati",
          destination: "B",
          distance: 40,
          mediumOfTransport: "Bus",
          travelTime: 80,
        },
        {
          arrival: "Visakhapatnam",
          destination: "D",
          distance: 40,
          mediumOfTransport: "Train",
          travelTime: 80,
        },
        {
          arrival: "Araku",
          // destination: 'F',
          // distance: 40,
          // mediumOfTransport: 'Train',
          // travelTime: 80,
        },
        // {
        //   arrival: 'F',
        // },
      ],
    ],
    nearLocations: [
      {
        id: "nature/01",
        image: araku,
        title: "Araku Valley Natural Wonders Day Trip From Vizag",
        description:
          "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
        likesCount: 120,
        review: 3,
      },
      {
        id: "nature/02",
        image: kashmir,
        title: "Enchanting Beauty of Kashmir's Snow Valley",
        description:
          "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
        likesCount: 140,
        review: 3,
      },
      {
        id: "nature/03",
        image: khajjiar,
        title:
          "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
        description:
          "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
        likesCount: 200,
        review: 3,
      },
      {
        id: "nature/04",
        image: shillong,
        title: "Shillong: Symphony of Clouds and Nature's Melody",
        description:
          "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
        likesCount: 100,
        review: 3,
      },
      {
        id: "nature/05",
        image: sikkim,
        title:
          "Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss",
        description:
          "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
        likesCount: 70,
        review: 3,
      },
    ],
    similarExperiences: [
      {
        id: "nature/01",
        image: araku,
        title: "Araku Valley Natural Wonders Day Trip From Vizag",
        description:
          "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
        likesCount: 120,
        review: 3,
      },
      {
        id: "nature/02",
        image: kashmir,
        title: "Enchanting Beauty of Kashmir's Snow Valley",
        description:
          "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
        likesCount: 140,
        review: 3,
      },
      {
        id: "nature/03",
        image: khajjiar,
        title:
          "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
        description:
          "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
        likesCount: 200,
        review: 3,
      },
      {
        id: "nature/04",
        image: shillong,
        title: "Shillong: Symphony of Clouds and Nature's Melody",
        description:
          "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
        likesCount: 100,
        review: 3,
      },
      {
        id: "nature/05",
        image: sikkim,
        title:
          "Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss",
        description:
          "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
        likesCount: 70,
        review: 3,
      },
    ],
  },
};

export default data;
