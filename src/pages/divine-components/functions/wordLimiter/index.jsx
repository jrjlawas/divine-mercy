import { useState } from "react";

const TruncatedParagraph = ({ text, limit = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  const isLong = text.length > limit;
  const displayText = expanded || !isLong ? text : text.slice(0, limit) + "...";

  return (
    <p>
      {displayText}
      {isLong && (
        <span
          onClick={toggleReadMore}
          style={{ color: "#AF6A6F", cursor: "pointer", marginLeft: 5 }}
        >
          {expanded ? " Show less" : " Read more"}
        </span>
      )}
    </p>
  );
};

export default TruncatedParagraph;
