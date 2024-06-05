import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

const Trailer = () => {
  const [step, setStep] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const movies = [
    {
      id: 1,
      title: "Inga NaanThaan Kingu",
      description: "Comedy/Crime",
      image: "https://www.ajanthacinema.com/uploads/movie/MOV6779124883/t3_06698202405132121.jpg",
      seatPrice: 140,
      certification: "U/A",
      duration: { hours: 2, minutes: 30 },
      languages: ["Tamil", "English"],
      trailerUrl: "https://www.youtube.com/embed/0vHcyPjiTRg?si=tBapFI6wrhFzDNhM",
    },
    // Add more movies if needed
  ];

  const openTrailer = () => setIsTrailerOpen(true);
  const closeTrailer = () => setIsTrailerOpen(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setIsDropdownOpen(false);
    setStep(2);
  };

  return (
    <div className="text-center pt-10">
      <h1 className="text-3xl font-semibold text-blue-800">Movie Booking App</h1>

      {step === 1 && (
        <>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={toggleDropdown}
              >
                {selectedMovie ? selectedMovie.title : "Select a Movie"}
                <FaChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {isDropdownOpen && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {movies.map((movie) => (
                    <a
                      key={movie.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => handleMovieSelect(movie)}
                    >
                      {movie.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {step === 2 && selectedMovie && (
        <>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-blue-800">
              Available Screenings for {selectedMovie.title}:
            </h2>
            <div className="flex justify-center">
              <div className="relative w-[500px] h-auto">
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={openTrailer}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl rounded-lg"
                >
                  <FaPlay />
                </button>
              </div>

              {isTrailerOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                  <div className="bg-white rounded-lg overflow-hidden w-3/4 max-w-2xl">
                    <div className="relative">
                      <button
                        onClick={closeTrailer}
                        className="absolute top-2 right-2 text-black text-2xl"
                      >
                        &times;
                      </button>
                      <iframe
                        width="100%"
                        height="400px"
                        src={selectedMovie.trailerUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-2xl font-semibold text-blue-800">
                Movie Details:
              </h2>
              <div className="flex gap-4 justify-center items-center text-justify">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">
                    Certification: {selectedMovie.certification}
                  </div>
                  <div className="text-lg font-semibold">
                    Duration: {selectedMovie.duration.hours} hours{" "}
                    {selectedMovie.duration.minutes} minutes
                  </div>
                  <div className="text-lg font-semibold">
                    Description: {selectedMovie.description}
                  </div>
                  <div className="text-lg font-semibold">
                    Languages: {selectedMovie.languages.join(", ")}
                  </div>
                </div>
              </div>
            </div>
            {/* Screenings and other step 2 contents */}
          </div>

          <button
            className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-700"
            onClick={() => setStep(1)}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default Trailer;
