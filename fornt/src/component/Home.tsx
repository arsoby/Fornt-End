import {
  Box,
  chakra,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Divider,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Microsoft from "./../assets/microsoft.png";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import Marque from "./Marque";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const [data, setData] = React.useState<any[]>([]);

  const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab";

  React.useEffect(() => {
    axios.get("https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab").then((res) => {
      setData(res.data);
    });
  }, []);

  const [chartData, setChartData] = React.useState<any>({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = React.useState({});

  React.useEffect(() => {
    setChartData({
      labels: [
        "John",
        "Kevin",
        "Geroge",
        "Micheal",
        "Oreo",
        "Kevin",
        "Geroge",
        "Micheal",
        "Oreo",
      ],
      datasets: [
        {
          label: "",
          data: [1200, 550, 340, 1200, 7200, 7500, 7347, 3899],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,

      plugins: {
        legend: {
          position: "top",
        },
        // title: {
        //   display: true,
        //   text: "Whom'st let the dogs out",
        // },
      },
    });
  }, []);

  return (
    <Box>
      <br></br>
      <Box ml={"2vh"} mr={"2vh"}>
        <Heading>الصفحة الرئيسية</Heading>
        <br></br>
        {/* شريط متحرك للأسهم الأكثر بحثاً */}
      <Marque/>

        <br></br>
        {/* الشركات الأكثر بحثاً */}
        <Box>
          <chakra.h2 textAlign={"center"} fontSize={"3xl"}>
            الشركات الأكثر بحثاً
          </chakra.h2>

          <Box bgColor={"#001F33"}>
            <SimpleGrid columns={6} gap={"12"} p={"6"}>
              
              <Link to={""}>
                <Image src='https://logo.clearbit.com/Microsoft.com'></Image>
              </Link>
              <Link to={""}>
                <Image src='https://logo.clearbit.com/Tesla.com'></Image>
              </Link>
              <Link to={""}>
                <Image src='https://logo.clearbit.com/Apple.com'></Image>
              </Link>
              <Link to={""}>
                <Image src='https://logo.clearbit.com/Alibaba.com'></Image>
              </Link>
              <Link to={""}>
                <Image src='https://logo.clearbit.com/NIO.com'></Image>
              </Link>
              <Link to={""}>
                <Image src='https://logo.clearbit.com/AMC.com'></Image>
              </Link>
            </SimpleGrid>
          </Box>
        </Box>
        {/* الشركات الأكثر بحثاً */}
        <br></br>
        {/* ملخص السوق */}
        <Box>
          <chakra.h2 fontSize={"3xl"} fontWeight={"bold"}>
            ملخص السوق
          </chakra.h2>

          <Box>
            <SimpleGrid
              columns={8}
              bg={"#001F33"}
              p={"14"}
              textAlign={"center"}
              fontSize={"x-large"}
              fontWeight={"bold"}
              color={"white"}
            >
              <Box color={"green.500"}>
                <Text>الأكثر ارتفاع</Text>
              </Box>
              <Box>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"green.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.30%</Text>
                    <FaArrowUp />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"green.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.30%</Text>
                    <FaArrowUp />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
              <Box borderLeft={"1px"}>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"green.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.30%</Text>
                    <FaArrowUp />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
              <Box color={"red.500"}>
                <Text>الأكثر انخفاضاً</Text>
              </Box>
              <Box>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"red.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.15%</Text>
                    <FaArrowDown />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"red.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.15%</Text>
                    <FaArrowDown />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid>
                  <Text>Microsoft</Text>
                  <SimpleGrid
                    columns={2}
                    color={"red.500"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text>0.15%</Text>
                    <FaArrowDown />
                  </SimpleGrid>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
          <Box h={630} w={"100%"}>
            <Box h={"100%"}>
              <Line options={chartOptions} data={chartData} />
            </Box>
          </Box>
        </Box>
        {/* ملخص السوق */}
      </Box>
    </Box>
  );
}

export default Home;
