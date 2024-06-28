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
import { COLORS } from "../contants";
import { BriefcaseBusiness } from "lucide-react";

// import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export function RemainingLeaves() {
    return (
      <Card>
        <CardBody>
          <Flex mb="20px">
            <Heading
              as="h4"
              size="md"
              color={COLORS.darkBlue}
              sx={{ textAlign: "left" }}
            >
              Remaining Leave Balance:
            </Heading>
            <Spacer />
            {/* <ChakraLink as={ReactRouterLink} to="/home"> */}
            <ChakraLink to="/home">
              <Text>All leaves</Text>
            </ChakraLink>
          </Flex>
          <Flex gap="2">
            <TileCard />
            <Spacer />
            <TileCard />
            <Spacer />
            <TileCard />
            <Spacer />
            <TileCard />
          </Flex>
        </CardBody>
      </Card>
    );
  }
  
  function TileCard() {
    return (
      <Card width="500px" bg={COLORS.lightGrey}>
        <CardBody>
          <VStack spacing="5px">
            <BriefcaseBusiness size={40} color={COLORS.darkBlue} />
            <Text color={COLORS.darkGrey} fontSize={14} fontWeight="800">
              Annual Leave
            </Text>
            <Text color={COLORS.darkBlue} fontSize={14} fontWeight="800">
              12/20
            </Text>
          </VStack>
        </CardBody>
      </Card>
    );
  }