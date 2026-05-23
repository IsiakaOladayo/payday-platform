import React, { useState } from 'react';
import './PaydaySwift.css';

const PaydaySwift = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('Chidi Okonkwo');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendMoney = () => {
    if (amount && amount > 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setAmount('');
    }
  };

  const beneficiaries = [
    { name: 'Chidi Okonkwo', avatar: 'CO', account: '0123456789', bank: 'GTBank' },
    { name: 'Ngozi Adeyemi', avatar: 'NA', account: '9876543210', bank: 'First Bank' },
    { name: 'Oluwaseun Balogun', avatar: 'OB', account: '4567891230', bank: 'UBA' },
    { name: 'Fatima Bello', avatar: 'FB', account: '7891234560', bank: 'Access Bank' }
  ];

  return (
    <div className="payday-container">
      <div className="bg-pattern"></div>
      
      <div className="payday-dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <span>Payday<span className="swift">Swift</span></span>
            <span className="ng-badge">NG</span>
          </div>
          
          <nav className="nav-menu">
            <a href="#" className="nav-item active">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-7H9v7H5a2 2 0 0 1-2-2z"/>
              </svg>
              Dashboard
            </a>
            <a href="#" className="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              Transfer
            </a>
            <a href="#" className="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              Transactions
            </a>
            <a href="#" className="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Profile
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <div className="header">
            <div className="greeting">
              <h1>Salut, <span className="highlight">Chimamanda</span> 🇳🇬</h1>
              <p>Your financial hub in Nigeria</p>
            </div>
            <div className="header-actions">
              <button className="icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </button>
              <div className="avatar">C</div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="balance-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <span className="card-label">Total Balance</span>
                <span className="naira-chip">₦</span>
              </div>
              <div className="balance-amount">₦2,548,000</div>
              <div className="card-number">••••  ••••  ••••  2560</div>
              <div className="card-footer">
                <div>
                  <div className="card-label">Valid Thru</div>
                  <div className="card-value">12/28</div>
                </div>
                <div>
                  <div className="card-label">Card Holder</div>
                  <div className="card-value">Chimamanda Okafor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button className="action-btn">
              <div className="action-icon">⬆️</div>
              <span>Send</span>
            </button>
            <button className="action-btn">
              <div className="action-icon">⬇️</div>
              <span>Request</span>
            </button>
            <button className="action-btn">
              <div className="action-icon">📱</div>
              <span>Scan & Pay</span>
            </button>
            <button className="action-btn">
              <div className="action-icon">💳</div>
              <span>Top Up</span>
            </button>
          </div>

          {/* Send Money Section */}
          <div className="send-section">
            <div className="section-header">
              <h2>Send Money to Nigeria 🇳🇬</h2>
              <a href="#" className="view-all">Beneficiaries →</a>
            </div>
            
            <div className="send-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Select Recipient</label>
                  <div className="recipient-select">
                    <div className="recipient-avatar">
                      {beneficiaries.find(b => b.name === recipient)?.avatar}
                    </div>
                    <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                      {beneficiaries.map((ben, idx) => (
                        <option key={idx}>{ben.name}</option>
                      ))}
                    </select>
                  </div>
                  {recipient && (
                    <div className="recipient-details">
                      <small>
                        {beneficiaries.find(b => b.name === recipient)?.bank} • 
                        {beneficiaries.find(b => b.name === recipient)?.account}
                      </small>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Amount (₦ Naira)</label>
                  <div className="amount-input">
                    <span className="currency">₦</span>
                    <input 
                      type="number" 
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <button className="send-btn" onClick={handleSendMoney}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Now
                </button>
              </div>
              {showSuccess && (
                <div className="success-message">
                  ✅ Payment sent successfully to {recipient}!
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Portfolio Growth</span>
                <span className="stat-trend up">↑ 16.7%</span>
              </div>
              <div className="stat-value">₦425,000</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '67%' }}></div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Monthly Expense</span>
                <span className="stat-trend down">↓ 28.2%</span>
              </div>
              <div className="stat-value">₦82,400</div>
              <div className="progress-bar">
                <div className="progress-fill expense" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Active Loans</span>
                <span className="stat-trend stable">→ 55.1%</span>
              </div>
              <div className="stat-value">₦1,423,000</div>
              <div className="progress-bar">
                <div className="progress-fill loan" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="transactions-section">
            <div className="section-header">
              <h2>Recent Transactions (Nigeria)</h2>
              <a href="#" className="view-all">View All →</a>
            </div>
            
            <div className="transactions-list">
              <div className="transaction-item">
                <div className="transaction-icon send">↑</div>
                <div className="transaction-details">
                  <div className="transaction-name">Chidi Okonkwo</div>
                  <div className="transaction-type">Bank Transfer - GTBank</div>
                </div>
                <div className="transaction-amount negative">-₦250,000</div>
                <div className="transaction-date">Dec 5, 2024</div>
              </div>
              
              <div className="transaction-item">
                <div className="transaction-icon receive">↓</div>
                <div className="transaction-details">
                  <div className="transaction-name">Salary - MTN Nigeria</div>
                  <div className="transaction-type">Direct Deposit</div>
                </div>
                <div className="transaction-amount positive">+₦1,240,000</div>
                <div className="transaction-date">Dec 1, 2024</div>
              </div>
              
              <div className="transaction-item">
                <div className="transaction-icon send">↑</div>
                <div className="transaction-details">
                  <div className="transaction-name">Ngozi Adeyemi</div>
                  <div className="transaction-type">Airtime & Data</div>
                </div>
                <div className="transaction-amount negative">-₦89,990</div>
                <div className="transaction-date">Nov 28, 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Profile */}
        <div className="right-sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">C</div>
              <h3>Chimamanda Okafor</h3>
              <p className="profile-email">chimamanda@payday.ng</p>
              <p className="profile-phone">+234 812 345 6789</p>
              <p className="profile-address">Lagos, Nigeria</p>
            </div>
            
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="stat-value">24</div>
                <div className="stat-label">Transactions</div>
              </div>
              <div className="profile-stat">
                <div className="stat-value">6</div>
                <div className="stat-label">Beneficiaries</div>
              </div>
              <div className="profile-stat">
                <div className="stat-value">⭐ 4.9</div>
                <div className="stat-label">Rating</div>
              </div>
            </div>
            
            <button className="upgrade-btn">Upgrade to Premium 🇳🇬</button>
            <div className="support-badge">
              <small>🇳🇬 NIBSS Licensed • NDIC Insured</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaydaySwift;
