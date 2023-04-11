import { DashboardContext } from "../context/DashboardContext";
import { useState } from "react";
import DashboardServiceImpl from "../../../modules/admin/dashboard/_core/services/impl/DashboardServiceImpl";
import { Dashboard } from "../../../types/dashboard/Dashboard";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";

interface IProps {
  children: JSX.Element;
}

const DashboardProvider = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dashboardData, setDashboardData] = useState<Dashboard>(null);

  const [makeToast] = Toast();

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const getDashboard = async () => {
    try {
      toggleLoading();
      const { data: res } = await DashboardServiceImpl.getDashboard();
      setDashboardData(res);
      toggleLoading();
    } catch (e: any) {
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
      toggleLoading();
    }
  };

  return (
    <DashboardContext.Provider
      value={{ isLoading, getDashboard, dashboardData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
