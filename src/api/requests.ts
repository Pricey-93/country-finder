import { Country } from "./types";

const basePath = 'https://restcountries.com/v3.1'

export async function fetchAllCountryOverviews(): Promise<Country[]> {
  try {
    const response = await fetch(`${basePath}/all?fields=name,capital,region,flags,population`, {
      method: "GET",
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCountryByName(name: string): Promise<Country[]> {
  try {
    const response = await fetch(`${basePath}/name/${name}?fullText=true`, {
      method: "GET",
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCountryNameByCca3(codes: string[]): Promise<Country[]> {
  try {
    const response = await fetch(`${basePath}/alpha?codes=${codes.join(',')}&fields=name`, {
      method: "GET",
    });
    return response.json(); 
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}