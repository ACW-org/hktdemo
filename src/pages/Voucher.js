import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Circles } from "react-loader-spinner";
import MaterialReactTable, { MRT_ShowHideColumnsButton, MRT_FullScreenToggleButton } from "material-react-table";

const VoucherList = () => {
  const [voucherList, setVoucherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
  const url = "https://netsuitemiddleware.azurewebsites.net/api/voucher?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";

  const statusMapping = (intVal) => {
    switch (intVal) {
      case "1":
        return "Not Assigned";
      case "2":
        return "Active";
      case "3":
        return "Used";
      case "4":
        return "Expired";
      case "5":
        return "Void";
      case "6":
        return "Hold";
    }
  };

  const getVoucher = async () => {
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
        const rs = res.data.data;
        const vouchers =
          rs &&
          rs.map((item) => ({
            dynamicscode: item.custrecord_acws_voucher_dynamicscode,
            facevalue: item.custrecord_acws_voucher_facevalue,
            format: item.custrecord_acws_voucher_format,
            memberid: item.custrecord_acws_voucher_membership,
            rewardid: item.custrecord_acws_voucher_reward,
            txid: item.custrecord_acws_voucher_transactionid,
            txstatus: statusMapping(item.custrecord_acws_voucher_txstatus),
            voucherno: item.custrecord_acws_voucher_voucherno,
            id: item.id,
          }));
        setVoucherList(vouchers);
        setLoading(false);
      }
    });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Voucher Id",
      },
      {
        accessorKey: "rewardid",
        header: "Reward Id",
      },
      {
        accessorKey: "voucherno",
        header: "Voucher No",
      },
      {
        accessorKey: "facevalue",
        header: "Face Value",
      },
      {
        accessorKey: "txstatus",
        header: "Transaction Status",
      },
    ],
    []
    //end
  );

  const handleUseVoucher = async (row) => {
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/voucher?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";
    const putObj = {
      recordtype: "customrecord_acws_voucher",
      id: row[0].original.id,
      name: row[0].original.voucherno,
      custrecord_acws_voucher_txstatus: "3",
    };
    await axios
      .put(proxy + url, JSON.stringify(putObj))
      .then((res) => alert("voucher use success"))
      .then((res) => getVoucher())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVoucher();
  }, []);

  return (
    <div className="pt-10 flex flex-col items-center">
      {loading ? (
        <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
      ) : (
        <MaterialReactTable
          columns={columns}
          data={voucherList}
          enableRowSelection
          renderToolbarInternalActions={({ table }) => (
            <>
              {/* add your own custom print button or something */}
              <button
                className="border-2 rounded-md"
                disabled={
                  !table.getIsSomeRowsSelected() &&
                  !table.getIsAllRowsSelected() &&
                  table.getSelectedRowModel().rows.length < 2 &&
                  table.getSelectedRowModel().rows.filter((r) => r.original.txstatus !== "Active").length > 0
                } //last condition to check if selected one row only. if need batch redeem. change <2
                onClick={() => handleUseVoucher(table.getSelectedRowModel().rows)}
              >
                Click to use
              </button>
              {/* built-in buttons (must pass in table prop for them to work!) */}
              <MRT_ShowHideColumnsButton table={table} />
              <MRT_FullScreenToggleButton table={table} />
            </>
          )}
        />
      )}
    </div>
  );
};

export default VoucherList;
