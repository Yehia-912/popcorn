import { useState } from "react";
import Start from "./Start";

interface Props {
  startNum: number;
  color?: string;
  size?: number;
  className?: string;
  message?: string[];
  defaultRating?: number;
  onGetRate?: (rate: number) => void;
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
/**
 * Display high reusable star-rating component
 * @param1 startNum - # of stars
 * @param2 color - color of empty and full star
 * @param3 size -  size of stars
 * @param4 className -  to add additional styles to parent component
 * @param5 message -  to display message right of the stars only if the array of message = #stars
 *
 * @returns
 */
function StartRating({
  startNum,
  color = "#fcc419",
  size = 48,
  className = "",
  message,
  onGetRate: outerHandler,
}: Props) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rate: number) => setRating(rate);

  const textStyle = {
    lineHeight: 1,
    color,
    fontSize: `${size / 1.3}px`,
    margin: 0,
  };
  return (
    <div style={startRatingStyle} className={className}>
      <div style={startContainerStyle}>
        {Array.from({ length: startNum || 5 }, (_, i) => (
          <Start
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            key={i}
            onRate={() => {
              handleRating(i + 1);
              outerHandler ? outerHandler(i + 1) : null ;
            }}
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
