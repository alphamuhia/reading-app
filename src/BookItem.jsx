import React from "react";

let books = [
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year_published: 2006,
    genre: "Dystopian, Fiction",
    image_url: "/images/theroad.jpg",
  },
  {
    title: "The Brief Wondrous Life of Oscar Wao",
    author: "Junot Díaz",
    year_published: 2007,
    genre: "Literary Fiction, Historical Fiction",
    image_url: "/images/thebrief.webp",
  },
  {
    title: "Wolf Hall",
    author: "Hilary Mantel",
    year_published: 2009,
    genre: "Historical Fiction",
    image_url: "/images/wolfhall.jpeg",
  },
  {
    title: "1Q84",
    author: "Haruki Murakami",
    year_published: 2009,
    genre: "Fantasy, Science Fiction",
    image_url: "/images/1q84.webp",
  },
  {
    title: "The Underground Railroad",
    author: "Colson Whitehead",
    year_published: 2016,
    genre: "Historical Fiction, Alternative History",
    image_url: "/images/underground.jpg",
  },
  {
    title: "Half Of A Yellow Sun",
    author: "Chimamanda Ngozi",
    year_published: 2006,
    genre: "Fiction",
    image_url: "/images/halfsun.jpg",
  },
  {
    title: "The Corrections",
    author: "Jonathan Franzen",
    year_published: 2001,
    genre: "Domestic Fiction",
    image_url: "/images/correction.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Hariari",
    year_published: 2011,
    genre: "Biology, History",
    image_url: "/images/sapiens.png",
  },
  {
    title: "Tenth Of December",
    author: "George Saunders",
    year_published: 2013,
    genre: "Satire",
    image_url: "/images/december.jpg",
  },
  {
    title: "Fun Home",
    author: "Alison Beehdel",
    year_published: 2006,
    genre: "Non-fiction Comic",
    image_url: "/images/home.jpg",
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    year_published: 2015,
    genre: "Psycological Fiction",
    image_url: "/images/people.jpeg",
  },
  {
    title: "Fingersmith",
    author: "Sarah Waters",
    year_published: 2002,
    genre: "Fiction",
    image_url: "/images/smith.jpg",
  },
  {
    title: "Harry Potter And The Goblet Of Fire",
    author: "JK Rowling",
    year_published: 2000,
    genre: "Fantacy, Adventure, Magic",
    image_url: "/images/potter.jpg",
  },
  {
    title: "Broken Glass",
    author: "Alan Mabanckou",
    year_published: 2005,
    genre: "Novel",
    image_url: "/images/glass.jpg",
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    year_published: 2015,
    genre: "Novel",
    image_url: "/images/life.jpg",
  },
  {
    title: "Chronicals: Volume One",
    author: "Bob Dylan",
    year_published: 2004,
    genre: "Autobiography music",
    image_url: "/images/Chronicles.jpg",
  },
  {
    title: "Darkmans",
    author: "Nicola Barker",
    year_published: 2007,
    genre: "Novel, Fiction",
    image_url: "/images/darkman.jpg",
  },
  {
    title: "the Siege",
    author: "Helen Dunmore",
    year_published: 2001,
    genre: "Historical, Fantacy, Urban, Domestic, fiction",
    image_url: "/images/siege.jpeg",
  },
];
function BookItem() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-gray-300">
      {books.map((books, index) => (
        <div
          key={index}
          className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={books.image_url}
            alt={books.title}
            className="w-full h-60 object-scale-down"
          />
          <div>
            <h2 className="text-xl font-semibold">{books.title}</h2>
            <h3 className="text-gray-600"> By - {books.author}</h3>
            <p className="text-gray-600">Published - {books.year_published}</p>
            <p className="text-gray-600">Genre - {books.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookItem;
