// Chakra imports
import { Box, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Custom components
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import {
  MdAddTask,
  MdClear,
  MdRocketLaunch,
  MdTrendingDown,
  MdTrendingUp,
} from "react-icons/md";
import PieCard from "../../../modules/admin/default/components/PieCard";
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
                <Icon
                  w="32px"
                  h="32px"
                  as={MdRocketLaunch}
                  color={brandColor}
                />
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
          value={dashboardData?.dashboard?.totalTasksNotConcluded || ""}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdTrendingUp} color={brandColor} />
              }
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
                <Icon
                  w="32px"
                  h="32px"
                  as={MdTrendingDown}
                  color={brandColor}
                />
              }
            />
          }
          name="Porcentagem de Tarefas Não Concluídas"
          value={dashboardData?.dashboard?.notConcludedPercentage || ""}
        />
      </SimpleGrid>

      {dashboardData ? (
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
            <PieCard />
          </SimpleGrid>
        </SimpleGrid>
      ) : null}
    </Box>
  );
}
