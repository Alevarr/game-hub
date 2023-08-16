import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  if (!children) return null;
  const maxChars = 300;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <Text>
        {isExpanded ? children : children.substring(0, maxChars) + "..."}{" "}
        {children.length > maxChars && (
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
