import {
  Box,
  Flex,
} from "@chakra-ui/react";
import "./App.css";
import { Approvers } from "./components/Approvers";
import { RemainingLeaves } from "./components/RemainingLeaves";
import { MonthlyLeaves } from "./components/MonthlyLeaves";

export function LeavesSection() {
  return (
    <>
      <Box sx={{ minHeight: "100vh", width: 1200 }}>
        <Flex direction="column" gap="20px">
          <Flex gap="20px">
            <RemainingLeaves />
            <Approvers />
          </Flex>
          <MonthlyLeaves />
        </Flex>
      </Box>
    </>
  );
}
