import { useRef, useState } from "react";
import {
  FaMotorcycle,
  FaCar,
  FaPlay,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
("");
import "swiper/css/navigation";

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
  const [setSelectedTime] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const componentRef = useRef();

  const screens = [
    {
      id: 1,
      name: "Shanthi Talkies",
      seats: Array.from({ length: 80 }, (_, i) => ({
        id: i + 1,
        label: `A${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 2,
      name: "Archana Cinemas",
      seats: Array.from({ length: 80 }, (_, i) => ({
        id: i + 1,
        label: `B${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 3,
      name: "Mayil Cinemas",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `C${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 4,
      name: "Web Talkies",

      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `D${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 5,
      name: "Manish Talkies",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `E${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 6,
      name: "Ramba Cinemas",
      seats: Array.from({ length: 60 }, (_, i) => ({
        label: `F${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },

    {
      id: 7,
      name: "Chinthamani Talkies",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `G${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },
    {
      id: 8,
      name: "Megastar Cinemas",
      seats: Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        label: `H${i + 1}`,
        occupied: false,
      })),
      price: 140,
    },
  ];

  const movies = [
    {
      id: 1,
      title: "BAD BOYS RIDE OR DIE",
      description: "Action/ Adventure/ Comedy",
      certification: "U",
      duration: { hours: 2, minutes: 12 },
      languages: ["Tamil"],
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28554_86byWW56.jpg",
      seatPrice: 140,
      rating: "7.4",
      trailerUrl:
        "https://www.youtube.com/embed/hRFY_Fesa9Q?si=u56Uk6_v2MVF-i1z",
    },
    {
      id: 2,
      title: "INDIAN - 1",
      description: "Action/ Crime",
      certification: "U/A",
      duration: { hours: 2, minutes: 28 },
      languages: ["Tamil"],
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/30339_WZAZiEYA.jpg",
      seatPrice: 140,
      rating: "7.7",
      trailerUrl:
        "https://www.youtube.com/embed/fIKwCDuNqvg?si=nuKfv6y4rBxxbJ_A",
    },
    {
      id: 3,
      title: "WEAPON",
      description: "Sci-Fi/ Thriller",
      certification: "U/A",
      duration: { hours: 2, minutes: 0 },
      languages: ["Tamil"],
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28502_EaaoNr6r.jpg",
      seatPrice: 140,
      rating: "8.4",
      trailerUrl:
        "https://www.youtube.com/embed/QCciF0dOKR4?si=XZeO-50ze3DY5YJ-",
    },
    {
      id: 4,
      title: "TURBO",
      description: "Drama/Family",
      certification: "U/A",
      duration: { hours: 2, minutes: 38 },
      languages: ["Malayalam"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cBRa7TZYDIzfrwnZR-yBqJyX0iq84CO1eg&s",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/LOE8ESPIMpE?si=TurKTbcRW__0IHP4",
    },
    {
      id: 5,
      title: "GARUDAN",
      description: "Drama/Action",
      ReleasedDate: "31 May 2024",
      certification: "U/A",
      duration: { hours: 2, minutes: 14 },
      languages: ["Tamil"],
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/30150_yfgBFCJQ.jpg",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/B2yC1jpAYvQ?si=ASsBnC0qRSMzy8Sb",
    },
    {
      id: 6,
      title: "HIT LIST",
      description: "Drama/Action",
      certification: "U/A",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 7 },
      languages: ["Tamil"],
      image:
        "	https://mellowplex.s3.amazonaws.com/uploads/item/asset/77840/Hit_List_Profile_Picture_1.jpeg",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/rXkAUU63t74?si=8CBiu6Rw_8hxpgJr",
    },
    {
      id: 7,
      title: "ANJAMMAI",
      description: "Drama/Action",
      certification: "A",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 25 },
      languages: ["Tamil"],
      image:
        "	https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/30343_KfsmXJFS.jpg",
      seatPrice: 140,
      rating: "8",
      trailerUrl:
        "https://www.youtube.com/embed/gtfxB_B4-fI?si=IqCCOJbywxRdy01k",
    },
    {
      id: 7,
      title: "HARAA",
      description: "Drama/Action",
      certification: "U",
      ReleasedDate: "31 May 2024",
      duration: { hours: 2, minutes: 10 },
      languages: ["Tamil"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOCl1-5YS5TzIzLb1vweda-YYfHZmN34dcQ&s",
      seatPrice: 140,
      rating: "8.9",
      trailerUrl:
        "https://www.youtube.com/embed/AeZAeRMwZh0?si=Qi4uBxAPvSlZCc4_",
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
      name: "Rose Milk",
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

  const toggleSnackSelection = (snack) => {
    if (selectedSnacks.includes(snack)) {
      setSelectedSnacks(selectedSnacks.filter((s) => s !== snack));
    } else {
      setSelectedSnacks([...selectedSnacks, snack]);
    }
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
          centeredSlides
          loop
          speed={1000}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation, Autoplay]}
          autoplay
          className=""
        >
          <SwiperSlide>
            <div className="bg-gradient-to-r from-blue-900 to-green-500 text-white py-20 px-8 h-[65vh]">
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
          <SwiperSlide className="flex flex-wrap w-[50%]">
            <div className="flex gap-6">
              <img
                className=" w-[700px] h-[66vh]"
                src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwR-WnG62lfMuPxz8sE8UPkKVIb6dMfghKw&s  "
                alt=""
              />
              <img
                className=" w-[700px] h-[66vh]"
                src="https://www.amuthatheatres.com/uploads/movie/MOV7279155499/t3_02964202406051837.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-wrap w-[50%]">
            <div className="flex gap-6">
              <img
                className=" w-[700px] h-[66vh]"
                src="https://www.amuthatheatres.com/uploads/movie/MOV5900723373/t3_47440202406061543.jpg"
                alt=""
              />
              <img
                className=" w-[700px] h-[66vh]"
                src="	https://assets-in.bmscdn.com/discovery-catalog/events/et00399402-vepbpgzdnj-landscape.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-wrap w-[50%]">
            <div className="flex gap-6">
              <img
                className=" w-[700px] h-[66vh]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8O3UZ2yqSrJnmjUSd3Zz7iJMBnHt6LNPCg&s"
                alt=""
              />
              <img
                className=" w-[700px] h-[66vh]"
                src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbInMAG2DbIcCIJZLzEIdS51dzqqeAJHlLA&s"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-wrap w-[50%]">
            <div className="flex gap-6">
              <img
                className=" w-[700px]"
                src="	https://assets-in.bmscdn.com/discovery-catalog/events/et00396952-tfvujhhwtn-landscape.jpg"
                alt=""
              />
              <img
                className=" w-[700px]"
                src="	https://static.toiimg.com/photo/110700862.cms"
                alt=""
              />
            </div>
          </SwiperSlide>
          <div className="absolute bottom-60 left-20 right-[70px]">
            <div className="swiper-button-prev swiper_buttons">
              <FaAngleLeft className="swiper_icon" />
            </div>
            <div className="swiper-button-next swiper_buttons">
              <FaAngleRight className="swiper_icon" />
            </div>
          </div>
        </Swiper>
      )}
      {step === 1 && (
        <div id="grid_box">
          <h1 className="font-bold text-lg uppercase p-4 text-center">
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
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left column for A1-20 to Z1-20 */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-5 lg:grid-cols-8 gap-4">
                {selectedScreening.seats
                  .filter((seat) => {
                    const seatNumber = parseInt(seat.label.slice(1));
                    return seatNumber >= 1 && seatNumber <= 40;
                  })
                  .map((seat) => (
                    <div
                      key={seat.id}
                      className={`border rounded-t-3xl text-center p-4 shadow-lg cursor-pointer ${
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
            </div>
            {/* Right column for A21-40 to Z21-40 */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                {selectedScreening.seats
                  .filter((seat) => {
                    const seatNumber = parseInt(seat.label.slice(1));
                    return seatNumber >= 40 && seatNumber <= 80;
                  })
                  .map((seat) => (
                    <div
                      key={seat.id}
                      className={`border rounded-t-3xl text-center p-4 shadow-lg cursor-pointer ${
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
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4 mt-4 align-items">
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
                onClick={() => toggleSnackSelection(snack)}
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
              <h2 className="text-2xl font-bold mb-4">
                Total Amount: ₹{getTotalAmount()}
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
                className="p-4 border rounded-md bg-green-100"
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
                    <span>Seats</span>
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

                <div className="mt-4 font-semibold text-center text-red-600 bg-blue-200 p-10 leading-loose rounded-xl">
                  <h1 className="text-black">Important Notes:</h1>
                  <ul className="list-disc text-left mt-6">
                    <li>
                      Tickets & food once ordered cannot be exchanged, cancelled
                      or refunded.
                    </li>
                    <li>
                      Children aged 3 years and above will require a separate
                      ticket.
                    </li>
                    <li>
                      The 3D glasses will be available at the cinema for 3D
                      films and must be returned before you exit the premises.
                      3D Glasses are chargeable (refundable/ non-refundable) as
                      per individual cinema policies
                    </li>
                    <li>
                      Items like laptop, cameras,knifes, lighter,match box,
                      cigarettes, firearms and all types of inflammable objects
                      are strictly prohibited.
                    </li>
                    <li>
                      Items like carrybags eatables, helmets, handbags are not
                      allowed inside the theaters are strictly prohibited.
                      Kindly deposit at the baggage counter ofmall/ cinema
                    </li>
                  </ul>
                  <div className="mt-4 font-semibold text-center text-red-600 bg-blue-200">
                    <p className="text-justify">
                      Please check the suitability of the movie as per the
                      Censor Board rating. Cinema management holds Rights of
                      Admission and can deny admission forcompliance of cinema
                      policies.
                    </p>
                    <ul className="list-disc text-left">
                      <li>
                        U : Unrestricted Public Exhibition throughout India,
                        suitable for all age groups
                      </li>
                      <li>
                        A : Viewing restricted to adults above 18 years only
                      </li>
                      <li>
                        U/A : Unrestricted public exhibition with parental
                        guidance for children below age 12
                      </li>
                      <li>
                        S : Film is meant for specialized audience such as
                        doctors
                      </li>
                    </ul>
                  </div>
                </div>
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
