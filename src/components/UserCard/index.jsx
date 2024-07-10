import React, { useState } from "react";
import userImage from "./userImage.jpg";
import styles from "./UserCard.module.css";

function UserCard({
  user: { fullName, userName, tweets, following, followers, gender },
}) {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isStarClicked, setIsStarClicked] = useState(false);

  const userCardSwadowStyle = {
    boxShadow: `0 0 20px 5px ${gender === "male" ? "blue" : "violet"}`,
  };

  const starStyle = {
    color: isStarClicked ? "yellow" : "#333333",
  };

  function onAddClick() {
    setFollowersCount((prevValue) => prevValue + 1);
  }

  function onStarClick() {
    setIsStarClicked((prevValue) => !prevValue);
  }

  return (
    <article className={styles.userCard} style={userCardSwadowStyle}>
      <div className={styles.userImageWrapper}>
        <div className={styles.backgroundColor}></div>
        <img className={styles.userImage} src={userImage} alt={fullName} />
        <i
          onClick={onStarClick}
          className={`${styles.starIcon} fa-solid fa-star`}
          style={starStyle}
        ></i>
        <div className={styles.userContent}>
          <h2 className={styles.fullName}>{fullName}</h2>
          <p className={styles.userName}>{userName}</p>
          <button onClick={onAddClick} className={styles.addButton}>
            +
          </button>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Tweets</h3>
          <p className={styles.statisticValue}>{tweets}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Following</h3>
          <p className={styles.statisticValue}>{following}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Followers</h3>
          <p className={styles.statisticValue}>{followersCount}</p>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
