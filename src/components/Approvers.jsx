import { APPROVERS, COLORS } from "../contants";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Box,
    Heading,
    Flex,
    Spacer,
    SimpleGrid,
    Center,
    VStack,
  } from "@chakra-ui/react";

function Appropver({ index, name, designation }) {
  return (
    <Flex gap="5">
      <Text>{index}.</Text>
      <Box>
        <Text textAlign="left" fontSize="18" fontWeight="600">
          {name}
        </Text>
        <Text textAlign="left" fontSize="14" fontWeight="500">
          {designation}
        </Text>
      </Box>
    </Flex>
  );
}

export function Approvers() {
  return (
    <Card minWidth="fit-content">
      <CardBody>
        <Heading
          as="h4"
          size="md"
          color={COLORS.darkBlue}
          mb="20px"
          sx={{ textAlign: "left" }}
        >
          Your Direct Approver
        </Heading>
        {APPROVERS.map((person) => {
          return (
            <Appropver
              key={person.id}
              index={person.id}
              name={person.name}
              designation={person.designation}
            />
          );
        })}
      </CardBody>
    </Card>
  );
}
