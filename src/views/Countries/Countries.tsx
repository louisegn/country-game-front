import styles from "./Countries.module.scss";
// import axios from "axios";
import { useMemo, useState } from "react";

import Country from "../../components/Country/Country";
import countriesJson from "../../assets/countries.json";

// inter
export interface ICountryData {
  CAPITALE: string;
  CODE: string;
  NOM_ALPHA: string;
  NOM_LONG: string;
}

const Countries = () => {
  const [country, setCountry] = useState<ICountryData>();

  const countriesTyped = countriesJson as any;

  const countries = useMemo(() => {
    const kak = [];
    for (const property in countriesTyped) {
      kak.push(countriesTyped[property]);
    }
    return kak;
  }, [countriesTyped]);

  //   let countries = [];
  //   // const kak = [];
  //   for (const property in countriesTyped) {
  //     countries.push(countriesTyped[property]);
  //   }

  return (
    <div className={styles.container}>
      <div className={styles["country-list"]}>
        {countries.map((country, index) => {
          return (
            <div
              key={index}
              onClick={() => setCountry(country)}
              className={styles["country-name"]}
            >
              <p>{country.NOM_ALPHA}</p>
            </div>
          );
        })}
      </div>
      {country ? (
        <div className={styles["country-details"]}>
          <Country countryData={country} />
        </div>
      ) : (
        <div>hello world</div>
      )}
    </div>
  );
};

export default Countries;
