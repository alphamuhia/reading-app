import React from "react";

let mangalist = [
  {
    title: "Solo Leveling",
    creator: "Chugong, Jang Sung-Rak",
    Release_year: "2018 - 2023",
    genre: "Action, Adventure, Fantacy",
    chapters: 200,
    image: "/images/solo.jpg",
  },
  {
    title: "Tower Of God",
    creator: "SIU",
    Release_year: 2010,
    genre: "Action, Adventure, Fantacy, Drama, Mystery",
    chapters: "622 (ongoing)",
    image: "/images/tower.webp",
  },
  {
    title: "Noblesse",
    creator: "Son Jae-Ho, Lee Gwang-Su",
    Release_year: "2007 -2019",
    genre: "Action, Adventure, Comedy, Supernatural",
    chapters: 544,
    image: "/images/noblesse.avif",
  },
  {
    title: "Cheese In The Trap",
    creator: "Soonkki",
    Release_year: "2010 - 2017",
    genre: "Comedy, Mystry, Romance, Slice Of Life",
    chapters: 300,
    image: "/images/cheese.jpeg",
  },
  {
    title: "Omniscient Reader",
    creator: "Sing N Song, Sleepy-C",
    Release_year: 2020,
    genre: "Action, Adventure, Fantacy",
    chapters: "209 (ongoing)",
    image: "/images/reader.jpeg",
  },
  {
    title: "Nano Machine",
    creator: "hanjung Wolya, Geumgang Bulgoe",
    Release_year: 2020,
    genre: "Action, Adventure, Fantacy, Sci-Fi",
    chapters: "205 (ongoing)",
    image: "/images/nano.jpeg",
  },
  {
    title: "Unholy Blood",
    creator: "IM Lina",
    Release_year: "2020 - 2022",
    genre: "Action, Romance, Supernatural",
    chapters: 92,
    image: "/images/unholy.jpg",
  },
  {
    title: "The World After The Fall",
    creator: "Sing N Song",
    Release_year: 2022,
    genre: "Action Fantacy",
    chapters: "126 (ongoing)",
    image: "/images/world.jpg",
  },
  {
    title: "Windbreaker",
    creator: "Jo Yongseok",
    Release_year: 2023,
    genre: "Drama, Sports",
    chapters: " 495 (ongoing)",
    image: "/images/wind.jpg",
  },
  {
    title: "The Boxer",
    creator: "Jeong Ji-Hoon",
    Release_year: "2019 - 2022",
    genre: "Drama, Sports",
    chapters: 123,
    image: "/images/boxer.jpeg",
  },
];
function Manhwalist() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-gray-300">
      {mangalist.map((manga, index) => (
        <div
          key={index}
          className="shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 "
        >
          <img
            src={manga.image}
            alt={manga.title}
            className="w-full h-60 object-scale-down"
          />
          <div>
            <h2 className="text-xl font-semibold">{manga.title}</h2>
            <h3 className="text-gray-600">Creator - {manga.creator}</h3>
            <p className="text-gray-600">Release year - {manga.Release_year}</p>
            <p className="text-gray-600">Genre - {manga.genre}</p>
            <p className="text-gray-600">Chaptors - {manga.chapters}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Manhwalist;
