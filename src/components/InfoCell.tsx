import { Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const InfoCell = ({ heading, children }: Props) => {
  return (
    <VStack align="flex-start" mt={5}>
      <Heading fontSize="md" color="gray.600">
        {heading}
      </Heading>
      {children}
    </VStack>
  );
};

export default InfoCell;
