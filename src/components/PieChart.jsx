import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Flex, Box, Text } from "@chakra-ui/react";
import { COLORS } from "../contants";

ChartJS.register(ArcElement, Tooltip, Legend);

export const createData = ({ values, labels }) => ({
  labels,
  datasets: [
    {
      label: "# of leaves",
      data: values,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const options = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};
export function PieChart({ values, labels }) {
  const data = useMemo(() => createData({ values, labels }), [values, labels]);
  return (
    <>
      <Pie data={data} options={options} />
     
    </>
  );
}


export function Legends({ legends }) {
  return  (
    // <Flex justifyContent="center">
    <Box mt="5">
      {legends.map((legend) => {
        return <LegendItem key={legend} {...legend} />;
      })}
    </Box>
  // </Flex>
  )
}
function LegendItem({ label, color, size = 15 }) {
  return (
    <Flex gap={5} alignItems="center">
      <div
        className="color-legends"
        style={{ background: color, width: size, height: size }}
      />
      <Text color={COLORS.darkGrey} fontSize={14}>
        {label}
      </Text>
    </Flex>
  );
}
