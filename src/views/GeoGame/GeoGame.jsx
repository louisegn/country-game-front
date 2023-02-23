import styles from "./GeoGame.module.scss";

const GeoGame = () => {
  // SpellChecker.getDictionary("fr-FR", function (err, dictionary) {
  //   if (!err) {
  //     var misspelled = !dictionary.spellCheck("maisonn");
  //     if (misspelled) {
  //       var suggestions = dictionary.getSuggestions("maisonn");
  //       console.log(suggestions);
  //     }
  //   }
  // });
  return (
    <div className={styles.container}>
      <input type="text" />
    </div>
  );
};

export default GeoGame;
