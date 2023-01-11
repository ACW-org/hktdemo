import React, { useEffect, useState } from "react";
import axios from "axios";

const CreatePage = () => {
  const [todayStr, setTodayStr] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [netAmount, setNetAmount] = useState(0);
  const [loyaltyAmount, setLoyaltyAmount] = useState(0);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/spending?code=VY1k0Gnghd9HpyYt9QiCkauWQ_HXoWXGlJ8bYIMKZtHRAzFu1G9n2Q==";
    const obj = {
      recordtype: "customrecord_acws_spending",
      custrecord_acws_invoiceno: invoiceNo,
      custrecord_acws_loyaltyamount: loyaltyAmount.toString(),
      custrecord_acws_invoicedate: todayStr,
      custrecord_acws_nopointoffer: "",
      custrecord_acws_member: Number(user?.memberid),
      custrecord_acws_netamount: Number(netAmount),
    };
    console.log(JSON.stringify(obj));
    await axios
      .post(proxy + url, JSON.stringify(obj))
      .then((res) => alert("Sales Submit Success"))
      .catch((err) => console.log(err));
  };

  const setToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    setTodayStr(formattedToday);
    setInvoiceNo(`inv-${todayStr}`);
  };

  useEffect(() => {
    setToday();
  }, [todayStr]);

  const handleNetAmountChange = (e) => {
    setNetAmount(e.target.value);
    setLoyaltyAmount(Number(e.target.value) * 1.5);
  };

  return (
    <div className="container flex flex-col align-center items-center mx-auto py-5">
      <h1 className="text-center">Fill In Form to Create Sales</h1>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form>
          <div>
            <label htmlFor="inovoiceNo" className="block text-sm font-medium text-gray-700 undefined">
              Invoice No
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                value={invoiceNo}
                name="inovoiceNo"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="netAmount" className="block text-sm font-medium text-gray-700 undefined">
              Net Amount
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                value={netAmount}
                onChange={(e) => handleNetAmountChange(e)}
                name="netAmount"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="loyaltyAmount" className="block text-sm font-medium text-gray-700 undefined">
              Loyalty Amount
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                value={loyaltyAmount}
                name="loyaltyAmount"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <button
            onClick={(e) => handleOnSubmit(e)}
            type="button"
            className="mt-10 items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
