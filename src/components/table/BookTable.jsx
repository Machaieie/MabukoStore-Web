import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const HoverableTableContainer = styled(TableContainer)(({ theme }) => ({
  "&:hover": {
    boxShadow: `0 0 10px 0 ${theme.palette.action.hover}`,
  },
}));

const BookTable = ({ headers, rows }) => {
  return (
    <HoverableTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <StyledTableCell align={header.align} key={header.key}>
                {header.label}
              </StyledTableCell>
            ))}
            <StyledTableCell align="center">Info</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {headers.map((header) => (
                <StyledTableCell key={header.key} component="th" scope="row">
                  {row[header.key]}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center">
                <InfoIcon
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handleInfoClick(row)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </HoverableTableContainer>
  );
};

export default BookTable;
