// contains books data
// import images from local src folder
import img1 from "./images/monk-book.webp";
import img2 from "./images/perfect-book.webp";
import img3 from "./images/habits-book.webp";
const books = [
  {
    title: "The Monk Who Sold His Ferrari",
    img: img1,
    author: "Sharma Robin S",
    id: 1,
  },
  {
    title: "The Perfect Us",
    img: img2,
    author: "Datta Durjoy",
    id: 2,
  },
  {
    title: "The 7 Habits Of Highly Effective People",
    img: img3,
    author: "Stephen Covey",
    id: 3,
  },
];

// exporting is as default data (single entity)
export default books;
