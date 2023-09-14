import axios from "axios";

export const getCityAPIAuthToken = async () => {
  const auth_token = await axios({
    method: "get",
    url: "https://www.universal-tutorial.com/api/getaccesstoken",
    headers: {
      Accept: "application/json",
      "api-token":
        "ndamIUChDec0lC8bDUd1HzsBD_ynmRjOV4wGS--GlIGnj2YJRePmqdWHA3B-DoMw6Ms",
      "user-email": "happygru237@gmail.com",
    },
  });
  console.log(auth_token);
};
