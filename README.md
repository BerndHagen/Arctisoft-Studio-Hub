<div align="center">
  <img src="https://github.com/user-attachments/assets/placeholder-banner.png" alt="Arctisoft Studio Hub — Account, License & App Management" width="100%" />
  <br/><br/>
  <a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/releases"><img src="https://img.shields.io/github/v/release/BerndHagen/Arctisoft-Studio-Hub?color=blue&label=Release" alt="Release"></a>
  <img src="https://img.shields.io/badge/License-Proprietary-blue" alt="License">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron&logoColor=white" alt="Electron 41">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6?logo=windows&logoColor=white" alt="Windows">
  <img src="https://img.shields.io/badge/Architecture-x64-lightgrey" alt="x64">
</div>

## Arctisoft Studio Hub — Account, License & App Management

**Arctisoft Studio Hub** is a centralized desktop application for managing your **Arctisoft Studio** account, product licenses, and all companion applications from a single interface. It provides a unified dashboard where you can install, launch, and update **Medio**, **WaveShaper**, and **MetaEdit+** with built-in license redemption, two-factor authentication, SSO sign-in, and a live release notes feed.

- Centralized dashboard with account overview, XP system, and quick-launch for all applications
- Install, launch, and update all Arctisoft Studio applications from one unified interface
- License key redemption and management with per-product activation tracking
- Secure authentication with email/password, Google SSO, and GitHub SSO
- Two-factor authentication (TOTP) with QR code enrollment and recovery
- Live release notes feed aggregated from all product repositories
- User preferences including auto-update, launch on startup, and minimize to tray
- Activity log tracking account events and session history
- Plans and pricing comparison for all products with feature breakdowns
- System tray integration with persistent background operation

## Table of Contents

1. [System Requirements](#1-system-requirements)
2. [Third-Party Libraries](#2-third-party-libraries)
3. [Application Overview](#3-application-overview)
4. [Dashboard](#4-dashboard)
5. [Library](#5-library)
6. [Licenses](#6-licenses)
7. [Settings and Security](#7-settings-and-security)
8. [Getting Started](#8-getting-started)
9. [Screenshots](#9-screenshots)
10. [Copyright](#10-copyright)

---

## 1. System Requirements

### Minimum Requirements

| Component          | Specification                        |
|--------------------|--------------------------------------|
| **OS**             | Windows 10 (64-bit)                  |
| **Processor**      | Dual-core 1.6 GHz or equivalent      |
| **Memory**         | 4 GB RAM                             |
| **Storage**        | 200 MB available disk space           |
| **Display**        | 1280 × 720 resolution                |
| **Internet**       | Required for authentication and updates |

### Recommended Requirements

| Component          | Specification                        |
|--------------------|--------------------------------------|
| **OS**             | Windows 10/11 (64-bit)               |
| **Processor**      | Quad-core 2.0 GHz or higher          |
| **Memory**         | 8 GB RAM                             |
| **Storage**        | 500 MB available disk space           |
| **Display**        | 1920 × 1080 resolution               |
| **Internet**       | Broadband connection                  |

---

## 2. Third-Party Libraries

Arctisoft Studio Hub is built on the following open-source technologies:

| Library                | Version  | Website                                                      | License     |
|------------------------|----------|--------------------------------------------------------------|-------------|
| **Electron**           | 41.x     | [electronjs.org](https://www.electronjs.org/)                | MIT         |
| **React**              | 19.x     | [react.dev](https://react.dev/)                              | MIT         |
| **React Router**       | 7.x      | [reactrouter.com](https://reactrouter.com/)                  | MIT         |
| **Vite**               | 6.x      | [vite.dev](https://vite.dev/)                                | MIT         |
| **TypeScript**         | 5.8      | [typescriptlang.org](https://www.typescriptlang.org/)        | Apache 2.0  |
| **Supabase JS**        | 2.x      | [supabase.com](https://supabase.com/)                        | MIT         |
| **Electron Builder**   | 26.x     | [electron.build](https://www.electron.build/)                | MIT         |

---

## 3. Application Overview

Arctisoft Studio Hub serves as the central management portal for the entire **Arctisoft Studio** ecosystem. It connects to a Supabase-powered backend for authentication, license validation, and account management while using the GitHub Releases API to deliver application updates.

### Managed Applications

| Application     | Description                          | Pricing              |
|-----------------|--------------------------------------|----------------------|
| **Medio**       | Universal Downloader — download video and audio from 1,000+ platforms with GPU-accelerated encoding up to 8K resolution | €7.99 · Freemium |
| **WaveShaper**  | Audio Processing Studio — professional audio processing with 10-band EQ, multi-effects chain, compression, and a complete mastering suite | €14.99 · Freemium |
| **MetaEdit+**   | Smart Tag Editor — batch audio metadata editor supporting 13 formats and 18 tag fields with auto-tag engine and cover art lookup | 100% Free |

---

## 4. Dashboard

The **Dashboard** provides a personalized overview of your Arctisoft Studio account at a glance. It displays a greeting with your username, account level and XP progress, account tier (Basic or Premium), and how long you've been a member. Quick-launch cards for each installed application let you open them directly from the dashboard.

A **News Feed** section aggregates the latest release notes from all product repositories, keeping you informed about new features, bug fixes, and updates across the entire suite without leaving the Hub.

---

## 5. Library

The **Library** page is the central place to manage all Arctisoft Studio applications. Each app card displays the current installed version, latest available version, disk usage, and last launch time.

From the Library you can:
- **Install** applications for the first time with a single click
- **Update** to the latest version when a new release is available
- **Launch** installed applications directly
- **Uninstall** applications to free up disk space
- **View** detailed app information including features and pricing

All applications are installed to `%LOCALAPPDATA%\Arctisoft-Studio\` with dedicated subdirectories for each product.

---

## 6. Licenses

The **Licenses** page allows you to view all license keys linked to your account and redeem new ones. Each license displays the associated product, activation date, and current status.

To activate a premium license:
1. Navigate to the **Licenses** page
2. Enter your license key in the redemption field
3. The system validates and links the key to your account
4. Premium features are unlocked immediately across the corresponding application

---

## 7. Settings and Security

The **Settings** page is organized into five tabs providing full control over your account:

- **Profile** — View and manage your display name, email address, and avatar. See your license count and purchase history at a glance.
- **Preferences** — Configure Hub behavior including auto-update, launch on startup, check for updates, minimize to tray, and notification preferences.
- **Security** — Change your password, enable or disable two-factor authentication (TOTP) with QR code enrollment, and sign out of all active sessions.
- **Data** — View your activity log tracking login events, license activations, and other account actions. Permanently delete your account if needed.
- **About** — Application version information and links.

### Two-Factor Authentication

The Hub supports TOTP-based two-factor authentication. When enabled, you will be prompted for a 6-digit code from your authenticator app after entering your password. You can enroll via QR code scanning or manual secret entry.

---

## 8. Getting Started

1. Download the latest installer from the [Releases](https://github.com/BerndHagen/Arctisoft-Studio-Hub/releases) page
2. Run the installer and follow the setup wizard
3. Launch **Arctisoft Studio Hub** from your desktop or Start menu
4. Sign in with your existing account or create a new one (email, Google, or GitHub)
5. Navigate to the **Library** to install your first application
6. Redeem any license keys on the **Licenses** page to unlock premium features

---

## 9. Screenshots

> Screenshots will be added once the application interface is finalized.

<!--
<table>
  <tr>
    <td><a href=""><img src="" alt="Dashboard" width="400"/></a></td>
    <td><a href=""><img src="" alt="Library" width="400"/></a></td>
  </tr>
  <tr>
    <td><a href=""><img src="" alt="Licenses" width="400"/></a></td>
    <td><a href=""><img src="" alt="Settings" width="400"/></a></td>
  </tr>
</table>
-->

---

## 10. Copyright

This project is proprietary software developed by **Bernd Hagen**. All rights reserved. Unauthorized copying, distribution, or modification of this software is strictly prohibited. For licensing inquiries, please visit [arctisoft.de](https://arctisoft.de).