const getCityAPIAuthToken = async () => {
  const res = await fetch(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "api-token":
          "ndamIUChDec0lC8bDUd1HzsBD_ynmRjOV4wGS--GlIGnj2YJRePmqdWHA3B-DoMw6Ms",
        "user-email": "happygru237@gmail.com",
      }),
    }
  ).then((response) => response.json());
  return res.auth_token;
};

const getGhanaStateList = async () => {
  const auth_token = await getCityAPIAuthToken();
  const state_list = await fetch(
    "https://www.universal-tutorial.com/api/states/Ghana",
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${auth_token}`,
        Accept: "application/json",
      }),
    }
  ).then((res) => res.json());
  return state_list;
};

const getCityListByState = async (auth_token, state_name) => {
  const cities = await fetch(
    decodeURIComponent(
      `https://www.universal-tutorial.com/api/cities/${state_name}`
    ),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${auth_token}`,
        Accept: "application/json",
      }),
    }
  ).then((res) => res.json());
  return cities;
};

export const getGhanaCityList = async () => {
  const auth_token = await getCityAPIAuthToken();
  const state_list = await getGhanaStateList();
  let city_list = [];
  for (let i = 0; i < state_list.length; i++) {
    const state_name = state_list[i].state_name;
    let data = await getCityListByState(auth_token, state_name);
    data = data.map((item) => ({
      value: item.city_name,
      label: item.city_name,
    }));
    city_list = [...city_list, ...data];
  }
  return city_list;
};
