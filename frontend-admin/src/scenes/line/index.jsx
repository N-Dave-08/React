import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import LineChart from "../../components/LineChart";

const Pie = () => {
  return (
    <Box
      m="0 10px 0 20px"
    >
      <Header title="Line Graph" subtitle="Simple Line Graph" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}

export default Pie