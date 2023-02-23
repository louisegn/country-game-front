import styles from "./Country.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

import { ICountryData } from "../../views/Countries/Countries";

interface ICountry {
  name: string;
  translations: {
    fr: string;
  };
  flags: any;
  capital: string;
  region: string;
  population: number;
}

// interface ICountryData {
//   CAPITALE: string;
//   CODE: string;
//   NOM_ALPHA: string;
//   NOM_LONG: string;
// }
// CAPITALE: string;
// CODE: string;
// NOM_ALPHA: string;
// NOM_LONG: number;

const Country = ({ countryData }: { countryData: ICountryData }) => {
  const [country, setCountry] = useState<ICountry>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryData.CODE}`
        );
        // console.log(response.data[0]);
        setCountry(response.data[0]);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [countryData]);

  return !isLoading ? (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>{countryData?.NOM_ALPHA}</h1>
        </div>
        <div className={styles["img-container"]}>
          <img src={country?.flags.png} alt="" />
        </div>

        <p>Capitale: {countryData?.CAPITALE}</p>
        {/* <p>Region: {country?.region}</p> */}
        {/* <p>Population: {country?.population}</p> */}
      </div>
    </div>
  ) : null;
};

export default Country;
