// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "../../../assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "../../../components/calendar/MiniCalendar";
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdClear,
} from "react-icons/md";
import CheckTable from "../../../modules/admin/rtl/components/CheckTable";
import ComplexTable from "../../../modules/admin/default/components/ComplexTable";
import DailyTraffic from "../../../modules/admin/default/components/DailyTraffic";
import PieCard from "../../../modules/admin/default/components/PieCard";
import Tasks from "../../../modules/admin/default/components/Tasks";
import TotalSpent from "../../../modules/admin/default/components/TotalSpent";
import WeeklyRevenue from "../../../modules/admin/default/components/WeeklyRevenue";
import tableDataCheck from "../../../modules/admin/default/variables/tableDataCheck";
import tableDataComplex from "../../../modules/admin/default/variables/tableDataComplex";
import { useCallback, useContext, useEffect } from "react";
import { DashboardContext } from "../../../contexts/dashboard/context/DashboardContext";

export default function Dashboard() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const { getDashboard, dashboardData, isLoading } =
    useContext(DashboardContext);

  const getDashboardData = useCallback(async () => {
    await getDashboard();
  }, []);

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Total de Tarefas"
          value={dashboardData?.dashboard?.totalTasksAmount || 0}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="Tarefas Concluidas"
          value={dashboardData?.dashboard?.totalTasksConcluded || 0}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdClear} color={brandColor} />}
            />
          }
          name="Tarefas Não Concluídas"
          value={dashboardData?.dashboard?.concludedPercentage || ""}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdClear} color={brandColor} />}
            />
          }
          name="Porcentagem de Tarefas Concluídas"
          value={dashboardData?.dashboard?.concludedPercentage || ""}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="Porcentagem de Tarefas Não Concluídas"
          value={dashboardData?.dashboard?.notConcludedPercentage || ""}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
