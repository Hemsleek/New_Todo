import React from "react";
import { defaultInvoices } from "../data";

const Invoices = () => {
  return (
    <div className="Invoices">
      {defaultInvoices.map((invoice, invoiceIndex) => (
        <div className="invoice" key={invoiceIndex}>
          <span>{invoice.name}</span>
          <span>{invoice.number}</span>
        </div>
      ))}
    </div>
  );
};

export default Invoices;
