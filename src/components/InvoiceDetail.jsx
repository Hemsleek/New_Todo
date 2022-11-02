import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultInvoices } from "../data";

const InvoiceDetail = () => {
  const [invoiceDetail, setInvoiceDetail] = useState({});
  const { invoiceName } = useParams();

  const isDetailEmpty = Object.entries(invoiceDetail).length === 0;

  useEffect(() => {
    const dataToShow = defaultInvoices.find(
      (invoice) => invoice.name === invoiceName
    );
    if (dataToShow !== null) {
      setTimeout(() => {
        setInvoiceDetail(dataToShow);
      }, 2000);
    }
  }, []);

  return (
    <>
      {!isDetailEmpty && (
        <div className="invoice small">
          <span>{invoiceDetail.name}</span>
          <span>{invoiceDetail.number}</span>
          <span>{invoiceDetail.amount}</span>
          <span>{invoiceDetail.due}</span>
        </div>
      )}
    </>
  );
};

export default InvoiceDetail;
