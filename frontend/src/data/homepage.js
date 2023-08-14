import heroBannerImg from './../images/heroBanner.jpg';
import araku from './../images/tripCards/nature/araku.jpeg';
import kashmir from './../images/tripCards/nature/kashmir.jpeg';
import khajjiar from './../images/tripCards/nature/khajjiar.jpeg';
import shillong from './../images/tripCards/nature/shillong.jpeg';
import sikkim from './../images/tripCards/nature/sikkim.jpeg';
import dudhsagr from './../images/tripCards/nature/dudhsagr.jpeg';
// import natureBanner from './../images/tripCards/banner/banner-1.jpeg';

const data = {
  heroBanner: {
    image: heroBannerImg,
  },
  tripCards: {
    nature: {
      title: 'Best of Nature',
      description: "Traveller's Choice for the best nature experience.",
      data: [
        {
          id: 'nature/01',
          image: araku,
          title: 'Araku Valley Natural Wonders Day Trip From Vizag',
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: 'nature/02',
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: 'nature/03',
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: 'nature/04',
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: 'nature/05',
          image: sikkim,
          title:
            'Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss',
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: 'nature/06',
          image: dudhsagr,
          title:
            "Dudhsagar Falls: The Majestic Milky Cascade Amidst Goa's Verdant Wonderland",
          description:
            " Goa's breathtaking cascade of milky-white splendor, enchanting all who behold it.",
          likesCount: 30,
          review: 3,
        },
      ],
      banner: {
        id: 'banner/01',
        title:
          "Nature's landscapes are not just scenery to behold, but windows into the wonders of our existence",
        color: 'bg-greenBackground',
      },
    },
    water: {
      title: 'Best of Water',
      description: "Traveller's Choice for the best beach experience.",
      data: [
        {
          id: 'water/01',
          image: araku,
          title: 'Araku Valley Natural Wonders Day Trip From Vizag',
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: 'water/02',
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: 'water/03',
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: 'water/04',
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: 'water/05',
          image: sikkim,
          title:
            'Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss',
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: 'water/06',
          image: dudhsagr,
          title:
            "Dudhsagar Falls: The Majestic Milky Cascade Amidst Goa's Verdant Wonderland",
          description:
            " Goa's breathtaking cascade of milky-white splendor, enchanting all who behold it.",
          likesCount: 30,
          review: 3,
        },
      ],
      banner: {
        id: 'banner/01',
        title:
          "Waterfalls are nature's symphony, where the melody of cascading water harmonizes with the rhythm of our souls",
        color: 'bg-blueBackground',
      },
    },
    devotion: {
      title: 'Devotional Places',
      description: "Traveller's Choice for the devotion",
      data: [
        {
          id: 'devotion/01',
          image: araku,
          title: 'Araku Valley Natural Wonders Day Trip From Vizag',
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: 'devotion/02',
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: 'devotion/03',
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: 'devotion/04',
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: 'devotion/05',
          image: sikkim,
          title:
            'Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss',
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: 'devotion/06',
          image: dudhsagr,
          title:
            "Dudhsagar Falls: The Majestic Milky Cascade Amidst Goa's Verdant Wonderland",
          description:
            " Goa's breathtaking cascade of milky-white splendor, enchanting all who behold it.",
          likesCount: 30,
          review: 3,
        },
      ],
      banner: {
        id: 'banner/01',
        title:
          'Visiting a temple is not just a journey of devotion, but a spiritual embrace where the heart finds solace and the soul discovers serenity',
        color: 'bg-brownBackground',
      },
    },
    friends: {
      title: 'Top Experience With Friends',
      description: "Traveller's Choice for the friends and students",
      data: [
        {
          id: 'devotion/01',
          image: araku,
          title: 'Araku Valley Natural Wonders Day Trip From Vizag',
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: 'devotion/02',
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: 'devotion/03',
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: 'devotion/04',
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: 'devotion/05',
          image: sikkim,
          title:
            'Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss',
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: 'devotion/06',
          image: dudhsagr,
          title:
            "Dudhsagar Falls: The Majestic Milky Cascade Amidst Goa's Verdant Wonderland",
          description:
            " Goa's breathtaking cascade of milky-white splendor, enchanting all who behold it.",
          likesCount: 30,
          review: 3,
        },
      ],
      // banner: {
      //   id: 'banner/01',
      //   title:
      //     'Visiting a temple is not just a journey of devotion, but a spiritual embrace where the heart finds solace and the soul discovers serenity',
      //   color: 'bg-brownBackground',
      // },
    },
  },
  footer: {
    questions: [
      {
        id: 'question/01',
        title: 'Why Beyond?',
        description:
          'Beyond is a widely recognized online platform that serves as a one-stop destination for travelers seeking reliable information, reviews, and recommendations for their trips. With a vast database of user-generated content, it provides a platform for people to share their travel experiences, rate accommodations, restaurants, and attractions, and offer valuable insights to fellow travelers. By aggregating and curating millions of reviews and opinions, Beyond enables travelers to make informed decisions, plan their trips efficiently, and discover hidden gems around the world. Its comprehensive resources, intuitive interface, and global community make it a trusted and invaluable tool for anyone looking to enhance their travel experiences.',
      },
      {
        id: 'question/02',
        title: 'Journey With Beyond',
        description:
          "Beyond serves as a trusted companion, offering a treasure trove of insights and recommendations. It's a portal that transcends borders, allowing you to navigate the vast landscape of travel possibilities with confidence and curiosity. As you delve into the collective wisdom of a global community, Beyond becomes your compass, guiding you towards memorable encounters, authentic flavors, and captivating destinations. Embrace the power of shared experiences, and let Beyond be your trusted ally in crafting unforgettable travel narratives.",
      },
      {
        id: 'question/03',
        title: 'Beyond! A New Compass',
        description:
          'Beyond takes you on a transformative journey of exploration and discovery, where experiences become the guiding compass for your travel decisions. With every click, you embark on a virtual adventure, immersing yourself in a wealth of firsthand experiences shared by fellow travelers. From the exhilaration of discovering hidden gems to the serendipitous encounters that shape your journey',
      },
    ],
  },
  signupQuote: `Embark on your wanderlust-filled odyssey today and unlock a realm
  of incredible destinations by joining our travel community.`,
  loginQuote: `Unlock a world of endless adventures with just a click, as you
  embark on a captivating journey through our travel portal`,
};

export default data;
