import React from "react";

const StreakBar = ({ streak, longestStreak }) => {
  const activeStreak = streak > 0;

  return (
    <h4 className={activeStreak ? "activeStreak" : "noStreak"}>
      Current Streak: {streak} Longest Streak: {longestStreak}
    </h4>
  );
};

export default StreakBar;
