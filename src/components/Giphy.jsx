import { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { ToggleGifModal } from "../redux/slices/app";

const gf = new GiphyFetch("8eQe4u7Ch1Hta34KHLL9cYnIiqrVFwCp");

const Giphy = () => {
  const dispatch = useDispatch();
  const gridRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };

  const debouncedFetchGifs = _.debounce(async () => {
    setLoading(true);
    setError(null);

    try {
      const newGifs = await fetchGifs(0);
      setGifs(newGifs.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    const fetchInitialGifs = async () => {
      setLoading(true);
      setError(null);
      try {
        const initialGifs = await fetchGifs(0);
        setGifs(initialGifs.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);

  const handleClick = (gif, e) => {
    e.preventDefault();
    const gifUrl = gif.images.original.url;
    console.log(gifUrl);
    dispatch(
      ToggleGifModal({
        value: true,
        url: gifUrl,
      })
    );
  };

  return (
    <div ref={gridRef} className="w-full mt-2">
      <input
        type="text"
        placeholder="Search for gif..."
        className="border border-stroke dark:border-strokedark rounded-md p-2 w-full mb-1 outline-none bg-transparent"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedFetchGifs();
        }}
      />

      {loading && <p>Loading Gifs...</p>}

      {error && <p className="text-red">Error : {error}</p>}

      <div className="h-48 overflow-auto no-scrollbar">
        {gifs.length > 0 && (
          <Grid
            width={gridRef.current?.offsetWidth}
            columns={8}
            gutter={6}
            fetchGifs={fetchGifs}
            key={value}
            onGifClick={handleClick}
            data={gifs}
          />
        )}
        {gifs.length === 0 && (
          <div className="h-full flex flex-row items-center justify-center">
            <MagnifyingGlass size={35} weight="bold" />
            <span className="text-xl text-body font-semibold">
              Please search for a gif...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Giphy;
