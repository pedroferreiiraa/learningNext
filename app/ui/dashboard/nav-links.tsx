'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [showReportsSubmenu, setShowReportsSubmenu] = useState(false);

  const toggleReportsSubmenu = () => {
    setShowReportsSubmenu(!showReportsSubmenu);
  };

  return (
    <div className="w-62 bg-gray-100 p-4 shadow-md font-mono">
      <ul>
        <li className="mb-2 font-mono">
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        </li>
        <li className="relative">
          <button onClick={toggleReportsSubmenu} className="flex justify-between w-full text-left text-gray-700 hover:text-blue-500 font-mono">
            Relatórios
          </button>
          {showReportsSubmenu && (
            <ul className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md font-mono">
              <li className='font-mono'>
                <Link href="/relatorios/pedidos" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-mono">Pedidos </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Adicione mais itens de menu conforme necessário */}
      </ul>
    </div>
  );
};

export default Sidebar;