export class Movie {
    
    id: string;
    date: string;
    image: string;
    name: string;
    rating: number;
  
    constructor (id: string, date: string, image: string, name: string, rating:number) {
      this.id = id;
      this.date = date;
      this.image = image;
      this.name = name;
      this.rating = rating;
    }
  }