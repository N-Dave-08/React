import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box
      m="0 10px 0 20px"
    >
      <Header title="Bar Graph" subtitle="Simple Bar Graph" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar