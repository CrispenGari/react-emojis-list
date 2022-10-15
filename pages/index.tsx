import type { NextPage } from "next";
import Link from "next/link";
import { EmojiCard, SearchBar } from "../components";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";
import { data } from "../constants";
import { Alert } from "@mui/material";
const Home: NextPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [filteredEmojis, setFilteredEmojis] = React.useState(data.data);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value) {
      setFilteredEmojis(
        data.data.filter((e) =>
          e.description.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
    } else {
      setFilteredEmojis(data.data);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__top}>
        <div className={styles.home__top__logo}>
          <Image src={"/fav-ico.png"} alt="logo" layout="fill" />
        </div>
        <h1>React Emojify</h1>
        <p>
          A react emoji components for{" "}
          <Link href="https://github.com/CrispenGari/react-emojify">
            @crispengari/react-emojify
          </Link>
        </p>
      </div>
      {showAlert ? (
        <Alert
          color="success"
          variant="outlined"
          className={styles.home__alert}
        >
          Copied!!
        </Alert>
      ) : null}
      <SearchBar onChange={onChange} onSubmit={onSubmit} value={search} />
      <div className={styles.home__emojis}>
        {filteredEmojis.map((emoji) => (
          <EmojiCard key={emoji.id} emoji={emoji} setShowAlert={setShowAlert} />
        ))}
      </div>
    </div>
  );
};

export default Home;
