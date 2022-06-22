import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import useApiPrivate from "../hooks/useApiPrivate";
import useAuth from "../hooks/useAuth";
import useToken from "../hooks/useToken";
import useUser from "../hooks/useUser";

export default function SpotifyCallback() {
  const { getToken } = useToken();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { loadUser, setToken, token } = useAuth();

  useEffect(() => {
    const loadUserAndNavigateToCreate = () => {
      if (token !== "")
        loadUser().then(() => {
          if (localStorage.getItem("UID"))
            navigate("/create_user", { replace: true });
        });
    };
    loadUserAndNavigateToCreate();
  }, [token]);

  useEffect(() => {
    const loadToken = async () => {
      const code = searchParams.get("code");
      if (code) setToken((await getToken(code)) || "");
    };
    loadToken();
  }, []);
  return (
    <div className="w-96 bg-indigo-700/50 p-8 rounded-lg flex flex-col items-center">
      <img
        src={require("../assets/logo.png")}
        alt="curie-logo"
        className="w-44 mb-4"
      />
      <img
        src={require("../assets/heading.png")}
        alt="CURIE"
        className="w-32 mb-8"
      />
      <p className="text-xl mb-4">{"🤗 "}Welcome to Curie</p>
      <div>
        <PrimaryButton onClick={() => {}}>LOGGING IN...</PrimaryButton>
      </div>
    </div>
  );
}
