import { useState } from 'react';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    // Assume sign-in logic is successful and set the username
    setUsername(username);
    setIsLoggedIn(true);
    hideModal();
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 to-green-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold tracking-widest">
            <a href="/">KRS CINEMAS</a>
          </div>
          
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <>
                <div className="text-white bg-blue-600 px-4 py-2 rounded mr-4">
                  Welcome, {username}
                </div>
                <button
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                className="text-black bg-white hover:bg-gradient-to-r from-blue-600 hover:to-black hover:text-white font-semibold bg-transparent px-4 py-2 rounded transition duration-300"
                onClick={showModal}
              >
                Sign in
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800"
                  onClick={hideModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
