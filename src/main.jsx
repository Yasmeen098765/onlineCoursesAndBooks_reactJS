import { createRoot } from "react-dom/client";
import "swiper/css";
import "./index.css";
import App from "./App.jsx";
import { DisplayContextBooksProvider } from "./context/DisplayBooksContext.jsx";
import { DisplayCoursesContextProvider } from "./context/DisplayCoursesContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
// Import Swiper styles

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DisplayContextBooksProvider>
      <DisplayCoursesContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </DisplayCoursesContextProvider>
    </DisplayContextBooksProvider>
  </AuthContextProvider>,
);
