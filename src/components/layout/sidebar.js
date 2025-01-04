'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  CreditCard,
  Settings,
  PieChart,
  Users,
  Receipt,
  UserCircle,
  TrendingUp,
  Banknote,
  Briefcase,
  Crown,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Receipt, label: 'Transactions', href: '/transactions' },
  { icon: UserCircle, label: 'Accounts', href: '/accounts' },
  { icon: TrendingUp, label: 'Investments', href: '/investments' },
  { icon: CreditCard, label: 'Credit Cards', href: '/dashboard/cards' },
  { icon: Banknote, label: 'Loans', href: '/loans' },
  { icon: Briefcase, label: 'Services', href: '/services' },
  { icon: Crown, label: 'My Privileges', href: '/privileges' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-button');
      
      if (isOpen && sidebar && hamburger && 
          !sidebar.contains(event.target) && 
          !hamburger.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        id="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white md:hidden shadow-lg hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={cn(
          "fixed top-0 left-0 h-screen w-64 bg-white z-40 transition-transform duration-300 ease-in-out transform",
          "border-r flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">Soar Task</h1>
        </div>

        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700",
                    "hover:bg-gray-100 hover:text-gray-900 transition-colors",
                    "active:bg-gray-200"
                  )}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <link.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional: Bottom Section */}
        <div className="p-4 border-t">
          <p className="text-sm text-gray-500">© 2024 Soar Task</p>
        </div>
      </div>

      {/* Remove main content wrapper as it's now in layout */}
    </>
  );
};

export default Sidebar;