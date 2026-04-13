import React, { useState } from 'react';
import { feesData, paymentDetails } from '../../data/content';
import './Registration.css';

const Registration = () => {
    const [showFeeCard, setShowFeeCard] = useState(false);

    return (
        <section id="registration" className="registration-section text-center">
            <div className="container">
                <h2 className="section-title">Registration Fee Structure</h2>

                <div className="registration-table-wrapper">
                    <table className="registration-table">
                        <thead>
                            <tr>
                                <th className="text-left">Registration</th>
                                <th className="text-left">Early Bird</th>
                                <th className="text-left">After Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3" className="table-subheader">National</td>
                            </tr>
                            {feesData.national.map((fee, idx) => (
                                <tr key={`national-${idx}`}>
                                    <td className="text-left font-sans fee-category">{fee.category}</td>
                                    <td className="text-left text-accent fee-val">{fee.earlyBird}</td>
                                    <td className="text-left fee-val">{fee.afterDue}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3" className="table-subheader">International</td>
                            </tr>
                            {feesData.international.map((fee, idx) => (
                                <tr key={idx}>
                                    <td className="text-left font-sans fee-category">{fee.category}</td>
                                    <td className="text-left fee-val">{fee.earlyBird}</td>
                                    <td className="text-left fee-val">{fee.afterDue || ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="registration-action" style={{ marginTop: '3rem' }}>
                    <button
                        className="btn"
                        onClick={() => setShowFeeCard((prev) => !prev)}
                        type="button"
                    >
                        {showFeeCard ? 'Hide Fee Details' : 'Pay Now'}
                    </button>
                </div>

                {showFeeCard && (
                    <div className="fees-hover-widget" role="complementary" aria-label="Payment fee details card">
                        <div className="fees-hover-card fees-hover-card-open">
                            <div className="fees-card-head">
                                <h4>Payment Details</h4>
                                <button
                                    className="fees-card-close"
                                    onClick={() => setShowFeeCard(false)}
                                    type="button"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="fees-hover-row">
                                <span>Bank</span>
                                <strong>{paymentDetails.bankName}</strong>
                            </div>
                            <div className="fees-hover-row">
                                <span>A/C</span>
                                <strong>{paymentDetails.accountNo}</strong>
                            </div>
                            <div className="fees-hover-row">
                                <span>IFSC</span>
                                <strong>{paymentDetails.ifsc}</strong>
                            </div>
                            <div className="fees-hover-row">
                                <span>SWIFT</span>
                                <strong>{paymentDetails.swift}</strong>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Registration;
