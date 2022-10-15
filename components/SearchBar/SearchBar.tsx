import React from "react";
import styles from "./SearchBar.module.css";
interface Props {
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
const SearchBar: React.FC<Props> = ({ onChange, value, onSubmit }) => {
  return (
    <form className={styles.search__bar} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Emoji"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
