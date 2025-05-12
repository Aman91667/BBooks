import { Book } from '../types';

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 19.99,
    originalPrice: 24.99,
    rating: 5,
    reviewCount: 1284,
    coverImage: "https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg",
    category: "Fiction",
    isBestseller: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    originalPrice: 21.99,
    rating: 5,
    reviewCount: 2547,
    coverImage: "https://images.pexels.com/photos/2228582/pexels-photo-2228582.jpeg",
    category: "Non-Fiction",
    isBestseller: true
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    rating: 4,
    reviewCount: 965,
    coverImage: "https://images.pexels.com/photos/3747141/pexels-photo-3747141.jpeg",
    category: "Mystery",
    isNew: true
  },
  {
    id: 4,
    title: "The House of Shadows",
    author: "Elizabeth Craft",
    price: 18.99,
    rating: 4,
    reviewCount: 782,
    coverImage: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    category: "Fantasy"
  },
  {
    id: 5,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 15.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 1632,
    coverImage: "https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg",
    category: "Fiction",
    isBestseller: true
  },
  {
    id: 6,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 17.99,
    rating: 5,
    reviewCount: 1120,
    coverImage: "https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg",
    category: "Non-Fiction"
  },
  {
    id: 7,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    price: 16.99,
    rating: 4,
    reviewCount: 845,
    coverImage: "https://images.pexels.com/photos/3747155/pexels-photo-3747155.jpeg",
    category: "Fiction"
  },
  {
    id: 8,
    title: "Forever and Always",
    author: "Sarah Williams",
    price: 13.99,
    rating: 4,
    reviewCount: 562,
    coverImage: "https://images.pexels.com/photos/1766131/pexels-photo-1766131.jpeg",
    category: "Romance",
    isNew: true
  }
];