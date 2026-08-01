import "./Pagination.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function Pagination({
  handlePageChange,
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  booksDataLength,
}) {
  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-8">
      <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0">
        <div>
          <p className="text-sm min-[350px]:text-lg text-gray-700">
            Showing
            <span className="font-medium mx-1 cursor-pointer text-blue-600">
              {startIndex + 1}
            </span>
            to
            <span className="font-medium mx-1 cursor-pointer text-blue-600">
              {Math.min(endIndex, booksDataLength)}
            </span>
            of
            <span className="font-medium mx-1 cursor-pointer text-purple-600">
              {booksDataLength}
            </span>
            results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          >
            {/* السابق */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative cursor-pointer inline-flex items-center rounded-l-md p-1 min-[350px]:p-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft className="text-blue-600" />
            </button>

            {/* أرقام الصفحات */}
            {getPaginationRange().map((page, index) =>
              page === "..." ? (
                <span
                  key={`dots-${index}`}
                  className="relative cursor-pointer inline-flex items-center py-1 px-2 min-[350px]:px-4 min-[350px]:py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 focus:outline-offset-0"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex cursor-pointer items-center py-1 px-2 min-[350px]:px-4 min-[350px]:py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ${
                    currentPage === page
                      ? "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            {/* التالي */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative cursor-pointer inline-flex items-center rounded-r-md p-1 min-[350px]:p-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only cursor-pointer">Next</span>
              <FaChevronRight className="text-blue-600" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
