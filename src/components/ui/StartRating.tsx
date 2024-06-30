import { useState } from "react";
import Start from "./Start";

interface Props {
  startNum: number;
  color?: string;
  size?: number;
  className?: string;
  message?: string[];
  defaultRating?: number;
}
const startRatingStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const startContainerStyle = {
  display: "flex",
  alignItems: "center",
};

function StartRating({
  startNum,
  color = "#fcc419",
  size = 48,
  className = "",
  message,
}: Props) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rate: number) => setRating(rate);

  const textStyle = {
    lineHeight: 1,
    color,
    fontSize: `${size / 2}px`,
    margin: 0,
  };
  return (
    <div style={startRatingStyle} className={className}>
      <div style={startContainerStyle}>
        {Array.from({ length: startNum || 5 }, (_, i) => (
          <Start
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            key={i}
            onRate={() => handleRating(i + 1)}
            onMouseIn={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message?.length === startNum
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}
export default StartRating;
