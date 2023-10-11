'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import hamburger from '../components/Navbar/assets/hamburger.svg'
import Image from "next/image";


export default function SideNavHamburger() {
  return (
    <Dropdown>
      <DropdownTrigger>
      <svg className="block md:hidden cursor-pointer ml-6" width="35" height="18" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_35_860)">
            <line x1="16" y1="9" x2="43.0185" y2="9" stroke="#2E1F27" stroke-width="2"/>
            </g>
            <g filter="url(#filter1_d_35_860)">
            <line x1="16" y1="17" x2="43.0185" y2="17" stroke="#2E1F27" stroke-width="2"/>
            </g>
            <g filter="url(#filter2_d_35_860)">
            <line x1="16" y1="25" x2="43.0185" y2="25" stroke="#2E1F27" stroke-width="2"/>
            </g>
            <defs>
            <filter id="filter0_d_35_860" x="0" y="0" width="59.0186" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="8"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_860"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_860" result="shape"/>
            </filter>
            <filter id="filter1_d_35_860" x="0" y="8" width="59.0186" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="8"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_860"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_860" result="shape"/>
            </filter>
            <filter id="filter2_d_35_860" x="0" y="16" width="59.0186" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="8"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_860"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_860" result="shape"/>
            </filter>
            </defs>
        </svg>

      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="dashboard">Dashboard</DropdownItem>
        <DropdownItem key="order-history">Order History</DropdownItem>
        <DropdownItem key="all-transactions">All Transactions</DropdownItem>
        <DropdownItem key="saved-items">Saved Items</DropdownItem>
        <DropdownItem key="update-profile">Update Profile</DropdownItem>
        <DropdownItem key="logout">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
