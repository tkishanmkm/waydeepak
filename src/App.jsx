import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ShieldCheck,
  Search,
  MessageSquare,
  Wallet,
  PlusCircle,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Send,
  Copy,
  Lock,
  Sparkles,
  RefreshCw,
  ArrowUpRight,
  ArrowDownLeft,
  Award,
  Globe,
  CreditCard,
  Gift,
  X,
  UserCheck,
  Zap,
  Users,
  QrCode,
  Upload,
  KeyRound,
  ThumbsUp,
  BadgeCheck,
  Coins,
  Share2,
  ShieldAlert,
  Crown,
  Sliders,
  Gavel,
  Ban,
  Eye,
  Check,
  DollarSign,
  Activity
} from 'lucide-react';

// ==========================================
// CUSTOM BRANDING: WAYONES GEOMETRIC LOGO
// Recreated from user's uploaded purple W & WAYONES typography
// ==========================================
const WayonesIcon = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 120 95" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wayonesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9E7BFF" />
        <stop offset="50%" stopColor="#8D68F6" />
        <stop offset="100%" stopColor="#5B24E5" />
      </linearGradient>
    </defs>
    {/* Left Outer Wing */}
    <path
      d="M6 12 H24 C27 12 29.5 13.5 31 16 L50 47 C51.2 49 51.2 51.5 49.8 53.5 L40.5 67.5 L6 12 Z"
      fill="url(#wayonesGrad)"
    />
    {/* Right Outer Wing */}
    <path
      d="M114 12 H96 C93 12 90.5 13.5 89 16 L70 47 C68.8 49 68.8 51.5 70.2 53.5 L79.5 67.5 L114 12 Z"
      fill="url(#wayonesGrad)"
    />
    {/* Center Geometric Hourglass / W Core */}
    <path
      d="M46 35 H74 C76 35 77 37 75.8 38.6 L67.5 50.5 C66 52.8 66 55.5 67.8 58 L81 77 L69.5 91 C68.3 92.5 66.2 92.5 65 90.8 L60 83 L55 90.8 C53.8 92.5 51.7 92.5 50.5 91 L39 77 L52.2 58 C54 55.5 54 52.8 52.5 50.5 L44.2 38.6 C43 37 44 35 46 35 Z"
      fill="url(#wayonesGrad)"
    />
  </svg>
);

const WayonesFullLogo = ({ compactOnMobile = true }) => (
  <div className="flex items-center gap-2.5 select-none group cursor-pointer">
    <div className="relative flex items-center justify-center">
      <div className="absolute -inset-1 bg-[#8D68F6]/25 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
      <WayonesIcon className="w-9 h-9 sm:w-10 sm:h-10 relative z-10 transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className={`${compactOnMobile ? 'hidden sm:flex' : 'flex'} items-center`}>
      <svg viewBox="0 0 330 48" className="h-6 sm:h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9B75FF" />
            <stop offset="50%" stopColor="#8D68F6" />
            <stop offset="100%" stopColor="#7248E8" />
          </linearGradient>
        </defs>
        <path d="M22 6 L34 6 L56 42 L43 42 L28 16 L13 42 L0 42 L22 6 Z" fill="url(#textGrad)" />
        <path d="M58 6 L72 6 L86 22 L100 6 L114 6 L92 30 L92 42 L80 42 L80 30 L58 6 Z" fill="url(#textGrad)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M128 6 H158 C165 6 170 11 170 18 V30 C170 37 165 42 158 42 H128 C121 42 116 37 116 30 V18 C116 11 121 6 128 6 Z M130 14 H156 C158.5 14 160 15.5 160 18 V30 C160 32.5 158.5 34 156 34 H130 C127.5 34 126 32.5 126 30 V18 C126 15.5 127.5 14 130 14 Z" fill="url(#textGrad)" />
        <path d="M180 6 H192 L216 30 V6 H226 V42 H214 L190 18 V42 H180 V6 Z" fill="url(#textGrad)" />
        <path d="M238 6 H282 L276 14 H238 V6 Z M238 20 H275 L269 28 H238 V20 Z M238 34 H282 L276 42 H238 V34 Z" fill="url(#textGrad)" />
        <path d="M294 6 H330 L324 14 H296 C293 14 292 15.5 292 17 C292 18.5 293 20 296 20 H320 C326 20 330 24 330 31 C330 37.5 325 42 318 42 H286 L292 34 H316 C319 34 320 32.5 320 31 C320 29.5 319 28 316 28 H294 C287 28 283 24 283 17 C283 10.5 288 6 294 6 Z" fill="url(#textGrad)" />
      </svg>
    </div>
  </div>
);

// ==========================================
// CRYPTO ASSET ICONS & MARKET CONSTANTS
// ==========================================
const CryptoBadge = ({ asset, size = "md" }) => {
  const sizes = {
    sm: "w-5 h-5 text-[10px]",
    md: "w-7 h-7 text-xs",
    lg: "w-9 h-9 text-sm"
  };

  if (asset === 'BTC') {
    return (
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-white shadow-sm shadow-orange-500/30 shrink-0`}>
        ₿
      </div>
    );
  }
  if (asset === 'ETH') {
    return (
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-sm shadow-indigo-500/30 shrink-0`}>
        Ξ
      </div>
    );
  }
  if (asset === 'USDC') {
    return (
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-sm shadow-sky-500/30 shrink-0`}>
        $
      </div>
    );
  }
  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-white shadow-sm shadow-emerald-500/30 shrink-0`}>
      ₮
    </div>
  );
};

const MARKET_PRICES_USD = {
  USDT: 1.00,
  USDC: 1.00,
  BTC: 89420.50,
  ETH: 3180.75
};

const FIAT_RATES = {
  INR: { symbol: '₹', rate: 86.80, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 1.00, label: 'USD ($)' },
  NGN: { symbol: '₦', rate: 1590.00, label: 'NGN (₦)' },
  AED: { symbol: 'د.إ', rate: 3.67, label: 'AED (د.إ)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' }
};

const SPARKLINE_DATA = {
  BTC: [86200, 87100, 86800, 87950, 88400, 87900, 88900, 89150, 88700, 89420],
  ETH: [3010, 3045, 3020, 3090, 3110, 3085, 3140, 3165, 3150, 3180],
  USDT: [0.999, 1.001, 1.000, 1.002, 1.001, 0.999, 1.000, 1.001, 1.000, 1.000],
  USDC: [1.000, 1.000, 0.999, 1.001, 1.000, 1.000, 1.001, 1.000, 1.000, 1.000]
};

const NETWORK_CONFIGS = {
  USDT: [
    { id: 'TRC20', name: 'Tron (TRC20)', fee: '1.00 USDT', arrival: '~1 min', address: 'DEMO ONLY - NO DEPOSITS' },
    { id: 'BEP20', name: 'BNB Smart Chain (BEP20)', fee: '0.30 USDT', arrival: '~1 min', address: 'DEMO ONLY - NO DEPOSITS' },
    { id: 'ERC20', name: 'Ethereum (ERC20)', fee: '4.50 USDT', arrival: '~3 mins', address: 'DEMO ONLY - NO DEPOSITS' }
  ],
  BTC: [
    { id: 'BTC', name: 'Bitcoin Mainnet', fee: '0.00005 BTC', arrival: '~10 mins', address: 'DEMO ONLY - NO DEPOSITS' },
    { id: 'LIGHTNING', name: 'BTC Lightning Network', fee: '0.000001 BTC', arrival: 'Instant (3 sec)', address: 'DEMO ONLY - NO DEPOSITS' }
  ],
  USDC: [
    { id: 'POLYGON', name: 'Polygon POS', fee: '0.10 USDC', arrival: '~30 sec', address: 'DEMO ONLY - NO DEPOSITS' },
    { id: 'SOL', name: 'Solana Network', fee: '0.15 USDC', arrival: '~15 sec', address: 'DEMO ONLY - NO DEPOSITS' }
  ],
  ETH: [
    { id: 'ERC20', name: 'Ethereum Mainnet', fee: '0.0012 ETH', arrival: '~2 mins', address: 'DEMO ONLY - NO DEPOSITS' },
    { id: 'ARBITRUM', name: 'Arbitrum One', fee: '0.0001 ETH', arrival: '~20 sec', address: 'DEMO ONLY - NO DEPOSITS' }
  ]
};

const INITIAL_ADMIN_KYC_QUEUE = [
  {
    id: 'kyc-501',
    username: 'rahul_trader_mumbai',
    fullName: 'Rahul Sharma',
    docType: 'PAN Card + Aadhaar XML',
    docNumber: 'ABCDE1234F',
    submittedAt: '12 mins ago',
    status: 'PENDING',
    walletUsdt: 420.00,
    frozen: false
  },
  {
    id: 'kyc-502',
    username: 'priya_otc_delhi',
    fullName: 'Priya Verma',
    docType: 'Video KYC + Passport',
    docNumber: 'Z8849201',
    submittedAt: '35 mins ago',
    status: 'PENDING',
    walletUsdt: 3150.00,
    frozen: false
  },
  {
    id: 'kyc-503',
    username: 'lagos_crypto_king',
    fullName: 'Chinedu Okafor',
    docType: 'National ID Card',
    docNumber: 'NG-9938120',
    submittedAt: '1 hour ago',
    status: 'APPROVED',
    walletUsdt: 1890.00,
    frozen: false
  }
];

const INITIAL_ADMIN_WITHDRAWALS = [
  {
    id: 'wd-801',
    username: 'satoshi_vault_in',
    asset: 'USDT',
    amount: 1250.00,
    network: 'TRC20',
    address: 'TWy9Ks8UserExternalWallet99xLp2',
    status: 'PENDING',
    time: '5 mins ago'
  },
  {
    id: 'wd-802',
    username: 'apex_liquidity',
    asset: 'BTC',
    amount: 0.085,
    network: 'LIGHTNING',
    address: 'lnbc1userinstantwithdraw99x',
    status: 'PENDING',
    time: '18 mins ago'
  }
];

const INITIAL_OFFERS = [
  { id: 'demo-offer-1', trader: 'demo_seller_01', avatar: 'DS', avatarBg: 'from-violet-500 to-indigo-600', verified: true, online: true, rating: 4.9, likes: 120, trades: 86, completion: '98%', speed: '5 mins', type: 'buy', asset: 'USDT', usdPrice: 1, margin: '+1.0%', minUsd: 15, maxUsd: 500, category: 'UPI', paymentMethods: ['UPI (PhonePe / GPay / Paytm)'], terms: 'Demo listing only. No real trade or payment is processed.' },
  { id: 'demo-offer-2', trader: 'demo_buyer_02', avatar: 'DB', avatarBg: 'from-sky-500 to-cyan-600', verified: true, online: true, rating: 4.8, likes: 92, trades: 54, completion: '97%', speed: '8 mins', type: 'sell', asset: 'USDT', usdPrice: 1, margin: '-0.5%', minUsd: 25, maxUsd: 750, category: 'Bank', paymentMethods: ['IMPS / Bank Transfer'], terms: 'Demo listing only. No real trade or payment is processed.' },
  { id: 'demo-offer-3', trader: 'demo_crypto_03', avatar: 'DC', avatarBg: 'from-emerald-500 to-teal-600', verified: true, online: false, rating: 4.7, likes: 64, trades: 41, completion: '96%', speed: '10 mins', type: 'buy', asset: 'BTC', usdPrice: 89420.5, margin: '+0.8%', minUsd: 50, maxUsd: 1000, category: 'Wallets', paymentMethods: ['PayPal / Skrill Wallet'], terms: 'Demo listing only. No real trade or payment is processed.' }
];
const INITIAL_MESSENGER_THREADS = [
  { id: 'chat-1', username: 'demo_trader_01', role: 'Demo trader', avatar: 'DT', avatarBg: 'from-violet-500 to-indigo-600', messages: [{ id: 'demo-msg-1', sender: 'them', text: 'Welcome to the WAYONES demo. No real payments are supported.', time: 'Just now' }] },
  { id: 'chat-2', username: 'demo_support', role: 'Demo support', avatar: 'DS', avatarBg: 'from-sky-500 to-cyan-600', messages: [{ id: 'demo-msg-2', sender: 'them', text: 'This is a frontend prototype.', time: 'Just now' }] }
];
export default function App() {
  // Primary Navigation:
  // 'marketplace' | 'gift-cards' | 'active-trades' | 'messenger' | 'wallet' | 'account-hub' | 'admin-panel'
  const [activeNav, setActiveNav] = useState('marketplace');

  // Super Admin Panel State
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminSubTab, setAdminSubTab] = useState('disputes'); // 'disputes' | 'kyc-users' | 'withdrawals' | 'settings'
  const [adminFees, setAdminFees] = useState({
    p2pEscrowFee: 1.0,
    giftCardFee: 2.5,
    withdrawalFeeUsdt: 1.0,
    maintenanceMode: false
  });
  const [adminKycList, setAdminKycList] = useState(INITIAL_ADMIN_KYC_QUEUE);
  const [adminWithdrawals, setAdminWithdrawals] = useState(INITIAL_ADMIN_WITHDRAWALS);
  const [adminChatMsg, setAdminChatMsg] = useState('');

  // Marketplace Filters
  const [tradeSide, setTradeSide] = useState('buy');
  const [selectedAsset, setSelectedAsset] = useState('ALL');
  const [fiat, setFiat] = useState('INR');
  const [paymentCategory, setPaymentCategory] = useState('All');
  const [amountFilter, setAmountFilter] = useState('');
  const [searchTrader, setSearchTrader] = useState('');

  // Multi-Chain Wallet Balances
  const [balances, setBalances] = useState({
    USDT: 1850.00,
    BTC: 0.0485,
    USDC: 620.00,
    ETH: 0.7500
  });

  // Right Sidebar Chart & Quick Swap State
  const [chartAsset, setChartAsset] = useState('BTC');
  const [swapFrom, setSwapFrom] = useState('USDT');
  const [swapTo, setSwapTo] = useState('BTC');
  const [swapAmount, setSwapAmount] = useState('250');
  const [toast, setToast] = useState(null);

  // Share App Modal State
  const [showShareModal, setShowShareModal] = useState(false);

  // Offers & Active Escrow Trades
  const [offers, setOffers] = useState(INITIAL_OFFERS);
  const [selectedOfferForModal, setSelectedOfferForModal] = useState(null);
  const [tradeInputFiat, setTradeInputFiat] = useState('');
  const [activeTrades, setActiveTrades] = useState([
    {
      id: 'WYN-774920',
      offer: INITIAL_OFFERS[0],
      side: 'buy',
      asset: 'USDT',
      fiatCurrency: 'INR',
      fiatSymbol: '₹',
      fiatAmount: 25000,
      usdAmount: 288.01,
      cryptoAmount: 284.59,
      status: 'DISPUTED',
      remainingSeconds: 1420,
      utrNumber: 'UTR412988736192',
      receiptAttached: true,
      createdAt: '10:30 AM',
      messages: [
        {
          id: 'm-101',
          sender: 'system',
          text: 'STEP 1 COMPLETE — ESCROW LOCKED: 284.59 USDT is locked in WAYONES Multi-Sig Escrow.',
          time: '10:30 AM'
        },
        {
          id: 'm-102',
          sender: 'user',
          text: 'Paid ₹25,000 via PhonePe UPI! UTR: UTR412988736192. Screenshot attached.',
          time: '10:33 AM'
        },
        {
          id: 'm-103',
          sender: 'moderator',
          text: 'ðŸ›¡ï¸ DISPUTE OPENED: Waiting for WAYONES Super Admin judgment to release or refund Escrow.',
          time: '10:36 AM'
        }
      ]
    }
  ]);
  const [currentTradeId, setCurrentTradeId] = useState('WYN-774920');
  const [chatInput, setChatInput] = useState('');
  const [utrInput, setUtrInput] = useState('');
  const [giftCardCodeInput, setGiftCardCodeInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [showPinConfirm, setShowPinConfirm] = useState(false);

  // Gift Card Hub State
  const [cardCheckerInput, setCardCheckerInput] = useState('');
  const [cardCheckResult, setCardCheckResult] = useState(null);

  // Create Offer Modal State
  const [showCreateOfferModal, setShowCreateOfferModal] = useState(false);
  const [newOffer, setNewOffer] = useState({
    type: 'buy',
    asset: 'USDT',
    margin: '1.1',
    minUsd: '15',
    maxUsd: '2000',
    category: 'UPI',
    paymentMethod: 'UPI (PhonePe / GPay / Paytm)',
    terms: 'Fast & secure trade on WAYONES Escrow. Please stay online after opening trade.'
  });

  // Wallet Modals: { mode: 'deposit' | 'withdraw' | 'p2p-transfer', asset: 'USDT' }
  const [walletModal, setWalletModal] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState('TRC20');
  const [walletActionAmount, setWalletActionAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [p2pRecipient, setP2pRecipient] = useState('');

  // Financial Messenger State
  const [threads, setThreads] = useState(INITIAL_MESSENGER_THREADS);
  const [activeThreadId, setActiveThreadId] = useState('chat-1');
  const [messengerInput, setMessengerInput] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [showTipBox, setShowTipBox] = useState(false);

  // Account, KYC, Affiliate & Saved Payment Methods State
  const [kycLevels, setKycLevels] = useState({
    level1: true,
    level2: true,
    level3: false
  });
  const [savedPayments, setSavedPayments] = useState([
    { id: 'pm-1', type: 'UPI ID', label: 'deepak.wayones@okaxis', holder: 'Deepak Kumar', verified: true },
    { id: 'pm-2', type: 'IMPS Bank', label: 'HDFC Bank •••• 4821 (IFSC: HDFC00012)', holder: 'Deepak Kumar', verified: true }
  ]);
  const [newPaymentLabel, setNewPaymentLabel] = useState('');
  const [newPaymentType, setNewPaymentType] = useState('UPI ID');
  const [affiliateStats, setAffiliateStats] = useState({
    invitedCount: 28,
    unclaimedUsdt: 64.50,
    totalEarnedUsdt: 412.80,
    referralCode: 'WAYONES-DEEPAK2026'
  });

  // Transaction History
  const [transactions, setTransactions] = useState([
    {
      id: 'tx-901',
      title: 'P2P Buy USDT',
      counterparty: '@arjun_crypto_king',
      asset: 'USDT',
      amount: '+450.00 USDT',
      usdValue: '$450.00',
      status: 'Completed',
      time: '2 hours ago',
      positive: true
    },
    {
      id: 'tx-902',
      title: 'Steam Gift Card Trade',
      counterparty: '@steam_king_otc',
      asset: 'USDT',
      amount: '+100.00 USDT',
      usdValue: '$78.00 Paid',
      status: 'Completed',
      time: 'Yesterday',
      positive: true
    },
    {
      id: 'tx-903',
      title: 'Quick Swap BTC → ETH',
      counterparty: 'WAYONES Instant Pool',
      asset: 'ETH',
      amount: '+0.1500 ETH',
      usdValue: '$477.11',
      status: 'Completed',
      time: '2 days ago',
      positive: true
    }
  ]);

  const chatEndRef = useRef(null);

  const showNotification = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3800);
  };

  // Escrow Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrades((prev) =>
        prev.map((tr) => {
          if (tr.status === 'COMPLETED' || tr.status === 'CANCELLED') return tr;
          return {
            ...tr,
            remainingSeconds: Math.max(0, tr.remainingSeconds - 1)
          };
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeTradeObj = useMemo(
    () => activeTrades.find((t) => t.id === currentTradeId) || activeTrades[0] || null,
    [activeTrades, currentTradeId]
  );

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTradeObj?.messages?.length]);

  const formatFiat = (usdAmount, targetFiat = fiat) => {
    const info = FIAT_RATES[targetFiat];
    const converted = usdAmount * info.rate;
    return `${info.symbol}${converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const totalPortfolioUsd = useMemo(() => {
    return Object.keys(balances).reduce(
      (sum, key) => sum + balances[key] * (MARKET_PRICES_USD[key] || 1),
      0
    );
  }, [balances]);

  const filteredOffers = useMemo(() => {
    return offers.filter((offer) => {
      if (offer.type !== tradeSide) return false;
      if (selectedAsset !== 'ALL' && offer.asset !== selectedAsset) return false;
      if (paymentCategory !== 'All') {
        const matchCat =
          offer.category === paymentCategory ||
          offer.paymentMethods.some((pm) =>
            pm.toLowerCase().includes(paymentCategory.toLowerCase())
          );
        if (!matchCat) return false;
      }
      if (amountFilter && !isNaN(parseFloat(amountFilter))) {
        const inputInUsd = parseFloat(amountFilter) / FIAT_RATES[fiat].rate;
        if (inputInUsd < offer.minUsd || inputInUsd > offer.maxUsd) return false;
      }
      if (searchTrader.trim() !== '') {
        if (!offer.trader.toLowerCase().includes(searchTrader.toLowerCase())) return false;
      }
      return true;
    });
  }, [offers, tradeSide, selectedAsset, paymentCategory, amountFilter, fiat, searchTrader]);

  const swapOutput = useMemo(() => {
    const amt = parseFloat(swapAmount);
    if (!amt || amt <= 0) return 0;
    const fromUsd = amt * MARKET_PRICES_USD[swapFrom];
    return (fromUsd * 0.999) / MARKET_PRICES_USD[swapTo];
  }, [swapAmount, swapFrom, swapTo]);

  // ==========================================
  // CORE HANDLERS: ESCROW, GIFT CARDS, WALLET & MESSENGER
  // ==========================================
  const handleOpenTradeModal = (offer) => {
    setSelectedOfferForModal(offer);
    const defaultUsd = Math.max(offer.minUsd, Math.min(100, offer.maxUsd));
    const defaultFiatVal = Math.round(defaultUsd * FIAT_RATES[fiat].rate);
    setTradeInputFiat(String(defaultFiatVal));
  };

  const handleOpenGiftCardTrade = (deal) => {
    const syntheticOffer = {
      id: deal.id,
      trader: deal.trader,
      avatar: deal.brand.slice(0, 2).toUpperCase(),
      avatarBg: 'from-pink-500 to-purple-600',
      verified: true,
      online: true,
      rating: deal.rating,
      trades: deal.trades,
      completion: '99.4%',
      speed: '3 mins',
      type: 'buy',
      asset: deal.asset,
      usdPrice: deal.usdPrice,
      margin: deal.discount,
      minUsd: deal.minUsd,
      maxUsd: deal.maxUsd,
      category: 'Gift Cards',
      isGiftCardDeal: true,
      giftCardBrand: deal.brand,
      paymentMethods: [deal.brand],
      terms: `Instant Gift Card Escrow! Enter your ${deal.brand} PIN/claim code or upload receipt in the trade room.`
    };
    handleOpenTradeModal(syntheticOffer);
  };

  const handleStartEscrowTrade = (e) => {
    e.preventDefault();
    if (!selectedOfferForModal) return;

    const fiatValue = parseFloat(tradeInputFiat);
    if (!fiatValue || fiatValue <= 0) return;

    const usdEquivalent = fiatValue / FIAT_RATES[fiat].rate;
    const cryptoAmount = usdEquivalent / selectedOfferForModal.usdPrice;

    if (selectedOfferForModal.type === 'sell') {
      if (balances[selectedOfferForModal.asset] < cryptoAmount) {
        showNotification(`Insufficient ${selectedOfferForModal.asset} balance in your WAYONES Wallet.`, 'error');
        return;
      }
      setBalances((prev) => ({
        ...prev,
        [selectedOfferForModal.asset]: prev[selectedOfferForModal.asset] - cryptoAmount
      }));
    }

    const newTrade = {
      id: `WYN-${Math.floor(100000 + Math.random() * 900000)}`,
      offer: selectedOfferForModal,
      side: selectedOfferForModal.type,
      asset: selectedOfferForModal.asset,
      fiatCurrency: fiat,
      fiatSymbol: FIAT_RATES[fiat].symbol,
      fiatAmount: fiatValue,
      usdAmount: usdEquivalent,
      cryptoAmount: cryptoAmount,
      status: 'AWAITING_PAYMENT', // Step 1
      remainingSeconds: 1800,
      utrNumber: '',
      receiptAttached: false,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      messages: [
        {
          id: 'm-1',
          sender: 'system',
          text: `STEP 1 COMPLETE — ESCROW LOCKED: ${cryptoAmount.toFixed(
            selectedOfferForModal.asset === 'USDT' || selectedOfferForModal.asset === 'USDC' ? 2 : 5
          )} ${selectedOfferForModal.asset} is now locked in WAYONES Multi-Sig Escrow.`,
          time: 'Just now'
        },
        {
          id: 'm-2',
          sender: 'counterparty',
          text: selectedOfferForModal.isGiftCardDeal
            ? `Welcome! Please enter your ${selectedOfferForModal.giftCardBrand} claim code or upload the physical card photo to unlock your ${selectedOfferForModal.asset}.`
            : selectedOfferForModal.type === 'buy'
            ? `Hello! Please send ${FIAT_RATES[fiat].symbol}${fiatValue.toLocaleString()} via ${selectedOfferForModal.paymentMethods[0]} and click "I Have Paid".`
            : `Hi! Your ${selectedOfferForModal.asset} is safely in Escrow. Sending ${FIAT_RATES[fiat].symbol}${fiatValue.toLocaleString()} to your saved UPI/Bank account now!`,
          time: 'Just now'
        }
      ]
    };

    setActiveTrades((prev) => [newTrade, ...prev]);
    setCurrentTradeId(newTrade.id);
    setSelectedOfferForModal(null);
    setActiveNav('active-trades');
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !activeTradeObj) return;

    const userMsg = {
      id: `m-${Date.now()}`,
      sender: 'user',
      text: chatInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === activeTradeObj.id ? { ...tr, messages: [...tr.messages, userMsg] } : tr
      )
    );
    setChatInput('');

    setTimeout(() => {
      const replyMsg = {
        id: `m-${Date.now() + 1}`,
        sender: 'counterparty',
        text:
          activeTradeObj.status === 'AWAITING_PAYMENT'
            ? 'Received your message! Standing by for payment proof / code verification.'
            : 'Verified! Releasing crypto from WAYONES Escrow right now.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setActiveTrades((prev) =>
        prev.map((tr) =>
          tr.id === activeTradeObj.id ? { ...tr, messages: [...tr.messages, replyMsg] } : tr
        )
      );
    }, 900);
  };

  const handleSimulateReceiptUpload = () => {
    if (!activeTradeObj) return;
    const uploadMsg = {
      id: `m-${Date.now()}`,
      sender: 'user',
      text: `ðŸ“Ž [Uploaded Screenshot: payment_receipt_${activeTradeObj.id}.png — Verified by WAYONES OCR]`,
      time: 'Just now'
    };
    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === activeTradeObj.id
          ? { ...tr, receiptAttached: true, messages: [...tr.messages, uploadMsg] }
          : tr
      )
    );
    showNotification('Payment screenshot attached to Escrow Chat!');
  };

  const handleMarkPaymentSent = () => {
    if (!activeTradeObj) return;
    const isGC = activeTradeObj.offer.isGiftCardDeal;
    const refCode = isGC
      ? giftCardCodeInput.trim() || `XXXX-9842-WAYN-${Math.floor(1000 + Math.random() * 9000)}`
      : utrInput.trim() || `UTR${Math.floor(100000000000 + Math.random() * 899999999999)}`;

    const sysMsg = {
      id: `m-${Date.now()}`,
      sender: 'system',
      text: isGC
        ? `STEP 2 COMPLETE — GIFT CARD SUBMITTED: Claim Code (${refCode}) locked for merchant verification.`
        : `STEP 2 COMPLETE — PAYMENT MARKED: Reference (${refCode}) logged. Waiting for Escrow Release.`,
      time: 'Just now'
    };

    const traderReply = {
      id: `m-${Date.now() + 2}`,
      sender: 'counterparty',
      text: isGC
        ? `Gift card code ${refCode} verified valid! Releasing your ${activeTradeObj.asset} from escrow.`
        : `UTR ${refCode} confirmed in my bank! Ready to release ${activeTradeObj.asset}.`,
      time: 'Just now'
    };

    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === activeTradeObj.id
          ? {
              ...tr,
              status: 'PAYMENT_MARKED', // Step 2
              utrNumber: refCode,
              messages: [...tr.messages, sysMsg, traderReply]
            }
          : tr
      )
    );
    setUtrInput('');
    setGiftCardCodeInput('');
  };

  const handleCompleteEscrowRelease = () => {
    if (!activeTradeObj || activeTradeObj.status === 'COMPLETED') return;

    if (activeTradeObj.side === 'buy') {
      setBalances((prev) => ({
        ...prev,
        [activeTradeObj.asset]: prev[activeTradeObj.asset] + activeTradeObj.cryptoAmount
      }));
    }

    const decimals = activeTradeObj.asset === 'USDT' || activeTradeObj.asset === 'USDC' ? 2 : 5;
    const formattedCrypto = `${activeTradeObj.side === 'buy' ? '+' : '-'}${activeTradeObj.cryptoAmount.toFixed(
      decimals
    )} ${activeTradeObj.asset}`;

    setTransactions((prev) => [
      {
        id: activeTradeObj.id,
        title: activeTradeObj.offer.isGiftCardDeal
          ? `${activeTradeObj.offer.giftCardBrand} Swap`
          : `P2P ${activeTradeObj.side === 'buy' ? 'Buy' : 'Sell'} ${activeTradeObj.asset}`,
        counterparty: `@${activeTradeObj.offer.trader}`,
        asset: activeTradeObj.asset,
        amount: formattedCrypto,
        usdValue: `$${activeTradeObj.usdAmount.toFixed(2)}`,
        status: 'Completed',
        time: 'Just now',
        positive: activeTradeObj.side === 'buy'
      },
      ...prev
    ]);

    const releaseMsg = {
      id: `m-${Date.now()}`,
      sender: 'system',
      text: `STEP 3 COMPLETE — ESCROW RELEASED! ${activeTradeObj.cryptoAmount.toFixed(
        decimals
      )} ${activeTradeObj.asset} has been settled into your WAYONES Wallet.`,
      time: 'Just now'
    };

    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === activeTradeObj.id
          ? { ...tr, status: 'COMPLETED', messages: [...tr.messages, releaseMsg] }
          : tr
      )
    );
    setShowPinConfirm(false);
    setPinInput('');
    showNotification(`Escrow Released! ${formattedCrypto} credited to your WAYONES Wallet.`);
  };

  const handleRaiseDispute = () => {
    if (!activeTradeObj) return;
    const disputeMsg = {
      id: `m-${Date.now()}`,
      sender: 'moderator',
      text: `ðŸ›¡ï¸ WAYONES ESCROW MODERATOR (@mod_priya) JOINED: Escrow timer is frozen. Funds remain 100% safe in vault. I am reviewing the attached UTR/Card proof now.`,
      time: 'Just now'
    };
    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === activeTradeObj.id
          ? { ...tr, status: 'DISPUTED', messages: [...tr.messages, disputeMsg] }
          : tr
      )
    );
    showNotification('WAYONES Dispute Moderator (@mod_priya) has joined the trade chat.', 'error');
  };

  // Gift Card Instant Checker
  const handleCheckGiftCardBalance = (e) => {
    e.preventDefault();
    if (!cardCheckerInput.trim()) return;
    setCardCheckResult({
      code: cardCheckerInput.toUpperCase(),
      status: 'VALID & UNREDEEMED',
      valueUsd: '$100.00 USD',
      instantPayout: '82.00 USDT'
    });
    showNotification('Gift Card code verified ready for Escrow trade!');
  };

  // Quick Swap Execution
  const handleExecuteQuickSwap = (e) => {
    e.preventDefault();
    const amt = parseFloat(swapAmount);
    if (!amt || amt <= 0 || swapFrom === swapTo) return;

    if (balances[swapFrom] < amt) {
      showNotification(`Insufficient ${swapFrom} balance for Quick Swap.`, 'error');
      return;
    }

    const decimals = swapTo === 'USDT' || swapTo === 'USDC' ? 2 : 5;
    setBalances((prev) => ({
      ...prev,
      [swapFrom]: prev[swapFrom] - amt,
      [swapTo]: prev[swapTo] + swapOutput
    }));

    setTransactions((prev) => [
      {
        id: `swp-${Date.now()}`,
        title: `Instant Convert ${swapFrom} → ${swapTo}`,
        counterparty: 'WAYONES Zero-Fee Pool',
        asset: swapTo,
        amount: `+${swapOutput.toFixed(decimals)} ${swapTo}`,
        usdValue: `$${(amt * MARKET_PRICES_USD[swapFrom]).toFixed(2)}`,
        status: 'Completed',
        time: 'Just now',
        positive: true
      },
      ...prev
    ]);

    showNotification(`Converted ${amt} ${swapFrom} to ${swapOutput.toFixed(decimals)} ${swapTo} (0% Fee)!`);
  };

  // Publish New Offer
  const handleCreateOffer = (e) => {
    e.preventDefault();
    const baseUsd = MARKET_PRICES_USD[newOffer.asset];
    const marginNum = parseFloat(newOffer.margin) || 0;
    const calculatedUsdPrice = baseUsd * (1 + marginNum / 100);

    const created = {
      id: `off-${Date.now()}`,
      trader: 'deepak_wayones_pro (You)',
      avatar: 'DW',
      avatarBg: 'from-[#8D68F6] to-indigo-600',
      verified: true,
      online: true,
      rating: 5.0,
      likes: 312,
      trades: 145,
      completion: '100%',
      speed: '2 mins',
      type: newOffer.type,
      asset: newOffer.asset,
      usdPrice: calculatedUsdPrice,
      margin: `${marginNum >= 0 ? '+' : ''}${marginNum}%`,
      minUsd: parseFloat(newOffer.minUsd) || 10,
      maxUsd: parseFloat(newOffer.maxUsd) || 1000,
      category: newOffer.category,
      paymentMethods: [newOffer.paymentMethod],
      terms: newOffer.terms
    };

    setOffers((prev) => [created, ...prev]);
    setTradeSide(newOffer.type);
    setSelectedAsset(newOffer.asset);
    setShowCreateOfferModal(false);
    setActiveNav('marketplace');
    showNotification(`Your ${newOffer.asset} Offer is now LIVE on WAYONES Marketplace!`);
  };

  // Multi-Chain Wallet Deposit / Withdraw / Internal P2P Transfer
  const handleWalletTransaction = (e) => {
    e.preventDefault();
    if (!walletModal) return;
    const val = parseFloat(walletActionAmount);
    if (!val || val <= 0) return;

    const { mode, asset } = walletModal;
    const decimals = asset === 'USDT' || asset === 'USDC' ? 2 : 4;

    if ((mode === 'withdraw' || mode === 'p2p-transfer') && balances[asset] < val) {
      showNotification(`Insufficient ${asset} balance.`, 'error');
      return;
    }

    setBalances((prev) => ({
      ...prev,
      [asset]: mode === 'deposit' ? prev[asset] + val : prev[asset] - val
    }));

    setTransactions((prev) => [
      {
        id: `wal-${Date.now()}`,
        title:
          mode === 'deposit'
            ? `${selectedNetwork} Deposit (${asset})`
            : mode === 'p2p-transfer'
            ? `0% Fee Internal Send (${asset})`
            : `${selectedNetwork} Withdrawal (${asset})`,
        counterparty:
          mode === 'p2p-transfer'
            ? `@${p2pRecipient || 'wayones_peer'}`
            : `${selectedNetwork} Network`,
        asset,
        amount: `${mode === 'deposit' ? '+' : '-'}${val.toFixed(decimals)} ${asset}`,
        usdValue: `$${(val * MARKET_PRICES_USD[asset]).toFixed(2)}`,
        status: 'Completed',
        time: 'Just now',
        positive: mode === 'deposit'
      },
      ...prev
    ]);

    showNotification(
      mode === 'deposit'
        ? `Simulated ${val} ${asset} deposit confirmed via ${selectedNetwork}!`
        : mode === 'p2p-transfer'
        ? `Sent ${val} ${asset} to @${p2pRecipient} instantly with 0% fee!`
        : `Withdrawn ${val} ${asset} via ${selectedNetwork} successfully!`
    );
    setWalletModal(null);
    setWalletActionAmount('');
    setWithdrawAddress('');
    setP2pRecipient('');
  };

  // Messenger Chat & Instant Crypto Tip
  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) || threads[0],
    [threads, activeThreadId]
  );

  const handleSendMessengerChat = (e) => {
    e.preventDefault();
    if (!messengerInput.trim()) return;
    const msg = {
      id: Date.now(),
      sender: 'me',
      text: messengerInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setThreads((prev) =>
      prev.map((t) => (t.id === activeThread.id ? { ...t, messages: [...t.messages, msg] } : t))
    );
    setMessengerInput('');
  };

  const handleSendMessengerTip = () => {
    const amt = parseFloat(tipAmount);
    if (!amt || amt <= 0) return;
    if (balances.USDT < amt) {
      showNotification('Insufficient USDT balance to send tip.', 'error');
      return;
    }
    setBalances((prev) => ({ ...prev, USDT: prev.USDT - amt }));
    const tipMsg = {
      id: Date.now(),
      sender: 'me',
      isTip: true,
      text: `ðŸ’¸ Sent Instant P2P Tip: ${amt.toFixed(2)} USDT (0% Fee)`,
      time: 'Just now'
    };
    setThreads((prev) =>
      prev.map((t) => (t.id === activeThread.id ? { ...t, messages: [...t.messages, tipMsg] } : t))
    );
    setTipAmount('');
    setShowTipBox(false);
    showNotification(`Sent ${amt} USDT tip to @${activeThread.username}!`);
  };

  // ==========================================
  // SUPER ADMIN HANDLERS
  // ==========================================
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPinInput === '1234') {
      setIsAdminUnlocked(true);
      setAdminPinInput('');
      showNotification('ðŸ‘‘ Welcome Deepak! Super Admin Control Center Unlocked.');
    } else {
      showNotification('Invalid Admin PIN! Use 1234 or click Instant Demo Unlock.', 'error');
    }
  };

  const handleAdminResolveTrade = (tradeId, decision) => {
    const target = activeTrades.find((t) => t.id === tradeId);
    if (!target) return;

    if (decision === 'RELEASE_TO_BUYER') {
      setBalances((prev) => ({
        ...prev,
        [target.asset]: prev[target.asset] + target.cryptoAmount
      }));
    }

    const resolutionText =
      decision === 'RELEASE_TO_BUYER'
        ? `ðŸ‘‘ SUPER ADMIN JUDGMENT (@admin_wayones): Payment UTR verified! Force-released ${target.cryptoAmount.toFixed(
            2
          )} ${target.asset} from Escrow to Buyer.`
        : `ðŸ‘‘ SUPER ADMIN JUDGMENT (@admin_wayones): Payment proof invalid. Refunded ${target.cryptoAmount.toFixed(
            2
          )} ${target.asset} back to Seller wallet.`;

    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === tradeId
          ? {
              ...tr,
              status: 'COMPLETED',
              messages: [
                ...tr.messages,
                { id: `adm-${Date.now()}`, sender: 'moderator', text: resolutionText, time: 'Just now' }
              ]
            }
          : tr
      )
    );

    showNotification(
      decision === 'RELEASE_TO_BUYER'
        ? `Escrow #${tradeId} Force-Released to Buyer!`
        : `Escrow #${tradeId} Refunded to Seller!`
    );
  };

  const handleSendAdminBroadcastInTrade = (tradeId) => {
    if (!adminChatMsg.trim()) return;
    setActiveTrades((prev) =>
      prev.map((tr) =>
        tr.id === tradeId
          ? {
              ...tr,
              messages: [
                ...tr.messages,
                {
                  id: `adm-msg-${Date.now()}`,
                  sender: 'moderator',
                  text: `ðŸ‘‘ ADMIN (@admin_wayones): ${adminChatMsg.trim()}`,
                  time: 'Just now'
                }
              ]
            }
          : tr
      )
    );
    setAdminChatMsg('');
    showNotification('Admin message posted to Escrow Trade Room!');
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-[#8D68F6] selection:text-white pb-24 lg:pb-12">
      {/* ==========================================
          FLOATING NOTIFICATION TOAST
      ========================================== */}
      {toast && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 z-50 max-w-md animate-bounce">
          <div
            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl ${
              toast.type === 'error'
                ? 'bg-rose-950/95 border-rose-500/50 text-rose-200'
                : 'bg-[#19162B]/95 border-[#8D68F6] text-white'
            }`}
          >
            {toast.type === 'error' ? (
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* ==========================================
          TOP NAVIGATION HEADER
      ========================================== */}
      <header className="sticky top-0 z-40 bg-[#0D101B]/95 backdrop-blur-xl border-b border-white/[0.07]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          {/* Left: WAYONES Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-4 xl:gap-7">
            <div onClick={() => setActiveNav('marketplace')}>
              <WayonesFullLogo />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {[
                { id: 'marketplace', label: 'P2P Market', icon: Globe },
                { id: 'gift-cards', label: 'Gift Card Hub', icon: Gift, hot: true },
                {
                  id: 'active-trades',
                  label: 'Escrow Room',
                  icon: ShieldCheck,
                  badge: activeTrades.filter((t) => t.status !== 'COMPLETED').length
                },
                { id: 'messenger', label: 'Messenger', icon: MessageSquare },
                { id: 'wallet', label: 'Wallet & Swap', icon: Wallet },
                { id: 'account-hub', label: 'KYC & Rewards', icon: Award },
                {
                  id: 'admin-panel',
                  label: 'Admin Panel',
                  icon: Crown,
                  adminBadge: true
                }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`relative px-3 py-2.5 rounded-xl text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white bg-[#8D68F6]/15 border border-[#8D68F6]/40 shadow-sm shadow-[#8D68F6]/10'
                        : item.adminBadge
                        ? 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        item.adminBadge
                          ? 'text-amber-400'
                          : isActive
                          ? 'text-[#A78BFA]'
                          : 'text-slate-400'
                      }`}
                    />
                    <span>{item.label}</span>
                    {item.hot && (
                      <span className="px-1.5 py-0.2 text-[9px] font-extrabold uppercase bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md">
                        28% OFF
                      </span>
                    )}
                    {item.badge > 0 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#8D68F6] text-white rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute -bottom-[17px] left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#8D68F6] to-transparent" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Admin Quick Button, Share App Button, Create Offer CTA, Fiat Selector & Profile */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setActiveNav('admin-panel')}
              className="lg:hidden flex items-center gap-1 px-2.5 py-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold"
              title="Open Super Admin Panel"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin</span>
            </button>

            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#8D68F6]/15 hover:bg-[#8D68F6]/25 border border-[#8D68F6]/40 text-[#C4B5FD] text-xs font-bold transition"
              title="Share WAYONES App Link"
            >
              <Share2 className="w-3.5 h-3.5 text-[#8D68F6]" />
              <span className="hidden md:inline">Share App</span>
            </button>

            <button
              onClick={() => setShowCreateOfferModal(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#8D68F6] to-[#7248E8] hover:from-[#9C7BFF] hover:to-[#8058F5] text-white text-xs font-bold shadow-lg shadow-[#8D68F6]/25 transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post Offer</span>
            </button>

            {/* Fiat Currency Selector */}
            <select
              value={fiat}
              onChange={(e) => setFiat(e.target.value)}
              aria-label="Select Currency"
              className="bg-[#131722] hover:bg-[#1C2030] text-xs font-bold text-slate-200 rounded-xl px-2.5 py-2 border border-white/10 focus:outline-none focus:border-[#8D68F6] cursor-pointer transition"
            >
              {Object.keys(FIAT_RATES).map((code) => (
                <option key={code} value={code} className="bg-[#131722] text-white">
                  {FIAT_RATES[code].label}
                </option>
              ))}
            </select>

            {/* Quick Portfolio Pill */}
            <button
              onClick={() => setActiveNav('wallet')}
              className="hidden xl:flex items-center gap-2 bg-[#131722] hover:bg-[#1B2030] border border-white/10 px-3 py-1.5 rounded-xl transition"
            >
              <Wallet className="w-4 h-4 text-[#8D68F6]" />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 leading-none">Portfolio</p>
                <p className="text-xs font-bold text-white leading-tight">
                  {formatFiat(totalPortfolioUsd)}
                </p>
              </div>
            </button>

            {/* User Profile Pill */}
            <button
              onClick={() => setActiveNav('account-hub')}
              className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full bg-[#131722] hover:bg-[#1B2030] border border-white/10 transition"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#8D68F6] to-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                DW
              </div>
              <div className="hidden xl:block text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-white">deepak_pro</span>
                  <BadgeCheck className="w-3.5 h-3.5 text-[#8D68F6]" />
                </div>
                <p className="text-[10px] text-emerald-400 leading-none">Level 2 Verified</p>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          MAIN 2-COLUMN WORKSPACE
      ========================================== */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT / CENTER WORKSPACE (8 Cols on Desktop) */}
          <div className="lg:col-span-8 space-y-6">
            {/* ==========================================
                MODULE 1: P2P CRYPTO MARKETPLACE (BUY & SELL)
            ========================================== */}
            {activeNav === 'marketplace' && (
              <>
                {/* Hero Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#131722] via-[#171530] to-[#26174A] border border-[#8D68F6]/30 p-6 sm:p-8 shadow-2xl">
                  <div className="absolute -right-16 -top-16 w-72 h-72 bg-[#8D68F6]/25 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8D68F6]/15 border border-[#8D68F6]/40 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
                        <Zap className="w-3.5 h-3.5 text-[#8D68F6]" />
                        NOONES-STYLE GLOBAL P2P SUPER-APP
                      </div>
                      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                        P2P CRYPTO TRADING. REIMAGINED.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8D68F6] to-indigo-400">
                          WAYONES P2P.
                        </span>
                      </h1>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Buy and sell crypto with local payment methods including UPI (PhonePe, GPay, Paytm), IMPS, bank transfer, gift cards and digital wallets.
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setTradeSide('buy')}
                          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                            tradeSide === 'buy'
                              ? 'bg-[#8D68F6] hover:bg-[#7C55E6] text-white shadow-lg shadow-[#8D68F6]/40'
                              : 'bg-[#1B1D30]/80 text-slate-300 border border-white/10'
                          }`}
                        >
                          <ArrowDownLeft className="w-4 h-4" />
                          Buy Crypto
                        </button>
                        <button
                          onClick={() => setTradeSide('sell')}
                          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                            tradeSide === 'sell'
                              ? 'bg-[#8D68F6] hover:bg-[#7C55E6] text-white shadow-lg shadow-[#8D68F6]/40'
                              : 'bg-[#1B1D30]/80 text-slate-300 border border-white/10'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          Sell Crypto
                        </button>
                        <button
                          onClick={() => setActiveNav('gift-cards')}
                          className="px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-pink-300 hover:text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 transition flex items-center gap-1.5"
                        >
                          <Gift className="w-4 h-4 text-pink-400" />
                          Gift Card Hub (Up to 28% Off)
                        </button>
                      </div>
                    </div>

                    {/* Escrow Shield Badge */}
                    <div className="hidden sm:flex flex-col items-center justify-center p-4 rounded-2xl bg-[#111322]/90 border border-[#8D68F6]/40 shadow-xl shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8D68F6] to-indigo-700 flex items-center justify-center shadow-lg shadow-[#8D68F6]/40 mb-2">
                        <ShieldCheck className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-extrabold tracking-wider uppercase text-white">
                        WAYONES ESCROW
                      </span>
                      <span className="text-[11px] text-[#A78BFA] font-medium">
                        Prototype only
                      </span>
                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        3,190 Traders Online
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Bar: Assets + 400+ Payment Categories */}
                <div className="rounded-2xl bg-[#131722] border border-white/[0.07] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Crypto Asset Pills */}
                    <div className="flex items-center gap-1.5 bg-[#0B0E17] p-1.5 rounded-xl border border-white/[0.06] overflow-x-auto">
                      {['ALL', 'USDT', 'BTC', 'USDC', 'ETH'].map((asset) => {
                        const active = selectedAsset === asset;
                        return (
                          <button
                            key={asset}
                            onClick={() => setSelectedAsset(asset)}
                            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                              active
                                ? 'bg-[#8D68F6] text-white shadow-md shadow-[#8D68F6]/30'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {asset !== 'ALL' && <CryptoBadge asset={asset} size="sm" />}
                            <span>{asset === 'ALL' ? 'All Crypto' : asset}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Payment Category Quick Chips */}
                    <div className="flex items-center gap-1.5 overflow-x-auto">
                      {[
                        { id: 'All', label: 'All (400+)' },
                        { id: 'UPI', label: 'UPI (GPay/PhonePe)' },
                        { id: 'Bank', label: 'IMPS / Bank' },
                        { id: 'Gift Cards', label: 'Gift Cards' },
                        { id: 'Wallets', label: 'PayPal / Wallets' }
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setPaymentCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition whitespace-nowrap ${
                            paymentCategory === cat.id
                              ? 'bg-[#8D68F6]/20 border-[#8D68F6] text-white'
                              : 'bg-[#0B0E17] border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount & Username Search */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative flex items-center">
                      <input
                        type="number"
                        value={amountFilter}
                        onChange={(e) => setAmountFilter(e.target.value)}
                        placeholder={`Filter by amount in ${fiat} (${FIAT_RATES[fiat].symbol})...`}
                        className="w-full bg-[#0B0E17] border border-white/10 focus:border-[#8D68F6] rounded-xl pl-3.5 pr-14 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                      />
                      <span className="absolute right-3.5 text-xs font-bold text-[#8D68F6]">
                        {fiat}
                      </span>
                    </div>

                    <div className="relative flex items-center">
                      <Search className="w-4 h-4 text-slate-500 absolute left-3.5" />
                      <input
                        type="text"
                        value={searchTrader}
                        onChange={(e) => setSearchTrader(e.target.value)}
                        placeholder="Search verified @trader or payment method..."
                        className="w-full bg-[#0B0E17] border border-white/10 focus:border-[#8D68F6] rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Featured Offers Table */}
                <div className="rounded-3xl bg-[#131722] border border-white/[0.07] overflow-hidden shadow-2xl">
                  <div className="p-5 sm:p-6 border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        Featured {tradeSide === 'buy' ? 'Buy' : 'Sell'} Offers
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#8D68F6]/20 text-[#C4B5FD] border border-[#8D68F6]/30">
                          {filteredOffers.length} Available
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Compare trader terms, payment methods, price and order limits before opening a trade.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowCreateOfferModal(true)}
                      className="text-xs font-bold text-[#A78BFA] hover:text-white flex items-center gap-1"
                    >
                      <PlusCircle className="w-4 h-4" /> Create Your Own Offer
                    </button>
                  </div>

                  {/* Table Headers */}
                  <div className="hidden sm:grid sm:grid-cols-12 px-6 py-3 bg-[#0B0E17]/70 border-b border-white/[0.05] text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <div className="col-span-4">Trader & Trust Score</div>
                    <div className="col-span-2">Asset</div>
                    <div className="col-span-2">Price / Margin</div>
                    <div className="col-span-2">Payment Methods</div>
                    <div className="col-span-2 text-right">Action</div>
                  </div>

                  <div className="divide-y divide-white/[0.06]">
                    {filteredOffers.map((offer) => (
                      <div
                        key={offer.id}
                        className="p-4 sm:px-6 sm:py-4 hover:bg-white/[0.02] transition grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                      >
                        {/* Trader Column */}
                        <div className="sm:col-span-4 flex items-center gap-3.5">
                          <div className="relative shrink-0">
                            <div
                              className={`w-11 h-11 rounded-full bg-gradient-to-br ${offer.avatarBg} flex items-center justify-center font-bold text-sm text-white shadow-md`}
                            >
                              {offer.avatar}
                            </div>
                            <span
                              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#131722] ${
                                offer.online ? 'bg-emerald-400' : 'bg-slate-500'
                              }`}
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className="font-bold text-sm text-white truncate">
                                {offer.trader}
                              </p>
                              {offer.verified && (
                                <BadgeCheck className="w-4 h-4 text-[#8D68F6] shrink-0" />
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-300">
                              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                                <ThumbsUp className="w-3 h-3" /> {offer.likes || 950}
                              </span>
                              <span>•</span>
                              <span>{offer.trades} trades</span>
                              <span>•</span>
                              <span className="text-amber-400 font-semibold">{offer.completion}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                              <span className="inline-flex items-center gap-1 text-[#A78BFA]">
                                <Clock className="w-3 h-3" /> ~{offer.speed}
                              </span>
                              <span>•</span>
                              <span>
                                {formatFiat(offer.minUsd)} – {formatFiat(offer.maxUsd)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Asset Badge */}
                        <div className="sm:col-span-2 flex items-center gap-2">
                          <CryptoBadge asset={offer.asset} size="md" />
                          <div>
                            <span className="font-bold text-sm text-white">{offer.asset}</span>
                            <span className="block text-[10px] text-emerald-400 font-semibold">
                              {offer.margin}
                            </span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="sm:col-span-2">
                          <p className="text-base font-extrabold text-white">
                            {formatFiat(offer.usdPrice)}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            ${offer.usdPrice.toLocaleString()} USD
                          </p>
                        </div>

                        {/* Payment Methods */}
                        <div className="sm:col-span-2 flex flex-wrap gap-1.5">
                          {offer.paymentMethods.map((pm, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1C2033] border border-white/[0.06] text-[11px] font-medium text-slate-200"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8D68F6]" />
                              {pm}
                            </span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <div className="sm:col-span-2 flex sm:justify-end">
                          <button
                            onClick={() => handleOpenTradeModal(offer)}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8D68F6] to-[#7248E8] hover:from-[#9B78FF] hover:to-[#8056F5] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#8D68F6]/25 transition"
                          >
                            {offer.type === 'buy' ? `Buy ${offer.asset}` : `Sell ${offer.asset}`}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ==========================================
                MODULE 2: DEDICATED GIFT CARD HUB (NOONES SIGNATURE)
            ========================================== */}
            {activeNav === 'gift-cards' && (
              <div className="space-y-6">
                {/* Gift Card Hub Banner + Instant Code Checker */}
                <div className="rounded-3xl bg-gradient-to-br from-[#1B1435] via-[#15182B] to-[#2B143D] border border-pink-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-extrabold uppercase">
                        <Gift className="w-3.5 h-3.5" /> Noones-Style Gift Card Marketplace
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Swap Gift Cards for Instant USDT & BTC
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Sell unused Steam, Apple, Amazon, Razer Gold & Google Play cards for instant
                        crypto, or buy discounted gift cards with up to 28% savings.
                      </p>
                    </div>

                    {/* Instant Gift Card Code Checker Box */}
                    <form
                      onSubmit={handleCheckGiftCardBalance}
                      className="bg-[#0B0E17]/90 border border-white/10 p-4 rounded-2xl w-full md:w-80 space-y-2.5"
                    >
                      <p className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#8D68F6]" />
                        Instant Gift Card Escrow Checker
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={cardCheckerInput}
                          onChange={(e) => setCardCheckerInput(e.target.value)}
                          placeholder="Enter Claim Code (e.g. STEAM-992)"
                          className="flex-1 bg-[#131722] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#8D68F6]"
                        />
                        <button
                          type="submit"
                          className="px-3 py-2 rounded-xl bg-[#8D68F6] hover:bg-[#7C55E6] text-white text-xs font-bold"
                        >
                          Verify
                        </button>
                      </div>
                      {cardCheckResult && (
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] space-y-0.5">
                          <p className="text-emerald-400 font-bold">
                            ✓ {cardCheckResult.status} ({cardCheckResult.valueUsd})
                          </p>
                          <p className="text-slate-300">
                            Escrow Payout: <strong>{cardCheckResult.instantPayout}</strong>
                          </p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                {/* Gift Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {GIFT_CARD_DEALS.map((deal) => (
                    <div
                      key={deal.id}
                      className={`rounded-3xl bg-gradient-to-br ${deal.gradient} border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#8D68F6]/60 transition`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-300">
                            {deal.category}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-extrabold border ${deal.badgeColor}`}
                          >
                            {deal.discount}
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-white">{deal.brand}</h3>
                        <p className="text-xs font-semibold text-emerald-300">{deal.rateText}</p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {deal.regions.map((r) => (
                            <span
                              key={r}
                              className="px-2 py-0.5 rounded-md bg-black/30 text-[10px] text-slate-300 border border-white/10"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <div className="text-xs">
                          <p className="text-white font-bold">@{deal.trader}</p>
                          <p className="text-slate-400 text-[11px]">
                            â­ {deal.rating} ({deal.trades} card trades)
                          </p>
                        </div>
                        <button
                          onClick={() => handleOpenGiftCardTrade(deal)}
                          className="px-4 py-2.5 rounded-xl bg-[#8D68F6] hover:bg-[#7C55E6] text-white text-xs font-bold shadow-lg shadow-[#8D68F6]/30 transition"
                        >
                          Trade Card Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==========================================
                MODULE 3: 3-STEP ESCROW ROOM & DISPUTE MODERATOR
            ========================================== */}
            {activeNav === 'active-trades' && (
              <div className="rounded-3xl bg-[#131722] border border-white/[0.08] overflow-hidden shadow-2xl">
                {/* Header & 3-Step Visual Progress Bar */}
                <div className="p-5 sm:p-6 border-b border-white/[0.07] bg-[#161A29] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-[#8D68F6]" />
                        WAYONES Smart Escrow Trade Room
                      </h2>
                      <p className="text-xs text-slate-400">
                        3-Step Multi-Signature Escrow with Live Moderator Protection
                      </p>
                    </div>

                    {activeTrades.length > 0 && (
                      <div className="flex items-center gap-2 overflow-x-auto">
                        {activeTrades.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setCurrentTradeId(t.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                              activeTradeObj?.id === t.id
                                ? 'bg-[#8D68F6] text-white border-[#8D68F6]'
                                : 'bg-[#0B0E17] text-slate-400 border-white/10'
                            }`}
                          >
                            #{t.id} ({t.asset})
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3-Step Escrow Progress Bar */}
                  {activeTradeObj && (
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {[
                        { step: 1, label: '1. Escrow Locked', done: true },
                        {
                          step: 2,
                          label: '2. Payment / Proof Sent',
                          done:
                            activeTradeObj.status === 'PAYMENT_MARKED' ||
                            activeTradeObj.status === 'COMPLETED'
                        },
                        {
                          step: 3,
                          label: '3. Crypto Released',
                          done: activeTradeObj.status === 'COMPLETED'
                        }
                      ].map((s) => (
                        <div
                          key={s.step}
                          className={`p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                            s.done
                              ? 'bg-[#8D68F6]/20 border-[#8D68F6] text-white'
                              : 'bg-[#0B0E17] border-white/10 text-slate-500'
                          }`}
                        >
                          {s.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {!activeTradeObj ? (
                  <div className="p-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#8D68F6]/15 border border-[#8D68F6]/30 flex items-center justify-center mx-auto">
                      <Lock className="w-8 h-8 text-[#8D68F6]" />
                    </div>
                    <h3 className="text-lg font-bold text-white">No Active Escrow Trades</h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      Pick any P2P Crypto offer or Gift Card deal to open an interactive 3-step
                      escrow room.
                    </p>
                    <button
                      onClick={() => setActiveNav('marketplace')}
                      className="px-6 py-3 rounded-xl bg-[#8D68F6] text-white font-bold text-sm"
                    >
                      Browse P2P Offers
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Left Column: Escrow Controls */}
                    <div className="md:col-span-6 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-white/[0.07] space-y-4">
                      <div className="p-4 rounded-2xl bg-[#0B0E17] border border-[#8D68F6]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A78BFA]">
                            {activeTradeObj.status}
                          </span>
                          <p className="text-sm font-bold text-white">
                            {activeTradeObj.cryptoAmount.toFixed(4)} {activeTradeObj.asset} Locked
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block">Escrow Timer</span>
                          <span className="font-mono text-base font-extrabold text-amber-400">
                            {formatTimer(activeTradeObj.remainingSeconds)}
                          </span>
                        </div>
                      </div>

                      {/* Counterparty Payment / Gift Card Upload Box */}
                      {activeTradeObj.status !== 'COMPLETED' && (
                        <div className="rounded-2xl bg-[#181C2E] border border-white/10 p-4 space-y-3">
                          <p className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                            <CreditCard className="w-4 h-4 text-[#8D68F6]" />
                            {activeTradeObj.offer.isGiftCardDeal
                              ? `${activeTradeObj.offer.giftCardBrand} Escrow Submission`
                              : 'Counterparty Payment Details'}
                          </p>

                          {!activeTradeObj.offer.isGiftCardDeal && (
                            <div className="text-xs bg-[#0B0E17] p-3 rounded-xl border border-white/5 space-y-1">
                              <div className="flex justify-between">
                                <span className="text-slate-400">Amount to Pay:</span>
                                <span className="font-bold text-white">
                                  {activeTradeObj.fiatSymbol}
                                  {activeTradeObj.fiatAmount.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">UPI / Bank ID:</span>
                                <span className="font-mono text-[#A78BFA]">
                                  {activeTradeObj.offer.trader}@okaxis
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Step 2 Input: UTR or Gift Card Code */}
                          {activeTradeObj.status === 'AWAITING_PAYMENT' && (
                            <div className="space-y-2.5">
                              {activeTradeObj.offer.isGiftCardDeal ? (
                                <input
                                  type="text"
                                  value={giftCardCodeInput}
                                  onChange={(e) => setGiftCardCodeInput(e.target.value)}
                                  placeholder="Enter Gift Card Claim Code / PIN..."
                                  className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#8D68F6]"
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={utrInput}
                                  onChange={(e) => setUtrInput(e.target.value)}
                                  placeholder="Enter 12-Digit UPI UTR / Bank Ref No..."
                                  className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#8D68F6]"
                                />
                              )}

                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={handleSimulateReceiptUpload}
                                  className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                                >
                                  <Upload className="w-3.5 h-3.5 text-[#8D68F6]" />
                                  Upload Proof
                                </button>
                                <button
                                  type="button"
                                  onClick={handleMarkPaymentSent}
                                  className="flex-1 py-2.5 rounded-xl bg-[#8D68F6] hover:bg-[#7C55E6] text-white font-bold text-xs shadow-lg shadow-[#8D68F6]/30"
                                >
                                  {activeTradeObj.offer.isGiftCardDeal
                                    ? 'Submit Gift Card to Escrow'
                                    : 'I Have Paid (Mark Step 2)'}
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Step 3: 2FA PIN Verification & Crypto Release */}
                          {(activeTradeObj.status === 'PAYMENT_MARKED' ||
                            activeTradeObj.status === 'DISPUTED') && (
                            <div className="space-y-2.5 pt-2">
                              {!showPinConfirm ? (
                                <button
                                  onClick={() => setShowPinConfirm(true)}
                                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                                >
                                  <KeyRound className="w-4 h-4" />
                                  Verify & Release Escrow (Step 3)
                                </button>
                              ) : (
                                <div className="p-3 rounded-xl bg-[#0B0E17] border border-emerald-500/40 space-y-2">
                                  <p className="text-[11px] text-emerald-300 font-semibold">
                                    Enter any 4-digit WAYONES Security PIN to release Escrow:
                                  </p>
                                  <div className="flex gap-2">
                                    <input
                                      type="password"
                                      maxLength={4}
                                      value={pinInput}
                                      onChange={(e) => setPinInput(e.target.value)}
                                      placeholder="••••"
                                      className="w-24 bg-[#131722] border border-white/15 rounded-xl px-3 py-2 text-center font-mono text-sm text-white"
                                    />
                                    <button
                                      onClick={handleCompleteEscrowRelease}
                                      className="flex-1 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs"
                                    >
                                      Confirm Release Now
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {activeTradeObj.status !== 'COMPLETED' && (
                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={handleRaiseDispute}
                            className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
                          >
                            <ShieldAlert className="w-4 h-4" />
                            Summon WAYONES Dispute Moderator (@mod_priya)
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Live Escrow Chat */}
                    <div className="md:col-span-6 flex flex-col h-[480px] bg-[#0B0E17]">
                      <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {activeTradeObj.messages.map((msg) => {
                          if (msg.sender === 'system' || msg.sender === 'moderator') {
                            return (
                              <div
                                key={msg.id}
                                className={`p-3 rounded-xl border text-center ${
                                  msg.sender === 'moderator'
                                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-200'
                                    : 'bg-[#8D68F6]/10 border-[#8D68F6]/30 text-[#C4B5FD]'
                                }`}
                              >
                                <p className="text-xs font-semibold">{msg.text}</p>
                              </div>
                            );
                          }
                          const isUser = msg.sender === 'user';
                          return (
                            <div
                              key={msg.id}
                              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                            >
                              <div
                                className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm ${
                                  isUser
                                    ? 'bg-[#8D68F6] text-white'
                                    : 'bg-[#181C2E] text-slate-200 border border-white/10'
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[10px] text-slate-500 mt-1">{msg.time}</span>
                            </div>
                          );
                        })}
                        <div ref={chatEndRef} />
                      </div>

                      <form
                        onSubmit={handleSendChatMessage}
                        className="p-3 border-t border-white/10 bg-[#131722] flex items-center gap-2"
                      >
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="Send message to trader or moderator..."
                          className="flex-1 bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8D68F6]"
                        />
                        <button
                          type="submit"
                          className="p-2.5 rounded-xl bg-[#8D68F6] text-white"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ==========================================
                MODULE 4: MULTI-CHAIN WALLET & P2P USERNAME TRANSFER
            ========================================== */}
            {activeNav === 'wallet' && (
              <div className="space-y-6">
                <div className="rounded-3xl bg-gradient-to-br from-[#16192C] via-[#191634] to-[#26164A] border border-[#8D68F6]/30 p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C4B5FD]">
                      WAYONES MULTI-CHAIN CUSTODY & LIGHTNING WALLET
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                      {formatFiat(totalPortfolioUsd)}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      Supports TRC20, BEP20, ERC20, Polygon, Solana & Bitcoin Lightning Network
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => {
                        setSelectedNetwork('TRC20');
                        setWalletModal({ mode: 'deposit', asset: 'USDT' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#8D68F6] hover:bg-[#7C55E6] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#8D68F6]/30"
                    >
                      <QrCode className="w-4 h-4" />
                      Deposit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedNetwork('TRC20');
                        setWalletModal({ mode: 'withdraw', asset: 'USDT' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-1.5 border border-white/10"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      Withdraw
                    </button>
                    <button
                      onClick={() => setWalletModal({ mode: 'p2p-transfer', asset: 'USDT' })}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center gap-1.5"
                    >
                      <Users className="w-4 h-4" />
                      Send via @Username (0% Fee)
                    </button>
                  </div>
                </div>

                {/* 4 Crypto Asset Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['USDT', 'BTC', 'USDC', 'ETH'].map((asset) => {
                    const bal = balances[asset];
                    const usdVal = bal * MARKET_PRICES_USD[asset];
                    const decimals = asset === 'USDT' || asset === 'USDC' ? 2 : 5;
                    return (
                      <div
                        key={asset}
                        className="rounded-2xl bg-[#131722] border border-white/[0.07] p-5 space-y-4 hover:border-[#8D68F6]/40 transition"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CryptoBadge asset={asset} size="lg" />
                            <div>
                              <h3 className="font-bold text-white text-base">{asset}</h3>
                              <p className="text-[11px] text-slate-400">
                                {NETWORK_CONFIGS[asset].map((n) => n.id).join(' • ')}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-white">
                            {formatFiat(usdVal)}
                          </span>
                        </div>

                        <p className="text-2xl font-extrabold text-white">
                          {bal.toFixed(decimals)} {asset}
                        </p>

                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <button
                            onClick={() => {
                              setSelectedNetwork(NETWORK_CONFIGS[asset][0].id);
                              setWalletModal({ mode: 'deposit', asset });
                            }}
                            className="py-2 rounded-xl bg-[#8D68F6]/15 hover:bg-[#8D68F6]/25 text-[#C4B5FD] text-xs font-bold"
                          >
                            Deposit
                          </button>
                          <button
                            onClick={() => {
                              setSelectedNetwork(NETWORK_CONFIGS[asset][0].id);
                              setWalletModal({ mode: 'withdraw', asset });
                            }}
                            className="py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold"
                          >
                            Withdraw
                          </button>
                          <button
                            onClick={() => setWalletModal({ mode: 'p2p-transfer', asset })}
                            className="py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold"
                          >
                            0% Send
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ==========================================
                MODULE 5: FINANCIAL MESSENGER & SOCIAL P2P PAY
            ========================================== */}
            {activeNav === 'messenger' && (
              <div className="rounded-3xl bg-[#131722] border border-white/[0.08] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 h-[560px]">
                {/* Contacts List */}
                <div className="md:col-span-4 border-r border-white/[0.07] bg-[#0F121D] p-4 space-y-3 overflow-y-auto">
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider px-2">
                    WAYONES Financial Messenger
                  </h3>
                  {threads.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveThreadId(t.id)}
                      className={`w-full p-3 rounded-2xl text-left transition flex items-center gap-3 ${
                        activeThread.id === t.id
                          ? 'bg-[#8D68F6]/20 border border-[#8D68F6]/40'
                          : 'hover:bg-white/[0.04]'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-xs text-white shrink-0`}
                      >
                        {t.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">@{t.username}</p>
                        <p className="text-[10px] text-slate-400 truncate">{t.role}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Chat Window */}
                <div className="md:col-span-8 flex flex-col bg-[#0B0E17]">
                  <div className="p-4 border-b border-white/[0.07] bg-[#131722] flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">@{activeThread.username}</p>
                      <p className="text-[11px] text-emerald-400">{activeThread.role}</p>
                    </div>
                    <button
                      onClick={() => setShowTipBox(!showTipBox)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5"
                    >
                      <Coins className="w-3.5 h-3.5" />
                      Send Crypto Tip (0% Fee)
                    </button>
                  </div>

                  {showTipBox && (
                    <div className="p-3 bg-[#19162B] border-b border-[#8D68F6]/40 flex items-center gap-2">
                      <input
                        type="number"
                        value={tipAmount}
                        onChange={(e) => setTipAmount(e.target.value)}
                        placeholder="Enter USDT amount to tip..."
                        className="flex-1 bg-[#0B0E17] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        onClick={handleSendMessengerTip}
                        className="px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs"
                      >
                        Send Instant USDT
                      </button>
                    </div>
                  )}

                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {activeThread.messages.map((m) => (
                      <div
                        key={m.id}
                        className={`flex flex-col ${m.sender === 'me' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm ${
                            m.isTip
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold'
                              : m.sender === 'me'
                              ? 'bg-[#8D68F6] text-white'
                              : 'bg-[#181C2E] text-slate-200 border border-white/10'
                          }`}
                        >
                          {m.text}
                        </div>
                        <span className="text-[10px] text-slate-500 mt-1">{m.time}</span>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={handleSendMessengerChat}
                    className="p-3 border-t border-white/10 bg-[#131722] flex gap-2"
                  >
                    <input
                      type="text"
                      value={messengerInput}
                      onChange={(e) => setMessengerInput(e.target.value)}
                      placeholder={`Message @${activeThread.username}...`}
                      className="flex-1 bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#8D68F6] text-white text-xs font-bold"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* ==========================================
                MODULE 6: KYC VERIFICATION, AFFILIATE PROGRAM & PAYMENT METHODS
            ========================================== */}
            {activeNav === 'account-hub' && (
              <div className="space-y-6">
                {/* Tiered KYC Verification Card */}
                <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-[#8D68F6]" />
                        WAYONES Verification & Trust Limits
                      </h2>
                      <p className="text-xs text-slate-400">
                        Complete KYC tiers to unlock unlimited P2P & Gift Card volume
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold">
                      {kycLevels.level3 ? 'Level 3 Pro Verified' : 'Level 2 ID Verified'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-[#0B0E17] border border-emerald-500/30 space-y-2">
                      <span className="text-[11px] font-bold text-emerald-400">✓ LEVEL 1 COMPLETED</span>
                      <h4 className="text-sm font-bold text-white">Phone & Email</h4>
                      <p className="text-xs text-slate-400">Daily Limit: $1,000 USD</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0B0E17] border border-emerald-500/30 space-y-2">
                      <span className="text-[11px] font-bold text-emerald-400">✓ LEVEL 2 COMPLETED</span>
                      <h4 className="text-sm font-bold text-white">PAN / Aadhaar / Govt ID</h4>
                      <p className="text-xs text-slate-400">Daily Limit: $50,000 USD</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0B0E17] border border-[#8D68F6]/40 space-y-2">
                      <span className="text-[11px] font-bold text-[#A78BFA]">
                        {kycLevels.level3 ? '✓ LEVEL 3 COMPLETED' : 'LEVEL 3 MERCHANTS'}
                      </span>
                      <h4 className="text-sm font-bold text-white">Address & Video KYC</h4>
                      {kycLevels.level3 ? (
                        <p className="text-xs text-emerald-400 font-semibold">Unlimited P2P Desk</p>
                      ) : (
                        <button
                          onClick={() => {
                            setKycLevels({ ...kycLevels, level3: true });
                            showNotification('Level 3 Power Merchant KYC Approved!');
                          }}
                          className="w-full py-1.5 rounded-lg bg-[#8D68F6] text-white text-xs font-bold"
                        >
                          Simulate Instant Approval
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Noones-Style Partner / Affiliate Program */}
                <div className="rounded-3xl bg-gradient-to-br from-[#191530] to-[#131722] border border-[#8D68F6]/30 p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-extrabold uppercase text-[#A78BFA]">
                        WAYONES PARTNER PROGRAM
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        Earn 30% Escrow Fee Commission in USDT
                      </h3>
                    </div>
                    <button
                      onClick={() => {
                        if (affiliateStats.unclaimedUsdt <= 0) return;
                        const amt = affiliateStats.unclaimedUsdt;
                        setBalances((prev) => ({ ...prev, USDT: prev.USDT + amt }));
                        setAffiliateStats((s) => ({
                          ...s,
                          unclaimedUsdt: 0,
                          totalEarnedUsdt: s.totalEarnedUsdt + amt
                        }));
                        showNotification(`Claimed ${amt.toFixed(2)} USDT Affiliate Rewards to Wallet!`);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs"
                    >
                      Claim {affiliateStats.unclaimedUsdt.toFixed(2)} USDT Rewards
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10">
                      <span className="text-xs text-slate-400">Invited Active Peers</span>
                      <p className="text-lg font-extrabold text-white">
                        {affiliateStats.invitedCount} Traders
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10">
                      <span className="text-xs text-slate-400">Total Earned Commission</span>
                      <p className="text-lg font-extrabold text-emerald-400">
                        ${affiliateStats.totalEarnedUsdt.toFixed(2)} USDT
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block">Referral Code</span>
                        <span className="text-xs font-mono font-bold text-[#C4B5FD]">
                          {affiliateStats.referralCode}
                        </span>
                      </div>
                      <button
                        onClick={() => showNotification('Referral Link Copied!')}
                        className="p-2 rounded-lg bg-[#8D68F6]/20 text-[#A78BFA]"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Saved UPI & Bank Accounts Manager */}
                <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                  <h3 className="text-base font-bold text-white">
                    Saved P2P Payment Methods (UPI / IMPS Bank)
                  </h3>
                  <div className="space-y-2">
                    {savedPayments.map((pm) => (
                      <div
                        key={pm.id}
                        className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10 flex items-center justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#8D68F6]/20 text-[#C4B5FD]">
                            {pm.type}
                          </span>
                          <p className="text-sm font-bold text-white mt-1">{pm.label}</p>
                        </div>
                        <span className="text-xs text-emerald-400 font-semibold">✓ Verified</span>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!newPaymentLabel.trim()) return;
                      setSavedPayments((prev) => [
                        ...prev,
                        {
                          id: `pm-${Date.now()}`,
                          type: newPaymentType,
                          label: newPaymentLabel.trim(),
                          holder: 'Deepak Kumar',
                          verified: true
                        }
                      ]);
                      setNewPaymentLabel('');
                      showNotification('New P2P Payment Method Added!');
                    }}
                    className="flex flex-col sm:flex-row gap-2 pt-2"
                  >
                    <select
                      value={newPaymentType}
                      onChange={(e) => setNewPaymentType(e.target.value)}
                      className="bg-[#0B0E17] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white"
                    >
                      <option value="UPI ID">UPI ID (GPay / PhonePe)</option>
                      <option value="IMPS Bank">IMPS Bank Account</option>
                      <option value="PayPal">PayPal Email</option>
                    </select>
                    <input
                      type="text"
                      value={newPaymentLabel}
                      onChange={(e) => setNewPaymentLabel(e.target.value)}
                      placeholder="Enter UPI ID (e.g. name@ybl) or Bank A/C + IFSC..."
                      className="flex-1 bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#8D68F6] text-white text-xs font-bold"
                    >
                      + Add Method
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* ==========================================
                MODULE 7: ðŸ‘‘ SUPER ADMIN PANEL (OWNER CONTROL CENTER)
            ========================================== */}
            {activeNav === 'admin-panel' && (
              <div className="space-y-6">
                {!isAdminUnlocked ? (
                  /* Admin PIN Security Gate */
                  <div className="rounded-3xl bg-gradient-to-br from-[#16192B] via-[#18152E] to-[#261748] border border-amber-500/40 p-6 sm:p-10 shadow-2xl max-w-xl mx-auto text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                      <Crown className="w-9 h-9 text-amber-400" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[11px] font-extrabold uppercase tracking-wider">
                        RESTRICTED OWNER ACCESS
                      </span>
                      <h2 className="text-2xl font-extrabold text-white">
                        WAYONES Super Admin Panel
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Enter default Owner Passcode <strong className="text-amber-300 font-mono">1234</strong> or tap Instant Unlock below to manage Escrow Disputes, KYC Approvals, User Wallets & Platform Fees.
                      </p>
                    </div>

                    <form onSubmit={handleAdminLogin} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
                      <input
                        type="password"
                        value={adminPinInput}
                        onChange={(e) => setAdminPinInput(e.target.value)}
                        placeholder="Enter Admin PIN (1234)"
                        className="flex-1 bg-[#0B0E17] border border-white/15 rounded-xl px-4 py-3 text-center font-mono text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm"
                      >
                        Unlock Admin
                      </button>
                    </form>

                    <div className="pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => {
                          setIsAdminUnlocked(true);
                          showNotification('ðŸ‘‘ Super Admin Mode Unlocked Instantly!');
                        }}
                        className="px-5 py-2.5 rounded-xl bg-[#8D68F6]/25 hover:bg-[#8D68F6]/40 border border-[#8D68F6]/50 text-white text-xs font-bold transition"
                      >
                        âš¡ Instant 1-Click Admin Login (Owner Demo)
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Unlocked Super Admin Control Dashboard */
                  <>
                    {/* Top Admin Revenue & Escrow KPI Cards */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#17182B] via-[#1B1635] to-[#291749] border border-amber-500/40 p-6 shadow-2xl space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                            <Crown className="w-6 h-6 text-amber-400" />
                          </div>
                          <div>
                            <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                              WAYONES Super Admin Control Center
                              <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                                ROOT ACCESS
                              </span>
                            </h2>
                            <p className="text-xs text-slate-300">
                              Full authority over Multi-Sig Escrow Vaults, Dispute Judgments, KYC & Fee Revenue
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setIsAdminUnlocked(false)}
                          className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-200"
                        >
                          Lock Admin
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-4 rounded-2xl bg-[#0B0E17]/90 border border-white/10">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Lock className="w-3.5 h-3.5 text-[#8D68F6]" /> Escrow Vault Locked
                          </span>
                          <p className="text-lg sm:text-xl font-extrabold text-white mt-1">
                            $48,920.00
                          </p>
                          <span className="text-[10px] text-emerald-400 font-semibold">
                            {activeTrades.filter((t) => t.status !== 'COMPLETED').length} Active Room(s)
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#0B0E17]/90 border border-white/10">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> 24h Fee Revenue
                          </span>
                          <p className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1">
                            +$1,428.50
                          </p>
                          <span className="text-[10px] text-slate-400">
                            P2P Fee: {adminFees.p2pEscrowFee}%
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#0B0E17]/90 border border-white/10">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Gavel className="w-3.5 h-3.5 text-amber-400" /> Open Disputes
                          </span>
                          <p className="text-lg sm:text-xl font-extrabold text-amber-400 mt-1">
                            {activeTrades.filter((t) => t.status === 'DISPUTED').length} Cases
                          </p>
                          <span className="text-[10px] text-amber-300">Requires Judge Action</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#0B0E17]/90 border border-white/10">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Activity className="w-3.5 h-3.5 text-sky-400" /> Pending KYC / WD
                          </span>
                          <p className="text-lg sm:text-xl font-extrabold text-white mt-1">
                            {adminKycList.filter((k) => k.status === 'PENDING').length} KYC •{' '}
                            {adminWithdrawals.filter((w) => w.status === 'PENDING').length} WD
                          </p>
                          <span className="text-[10px] text-sky-300">In Verification Queue</span>
                        </div>
                      </div>

                      {/* Admin Sub-Navigation Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[
                          { id: 'disputes', label: 'âš–ï¸ Escrow Dispute Judge', icon: Gavel },
                          { id: 'kyc-users', label: 'ðŸªª User & KYC Control', icon: UserCheck },
                          { id: 'withdrawals', label: 'ðŸ’¸ Withdrawal & Offer Mod', icon: Wallet },
                          { id: 'settings', label: 'âš™ï¸ Platform Fees & System', icon: Sliders }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setAdminSubTab(tab.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                              adminSubTab === tab.id
                                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                                : 'bg-[#0B0E17] text-slate-300 border-white/10 hover:text-white'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SUB-TAB 1: ESCROW DISPUTE JUDGE DESK */}
                    {adminSubTab === 'disputes' && (
                      <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                              <Gavel className="w-5 h-5 text-amber-400" />
                              Live Escrow Trades & Dispute Resolution Desk
                            </h3>
                            <p className="text-xs text-slate-400">
                              Inspect buyer UTR / screenshot proof and force-release or refund locked crypto
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {activeTrades.map((tr) => (
                            <div
                              key={tr.id}
                              className="p-5 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-4"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                                <div className="flex items-center gap-2.5">
                                  <span className="px-2.5 py-1 rounded-lg bg-[#8D68F6]/20 text-[#C4B5FD] font-mono text-xs font-bold">
                                    #{tr.id}
                                  </span>
                                  <span
                                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                                      tr.status === 'DISPUTED'
                                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                        : tr.status === 'COMPLETED'
                                        ? 'bg-emerald-500/20 text-emerald-300'
                                        : 'bg-sky-500/20 text-sky-300'
                                    }`}
                                  >
                                    {tr.status}
                                  </span>
                                  <span className="text-xs text-slate-300 font-semibold">
                                    Seller: @{tr.offer.trader} • Buyer: @deepak_pro
                                  </span>
                                </div>

                                <div className="text-right">
                                  <span className="text-sm font-extrabold text-white">
                                    {tr.cryptoAmount.toFixed(2)} {tr.asset} ({tr.fiatSymbol}
                                    {tr.fiatAmount.toLocaleString()})
                                  </span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                <div className="p-3.5 rounded-xl bg-[#131722] border border-white/5 space-y-1.5">
                                  <p className="text-slate-400 font-bold uppercase text-[10px]">
                                    Submitted Payment Proof
                                  </p>
                                  <p className="text-white">
                                    UTR / Claim Code:{' '}
                                    <strong className="text-amber-300 font-mono">
                                      {tr.utrNumber || 'Not submitted yet'}
                                    </strong>
                                  </p>
                                  <p className="text-slate-300">
                                    Screenshot OCR:{' '}
                                    <span className="text-emerald-400 font-semibold">
                                      {tr.receiptAttached ? '✓ Verified Attached' : 'Pending'}
                                    </span>
                                  </p>
                                </div>

                                {/* Send Official Admin Message to Trade Room */}
                                <div className="p-3.5 rounded-xl bg-[#131722] border border-white/5 space-y-2">
                                  <p className="text-slate-400 font-bold uppercase text-[10px]">
                                    Send Official Admin Chat to Room #{tr.id}
                                  </p>
                                  <div className="flex gap-2">
                                    <input
                                      type="text"
                                      value={adminChatMsg}
                                      onChange={(e) => setAdminChatMsg(e.target.value)}
                                      placeholder="Type message as @admin_wayones..."
                                      className="flex-1 bg-[#0B0E17] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => handleSendAdminBroadcastInTrade(tr.id)}
                                      className="px-3 py-1.5 rounded-lg bg-[#8D68F6] text-white font-bold text-xs"
                                    >
                                      Post
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {tr.status !== 'COMPLETED' && (
                                <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2">
                                  <button
                                    onClick={() => {
                                      setCurrentTradeId(tr.id);
                                      setActiveNav('active-trades');
                                    }}
                                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-1.5"
                                  >
                                    <Eye className="w-3.5 h-3.5" /> Inspect Room
                                  </button>
                                  <button
                                    onClick={() => handleAdminResolveTrade(tr.id, 'REFUND_TO_SELLER')}
                                    className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-bold"
                                  >
                                    Refund Escrow to Seller
                                  </button>
                                  <button
                                    onClick={() => handleAdminResolveTrade(tr.id, 'RELEASE_TO_BUYER')}
                                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20"
                                  >
                                    ✓ Force Release {tr.asset} to Buyer
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SUB-TAB 2: USER & KYC APPROVAL QUEUE */}
                    {adminSubTab === 'kyc-users' && (
                      <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h3 className="text-base font-bold text-white">
                              KYC Verification Queue & User Wallet Controls
                            </h3>
                            <p className="text-xs text-slate-400">
                              Approve PAN/Aadhaar KYC, freeze suspicious accounts, or credit test USDT
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setBalances((prev) => ({ ...prev, USDT: prev.USDT + 1000 }));
                              showNotification('Credited +1,000.00 USDT to @deepak_pro Wallet!');
                            }}
                            className="px-4 py-2 rounded-xl bg-[#8D68F6] text-white text-xs font-bold"
                          >
                            + Credit 1,000 USDT to My Wallet
                          </button>
                        </div>

                        <div className="space-y-3">
                          {adminKycList.map((u) => (
                            <div
                              key={u.id}
                              className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm text-white">@{u.username}</span>
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                                      u.status === 'APPROVED'
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : u.status === 'REJECTED'
                                        ? 'bg-rose-500/20 text-rose-400'
                                        : 'bg-amber-500/20 text-amber-300'
                                    }`}
                                  >
                                    KYC: {u.status}
                                  </span>
                                  {u.frozen && (
                                    <span className="px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-extrabold">
                                      WALLET FROZEN
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-300">
                                  {u.fullName} • {u.docType} ({u.docNumber})
                                </p>
                                <p className="text-[11px] text-slate-400">
                                  Balance: <strong className="text-white">${u.walletUsdt.toFixed(2)} USDT</strong> • Submitted {u.submittedAt}
                                </p>
                              </div>

                              <div className="flex flex-wrap items-center gap-2">
                                {u.status === 'PENDING' && (
                                  <>
                                    <button
                                      onClick={() => {
                                        setAdminKycList((prev) =>
                                          prev.map((item) =>
                                            item.id === u.id ? { ...item, status: 'APPROVED' } : item
                                          )
                                        );
                                        showNotification(`Approved KYC for @${u.username}!`);
                                      }}
                                      className="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs flex items-center gap-1"
                                    >
                                      <Check className="w-3.5 h-3.5" /> Approve KYC
                                    </button>
                                    <button
                                      onClick={() => {
                                        setAdminKycList((prev) =>
                                          prev.map((item) =>
                                            item.id === u.id ? { ...item, status: 'REJECTED' } : item
                                          )
                                        );
                                        showNotification(`Rejected KYC for @${u.username}`, 'error');
                                      }}
                                      className="px-3 py-2 rounded-xl bg-rose-500/20 text-rose-300 font-bold text-xs"
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                                <button
                                  onClick={() => {
                                    setAdminKycList((prev) =>
                                      prev.map((item) =>
                                        item.id === u.id ? { ...item, frozen: !item.frozen } : item
                                      )
                                    );
                                    showNotification(
                                      u.frozen
                                        ? `Unfroze @${u.username} wallet.`
                                        : `Froze @${u.username} wallet!`
                                    );
                                  }}
                                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold flex items-center gap-1"
                                >
                                  <Ban className="w-3.5 h-3.5 text-rose-400" />
                                  {u.frozen ? 'Unfreeze' : 'Freeze User'}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SUB-TAB 3: WITHDRAWAL APPROVALS & MARKETPLACE OFFER MODERATION */}
                    {adminSubTab === 'withdrawals' && (
                      <div className="space-y-6">
                        <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                          <h3 className="text-base font-bold text-white">
                            Pending Crypto Withdrawal Requests
                          </h3>
                          <div className="space-y-3">
                            {adminWithdrawals.map((w) => (
                              <div
                                key={w.id}
                                className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 flex flex-wrap items-center justify-between gap-4"
                              >
                                <div>
                                  <p className="text-sm font-bold text-white">
                                    @{w.username} — {w.amount} {w.asset} ({w.network})
                                  </p>
                                  <p className="text-xs font-mono text-[#A78BFA]">{w.address}</p>
                                  <span className="text-[11px] text-slate-400">{w.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {w.status === 'PENDING' ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          setAdminWithdrawals((prev) =>
                                            prev.map((item) =>
                                              item.id === w.id ? { ...item, status: 'APPROVED' } : item
                                            )
                                          );
                                          showNotification(`Withdrawal ${w.id} broadcasted on ${w.network}!`);
                                        }}
                                        className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs"
                                      >
                                        Approve & Broadcast
                                      </button>
                                      <button
                                        onClick={() => {
                                          setAdminWithdrawals((prev) =>
                                            prev.map((item) =>
                                              item.id === w.id ? { ...item, status: 'REJECTED' } : item
                                            )
                                          );
                                          showNotification(`Withdrawal ${w.id} rejected & refunded.`, 'error');
                                        }}
                                        className="px-3 py-2 rounded-xl bg-rose-500/20 text-rose-300 font-bold text-xs"
                                      >
                                        Reject
                                      </button>
                                    </>
                                  ) : (
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-emerald-400">
                                      {w.status}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-4">
                          <h3 className="text-base font-bold text-white">
                            Live Marketplace Offer Moderation ({offers.length} Active Offers)
                          </h3>
                          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                            {offers.map((o) => (
                              <div
                                key={o.id}
                                className="p-3 rounded-xl bg-[#0B0E17] border border-white/10 flex items-center justify-between text-xs"
                              >
                                <div>
                                  <span className="font-bold text-white">@{o.trader}</span> •{' '}
                                  <span className="text-[#A78BFA] uppercase font-bold">
                                    {o.type} {o.asset}
                                  </span>{' '}
                                  ({o.margin})
                                </div>
                                <button
                                  onClick={() => {
                                    setOffers((prev) => prev.filter((item) => item.id !== o.id));
                                    showNotification(`Removed offer ${o.id} from marketplace.`);
                                  }}
                                  className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold"
                                >
                                  Delete Offer
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SUB-TAB 4: PLATFORM FEES & GLOBAL SETTINGS */}
                    {adminSubTab === 'settings' && (
                      <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-6 space-y-5">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <Sliders className="w-5 h-5 text-[#8D68F6]" />
                          WAYONES Commission & Escrow Fee Engine
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-2">
                            <label className="text-xs text-slate-400 block">
                              P2P Escrow Maker Fee (%)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              value={adminFees.p2pEscrowFee}
                              onChange={(e) =>
                                setAdminFees({ ...adminFees, p2pEscrowFee: parseFloat(e.target.value) || 0 })
                              }
                              className="w-full bg-[#131722] border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-white"
                            />
                          </div>

                          <div className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-2">
                            <label className="text-xs text-slate-400 block">
                              Gift Card Hub Fee (%)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              value={adminFees.giftCardFee}
                              onChange={(e) =>
                                setAdminFees({ ...adminFees, giftCardFee: parseFloat(e.target.value) || 0 })
                              }
                              className="w-full bg-[#131722] border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-white"
                            />
                          </div>

                          <div className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-2">
                            <label className="text-xs text-slate-400 block">
                              Flat USDT Withdrawal Fee ($)
                            </label>
                            <input
                              type="number"
                              step="0.5"
                              value={adminFees.withdrawalFeeUsdt}
                              onChange={(e) =>
                                setAdminFees({
                                  ...adminFees,
                                  withdrawalFeeUsdt: parseFloat(e.target.value) || 0
                                })
                              }
                              className="w-full bg-[#131722] border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-white"
                            />
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            showNotification('Updated WAYONES Global Commission Rates!')
                          }
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8D68F6] to-indigo-600 text-white font-bold text-xs sm:text-sm"
                        >
                          Save Global Fee Configuration
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* ==========================================
              RIGHT SIDEBAR: USER DASHBOARD SNAPSHOT & INSTANT CONVERT
          ========================================== */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-5 sm:p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">User Dashboard Snapshot</h3>
                <span className="text-[11px] font-semibold text-[#A78BFA] bg-[#8D68F6]/15 px-2.5 py-0.5 rounded-full border border-[#8D68F6]/30">
                  Escrow Ready
                </span>
              </div>

              <div className="rounded-2xl bg-[#0B0E17] border border-white/[0.06] p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Total Balance</span>
                  <span className="text-xs font-bold text-white">
                    {formatFiat(totalPortfolioUsd)}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {['BTC', 'ETH', 'USDT', 'USDC'].map((c) => {
                    const isSelected = chartAsset === c;
                    return (
                      <button
                        key={c}
                        onClick={() => setChartAsset(c)}
                        className={`p-2 rounded-xl border text-left transition ${
                          isSelected
                            ? 'bg-[#191B30] border-[#8D68F6]/60'
                            : 'bg-[#121422] border-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <CryptoBadge asset={c} size="sm" />
                          <span className="text-[11px] font-bold text-white">{c}</span>
                        </div>
                        <p className="text-[10px] font-semibold text-slate-300 mt-1 truncate">
                          {balances[c].toFixed(c === 'USDT' || c === 'USDC' ? 0 : 3)}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* SVG Sparkline */}
                <div className="pt-1">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-400">{chartAsset} Live Market</span>
                    <span className="text-amber-400 font-bold">
                      {formatFiat(MARKET_PRICES_USD[chartAsset])}
                    </span>
                  </div>
                  <div className="h-20 w-full">
                    <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                      {(() => {
                        const pts = SPARKLINE_DATA[chartAsset];
                        const min = Math.min(...pts);
                        const max = Math.max(...pts);
                        const range = max - min || 1;
                        const coords = pts.map((val, idx) => {
                          const x = (idx / (pts.length - 1)) * 290 + 5;
                          const y = 68 - ((val - min) / range) * 50;
                          return `${x},${y}`;
                        });
                        return (
                          <path
                            d={`M ${coords.join(' L ')}`}
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        );
                      })()}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Recent Escrow & Wallet Activity
                  </h4>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {transactions.slice(0, 4).map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0E17] border border-white/[0.05]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CryptoBadge asset={tx.asset} size="sm" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{tx.title}</p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {tx.counterparty} • {tx.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p
                          className={`text-xs font-bold ${
                            tx.positive ? 'text-emerald-400' : 'text-slate-200'
                          }`}
                        >
                          {tx.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Zero-Fee Convert Widget */}
            <div className="rounded-3xl bg-[#131722] border border-white/[0.08] p-5 sm:p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#8D68F6]" />
                  Instant Convert (0% Fee)
                </h3>
                <span className="text-[11px] text-emerald-400 font-semibold">Instant Pool</span>
              </div>

              <form onSubmit={handleExecuteQuickSwap} className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>From Balance</span>
                    <span>
                      Avail: {balances[swapFrom].toFixed(swapFrom === 'USDT' || swapFrom === 'USDC' ? 2 : 4)}{' '}
                      {swapFrom}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="number"
                      step="any"
                      value={swapAmount}
                      onChange={(e) => setSwapAmount(e.target.value)}
                      className="w-full bg-transparent text-base font-bold text-white focus:outline-none"
                    />
                    <select
                      value={swapFrom}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSwapFrom(val);
                        if (val === swapTo) setSwapTo(val === 'USDT' ? 'BTC' : 'USDT');
                      }}
                      className="bg-[#191C30] text-xs font-bold text-white px-2.5 py-1.5 rounded-xl border border-white/10"
                    >
                      {['USDT', 'BTC', 'USDC', 'ETH'].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>You Receive</span>
                    <span>0% Slippage</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-emerald-400">
                      {swapOutput
                        ? swapOutput.toFixed(swapTo === 'USDT' || swapTo === 'USDC' ? 2 : 5)
                        : '0.00'}
                    </span>
                    <select
                      value={swapTo}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSwapTo(val);
                        if (val === swapFrom) setSwapFrom(val === 'BTC' ? 'USDT' : 'BTC');
                      }}
                      className="bg-[#191C30] text-xs font-bold text-white px-2.5 py-1.5 rounded-xl border border-white/10"
                    >
                      {['BTC', 'ETH', 'USDT', 'USDC'].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8D68F6] to-[#7248E8] text-white font-bold text-sm shadow-lg shadow-[#8D68F6]/30"
                >
                  Convert Crypto Instantly
                </button>
              </form>
            </div>
          </aside>
        </div>
      </main>

      {/* ==========================================
          MODAL 0: SHARE LIVE APP LINK & QR CODE
      ========================================== */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#131722] border border-[#8D68F6]/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#8D68F6]" />
                Share WAYONES P2P Platform
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 text-center space-y-3">
              <div className="w-28 h-28 mx-auto rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg">
                <QrCode className="w-full h-full text-slate-900" />
              </div>
              <p className="text-xs font-bold text-white">WAYONES P2P Invite & Preview Link</p>
              <div className="flex items-center gap-2 bg-[#131722] p-2 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-[#A78BFA] truncate flex-1">
                  https://wayones.app/p2p?ref=DEEPAK2026
                </span>
                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText('https://wayones.app/p2p?ref=DEEPAK2026');
                    }
                    showNotification('WAYONES Share Link copied to clipboard!');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#8D68F6] text-white text-xs font-bold flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#8D68F6]/10 border border-[#8D68F6]/30 text-xs text-slate-300 space-y-1.5">
              <p className="font-bold text-[#C4B5FD]">How others can test this live app:</p>
              <p>1. Tap the <strong>Share</strong> icon at the top-right of this Canvas preview to create a public shareable link.</p>
              <p>2. Or deploy <code className="text-white">WayonesP2P.jsx</code> directly on <strong>Vercel / Netlify / StackBlitz</strong> for a permanent custom domain.</p>
            </div>

            <button
              onClick={() => setShowShareModal(false)}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 1: OPEN ESCROW TRADE MODAL
      ========================================== */}
      {selectedOfferForModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#131722] border border-[#8D68F6]/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-white text-base">
                  {selectedOfferForModal.isGiftCardDeal
                    ? `Trade ${selectedOfferForModal.giftCardBrand}`
                    : `${selectedOfferForModal.type === 'buy' ? 'Buy' : 'Sell'} ${selectedOfferForModal.asset}`}{' '}
                  with @{selectedOfferForModal.trader}
                </h3>
                <p className="text-xs text-slate-400">
                  Rate: <strong className="text-white">{formatFiat(selectedOfferForModal.usdPrice)}</strong> /{' '}
                  {selectedOfferForModal.asset}
                </p>
              </div>
              <button
                onClick={() => setSelectedOfferForModal(null)}
                className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleStartEscrowTrade} className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Enter Value ({fiat})</span>
                    <span>
                      Limits: {formatFiat(selectedOfferForModal.minUsd)} –{' '}
                      {formatFiat(selectedOfferForModal.maxUsd)}
                    </span>
                  </div>
                  <input
                    type="number"
                    step="any"
                    required
                    value={tradeInputFiat}
                    onChange={(e) => setTradeInputFiat(e.target.value)}
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-3.5 py-2.5 text-base font-bold text-white focus:outline-none focus:border-[#8D68F6]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-xs text-slate-400">Escrow Crypto Amount</span>
                  <span className="text-base font-extrabold text-emerald-400">
                    {tradeInputFiat && !isNaN(parseFloat(tradeInputFiat))
                      ? (
                          parseFloat(tradeInputFiat) /
                          FIAT_RATES[fiat].rate /
                          selectedOfferForModal.usdPrice
                        ).toFixed(4)
                      : '0.00'}{' '}
                    {selectedOfferForModal.asset}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#8D68F6]/10 border border-[#8D68F6]/25 text-xs text-slate-300">
                <strong className="text-[#C4B5FD] block mb-1">Escrow Terms:</strong>
                {selectedOfferForModal.terms}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOfferForModal(null)}
                  className="w-1/3 py-3 rounded-xl bg-white/5 text-slate-300 font-semibold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#8D68F6] to-indigo-600 text-white font-bold text-sm shadow-lg shadow-[#8D68F6]/30 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  Lock Escrow & Open Chat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: MULTI-CHAIN WALLET (DEPOSIT / WITHDRAW / 0% USERNAME TRANSFER)
      ========================================== */}
      {walletModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#131722] border border-[#8D68F6]/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-white text-base">
                {walletModal.mode === 'deposit'
                  ? `Deposit ${walletModal.asset}`
                  : walletModal.mode === 'p2p-transfer'
                  ? `0% Fee Internal P2P Send (${walletModal.asset})`
                  : `Withdraw ${walletModal.asset}`}
              </h3>
              <button
                onClick={() => setWalletModal(null)}
                className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleWalletTransaction} className="space-y-4">
              {/* Asset Selector */}
              <div className="grid grid-cols-4 gap-2">
                {['USDT', 'BTC', 'USDC', 'ETH'].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => {
                      setWalletModal({ ...walletModal, asset: c });
                      setSelectedNetwork(NETWORK_CONFIGS[c][0].id);
                    }}
                    className={`py-2 rounded-xl text-xs font-bold border ${
                      walletModal.asset === c
                        ? 'bg-[#8D68F6] text-white border-[#8D68F6]'
                        : 'bg-[#0B0E17] text-slate-400 border-white/10'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Network Selector for Deposit / Withdraw */}
              {walletModal.mode !== 'p2p-transfer' && (
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Select Blockchain Network
                  </label>
                  <select
                    value={selectedNetwork}
                    onChange={(e) => setSelectedNetwork(e.target.value)}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-semibold"
                  >
                    {NETWORK_CONFIGS[walletModal.asset].map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name} — Fee: {n.fee} ({n.arrival})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Deposit Address + QR Preview */}
              {walletModal.mode === 'deposit' && (
                <div className="p-3.5 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-2 text-center">
                  <div className="w-24 h-24 mx-auto rounded-xl bg-white p-2 flex items-center justify-center">
                    <QrCode className="w-full h-full text-slate-900" />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {selectedNetwork} Deposit Address
                  </p>
                  <p className="text-xs font-mono text-[#A78BFA] break-all">
                    {
                      (
                        NETWORK_CONFIGS[walletModal.asset].find((n) => n.id === selectedNetwork) ||
                        NETWORK_CONFIGS[walletModal.asset][0]
                      ).address
                    }
                  </p>
                </div>
              )}

              {/* P2P Username Input */}
              {walletModal.mode === 'p2p-transfer' && (
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Recipient WAYONES @Username or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={p2pRecipient}
                    onChange={(e) => setP2pRecipient(e.target.value)}
                    placeholder="e.g. arjun_crypto_king"
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white"
                  />
                </div>
              )}

              {/* Withdraw Address Input */}
              {walletModal.mode === 'withdraw' && (
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Destination {selectedNetwork} Wallet Address
                  </label>
                  <input
                    type="text"
                    required
                    value={withdrawAddress}
                    onChange={(e) => setWithdrawAddress(e.target.value)}
                    placeholder={`Paste external ${selectedNetwork} address...`}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Amount ({walletModal.asset})
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  value={walletActionAmount}
                  onChange={(e) => setWalletActionAmount(e.target.value)}
                  placeholder={`Enter ${walletModal.asset} amount...`}
                  className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#8D68F6] hover:bg-[#7C55E6] text-white font-bold text-sm shadow-lg shadow-[#8D68F6]/30"
              >
                {walletModal.mode === 'deposit'
                  ? `Simulate Instant ${walletModal.asset} Deposit`
                  : walletModal.mode === 'p2p-transfer'
                  ? `Send Instant 0% Fee Transfer`
                  : `Confirm ${selectedNetwork} Withdrawal`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 3: CREATE NEW P2P OFFER WIZARD
      ========================================== */}
      {showCreateOfferModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#131722] border border-[#8D68F6]/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#8D68F6]" />
                Create WAYONES P2P Offer (0% Maker Fee)
              </h3>
              <button
                onClick={() => setShowCreateOfferModal(false)}
                className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateOffer} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setNewOffer({ ...newOffer, type: 'buy' })}
                  className={`py-2.5 rounded-xl text-xs font-bold border ${
                    newOffer.type === 'buy'
                      ? 'bg-[#8D68F6] text-white border-[#8D68F6]'
                      : 'bg-[#0B0E17] text-slate-400 border-white/10'
                  }`}
                >
                  Sell Crypto (Show in Buy List)
                </button>
                <button
                  type="button"
                  onClick={() => setNewOffer({ ...newOffer, type: 'sell' })}
                  className={`py-2.5 rounded-xl text-xs font-bold border ${
                    newOffer.type === 'sell'
                      ? 'bg-[#8D68F6] text-white border-[#8D68F6]'
                      : 'bg-[#0B0E17] text-slate-400 border-white/10'
                  }`}
                >
                  Buy Crypto (Show in Sell List)
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {['USDT', 'BTC', 'USDC', 'ETH'].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setNewOffer({ ...newOffer, asset: c })}
                    className={`py-2 rounded-xl text-xs font-bold border ${
                      newOffer.asset === c
                        ? 'bg-[#8D68F6]/30 text-white border-[#8D68F6]'
                        : 'bg-[#0B0E17] text-slate-400 border-white/10'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Margin (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newOffer.margin}
                    onChange={(e) => setNewOffer({ ...newOffer, margin: e.target.value })}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Min USD</label>
                  <input
                    type="number"
                    value={newOffer.minUsd}
                    onChange={(e) => setNewOffer({ ...newOffer, minUsd: e.target.value })}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Max USD</label>
                  <input
                    type="number"
                    value={newOffer.maxUsd}
                    onChange={(e) => setNewOffer({ ...newOffer, maxUsd: e.target.value })}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Accepted Payment Method</label>
                <select
                  value={newOffer.paymentMethod}
                  onChange={(e) => setNewOffer({ ...newOffer, paymentMethod: e.target.value })}
                  className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white"
                >
                  <option value="UPI (PhonePe / GPay / Paytm)">UPI (PhonePe / GPay / Paytm)</option>
                  <option value="IMPS / Bank Transfer">IMPS / Bank Transfer</option>
                  <option value="Steam / Apple Gift Card">Steam / Apple Gift Card</option>
                  <option value="PayPal / Skrill Wallet">PayPal / Skrill Wallet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8D68F6] to-indigo-600 text-white font-bold text-sm"
              >
                Publish Live P2P Offer
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MOBILE BOTTOM NAVIGATION BAR
      ========================================== */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D101B]/95 backdrop-blur-xl border-t border-white/10 px-2 py-2 flex items-center justify-around">
        {[
          { id: 'marketplace', label: 'P2P', icon: Globe },
          { id: 'gift-cards', label: 'Cards', icon: Gift },
          {
            id: 'active-trades',
            label: 'Escrow',
            icon: ShieldCheck,
            badge: activeTrades.filter((t) => t.status !== 'COMPLETED').length
          },
          { id: 'wallet', label: 'Wallet', icon: Wallet },
          { id: 'account-hub', label: 'KYC', icon: Award },
          { id: 'admin-panel', label: 'Admin', icon: Crown }
        ].map((item) => {
          const Icon = item.icon;
          const active = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`relative flex flex-col items-center gap-1 px-2 py-1 rounded-xl text-[10px] font-semibold transition ${
                active ? 'text-[#A78BFA]' : 'text-slate-400'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'text-[#8D68F6]' : 'text-slate-400'}`} />
              <span>{item.label}</span>
              {item.badge > 0 && (
                <span className="absolute top-0.5 right-1.5 w-4 h-4 rounded-full bg-[#8D68F6] text-white text-[9px] font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
