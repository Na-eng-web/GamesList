import useData from "./useData";

const UseGames = (selectedG) =>
  useData("/games", { params: { genres: selectedG?.id } }, [selectedG?.id]);

export default UseGames;
