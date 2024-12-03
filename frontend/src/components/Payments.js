import React, { useState } from 'react';

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, amount: 500, status: 'unpaid' },
    { id: 2, amount: 1200, status: 'paid' },
  ]);

  const markAsPaid = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: 'paid' } : payment
      )
    );
  };

  return (
    <div className="payments">
      <h2>Payments</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            ${payment.amount} - {payment.status}
            {payment.status === 'unpaid' && (
              <button onClick={() => markAsPaid(payment.id)}>Mark as Paid</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
