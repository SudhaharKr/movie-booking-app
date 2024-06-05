import { useRef, useState } from "react";
import { FaMotorcycle, FaCar, FaPlay } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const MovieBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedScreening, setSelectedScreening] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [parkingOption, setParkingOption] = useState(null);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [convenienceFees] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
   const [paymentOption, setPaymentOption] = useState("");
  const componentRef = useRef();


  const screens = [
    {
      id: 1,
      name: "Shanthi Talkies",
      time: "10.45am",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 2,
      name: "Archana Cinemas",
      time: "10.45am",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 3,
      name: "Mayil Cinemas",
      time: "02.20pm",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 4,
      name: "Web Talkies",
      time: "10.45am",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 5,
      name: "Manish Talkies",
      time: "10.45am",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 6,
      name: "Ramba Cinemas",
      time: "10.45am",
      seats: Array.from({ length: 60 }, (_, i) => ({
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 7,
      name: "Chinthamani Talkies",
      time: "10.15pm",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `D${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },
  ];

  const movies = [
    {
      id: 1,
      title: "Inga NaanThaan Kingu",
      description: "Comedy/Crime",
      certification: "U",
      duration: { hours: 2, minutes: 12 },
      languages: ["Tamil"],
      image:
        "https://www.ajanthacinema.com/uploads/movie/MOV6779124883/t3_06698202405132121.jpg",
      seatPrice: 140,
      rating: "7.4",
      trailerUrl:
        "https://www.youtube.com/embed/0vHcyPjiTRg?si=tBapFI6wrhFzDNhM",
    },
    {
      id: 2,
      title: "Aranmanai 4",
      description: "Comedy/Horror",
      certification: "U/A",
      duration: { hours: 2, minutes: 28 },
      languages: ["Tamil"],
      image:
        "https://www.elloracinema.com/uploads/movie/MOV7345326931/t3_90447202404291755.jpg",
      seatPrice: 140,
      rating: "7.7",
      trailerUrl:
        "https://www.youtube.com/embed/Keck4iVUUdE?si=8_dlo1eUxunYXulo",
    },
    {
      id: 3,
      title: "Election",
      description: "Political/Thriller",
      certification: "U/A",
      duration: { hours: 2, minutes: 0 },
      languages: ["Tamil"],
      image:
        "https://www.amuthatheatres.com/uploads/movie/MOV7845457867/t3_06685202405151134.jpg",
      seatPrice: 140,
      rating: "8.4",
      trailerUrl:
        "https://www.youtube.com/embed/YnUi367jlTU?si=_anjVsIbhpkrNsB5",
    },
    {
      id: 4,
      title: "Star",
      description: "Drama/Family",
      certification: "U/A",
      duration: { hours: 2, minutes: 38 },
      languages: ["Tamil"],
      image:
        "https://www.kcineplex.in/uploads/movie/MOV5889276788/t3_95926202405071547.jpg",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/5QlTZEogGrE?si=-O4Y4AXPGnbRBBRU",
    },
    {
      id: 5,
      title: "Garudan",
      description: "Drama/Action",
      ReleasedDate: "31 May 2024",
      certification: "U/A",
      duration: { hours: 2, minutes: 14 },
      languages: ["Tamil"],
      image:
        "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwR-WnG62lfMuPxz8sE8UPkKVIb6dMfghKw&s",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/B2yC1jpAYvQ?si=ASsBnC0qRSMzy8Sb",
    },
    {
      id: 6,
      title: "Hit List",
      description: "Drama/Action",
      certification: "U/A",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 7 },
      languages: ["Tamil, Telugu"],
      image:
        "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiJ4XcaFlRWOGfOSsZ657KE5ekcNXUh687g&s",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/rXkAUU63t74?si=8CBiu6Rw_8hxpgJr",
    },
    {
      id: 7,
      title: "The Akaali",
      description: "Drama/Action",
      certification: "A",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 25 },
      languages: ["Tamil"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_3cvUFknzNups4_sn7x_p9mgcsCkRel-Nw&s",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/RIOVez2ptrA?si=WYklkvnVNmrjnkoa",
    },
  ];

  const newMovies = [
    {
      id: 1,
      title: "Anjammai",
      description: "Drama/Action",
      certification: "A",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 25 },
      languages: ["Tamil"],
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…vQAi8ZGQsOg5ArC/EYg21dPSMjI0P6gMv9MXRkZGR2HGf/9k=",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/RIOVez2ptrA?si=WYklkvnVNmrjnkoa",
    },
  ];

 

  const snacks = [
    {
      id: 1,
      name: "Popcorn",
      price: 50,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020004_12092023155212.png",
    },
    {
      id: 2,
      name: "Cool Drink Can 330ml",
      price: 70,
      image:
        "https://5.imimg.com/data5/GW/WO/TR/SELLER-82456434/coca-cola-cold-drink.jpg",
    },
    {
      id: 3,
      name: "Roce Milk",
      price: 60,
      image:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/1174632_1924_27032023173037.png",
    },
    {
      id: 4,
      name: "Tea/Coffee",
      price: 40,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020080_17082018155618.png",
    },
    {
      id: 5,
      name: "Cold Coffee",
      price: 80,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020101_06082018162224.png",
    },
    {
      id: 6,
      name: "Chocolate Donut",
      price: 50,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020474_22122020130711.png",
    },
    {
      id: 7,
      name: "Ice Cream",
      price: 60,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020276_16082018173720.png",
    },
    {
      id: 8,
      name: "Badam Milk",
      price: 60,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020279_14082018150709.png",
    },
    {
      id: 9,
      name: "Black Forest",
      price: 70,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020268_09082018183101.png",
    },
    {
      id: 10,
      name: "Butter Sweet Corn 100gms",
      price: 70,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020131_09082018184413.png",
    },
  ];

  const netBankingLogo = [
    {
      name: "Karur Vysya Bank",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLG_H2ABPP-tBxN-cDpj7pKZYarUzeC0XDA&s",
    },
    {
      name: "Canara Bank",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqCFKNrB9QcT5gRTxDO0P1F2WuT9OlF9oIw&s",
    },
    {
      name: "Axis Bank",
      url: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5BcieC8kX7-5P_4om8_pBdm3Vhu6wLd6pg&s",
    },
    {
      name: "Hdfc Bank",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCo2gXy42-YuBpMMxpuSMNAw5HTvlu8SeeCA&s",
    },
  ];
  const cardLogos = [
    {
      name: "Visa",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREARckUmBtT1fKb5XbBWzrXUZuLWqKxoa5U0BlXXfKCg&s",
    },
    {
      name: "MasterCard",
      url: "https://d28wu8o6itv89t.cloudfront.net/images/mastercardlogopng-1579603310730.png",
    },
    {
      name: "Rupay",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO00YUkVrNvQc-p8EA-uAbNsI3Rh0Oz1yBA&s",
    },
  ];

  const mobileWallets = [
    {
      name: "Master Card",
      url: "https://d28wu8o6itv89t.cloudfront.net/images/mastercardlogopng-1579603310730.png",
    },
    {
      name: "Visa",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREARckUmBtT1fKb5XbBWzrXUZuLWqKxoa5U0BlXXfKCg&s",
    },
    {
      name: "Paypal",
      url: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Kbo0VGmRq6ZLWyobwDU0AgrUZ6P9oHNZIw&s",
    },
    {
      name: "Stripe",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AaztiWmGTUTLl0bJNvQE-HyOtqyWLY4I4g&usqp=CAU",
    },
  ];

  const upiLogo = [
    {
      name: "Google Pay",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf94DezIGdY3j33A9PKMzlmTyMfne5SuNGtA&s",
    },
    {
      name: "Phone Pay",
      url: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWmTOTE0oAulYT7_uqp2jrgh1gXcNJFd2fw&s",
    },
    {
      name: "Paytm",
      url: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OJFHIqw4MKOf0uk-sYE26LxXtab3YUzb4Q&usqp=CAU",
    },
    {
      name: "Paytm",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3numpapfNiWcDTxOZg-4DQ6hWN9EeHK7BQ&usqp=CAU",
    },
  ];

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    // You can add any additional logic here, such as updating state or performing other actions based on the selected time.
  };

  const handleSeatToggle = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleSnackToggle = (snack) => {
    setSelectedSnacks((prevSelectedSnacks) =>
      prevSelectedSnacks.includes(snack)
        ? prevSelectedSnacks.filter((s) => s.id !== snack.id)
        : [...prevSelectedSnacks, snack]
    );
  };

  const handleBookTicket = () => {
    setIsBooked(true);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const getTotalAmount = () => {
    const seatAmount = selectedSeats.length * selectedMovie.seatPrice;
    const parkingAmount = parkingOption === "two-wheeler" ? 20 : 40;
    const snacksAmount = selectedSnacks.reduce(
      (total, snack) => total + snack.price,
      0
    );
    return seatAmount + parkingAmount + snacksAmount;
  };

  const openTrailer = () => {
    setIsTrailerOpen(true);
    console.log("Trailer started");
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
  };

  return (
    <div className="text-center bg-white">
      {step === 1 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          
          modules={[Pagination, Navigation]}
          className="bg-red-500"
        >
          <SwiperSlide>
            <div className="bg-gradient-to-r from-blue-900 to-green-500 text-white py-20 px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Welcome to KRS CINEMAS
                </h1>
                <p className="text-lg lg:text-xl mb-8">
                  Book tickets, choose your seats, prebook the snacks &
                  beverages and enjoy your favorite movies!
                </p>
                <a href="#grid_box">
                  <button className="text-black bg-white hover:bg-gradient-to-r from-blue-600 hover:to-black hover:text-white font-semibold bg-transparent text-lg px-8 py-4 rounded-full transition duration-300">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex">Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      )}
      {step === 1 && (
        <div id="grid_box">
          <h1 className="font-bold text-lg text-green-600 uppercase p-4 text-center">
            Now Showing
          </h1>
          <div className="flex justify-center items-center">
            {/* <!-- Grid Container --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
              {/* <!-- Grid items go here --> */}
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="border rounded-lg p-4 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    setSelectedMovie(movie);
                    nextStep();
                  }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-54 object-cover mb-4 rounded-lg"
                  />
                  <h2 className="text-lg md:text-xl font-semibold mb-2">
                    {movie.title}
                  </h2>
                  <p className="text-sm md:text-base mb-2">
                    {movie.description}
                  </p>
                  <p className="text-sm md:text-base mb-2">
                    Certification: {movie.certification}
                  </p>
                  <p className="text-sm md:text-base mb-2">
                    Duration: {movie.duration.hours}h {movie.duration.minutes}m
                  </p>
                  <p className="text-sm md:text-base mb-2">
                    Languages: {movie.languages.join(", ")}
                  </p>
                  <p className="text-sm md:text-base mb-2">
                    Rating: {movie.rating}/10
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openTrailer();
                      setSelectedMovie(movie);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md inline-flex items-center text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaPlay className="mr-2" /> Watch Trailer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {step === 2 && selectedMovie && (
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Select Screening
            </h2>

            <div className="flex flex-col border-2 border-blue-900  w-full rounded-tl-3xl rounded-br-3xl p-4">
              {screens
                .filter((screen) => screen.id === selectedMovie.id)
                .map((screen) => (
                  <div
                    key={screen.time}
                    className="border rounded-lg p-4 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 mb-4"
                    onClick={() => {
                      setSelectedScreening(screen);
                      nextStep();
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">
                      {screen.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <button
                        className="text-sm md:text-base mb-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
                        onClick={() => handleSelectTime("10:45am")}
                      >
                        Time: 10:45am
                      </button>
                      <button
                        className="text-sm md:text-base mb-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
                        onClick={() => handleSelectTime("02:20pm")}
                      >
                        Time: 02:20pm
                      </button>
                      <button
                        className="text-sm md:text-base mb-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
                        onClick={() => handleSelectTime("06:20pm")}
                      >
                        Time: 06:20pm
                      </button>
                      <button
                        className="text-sm md:text-base mb-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
                        onClick={() => handleSelectTime("10:20pm")}
                      >
                        Time: 10:20pm
                      </button>
                    </div>

                    <p className="text-sm md:text-base text-white">
                      Price: ₹{screen.price}
                    </p>
                  </div>
                ))}
            </div>
            <button onClick={prevStep} className="mt-4 text-blue-500 underline">
              Back
            </button>
          </div>
        </div>
      )}
      {step === 3 && selectedScreening && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Seats</h2>
          <div className="grid grid-cols-12 gap-4">
            {selectedScreening.seats.map((seat) => (
              <div
                key={seat.id}
                className={`border rounded-t-3xl p-4 shadow-lg cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleSeatToggle(seat)}
              >
                {seat.label}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <button onClick={prevStep} className="text-blue-500 underline">
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-3xl font-bold mb-4 p-6 shadow-2xl">
            Parking Option
          </h2>
          <div className="flex justify-center gap-8">
            <div
              className={`border rounded-lg p-4 shadow-lg cursor-pointer ${
                parkingOption === "two-wheeler"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setParkingOption("two-wheeler")}
            >
              <FaMotorcycle className="text-4xl mb-2" />
              <p>Two-Wheeler</p>
              <p>₹20</p>
            </div>
            <div
              className={`border rounded-lg p-4 shadow-lg cursor-pointer ${
                parkingOption === "four-wheeler"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setParkingOption("four-wheeler")}
            >
              <FaCar className="text-4xl mb-2" />
              <p>Four-Wheeler</p>
              <p>₹40</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={prevStep} className="text-blue-500 underline">
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Snacks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {snacks.map((snack) => (
              <div
                key={snack.id}
                className={`border rounded-lg p-4 shadow-lg cursor-pointer ${
                  selectedSnacks.includes(snack)
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleSnackToggle(snack)}
              >
                <img
                  src={snack.image}
                  alt={snack.name}
                  className="w-full object-cover mb-2 rounded-md"
                />
                <p>{snack.name}</p>
                <p>₹{snack.price}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={prevStep} className="text-blue-500 underline">
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div>
          <div className="p-4 md:p-8 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">
                Choose Payment Option
              </h2>
              <div className="flex flex-col space-y-4">
                {/* Payment options */}
                {/* Net Banking */}
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="net-banking"
                    checked={paymentOption === "net-banking"}
                    onChange={() => setPaymentOption("net-banking")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Net Banking</span>
                </label>
                {/* Net Banking form */}

                {paymentOption === "net-banking" && (
                  <div className="mt-4 space-y-2">
                    <div className="flex space-x-4">
                      {netBankingLogo.map((logo) => (
                        <img
                          key={logo.name}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                    <select className="form-select">
                      {/* Card logos */}

                      <option>Select Your Bank</option>
                      <option>Bank A</option>
                      <option>Bank B</option>
                      <option>Bank C</option>
                      <option>Bank D</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Account Holder Name"
                      className="form-input"
                    />
                    <input
                      type="text"
                      placeholder="Account Number"
                      className="form-input"
                    />
                    <input
                      type="password"
                      placeholder="Banking Password"
                      className="form-input"
                    />
                  </div>
                )}
                {/* Debit/Credit Card */}
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="debit-credit-card"
                    checked={paymentOption === "debit-credit-card"}
                    onChange={() => setPaymentOption("debit-credit-card")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Debit/Credit Card</span>
                </label>
                {/* Debit/Credit Card form */}
                {paymentOption === "debit-credit-card" && (
                  <div className="mt-4 space-y-2">
                    {/* Card logos */}
                    <div className="flex space-x-4">
                      {cardLogos.map((logo) => (
                        <img
                          key={logo.name}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                    {/* Card details */}
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="form-input"
                      />
                      <input
                        type="text"
                        placeholder="Card Holder Name"
                        className="form-input"
                      />
                      <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        className="form-input"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="form-input"
                      />
                    </div>
                  </div>
                )}
                {/* Mobile Wallets */}
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="mobile-wallets"
                    checked={paymentOption === "mobile-wallets"}
                    onChange={() => setPaymentOption("mobile-wallets")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Mobile Wallets</span>
                </label>

                {/* Mobile Wallets form */}
                {paymentOption === "mobile-wallets" && (
                  <div className="mt-4">
                    {/* Mobile Wallets logos */}
                    <div className="flex space-x-4">
                      {mobileWallets.map((logo) => (
                        <img
                          key={logo.name}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Mobile Wallet Number"
                      className="form-input"
                    />
                  </div>
                )}
                {/* UPI */}

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="upi"
                    checked={paymentOption === "upi"}
                    onChange={() => setPaymentOption("upi")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">UPI</span>
                </label>
                {/* Mobile Wallets logos */}

                {/* UPI form */}
                {paymentOption === "upi" && (
                  <div className="mt-4">
                    <div className="flex space-x-4">
                      {upiLogo.map((logo) => (
                        <img
                          key={logo.name}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="UPI ID"
                      className="form-input"
                    />
                  </div>
                )}
              </div>
              {/* Navigation buttons */}
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-3">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 md:mb-0"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {isBooked && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-green-600">
                Payment Accepted! Your ticket reservation is confirmed!
              </h2>
            </div>
          )}
          {!isBooked && step > 7 && (
            <div className="mt-8">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleBookTicket}
              >
                Book Ticket
              </button>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-4">
            Total Amount: ₹{getTotalAmount()}
          </h2>
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={prevStep} className="text-blue-500 underline">
              Back
            </button>
            <button
              onClick={handleBookTicket}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Book Ticket
            </button>
          </div>
        </div>
      )}

      {isBooked && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
          <p>Your booking is confirmed. Enjoy your movie!</p>
          <div className="container mx-auto p-4">
            <div className="mt-8">
              <ReactToPrint
                trigger={() => {
                  return (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                      Print
                    </button>
                  );
                }}
                content={() => componentRef.current}
                documentTitle="Invoice"
                pageStyle="@page { size: A4; margin: 20mm; } body { font-size: 14px; }"
              />
              <div
                ref={componentRef}
                className="p-4 border rounded-md bg-green-300"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {selectedScreening.name} Invoice
                </h2>
                <div className="border p-4 rounded-md mb-4">
                  <div className="flex justify-between border-b pb-2 mb-2">
                    <span className="font-semibold">Item</span>
                    <span className="font-semibold">Price</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Movie</span>
                    <span>{selectedMovie.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Screen</span>
                    <span>{selectedScreening.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Show time</span>
                    <span>{selectedScreening.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seats</span>
                    <span>
                      {selectedSeats.map((seat) => seat.label).join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Snacks</span>
                    <span>
                      {selectedSeats.map((seat) => seat.label).join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Movie Ticket</span>
                    <span>₹{getTotalAmount()}</span>
                  </div>

                  <div className="flex justify-between mt-4">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ₹{getTotalAmount() + convenienceFees}
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-center">
                  Enjoy the Experience! Come Again
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleBookTicket}
                >
                  Print Ticket
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => window.open(selectedMovie.ticketImage)}
                >
                  Open Ticket Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTrailerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <iframe
              width="560"
              height="315"
              src={selectedMovie.trailerUrl}
              title={selectedMovie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeTrailer}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieBooking;
