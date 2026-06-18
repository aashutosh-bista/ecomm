const  links= [
    {   id: 1,
        name: 'Home',
        href: '/',
    },
    {
        id: 2,
        name: 'Product',
        href: '/product',
    },
    {
        id: 3,
        name: 'About',
        href: '/about',
    },
    {
        id: 4,
        name: 'Contact',
        href: '/contact',
    }
]
 const icons =[
    {
        id: 1,
        name: 'FiShoppingCart',
    },
    {
        id: 2,
        name: 'FiUser',
    }
]
export  {links,icons};
export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    image: "/images/karma.jpg",
    title: "Mantra Karma",
    description: "Premium Nepalese craftsmanship with beautiful design",
    price: 18500,
  },
  {
    id: 2,
    image: "/images/prakriti.webp",
    title: "Mantra Prakriti",
    description: "Warm tones perfect for traditional melodies",
    price: 22500,
  },
  {
    id: 3,
    image: "/images/heritage.png",
    title: "Mantra Heritage",
    description: "Rich heritage with modern playability",
    price: 35000,
  },
  {
    id: 4,
    image: "/images/endo.jpg",
    title: "Sahana Endo",
    description: "Innovative headless design with modern appeal",
    price: 49000,
  },
  {
    id: 5,
    image: "/images/huchill.jpg",
    title: "Sahana Huchill",
    description: "Classic acoustic with premium tone",
    price: 28000,
  },
  {
    id: 6,
    image: "/images/bazz.jpg",
    title: "Sahana bazz",
    description: "Unique artistic design with powerful sound",
    price: 58000,
  },
  {
    id: 7,
    image: "/images/kali.jpg",
    title: "Sahana Kali",
    description: "Rare wood finish with exceptional sustain",
    price: 65000,
  },
  {
    id: 8,
    image: "/images/parth.jpg",
    title: "Parth 2",
    description: "Modern headless design with versatile sound options",
    price: 72000,
  },
  {
    id: 9,
    image: "/images/strings.jpg",
    title: "Guitar Strings Set",
    description: "Premium quality strings for acoustic and electric",
    price: 800,
  },
  {
    id: 10,
    image: "/images/pick.jpg",
    title: "Guitar Picks Pack",
    description: "Variety pack of premium picks",
    price: 250,
  },
  {
    id: 11,
    image: "/images/capos.jpg",
    title: "Guitar Capo",
    description: "Professional grade capo fot perfect tuning",
    price: 1200,
  },
  {
    id: 12,
    image: "/images/tuner.jpg",
    title: "Guitar Tuner",
    description: "Digital tuner with high precision",
    price: 1800,
  },
  {
    id: 13,
    image: "/images/bag.png",
    title: "Guitar Bag",
    description: "Pradded protection for your insrument",
    price: 2500,
  },
  {
    id: 14,
    image: "/images/stand.png",
    title: "Guitar Stand",
    description: "Strudy and protective guitar stand",
    price: 1500,
  },
];

export  {products};
