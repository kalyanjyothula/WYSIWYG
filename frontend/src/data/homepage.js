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
      title: "Best of Nature",
      description: "Traveller's Choice for the best nature experience.",
      data: [
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
        {
          id: "nature/06",
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
        id: "banner/01",
        title:
          "Nature's landscapes are not just scenery to behold, but windows into the wonders of our existence",
        color: "bg-greenBackground",
      },
    },
    water: {
      title: "Best of Water",
      description: "Traveller's Choice for the best beach experience.",
      data: [
        {
          id: "water/01",
          image: araku,
          title: "Araku Valley Natural Wonders Day Trip From Vizag",
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: "water/02",
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: "water/03",
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: "water/04",
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: "water/05",
          image: sikkim,
          title:
            "Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss",
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: "water/06",
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
        id: "banner/01",
        title:
          "Waterfalls are nature's symphony, where the melody of cascading water harmonizes with the rhythm of our souls",
        color: "bg-blueBackground",
      },
    },
    devotion: {
      title: "Devotional Places",
      description: "Traveller's Choice for the devotion",
      data: [
        {
          id: "devotion/01",
          image: araku,
          title: "Araku Valley Natural Wonders Day Trip From Vizag",
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: "devotion/02",
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: "devotion/03",
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: "devotion/04",
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: "devotion/05",
          image: sikkim,
          title:
            "Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss",
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: "devotion/06",
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
        id: "banner/01",
        title:
          "Visiting a temple is not just a journey of devotion, but a spiritual embrace where the heart finds solace and the soul discovers serenity",
        color: "bg-brownBackground",
      },
    },
    friends: {
      title: "Top Experience With Friends",
      description: "Traveller's Choice for the friends and students",
      data: [
        {
          id: "devotion/01",
          image: araku,
          title: "Araku Valley Natural Wonders Day Trip From Vizag",
          description:
            "Nature's serene haven nestled amidst majestic hills and verdant landscapes.",
          likesCount: 120,
          review: 3,
        },
        {
          id: "devotion/02",
          image: kashmir,
          title: "Enchanting Beauty of Kashmir's Snow Valley",
          description:
            "Nature's masterpiece, a breathtaking paradise nestled amidst majestic mountains and serene valleys",
          likesCount: 140,
          review: 3,
        },
        {
          id: "devotion/03",
          image: khajjiar,
          title:
            "Mystical Khajjiar: Discovering the Enchanted Beauty of Himachal Pradesh's Gem",
          description:
            "A captivating hill station known as the 'Mini Switzerland of India' for its picturesque landscapes and serene beauty.",
          likesCount: 200,
          review: 3,
        },
        {
          id: "devotion/04",
          image: shillong,
          title: "Shillong: Symphony of Clouds and Nature's Melody",
          description:
            "Shillong: Nature's harmonious retreat, where misty hills and cascading waterfalls embrace the soul.",
          likesCount: 100,
          review: 3,
        },
        {
          id: "devotion/05",
          image: sikkim,
          title:
            "Sikkim: The Serene Kingdom of Pristine Peaks and Tranquil Bliss",
          description:
            "Sikkim: Nature's untouched sanctuary, adorned with majestic mountains, serene monasteries, and vibrant cultural tapestry.",
          likesCount: 70,
          review: 3,
        },
        {
          id: "devotion/06",
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
        id: "question/01",
        title: "Why SeeWrite?",
        description:
          "SeeWrite is your go-to solution for seamless and intuitive content creation. Designed to empower users with a truly WYSIWYG (What You See Is What You Get) experience, SeeWrite eliminates the need for complex coding knowledge and makes it easy to produce professional-quality documents, websites, and more",
      },
      {
        id: "question/02",
        title: "Journey With SeeWrite",
        description:
          "Journey With SeeWrite is designed to transform your content creation process into a seamless and enjoyable adventure. Embrace the power of WYSIWYG (What You See Is What You Get) technology and unlock your creative potential. Whether you're crafting documents, designing web pages, or building your next big project",
      },
      {
        id: "question/03",
        title: "SeeWrite! A New Business",
        description:
          "SeeWrite! A New Business is here to revolutionize the way you create and manage content for your enterprise. With a focus on simplicity, efficiency, and innovation, SeeWrite empowers businesses of all sizes to produce professional-quality documents, websites, and marketing materials without the need for technical expertise",
      },
    ],
  },
  signupQuote: "Create with Confidence – Sign Up for SeeWrite Today!",
  loginQuote: `Good to See You Again – Continue Your Journey with SeeWrite.`,
};

export default data;
