"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';

const TopNav = () => (
  <nav className="bg-gray-800 text-white p-4 flex items-center">
    <NextImage
      src="https://loremicon.com/ngon/128/128/871120518629/jpg"
      alt="Logo"
      width={50}
      height={50}
      className="mr-4 rounded-full"
    />
    <h1 className="text-2xl font-bold">WTF is Chain Abstraction</h1>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p><a target='_blank' href="https://www.x.com/n_zee">@n_zee</a></p>
  </footer>
);

const CompanyBox = ({ company, onSelect }) => (
  <div 
    className="bg-white p-2 rounded cursor-pointer hover:bg-gray-100 transition-colors"
    onClick={() => onSelect(company)}
  >
    <div className="w-full h-12  flex items-center justify-center text-gray-600">
    <NextImage
      src={company.logo}
      alt="Logo"
      width={50}
      height={50}
      className="mr-4 rounded-full"
    />
    </div>
  </div>
);

const CategoryBox = ({ title, color, companies, onSelectCompany }) => (
  <div className={`bg-${color}-100 p-4 rounded-lg`}>
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-2">
      {companies.map((company, index) => (
        <CompanyBox key={index} company={company} onSelect={onSelectCompany} />
      ))}
    </div>
  </div>
);

const Sidebar = ({ categories, onSelectCompany }) => (
  <div className="w-64 bg-white shadow-lg overflow-y-auto p-4">
    <h2 className="text-xl font-bold mb-4">CAKE Layers</h2>
    <div className="space-y-4">
      {Object.entries(categories).map(([category, { color, companies }]) => (
        <CategoryBox 
          key={category}
          title={category}
          color={color}
          companies={companies}
          onSelectCompany={onSelectCompany}
        />
      ))}
    </div>
  </div>
);

const Content = ({ company }) => {
  if (!company) {
    return <p>Select a company from the sidebar to view details.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
      
      <p className="mb-4">{company.tldr}</p>
      <h3 className=" mb-4">Problem being solved: {company.problem}</h3>
      <h3 className=" mb-4">How: {company.how}</h3>
      <h3 className="text-xl font-semibold mb-2">Key Features/Innovation:</h3>
      <ul className="list-disc list-inside">
        {company.features.map((feature, index) => (
          <li className="mb-2" key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const NextJsSidebarDemo = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const categories = {
    'Permission Layer' : {
      color: 'blue',
      companies: [
        { name: 'Near', logo:'https://pbs.twimg.com/profile_images/1809571361431425024/9RTTZYzz_400x400.jpg', 
          tldr: 'NEAR is the chain abstraction stack, empowering builders to create apps that scale to billions of users and across all blockchains.', 
          problem: 'Liquidity is fragmented across various accounts in various chains', 
          how: 'Chain Signatures : multi-chain signature service that allows users to use their NEAR Account to sign transactions in other chains', 
          features: ['Fast-Auth: Users only need to provide an email address to create a NEAR account. Using the same email address the user will be able to use their account across applications and devices.', 
                    'Meta Transactions: Allows users to execute transactions on NEAR without owning any gas or tokens.', 
                    'Chain Signatures: Leverages Multi-Party Computation (MPC) and a distributed network of node operators to create joint signatures from arbitrary payloads, allowing NEAR users to control external blockchain accounts.']
        },
        { name: 'Particle Network', logo:'https://pbs.twimg.com/profile_images/1623919818108997633/o2JfMaqi_400x400.png', 
          tldr: 'An L1 unifying all chains. One account, one balance, any chain', 
          problem: 'Liquidity is fragmented across various accounts in various chains', 
          how: "Universal Accounts aggregates users' balances across all chains and executes atomic cross-chain transactions and swaps to fulfill users' goals as needed, coordinated by the Particle Network L1", 
          features: ['Universal Accounts: UAs are ERC-4337 smart accounts attached to a pre-existing EOA (externally owned address), unifying token balances across multiple chains by automatically routing and executing atomic cross-chain transactions', 
                    "Universal Liquidity: Using Particle's distributed network of Bundler nodes, specialized services initiating the necessary steps for the execution of a UserOp, such as swapping or pulling liquidity from pools.", 
                    "Universal Gas: Enables user to pay gas fees in any token on any chain leveraging Particle's native Paymaster contract"]
        },

        { name: 'Okto', logo:'https://pbs.twimg.com/profile_images/1650407904036687874/Ek5Q2hla_400x400.png', 
        tldr: 'Full stack chain abstraction offering to developers', 
        problem: 'User onbaording, Liquidity fragmentation, Lack of rails to interact across various ecosystems and chains', 
        how: "Okto chain as a dev middleware chain allowing builders to leverage thier decentralized wallet network and decentralized transaction network enabling trustless execution of intents", 
        features: ['Decentralized Wallet Network : Creates a MPC AVS powered smart accounts to interact with any chain. Permissions module for each app to request delegated custody enabling web2 usecases', 
                  "Decentralized Auth Relayed: Offering an initiative user onboarding with social logins to passkeys", 
                  "Decentralized Transaction Network: Paradigm called Blocs that developers can leverage to build complex usecases and solver VMs ensuring validity of those transactions"]
      },
      ]
    },
    'Solver Layer': {
      color: 'green',
      companies: [
        { name: 'Anoma', logo:'https://pbs.twimg.com/profile_images/1650438493082976256/undnqou3_400x400.jpg', 
          tldr: 'Building an Intent Machine that takes an intent, computes valid possible state transitions and updates the system state if some criterion is met', 
          problem: 'There are many VMs(Ex: EVM, SVM) but no system exists that can take in an arbitrary intent such as for example “if weather is nice in Paris, I would like to buy 0.01 ETH.', 
          how: "They propose segregation of execution and intents. Currently users have to approve and sign on execution state transitions where as Anoma is building an Intent Machine that takes a batch of intents, computes valid possible state transitions, selects one according to some criterion and updates the system state. They call this ARM (Anoma Resource Machine)", 
          features: ['Taiga: Counter party solver discovery', 
                    "vampIR: Generic ZK circuit generator"]
        },
        { name: 'Everclear', logo:'https://pbs.twimg.com/profile_images/1797642092996710401/ISl0DPAo_400x400.jpg', 
          tldr: 'The Clearing Layer is the foundation of the Chain Abstraction stack, powering optimal liquidity for intent protocols & solvers. Cuts cost/complexity of rebalancing solver liquidity by upto 10x', 
          problem: 'Bridges find it increasingly difficult to main adequate funds across various chains giving protocols with higher capital an upper hand', 
          how: "By netting the bidirectional flows in the market today, Everclear reduces costs for users, solvers, and bridges by up to 10x.", 
          features: ['Permissionless Chain Expansion: Chains can be added to Everclear permissionlessly by deploying connections to transport protocols like Hyperlane', 
                    "Effortless Rebalancing: Solvers can programmatically choose their repayment method, eliminating the costs and complexities of interchain rebalancing.",
                    'Programmable Settlement: Developers can deploy strategies for optimal netting and settlement as Solidity contracts on Everclear, earning a portion of Solver settlement fees.']
        },
        { name: 'Enso', logo:'https://pbs.twimg.com/profile_images/1795443155015184384/EeDEvFuQ_400x400.jpg', 
          tldr: 'Enso is the connectivity layer of crypto. Connecting all ecosystems within one network, enabling application developers and users to express their desired outcome as an intent, allowing truly composable applications to be built without the necessity of building manual integrations. ', 
          problem: "Developers before using Enso were required to manually integrate blockchain frameworks, and write smart contracts to interact with other smart contracts, understand each smart contract’s nuances and build customized infrastructure to maintain their integration. This process is time-consuming, error-prone, and requires a deep understanding of the underlying blockchain framework where the smart contract’s are deployed.", 
          how: "By providing a unified API for interacting with the broader DeFi ecosystem across various chains and ecosystems.", 
          features: ['Action provider: Action providers are developers who publish smart contract abstractions on the Enso Network. These abstractions are used by Graphers to build algorithms that solve consumer requests. Action providers are incentivized to create high-quality abstractions that are secure, efficient, and easy to use.', 
                    "Graphers: Graphers build algorithms to solve consumer requests by combining smart contract abstractions into executable byte-code. They continuously seek optimal solutions, as only the best one is selected for execution. Graphers work with validators and action providers to ensure solution accuracy and validity, maintaining a comprehensive map of smart contract interactions across blockchains.",
                    'Validators: Validators secure the Enso network by accepting valid consumer requests, authenticating abstractions contributed, and determining the winning solution provided by the Graphers.']
        },
      ]
    },
    'Settlement Layer': {
      color: 'purple',
      companies: [
        { name: 'Hyperlane', logo:'https://pbs.twimg.com/profile_images/1671589406816313345/wGzRPeEf_400x400.jpg', 
        tldr: 'Hyperlane is a permissionless interoperability layer that allows smart contract developers to send arbitrary data between blockchains.', 
        problem: "There will be many many L2 Chains but what use are these internet computers(chains), if they dont talk to each other.", 
        how: "Hyperlane takes a modular approach to security, allowing applications to configure and choose from a selection of Interchain Security Modules (ISMs). Applications may specify an ISM to customize the security model that secures their integration with the Hyperlane messaging interface.", 
        features: ['Interchain Security Module: Bespoke set of validations(zk to multisig) for the message to passed along to the destination chain. On the destination chain customize security requirements based on the value of the txn.', 
                  "Hyperlane AVS: Crypto Economic security",
                  'Warp Route: Allows a particular token to be moved between chains according to a security model specified by the deployer. Each warp route requires for a smart contract present across all chain these assets can travel.']
      },
      { name: 'LayerZero', logo:'https://pbs.twimg.com/profile_images/1779646801605242880/FrFssPAQ_400x400.jpg', 
        tldr: 'an omnichain interoperability protocol.', 
        problem: "...", 
        how: "...", 
        features: ['...', 
                  "...",
                  '...']
      },
      ]
    },
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar categories={categories} onSelectCompany={setSelectedCompany} />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <Content company={selectedCompany} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default NextJsSidebarDemo;