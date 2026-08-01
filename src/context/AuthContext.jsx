import { createContext, useState, useEffect } from "react";
import { supabase } from "../ClientSupabase";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const RegisterWithSupabase = async (userData) => {
    const { firstName, lastName, phone, email, image, password } = userData;
    const signupUser = { email: email, password: password };

    const { data: signupData, error: signupError } =
      await supabase.auth.signUp(signupUser);
    if (signupError) {
      toast.error(`error in signup ${signupError.message} `, {
        duration: 1200,
      });
      return;
    } else {
      try {
        if (signupData?.user) {
          const { data: insertData, error: insertError } = await supabase
            .from("clients")
            .insert([
              {
                id: signupData.user.id,
                firstName,
                lastName,
                phone,
                email,
                image,
              },
            ])
            .select();
          if (insertError) {
            setCurrentUser(null);
            toast.error(
              `error in insert data to database ${insertError.message}`,
              {
                duration: 1200,
              },
            );
            return;
          } else {
            setCurrentUser(insertData[0]);
            toast.success("successfully signup", { duration: 1200 });
          }
        } else {
          setCurrentUser(null);
          toast.error(`error in insert data to database `, {
            duration: 1200,
          });
          return;
        }
      } catch (err) {
        toast.error(`error in insert data to database ${err.message}`, {
          duration: 1200,
        });
        return;
      }
    }
  };

  const LoginWithSupabase = async (userData) => {
    const { email, password } = userData;

    const { data: signinData, error: signinError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (signinError) {
      toast.error(`error in signIn ${signinError.message} `, {
        duration: 1200,
      });
      return;
    } else {
      try {
        if (signinData?.user) {
          let userId = signinData.user.id;
          const { data, error } = await supabase
            .from("clients")
            .select("*")
            .eq("id", userId)
            .single();
          if (error) {
            toast.error(`error in signIn ${error.message} `, {
              duration: 1200,
            });
            setCurrentUser(null);
            return;
          } else {
            toast.success("successfully signIn", { duration: 1200 });
            setCurrentUser(data);
          }
        } else {
          toast.error(`error in signIn `, {
            duration: 1200,
          });
          return;
        }
      } catch (err) {
        toast.error(`error in signIn ${err.message} `, {
          duration: 1200,
        });
        return;
      }
    }
  };
  const logoutUser = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    if (!currentUser) {
      localStorage.removeItem("auth");
    } else {
      localStorage.setItem("auth", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        RegisterWithSupabase,
        LoginWithSupabase,
        currentUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
