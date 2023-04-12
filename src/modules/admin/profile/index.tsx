// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "../../../modules/admin/profile/components/Banner";

// Assets
import banner from "../../../assets/img/auth/banner.png";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/context/AuthContext";

export default function Overview() {
  const { user } = useContext(AuthContext);

  const generateAvatar = (
    username: string,
    foregroundColor: string,
    backgroundColor: string
  ): string => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "bold 100px Assistant";
    context.fillStyle = foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(username, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }}>
        <Banner
          banner={banner}
          avatar={
            user?.name
              ? generateAvatar(
                  user?.name?.slice(0, 2).toUpperCase(),
                  "white",
                  "#7551ff"
                )
              : generateAvatar(
                  user?.username?.slice(0, 2).toUpperCase(),
                  "white",
                  "#7551ff"
                )
          }
          name={user?.name ? user?.name : user?.username}
        />
      </SimpleGrid>
    </Box>
  );
}
