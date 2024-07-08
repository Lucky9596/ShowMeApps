// utils/Https.js (assuming this is where your hook is defined)
import { useState, useCallback } from "react";

export const usePostCallback = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createContact = useCallback(async (url, body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message || "Something went wrong!");
      throw error;
    }
  }, []);

  return { loading, error, createContact };
};

export const useGetCallback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendGetRequest = useCallback(async (url, headers = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Something went wrong!");
      throw error;
    }
  }, []);

  return {
    isLoading,
    error,
    sendGetRequest,
  };
};

export const usePutCallback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPutRequest = useCallback(async (url, body, headers = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Something went wrong!");
      throw error;
    }
  }, []);

  return {
    isLoading,
    error,
    sendPutRequest,
  };
};

export const useDeleteCallback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendDeleteRequest = useCallback(async (url, headers = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Something went wrong!");
      throw error;
    }
  }, []);

  return {
    isLoading,
    error,
    sendDeleteRequest,
  };
};
