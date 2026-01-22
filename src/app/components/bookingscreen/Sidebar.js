// components/layout/Sidebar.js
'use client';
import Logo from '../../../images/Logo.svg';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from '../../../images/Logout.png';
import Dashboardd from '../../../images/Dashboardd.png';
import MyProfilee from '../../../images/MyProfilee.png';
import Historyy from '../../../images/Historyy.png';
import Reviewss from '../../../images/Reviewss.png';
import Headphonee from '../../../images/Headphonee.png';
import Setting from '../../../images/Setting.png';
import Message from '../../../images/messages.png';

export default function Sidebar() {
  const pathname = usePathname();

  // Main navigation items
  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Dashboardd
    },
    {
      name: 'My Profile',
      href: '/profile',
      icon: MyProfilee
    },
    {
      name: 'Booking History',
      href: '/bookingscreens',
      icon: Historyy
    },
    {
      name: 'Messages',
      href: '/message',
      icon: Message
    },
    {
      name: 'Payment Method',
      href: '/payment',
      icon: Reviewss
    },
    {
      name: 'Reviews',
      href: '/reviews',
      icon: Reviewss
    },
    {
      name: 'Notification',
      href: '/notification',
      icon: Reviewss
    }
  ];

  // Bottom navigation items
  const bottomNavItems = [
    {
      name: 'Customer support',
      href: '/support',
      icon: Headphonee
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Setting
    }
  ];

  // Check if link is active
  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <aside className="w-64 bg-white text-gray-900 flex flex-col h-screen sticky top-0">
      {/* Logo Section */}
      <div className="pt-12 px-6 pb-8">
        <div className="flex items-center justify-center">
          <Image
            src={Logo}
            alt="logo"
            width={104}
            height={96}
            className="w-[104px] h-[96px]"
          />
        </div>
      </div>

      {/* Navigation Items - No flex-1 so it doesn't stretch */}
      <nav className="px-6 pb-5">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all
                    ${active 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="w-5 h-5 relative">
                    <Image 
                      src={item.icon} 
                      alt={item.name}
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] object-contain"
                      
                    />
                  </div>
                  <span className="text-[16px] text-[#5C5C66]">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Spacer to push bottom section down */}
      <div className="flex-1"></div>

      {/* Bottom Section - Customer Support, Settings & Logout */}
      <div className="px-6 pb-10">
        <ul className="space-y-1 mb-1">
          {bottomNavItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all
                    ${active 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="w-5 h-5 relative">
                    <Image 
                      src={item.icon} 
                      alt={item.name}
                      width={125}
                      height={24}
                      className="w-[125px] h-[24px] object-contain"
                      
                    />
                  </div>
                  <span className="text-[16px] h-[24px] text-[#5C5C66] ">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout Button */}
        <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg text-red-500 hover:bg-red-50 transition-all">
          <Image 
            src={Logout} 
            alt="Logout"
            width={24}
            height={24}
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="text-[16px] h-[16px] text-[#D9291E]">Log Out</span>
        </button>
      </div>
    </aside>
  );
}