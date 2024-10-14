export const Header = ({ title }) => {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <h1 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
        </div>
      </nav>
    </>
  );
};
