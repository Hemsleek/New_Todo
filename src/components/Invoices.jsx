import React from "react";
import { Link } from "react-router-dom";
import { defaultInvoices } from "../data";

const Invoices = () => {
  return (
    <div className="Invoices">
      {defaultInvoices.map((invoice, invoiceIndex) => (
        <Link
          to={`invoice/${invoice.name}`}
          key={invoiceIndex}
          className="link"
        >
          <div className="invoice">
            <span>{invoice.name}</span>
            <span>{invoice.number}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Invoices;
