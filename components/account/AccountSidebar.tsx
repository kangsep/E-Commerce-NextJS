"use client";

import { useState } from "react";

export default function AccountSidebar() {
  const [active, setActive] = useState("profile");

  const menu = [
    {
      title: "Manage My Account",
      items: [
        { name: "My Profile", key: "profile" },
        { name: "Address Book", key: "address" },
        { name: "My Payment Options", key: "payment" },
      ],
    },
    {
      title: "My Orders",
      items: [
        { name: "My Returns", key: "returns" },
        { name: "My Cancellations", key: "cancel" },
      ],
    },
    {
      title: "My WishList",
      items: [],
    },
  ];

  return (
    <div className="space-y-6">
      {menu.map((section) => (
        <div key={section.title}>
          
          <h3 className="font-semibold mb-3">
            {section.title}
          </h3>

          <ul className="space-y-2 text-sm">
            {section.items.map((item) => (
              <li
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`cursor-pointer transition ${
                  active === item.key
                    ? "text-red-500 font-medium"
                    : "text-gray-600 hover:text-red-500"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}