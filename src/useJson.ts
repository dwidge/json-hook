// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { useState, useEffect } from "react";

export const useJson = <T,>(url: string) => {
  const [config, setConfig] = useState<T>();
  useEffect(() => {
    getJson<T>(url).then(setConfig);
  }, []);
  return config;
};

export async function getJson<T>(url: string) {
  const response = await fetch(url);
  const config = await response.json();
  return config as T;
}
