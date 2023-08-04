import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
