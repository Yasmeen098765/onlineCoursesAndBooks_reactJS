import { useContext } from "react";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { LuLogOut } from "react-icons/lu";

function Profile() {
  const { currentUser, logoutUser } = useContext(AuthContext);

  return (
    <section className=" py-10 min-[400px]:py-20  profile min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/50 p-4">
      <div className="w-full mx-auto px-0 min-[350px]:px-4  min-[450px]:px-8 min-[600px]:px-14">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_70px_-15px_rgba(59,130,246,0.3)]">
          {/* Decorative header gradient */}
          <div className="h-1.5 min-[500px]:h-2 animate-pulse transition duration-300 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="p-4 sm:p-8 md:p-10">
            {/* Avatar and name section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-16 h-16 min-[500px]:w-28 min-[500px]:h-28 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center">
                  {currentUser?.image ? (
                    <img
                      src={currentUser.image}
                      alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl font-light text-blue-500">
                      {currentUser?.firstName?.charAt(0) || "U"}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 min-[500px]:w-6 min-[500px]:h-6 bg-green-400 border-2 border-white rounded-full"></div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-xl min-[500px]:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {currentUser?.firstName} {currentUser?.lastName}
                </h2>
                <p className="text-gray-500 text-xs min-[500px]:text-sm mt-1 flex items-center justify-center sm:justify-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 min-[500px]:w-2 min-[500px]:h-2 rounded-full bg-blue-400"></span>
                  Member since {new Date(currentUser?.created_at).getFullYear()}
                </p>
              </div>
            </div>

            {/* User details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50/80 rounded-md min-[500px]:rounded-xl min-[600px]:rounded-2xl p-2 min-[500px]:p-4 border border-gray-100/80 transition-all hover:bg-white hover:border-blue-100 hover:shadow-sm">
                <p className="text-xs min-[500px]:text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Email
                </p>
                <p className="text-gray-800 font-medium truncate text-xs min-[500px]:text-base">
                  {currentUser?.email}
                </p>
              </div>
              <div className="bg-gray-50/80 rounded-md min-[500px]:rounded-xl min-[600px]:rounded-2xl p-2 min-[500px]:p-4 border border-gray-100/80 transition-all hover:bg-white hover:border-blue-100 hover:shadow-sm">
                <p className="text-xs min-[500px]:text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Phone
                </p>
                <p className="text-gray-800 font-medium text-xs min-[500px]:text-base">
                  {currentUser?.phone || "—"}
                </p>
              </div>
              <div className="bg-gray-50/80 rounded-md min-[500px]:rounded-xl min-[600px]:rounded-2xl p-2 min-[500px]:p-4 border border-gray-100/80 transition-all hover:bg-white hover:border-blue-100 hover:shadow-sm sm:col-span-2">
                <p className="text-xs min-[500px]:text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Joined
                </p>
                <p className="text-gray-800 font-medium text-xs min-[500px]:text-base">
                  {new Date(currentUser?.created_at).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>
            </div>

            {/* Logout button */}
            <div className="flex justify-center border-t border-gray-200 pt-3 min-[500px]:pt-6">
              <button
                onClick={() => logoutUser()}
                className="group relative cursor-pointer flex justify-center items-center w-[70%] min-[600px]:w-[50%] overflow-hidden px-4 min-[500px]:px-4 min-[500px]:px-8 py-2 min-[500px]:py-2.5 min-[600px]:py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium rounded-md min-[500px]:rounded-lg min-[500px]:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span className="relative text-center z-10 flex justify-center items-center gap-1 min-[500px]:gap-2 text-xs min-[500px]:text-md min-[600px]:text-lg">
                  <LuLogOut className="text-sm min-[500px]:text-lg min-[600px]:text-xl" />
                  Log Out
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
          </div>

          <div className="h-1.5 min-[500px]:h-2 animate-pulse transition duration-300 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
