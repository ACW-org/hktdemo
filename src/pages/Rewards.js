import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Circles } from "react-loader-spinner";
import MaterialReactTable, { MRT_ShowHideColumnsButton, MRT_FullScreenToggleButton } from "material-react-table";
import { Navigate } from "react-router-dom";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(false);
  const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
  const url = "https://netsuitemiddleware.azurewebsites.net/api/reward?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";

  const getMemberRewards = async () => {
    const endpoint = proxy + url;
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      header: {
        contactId: Number(user?.contactid),
        memberId: Number(user?.memberid),
      },
    };
    setLoading(true);
    await axios
      .get(endpoint, config)
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data && res.data.data.length > 0) {
          const rs = res.data.data;
          const mapped_rs = rs.map((item) => ({
            reward_category: item.custrecord_acws_reward_category,
            reward_code: item.custrecord_acws_reward_code,
            reward_currency: item.custrecord_acws_reward_currency,
            reward_displayinapps: item.custrecord_acws_reward_displayinapps,
            reward_displayinconierge: item.custrecord_acws_reward_displayinconierge,
            reward_facevalue: item.custrecord_acws_reward_facevalue,
            reward_hasmemberquota: item.custrecord_acws_reward_hasmemberquota,
            reward_loyaltyprogram: item.custrecord_acws_reward_loyaltyprogram,
            reward_name_sc: item.custrecord_acws_reward_name_sc,
            reward_name_tc: item.custrecord_acws_reward_name_tc,
            reward_padding: item.custrecord_acws_reward_padding,
            reward_pointsrequired: item.custrecord_acws_reward_pointsrequired,
            reward_redemptioneddate: item.custrecord_acws_reward_redemptioneddate,
            reward_redemptionstdate: item.custrecord_acws_reward_redemptionstdate,
            reward_rewardname: item.custrecord_acws_reward_rewardname,
            reward_shortdes_en: item.custrecord_acws_reward_shortdes_en,
            reward_type: item.custrecord_acws_reward_type,
            reward_id: item.id,
          }));
          setRewards(mapped_rs);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMemberRewards();
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "reward_code",
        header: "Reward Code",
      },
      {
        accessorKey: "reward_rewardname",
        header: "Reward Name",
      },
      {
        accessorKey: "reward_name_tc",
        header: "Reward Name (TC)",
      },
      {
        accessorKey: "reward_name_sc",
        header: "Reward Name (SC)",
      },
      {
        accessorKey: "reward_loyaltyprogram",
        header: "Loyalty Program",
      },
      {
        accessorKey: "reward_facevalue",
        header: "Face Value",
      },
    ],
    []
    //end
  );

  const handleRedeem = async (row) => {
    const rewardInfo = row[0].original.reward_id;
    const memberId = JSON.parse(localStorage.getItem("user")).memberid;
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/voucher?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";

    const postObj = {
      // custrecord_acws_voucher_dynamicscode: "KJJDK9888",
      // custrecord_acws_voucher_facevalue: "100",
      // custrecord_acws_voucher_format: "2",
      // custrecord_acws_voucher_transactionid: "0001",
      // custrecord_acws_voucher_txstatus: "2",
      // custrecord_acws_voucher_voucherno: "VOU10000001",

      recordtype: "customrecord_acws_voucher",
      custrecord_acws_voucher_reward: rewardInfo,
      custrecord_acws_voucher_membership: Number(memberId),
    };
    await axios
      .post(proxy + url, JSON.stringify(postObj))
      .then((res) => alert("redeem success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-10 flex flex-col items-center">
      {loading ? (
        <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
      ) : (
        <MaterialReactTable
          columns={columns}
          data={rewards}
          enableRowSelection
          renderToolbarInternalActions={({ table }) => (
            <>
              {/* add your own custom print button or something */}
              <button
                disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected() && table.getSelectedRowModel().rows.length < 2} //last condition to check if selected one row only. if need batch redeem. change <2
                onClick={() => handleRedeem(table.getSelectedRowModel().rows)}
              >
                Click to redeem
              </button>
              {/* built-in buttons (must pass in table prop for them to work!) */}
              <MRT_ShowHideColumnsButton table={table} />
              <MRT_FullScreenToggleButton table={table} />
            </>
          )}
        />
        // <TableContainer component={Paper}>
        //   <Table aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Reward Code</TableCell>
        //         <TableCell align="right">Reward Name</TableCell>
        //         <TableCell align="right">Reward Name(tc)</TableCell>
        //         <TableCell align="right">Reward Name(sc)</TableCell>
        //         <TableCell align="right">Loyalty Program</TableCell>
        //         <TableCell align="right">Amount</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rewards.map((row) => (
        //         <TableRow key={row.reward_id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        //           <TableCell component="th" scope="row">
        //             {row.reward_code}
        //           </TableCell>
        //           <TableCell align="right">{row.reward_rewardname}</TableCell>
        //           <TableCell align="right">{row.reward_name_tc}</TableCell>
        //           <TableCell align="right">{row.reward_name_sc}</TableCell>
        //           <TableCell align="right">{row.reward_loyaltyprogram}</TableCell>
        //           <TableCell align="right">{row.reward_facevalue}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
      )}
    </div>
  );
};

export default Rewards;
