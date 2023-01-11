import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//spending,redemption

const SpendingTab = ({ currentLoading, spendings }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="w-full pt-20">
      <h2 className="text-center">Spending for {user.firstname}</h2>
      {currentLoading ? (
        <div className="justify-center align-center items-center">
          <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
        </div>
      ) : (
        <div>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Invoice No</TableCell>
                <TableCell align="right">Invoice Date</TableCell>
                <TableCell align="right">Memo Type</TableCell>
                <TableCell align="right">Sales Channel</TableCell>
                <TableCell align="right">Net Amount</TableCell>
                <TableCell align="right">Current Tier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {spendings.map((row) => (
                <TableRow key={row.invoiceno} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.invoiceno}
                  </TableCell>
                  <TableCell align="right">{row.invoicedate}</TableCell>
                  <TableCell align="right">{row.memotype}</TableCell>
                  <TableCell align="right">{row.saleschannel}</TableCell>
                  <TableCell align="right">{row.netamount}</TableCell>
                  <TableCell align="right">{row.currenttier}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};
const PointsTab = ({ currentLoading, points }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="w-full pt-20">
      <h2 className="text-center">Points of {user.firstname}</h2>
      {currentLoading ? (
        <div className="justify-center align-center items-center">
          <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
        </div>
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction Date</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Member</TableCell>
              <TableCell align="right">Memo</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Remaining</TableCell>
              <TableCell align="right">Transaction Status</TableCell>
              <TableCell align="right">Transction Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {points &&
              points.map((row, idx) => (
                <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.pointtransaction_trdate}
                  </TableCell>
                  <TableCell align="right">{row.pointtransaction_contact}</TableCell>
                  <TableCell align="right">{row.pointtransaction_member}</TableCell>
                  <TableCell align="right">{row.pointtransaction_memo}</TableCell>
                  <TableCell align="right">{row.pointtransaction_points}</TableCell>
                  <TableCell align="right">{row.pointtransaction_remain}</TableCell>
                  <TableCell align="right">{row.pointtransaction_status}</TableCell>
                  <TableCell align="right">{row.pointtransaction_type}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

const History = () => {
  const [tabs, setTabs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [spendingData, setSpendingData] = useState([]);
  const [pointsData, setPointsData] = useState([]);
  const getSpending = async (e) => {
    setTabs(1);
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/spending?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      header: {
        contactId: Number(user?.contactid),
        memberId: Number(user?.memberid),
      },
    };
    setLoading(true);
    await axios.get(proxy + url, config).then((res) => {
      // console.log(res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        console.log(res.data.data);
        const sdata = res.data.data;
        const spendings =
          sdata &&
          sdata.map((item) => ({
            affiliatespending: item.custrecord_acws_affiliatespending,
            currenttier: item.custrecord_acws_currenttier,
            invoicedate: item.custrecord_acws_invoicedate,
            invoiceno: item.custrecord_acws_invoiceno,
            member: item.custrecord_acws_member,
            memotype: item.custrecord_acws_memotype,
            netamount: item.custrecord_acws_netamount,
            saleschannel: item.custrecord_acws_saleschannel,
          }));
        setSpendingData(spendings);
        setLoading(false);
      }
    });
  };

  const getPoints = async (e) => {
    setTabs(0);
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/pointtransaction?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      header: {
        contactId: Number(user?.contactid),
        memberId: Number(user?.memberid),
      },
    };
    setLoading(true);
    await axios.get(proxy + url, config).then((res) => {
      if (res.data.data && res.data.data.length > 0) {
        console.log(res.data.data);
        const pdata = res.data.data;
        const pointData =
          pdata &&
          pdata.map((item) => ({
            pointtransaction_contact: item.custrecord_acws_pointtransaction_contact,
            pointtransaction_entype: item.custrecord_acws_pointtransaction_entype,
            pointtransaction_member: item.custrecord_acws_pointtransaction_member,
            pointtransaction_memo: item.custrecord_acws_pointtransaction_memo,
            pointtransaction_points: item.custrecord_acws_pointtransaction_points,
            pointtransaction_remain: item.custrecord_acws_pointtransaction_remain,
            pointtransaction_status: item.custrecord_acws_pointtransaction_status,
            pointtransaction_trdate: item.custrecord_acws_pointtransaction_trdate,
            pointtransaction_type: item.custrecord_acws_pointtransaction_type,
          }));
        setPointsData(pointData);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getPoints();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-around items-center border-b-2 border-grey">
        <button className="hover:bg-blue-400" onClick={(e) => getSpending(e)}>
          Spendings
        </button>
        <button className="hover:bg-blue-400" onClick={(e) => getPoints(e)}>
          Points
        </button>
      </div>
      <div className="flex flex-row justify-center">
        {tabs === 0 ? (
          <div className="flex">
            <PointsTab currentLoading={loading} spendings={pointsData} />
          </div>
        ) : (
          <div className="flex">
            <SpendingTab currentLoading={loading} spendings={spendingData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
