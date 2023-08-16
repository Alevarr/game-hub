import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  if (!children) return null;
  const maxChars = 300;
  const expandFeatureNeeded = children.length > maxChars;
  const [isExpanded, setIsExpanded] = useState(false);
  const cutString = children.substring(0, maxChars) + "...";

  return (
    <>
      <Text>
        {expandFeatureNeeded ? (isExpanded ? children : cutString) : children}{" "}
        {expandFeatureNeeded && (
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            size="xs"
            fontWeight="bold"
            colorScheme="yellow"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        )}
      </Text>
    </>
  );
};

export default ExpandableText;
