import { Box } from "@mui/material";
import Modal from "../components/BasicSpeedDial";
import CustomizedTables from "../components/CustomizedTables";
import { useAppSelector } from "../store/hooks";

export default function Home() {
  const transactionsRedux = useAppSelector((state) => state.transactions);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "black", color: "white", fontFamily: "sans-serif", alignItems: "center", width: "100vw", height: "100vh"}}>
      &nbsp;
        <h1>Transações</h1>
        &nbsp;
        <h2>
          Total em caixa:{" "}
          {transactionsRedux.reduce((acc, val) => {
            if (val.type === "Entrada") {
              return acc + val.value;
            } else {
              return acc - val.value;
            }
          }, 0)}
        </h2>
        &nbsp;
        <div style={{ width: "80vw", height: "80vh" }}>
          <CustomizedTables />
        </div>
      </Box>
      <Modal />
    </>
  );
}
