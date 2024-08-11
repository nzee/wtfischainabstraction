"use client";

import React, { useState } from 'react';

const TopNav = () => (
  <nav className="bg-gray-800 text-white p-4">
    <h1 className="text-2xl font-bold">WTF is Chain Abstraction</h1>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 Chain Abstraction. All rights reserved.</p>
  </footer>
);

const CompanyBox = ({ company, onSelect }) => (
  <div 
    className="bg-white p-2 rounded cursor-pointer hover:bg-gray-100 transition-colors"
    onClick={() => onSelect(company)}
  >
    <div className="w-full h-12 bg-gray-300 flex items-center justify-center text-gray-600">
      {company.name[0]}
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
    <h2 className="text-xl font-bold mb-4">Categories</h2>
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
      <p className="mb-2"><strong>Category:</strong> {company.category}</p>
      <p className="mb-4">{company.description}</p>
      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc list-inside">
        {company.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const NextJsSidebarDemo = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const categories = {
    Technology: {
      color: 'blue',
      companies: [
        { name: 'TechCorp', category: 'Technology', description: 'Leading innovation in AI and machine learning', features: ['Advanced AI algorithms', 'Cloud-based machine learning platform', 'Predictive analytics tools'] },
        { name: 'DataSys', category: 'Technology', description: 'Specializing in big data analytics', features: ['Real-time data processing', 'Custom data visualization tools', 'Scalable data storage solutions'] },
        { name: 'CloudNine', category: 'Technology', description: 'Providing cutting-edge cloud computing solutions', features: ['Multi-cloud management', 'Serverless computing services', 'Cloud security and compliance'] },
        { name: 'CyberShield', category: 'Technology', description: 'Experts in cybersecurity and network protection', features: ['Advanced threat detection', 'Zero-trust security model', 'Automated incident response'] },
      ]
    },
    Finance: {
      color: 'green',
      companies: [
        { name: 'Global Bank', category: 'Finance', description: 'International banking and financial services', features: ['Online and mobile banking', 'International money transfers', 'Investment advisory services'] },
        { name: 'InvestSmart', category: 'Finance', description: 'Investment management and financial planning', features: ['Robo-advisory platform', 'Diversified portfolio management', 'Retirement planning tools'] },
        { name: 'InsureAll', category: 'Finance', description: 'Comprehensive insurance solutions', features: ['Custom policy creation', 'Instant online quotes', 'Claims processing automation'] },
        { name: 'CryptoTrade', category: 'Finance', description: 'Leading cryptocurrency exchange platform', features: ['Multi-currency wallet', 'Real-time trading charts', 'Secure cold storage'] },
      ]
    },
    Entertainment: {
      color: 'purple',
      companies: [
        { name: 'StreamFlix', category: 'Entertainment', description: 'On-demand streaming service for movies and TV shows', features: ['Personalized recommendations', '4K HDR streaming', 'Offline viewing options'] },
        { name: 'MusicWorld', category: 'Entertainment', description: 'Global music streaming and production company', features: ['AI-powered playlists', 'High-fidelity audio streaming', 'Artist collaboration platform'] },
        { name: 'GameMaster', category: 'Entertainment', description: 'Video game development and publishing', features: ['Cross-platform game engine', 'In-game marketplace', 'Esports tournament hosting'] },
        { name: 'VirtualReality', category: 'Entertainment', description: 'Pioneers in VR and AR entertainment experiences', features: ['Immersive VR content creation', 'AR-enhanced live events', 'Virtual social spaces'] },
      ]
    },
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar categories={categories} onSelectCompany={setSelectedCompany} />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Company Directory</h2>
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