import React, { useEffect, useState } from "react";
import clinet from "../Service/clinet";
import { CanceledError } from "axios";

const UseGames = () => {
  const [game, setGame] = useState([]);
  const [Error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    clinet
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { game, Error, loading };
};

export default UseGames;
