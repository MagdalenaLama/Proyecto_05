import { useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";

export const Header = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const showHomeIcon = location.pathname === "/search";
  const handleClickIcon = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 flex items-center">
        {showHomeIcon && (
          <IoHome
            className="text-blue-500 text-4xl cursor-pointer"
            onClick={handleClickIcon}
          />
        )}
        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <h1 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
        </div>
      </nav>
    </>
  );
};
