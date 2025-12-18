# **Social Finance Platform (Demo Version)**

### *A modular, community-driven SocialFi prototype built for the Web3 era*

This repository contains the **demo version** of a next-generation SocialFi platform focused on trading, community interaction, decentralized identity, and gamified on-chain engagement.
It is designed to be modular, extendable, and developer-friendly for future contributions.

---

# 🚀 **Getting Started**

### **1. Environment Setup**

Create an `.env` file and add:

```bash
ALCHEMY_API_KEY=YOUR_KEY
INFURA_API_KEY=YOUR_KEY
JSON_RPC_URL="https://rpc.builder0x69.io"
NETWORK="goerli"
```

### **2. Requirements**

* **Node**: v18 or v20
* **Package Manager**: npm

### **3. Install & Run**

```sh
npm install
npm run dev
npm run build
```

Visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

# 🔧 **Tech Stack**

| Layer          | Technologies                             |
| -------------- | ---------------------------------------- |
| Frontend       | React.js, Chakra UI                      |
| Web3           | Ethers.js, Wagmi, RainbowKit             |
| Backend (demo) | Node.js                                  |
| Build Tools    | Vite / Next.js (depending on the branch) |

---

# 📦 **Project Modules**

This demo showcases the structural foundation of the full platform.

---

## **1. Trade**

* Live token prices, 24h stats
* Trading history & open positions
* Token selection and swap UI
* Leverage UI components
* Future-ready architecture for on-chain execution

---

## **2. Dashboard**

* Ecosystem metrics (Volume, OI, LP stats)
* Governance token data (UTX / ULP)
* Index composition visualizations

---

## **3. Earn**

* Stake / Unstake / Claim interactions
* Reward balances & vesting states
* Pool stats & APR displays

---

## **4. Buy**

* Purchase entry page for UTX / ULP
* Decentralized & centralized purchase options

---

## **5. Social**

Core SocialFi functionality:

* Wallet-linked profiles
* Achievements, badges, reputation
* Follow/copy trader views
* Community governance (proposals/voting)
* Leaderboards & social challenges
* DID-powered messaging

---

## **6. Game (Enhanced)** 🎮

A modular gaming engine designed to improve engagement and SocialFi retention.
Includes real-time, PvP, strategic, and casual game components.

### **Supported / Planned Game Modes**

* **Turn-Based Strategy Mini-Games**
  Light strategy games where users compete for XP or tokenized rewards.
  
* **Chess (PvP)**
  Classic 1v1 chess matches tied to on-chain identity & ranking.

* **Daily Quests & Missions**
  Simple task-based challenges for XP, badges, or NFT rewards.

* **Spin-to-Earn (Probability Mini-Games)**
  Fun, lightweight reward mechanics (demo-only, non-gambling).

* **Seasonal Leaderboards**
  Competitive rankings tied to in-game performance.

* **Avatar / NFT-Based Games (Future)**
  Characters, skins, or boosters that integrate with the SocialFi identity layer.

The gaming layer is intentionally flexible so contributors can add new modes or mechanics.

---

# 🗂️ **About This Demo**

This repository is a **UI + logic prototype**, not a production build.
Its purpose is to:

* Showcase the platform’s UX structure
* Provide a reference architecture for future smart contract integration
* Allow contributors to experiment with modules
* Enable rapid hiring tests, demos, and developer onboarding

Upcoming planned features:

* Multi-chain support (ETH, FTM, Polygon, Arbitrum, etc.)
* Stablecoin support (USDT, USDC)
* NFT-based identity
* Real staking engine & governance contracts
* On-chain social graph
* Modular game engine extensions

---

# 🤝 **Contributing**

We welcome contributions from Web2, Web3, game, and open-source developers.

### **Ways to Contribute**

* Improve UI components
* Add new game modules
* Enhance Web3 integrations (Wagmi)
* Write documentation
* Refactor and optimize architecture

### **Contribution Steps**

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a pull request

---

# 📄 **License**

MIT License.
Feel free to use and modify this demo with attribution.