import { useEffect, useState } from "react";

const useFetch = (url) => {
  let header,data
  
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: {
      status: true,
      message: "",
    }
  });

  const fetchData = async (url) => {
    try {
      header = await fetch(url);
      if (!header.ok) {
        setState((prevState) => {
          return {
            ...state,
            loading: false,
            error: {
              status: true,
              message: `Source not Found!, Check the URL:\n"${url}"`,
            },
          };
        });
      } else {
        data = await header.json();
        setState((prevState) => {
          return {
            ...state,
            loading: false,
            data: data,
            error: {
              status: false,
              message: "",
            },
          };
        });
      }
    } catch (e) {
      setState((prevState) => {
        return {
          ...state,
          loading: false,
          error: {
            status: true,
            message: `Invalid Destination, check the URL:'\n${url}\n${e.message}`,
          },
        };
      });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error.status,
    errMsg: state.error.message,
  };
};

export default useFetch;
