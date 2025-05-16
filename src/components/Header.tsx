"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import image from "next/image";

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      borderBottom: '1px solid #eaeaea',
    }}>
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>tsender</h1>
        <a
          href="https://github.com/speedyray/TSender"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <FaGithub size={24} style={{ color: '#333' }} />
        </a>
      </div>

      {/* Right Section */}
      <ConnectButton />
    </div>
  );
}