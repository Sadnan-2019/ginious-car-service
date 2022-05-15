import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getUserToken = async() => {
     
      console.log(user);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://agile-lake-44995.herokuapp.com/login",
          { email }
        );

        setToken(data);
        localStorage.setItem("accesToken", data);
      }
    };

    getUserToken();
  }, [user]);
  return [token];
};

export default useToken;
