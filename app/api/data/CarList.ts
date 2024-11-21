type Lists = {
  id: number;
  model: string;
  make: string;
  year: number;
  price: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  src: string;
  description: string;
};

export const CarLists: Lists[] = [
  {
    id: 1,
    model: "Toyota Camry",
    make: "Toyota",
    year: 2023,
    price: "$24,500",
    mileage: "12,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/toyota-camry.jpg",
    description:
      "A reliable and fuel-efficient sedan, perfect for city and highway driving.",
  },
  {
    id: 2,
    model: "Honda Civic",
    make: "Honda",
    year: 2022,
    price: "$22,700",
    mileage: "15,000 miles",
    fuelType: "Gasoline",
    transmission: "Manual",
    src: "https://example.com/images/honda-civic.jpg",
    description:
      "A sporty compact car with a stylish design and excellent fuel efficiency.",
  },
  {
    id: 3,
    model: "Ford Mustang",
    make: "Ford",
    year: 2021,
    price: "$35,000",
    mileage: "8,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/ford-mustang.jpg",
    description:
      "An iconic muscle car with powerful performance and a bold look.",
  },
  {
    id: 4,
    model: "Tesla Model 3",
    make: "Tesla",
    year: 2023,
    price: "$42,000",
    mileage: "5,000 miles",
    fuelType: "Electric",
    transmission: "Automatic",
    src: "https://example.com/images/tesla-model-3.jpg",
    description:
      "A premium electric sedan with cutting-edge technology and a sleek design.",
  },
  {
    id: 5,
    model: "Chevrolet Silverado",
    make: "Chevrolet",
    year: 2020,
    price: "$38,500",
    mileage: "20,000 miles",
    fuelType: "Diesel",
    transmission: "Automatic",
    src: "https://example.com/images/chevrolet-silverado.jpg",
    description:
      "A durable and powerful pickup truck, great for heavy-duty tasks.",
  },
  {
    id: 6,
    model: "BMW X5",
    make: "BMW",
    year: 2023,
    price: "$60,000",
    mileage: "10,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/bmw-x5.jpg",
    description:
      "A luxury SUV with impressive performance and a spacious interior.",
  },
  {
    id: 7,
    model: "Audi A4",
    make: "Audi",
    year: 2022,
    price: "$40,000",
    mileage: "9,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/audi-a4.jpg",
    description:
      "A sophisticated sedan offering a smooth ride and advanced technology.",
  },
  {
    id: 8,
    model: "Kia Sportage",
    make: "Kia",
    year: 2023,
    price: "$28,000",
    mileage: "14,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/kia-sportage.jpg",
    description:
      "A versatile and practical SUV with modern features and great fuel economy.",
  },
  {
    id: 9,
    model: "Mercedes-Benz C-Class",
    make: "Mercedes-Benz",
    year: 2023,
    price: "$50,000",
    mileage: "7,000 miles",
    fuelType: "Gasoline",
    transmission: "Automatic",
    src: "https://example.com/images/mercedes-c-class.jpg",
    description:
      "A luxury sedan with premium features and exceptional performance.",
  },
];
