export interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  capacity: {
    people: number;
    bedroom: number;
  };
  price: number;
  rating: number;
  superhost: boolean;
}