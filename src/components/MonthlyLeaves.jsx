
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  Card,
  CardBody,
  Heading,
  Flex,

} from "@chakra-ui/react";
import { Legends, PieChart } from "./PieChart";
import { COLORS } from "../contants";
import { useState } from "react";

export function MonthlyLeaves() {
  return (
    <>
      <Card>
        <CardBody sx={{ minHeight: 420 }}>
          <Heading
            as="h4"
            size="lg"
            mb="20px"
            color={COLORS.darkBlue}
            sx={{ textAlign: "left" }}
          >
            Monthly Leaves Record
          </Heading>
          <Flex gap={20}>
            <section>
              <div style={{ width: 200 }}>
                <PieChart
                  values={[30, 40, 10, 20]}
                  labels={[
                    `Sick leaves ${30}`,
                    `Study leaves ${40}`,
                    `Annual leaves ${10}`,
                    `paternity leaves ${20}`,
                  ]}
                />
              </div>
              <Legends
                legends={[
                  { label: `Sick leaves ${30}`, color: "red" },
                  { label: `Study leaves ${40}`, color: "red" },
                  { label: `Annual leaves ${10}`, color: "red" },
                  { label: `Paternity leaves ${20}`, color: "red" },
                ]}
              />
            </section>
            <section><LeavesCalendar /></section>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}



const studyLeaves = [
  new Date(2024, 5, 8),
  // new Date(2024, 5, 9),
  // new Date(2024, 5, 10),
  // { from: new Date(2024, 5, 15), to: new Date(2024, 5, 20) }
];

const annualLeaves = [
  // new Date(2024, 5, 8),
  new Date(2024, 5, 9),
  // new Date(2024, 5, 10),
  // { from: new Date(2024, 5, 15), to: new Date(2024, 5, 20) }
];

const paternityLeaves = [
  // new Date(2024, 5, 8),
  // new Date(2024, 5, 9),
  new Date(2024, 5, 10),
  // { from: new Date(2024, 5, 15), to: new Date(2024, 5, 20) }
];

const sickLeaves = [new Date(2024, 5, 11)];

const booked = [new Date(2024, 5, 12)];

export function CustomDayContent(props) {
  return (
    <span style={{ position: "relative", overflow: "visible" }}>
      {props.date.getDate()}
    </span>
  );
}

function LeavesCalendar() {
  const [month, setMonth] = useState(() => new Date(2024, 5))
  const handleDayClick = (day, { booked }) => {
    console.log("LeavesCalendar ===>>>", {
      day,
      booked,
    });
  };

  const monthCaptionStyle = {
    borderBottom: "1px solid currentColor",
    paddingBottom: "0.5em",
  };
  return (
    <div id="wrapper_calander" style={{ pointerEvents: "none" }}>
    <DayPicker
    classNames={{
      day: 'day-cell-custom', // Apply custom class to day cells
      weekday: 'day-header-custom',
      head_row: 'day-header-row-custom',
    }}
      // components={{
      //   DayContent: CustomDayContent // Replace the DayContent component
      // }}
      hideNavigation
      defaultMonth={month}
      modifiers={{
        sickLeaves,
        paternityLeaves,
        annualLeaves,
        studyLeaves,
        booked,
      }}
      modifiersClassNames={{
        sickLeaves: "sickLeaves",
        paternityLeaves: "paternityLeaves",
        annualLeaves: "annualLeaves",
        studyLeaves: "studyLeaves",
        // booked: "booked",
      }}
      onDayClick={handleDayClick}
    />
   </div>
  );
}
