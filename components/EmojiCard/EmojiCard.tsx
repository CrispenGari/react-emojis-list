import React, { useState } from "react";
import { EmojiType } from "../../types";
import styles from "./EmojiCard.module.css";
interface Props {
  emoji: EmojiType;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}
const EmojiCard: React.FC<Props> = ({
  emoji: { emojis, id, description },
  setShowAlert,
}) => {
  const copy = () => {
    setShowAlert(false);
    navigator.clipboard.writeText(`react@emojify-${id}`);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setShowAlert(true);
  };

  return (
    <div className={styles.emoji__card} title={description} onClick={copy}>
      <h1>{Object.values(emojis).filter((e) => e !== "-")[1]}</h1>
    </div>
  );
};

export default EmojiCard;
