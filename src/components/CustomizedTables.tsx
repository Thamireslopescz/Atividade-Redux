import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../store/hooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const transactionsRedux = useAppSelector((state) => state.transactions);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><b>Descrição</b></StyledTableCell>
            <StyledTableCell align="right"><b>Valor</b></StyledTableCell>
            <StyledTableCell align="right"><b>Tipo</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionsRedux.map((t) => (
            <StyledTableRow key={t.id}>
              <StyledTableCell component="th" scope="row">
                {t.description}
              </StyledTableCell>
              <StyledTableCell align="right">{t.value}</StyledTableCell>
              <StyledTableCell align="right">{t.type === "Entrada" ? "Entrada" : "Saída"}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
