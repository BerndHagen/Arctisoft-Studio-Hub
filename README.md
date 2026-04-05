<p align="center">
  <img src="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/hub-logo.png" alt="Arctisoft Studio Hub Logo" width="128" />
</p>
<h1 align="center">Arctisoft Studio Hub — Account, License & App Management</h1>
<p align="center">
  <b>Manage your Arctisoft Studio account, licenses and applications from a single desktop interface.</b><br>
  <b>Install, launch, update and organize all your tools in one unified hub.</b>
</p>
<p align="center">
  <a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/releases"><img src="https://img.shields.io/github/v/release/BerndHagen/Arctisoft-Studio-Hub?include_prereleases&style=flat-square&color=CD853F" alt="Latest Release"></a>&nbsp;&nbsp;<a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red?style=flat-square" alt="License"></a>&nbsp;&nbsp;<img src="https://img.shields.io/badge/Electron-41-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron">&nbsp;&nbsp;<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React">&nbsp;&nbsp;<img src="https://img.shields.io/badge/Platform-Windows-0078D6?style=flat-square" alt="Platform">&nbsp;&nbsp;<img src="https://img.shields.io/badge/Architecture-x64-lightgrey?style=flat-square" alt="Architecture">&nbsp;&nbsp;<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" alt="Status">
</p>

**Arctisoft Studio Hub** is a centralized desktop application for managing your **Arctisoft Studio** account, product licenses and all companion applications from a single interface. It provides a unified dashboard where you can install, launch and update **Medio**, **WaveShaper** and **MetaEdit+** with built-in license redemption, purchase history with invoice generation, two-factor authentication, SSO sign-in, guest browsing and a live release notes feed. The Hub is built with Electron and React, connecting to a secure cloud backend for authentication, license validation and account management while using the GitHub Releases API to deliver application updates. A shared encrypted session file allows all Arctisoft Studio applications to share a single sign-in.

### **Key Features**

- **Centralized Dashboard:** Personalized account overview with greeting, level and XP progress, account tier display, quick-launch cards for all installed applications and a live news feed aggregating release notes from all product repositories.
- **Application Library:** Install, launch, update and uninstall Medio, WaveShaper and MetaEdit+ from one interface with version tracking, disk usage monitoring and last launch timestamps.
- **License Management:** Redeem and manage license keys with per-product activation tracking. Premium keys unlock features across the entire Arctisoft Studio suite.
- **Purchase History:** View all past transactions with product details, amounts and associated license keys. Generate printable PDF invoices directly from the Hub.
- **Secure Authentication:** Sign in with email and password, Google SSO or GitHub SSO. Supports two-factor authentication (TOTP) with QR code enrollment and recovery.
- **Guest Mode:** Browse the Library, Plans, Release Notes, Help and Legal pages without signing in. Create an account at any time to unlock all features.
- **Shared Session:** Sign in once and your session is shared across the Hub, Medio and WaveShaper via an encrypted local session file.
- **Account Settings:** Full control over your profile including avatar upload, email change, password update, preferences configuration and activity log.
- **Plans and Pricing:** Side-by-side feature comparison tables for all products with Basic and Premium tiers.
- **Release Notes:** Aggregated version history from all product repositories with product filtering and color-coded entries.
- **System Tray Integration:** Minimize to tray for persistent background operation with configurable launch-on-startup behavior.
- **Auto-Updates:** The Hub checks for its own updates on launch and downloads new versions automatically.

### **Managed Applications**

Three applications are managed through the Hub, all installed to `%LOCALAPPDATA%\Arctisoft-Studio\`:

- **Medio** — Universal Downloader. Download video and audio from 1,000+ platforms with hardware-accelerated encoding up to 8K resolution. (€7.99 · Freemium)
- **WaveShaper** — Audio Processing Studio. Professional audio processing with 10-band parametric EQ, multi-effects chain, dynamic compression and a complete mastering suite. (€14.99 · Freemium)
- **MetaEdit+** — Smart Tag Editor. Batch audio metadata editor supporting 13 formats and 18 tag fields with auto-tag engine and cover art lookup. (100% Free)

## **Table of Contents**

1. [System Requirements](#system-requirements)
   - [Minimum Requirements](#minimum-requirements)
   - [Recommended Requirements](#recommended-requirements)
2. [Third-Party Libraries](#third-party-libraries)
   - [Electron](#electron)
   - [React](#react)
   - [Vite](#vite)
   - [Additional Information](#additional-information)
3. [Dashboard](#dashboard)
   - [Account Overview](#account-overview)
   - [News Feed](#news-feed)
4. [Application Library](#application-library)
   - [Installing Applications](#installing-applications)
   - [Updating Applications](#updating-applications)
   - [Managing Applications](#managing-applications)
5. [License Management](#license-management)
   - [Redeeming a License Key](#redeeming-a-license-key)
   - [Viewing Your Licenses](#viewing-your-licenses)
6. [Purchases](#purchases)
   - [Purchase History](#purchase-history)
   - [Invoice Generation](#invoice-generation)
7. [Plans and Pricing](#plans-and-pricing)
8. [Settings and Account](#settings-and-account)
   - [Profile](#profile)
   - [Preferences](#preferences)
   - [Security](#security)
   - [Data and Activity](#data-and-activity)
   - [About](#about)
9. [Authentication](#authentication)
   - [Sign-In Methods](#sign-in-methods)
   - [Guest Mode](#guest-mode)
   - [Two-Factor Authentication](#two-factor-authentication)
   - [Shared Session](#shared-session)
10. [Release Notes](#release-notes)
11. [Help and FAQ](#help-and-faq)
12. [Legal](#legal)
13. [Getting Started Guide](#getting-started-guide)
    - [Step 1: Install the Hub](#step-1-install-the-hub)
    - [Step 2: Create an Account or Sign In](#step-2-create-an-account-or-sign-in)
    - [Step 3: Install Your Applications](#step-3-install-your-applications)
    - [Step 4: Activate Premium Features](#step-4-activate-premium-features)
14. [Copyright](#copyright)
15. [Screenshots](#screenshots)

## **System Requirements**

### **Minimum Requirements**
- **Operating System:** Windows 10 (64-bit)
- **Processor:** Dual-core 1.6 GHz or equivalent
- **RAM:** 4 GB
- **Storage:** 200 MB of free disk space plus additional space for managed applications
- **Display:** 1280 × 720 resolution
- **Internet:** Required for authentication, license management and application updates

### **Recommended Requirements**
- **Operating System:** Windows 10/11 (64-bit)
- **Processor:** Quad-core 2.0 GHz or higher
- **RAM:** 8 GB or higher
- **Storage:** 500 MB of free disk space on SSD plus additional space for managed applications
- **Display:** 1920 × 1080 resolution
- **Internet:** Broadband connection for fast application downloads and updates

## **Third-Party Libraries**

Arctisoft Studio Hub is built on the following open-source technologies.

### Electron

**Electron** provides the cross-platform desktop application framework, combining Chromium and Node.js to deliver a native Windows experience. It handles window management, system tray integration, IPC communication, file system operations and the auto-update mechanism.

- **Version:** 41.x
- **Website:** [Electron Official Website](https://www.electronjs.org/)
- **License:** Electron is licensed under the MIT License.

### React

**React** powers the entire user interface with a component-based architecture. Combined with React Router for client-side navigation, it provides the dashboard, library, settings and all other pages within the single-window application.

- **Version:** 19.x
- **Website:** [React Official Website](https://react.dev/)
- **License:** React is licensed under the MIT License.

### Vite

**Vite** serves as the build tool and development server, providing fast hot module replacement during development and optimized production builds. The `vite-plugin-electron` integration enables seamless Electron development with Vite.

- **Version:** 6.x
- **Website:** [Vite Official Website](https://vite.dev/)
- **License:** Vite is licensed under the MIT License.

### Additional Information

For more details about these libraries, including their capabilities and licensing, check their official documentation. If you have questions or issues, please [open an issue](https://github.com/BerndHagen/Arctisoft-Studio-Hub/issues) on GitHub.

## **Dashboard**

The Dashboard is the first page you see after signing in. It provides a personalized overview of your Arctisoft Studio account.

### **Account Overview**

The top section displays a greeting with your username, current account level and XP progress bar, account tier (Basic or Premium) and membership duration. Quick-launch cards for each installed application let you open them directly from the dashboard without navigating to the Library.

The level and XP system mirrors the progression used across all Arctisoft Studio applications. Experience is earned through usage and activities, with each level requiring progressively more XP to advance.

### **News Feed**

The lower section aggregates the latest release notes from all product repositories (Medio, WaveShaper, MetaEdit+). Each entry shows the product name, version number, release date and a summary of changes. Clicking an entry opens the full release notes in a detail view. This keeps you informed about new features, bug fixes and updates across the entire suite without leaving the Hub.

## **Application Library**

The Library page is the central place to manage all Arctisoft Studio applications. Each application is displayed as a card showing its name, tagline, current installed version, latest available version, disk usage and last launch time.

### **Installing Applications**

To install an application for the first time:

1. Navigate to the **Library** page
2. Find the application card (Medio, WaveShaper or MetaEdit+)
3. Click the **Install** button
4. The Hub downloads the latest release from GitHub and runs the installer
5. Once complete, the card updates to show the installed version and a **Launch** button

All applications are installed to `%LOCALAPPDATA%\Arctisoft-Studio\` with dedicated subdirectories:
- `Medio - Universal Downloader`
- `WaveShaper - Audio Processing Studio`
- `MetaEdit Plus - Smart Tag Editor`

### **Updating Applications**

When a new version is available, the application card shows an **Update** button with the latest version number. Clicking it downloads the update and applies it automatically. The Hub checks for updates on launch and caches release information to avoid excessive API calls.

### **Managing Applications**

From each application card you can:
- **Launch** the application directly
- **Uninstall** to remove the application and free disk space
- **View** detailed information including features and pricing

## **License Management**

The Licenses page handles all license key operations for your account.

### **Redeeming a License Key**

To activate a premium license:

1. Navigate to the **Licenses** page
2. Enter your license key in the redemption field
3. Click **Redeem** — the system validates the key format, checks availability and links it to your account
4. On success, the license appears in your list and premium features are unlocked immediately

The redemption process includes format validation, duplicate detection and clear error messaging if the key is invalid or already claimed.

### **Viewing Your Licenses**

All redeemed licenses are displayed in a list showing:
- **Product** — which application the license applies to (with color-coded indicator)
- **License Key** — the full key string
- **Activation Date** — when the license was redeemed
- **Status** — current license state

Each Arctisoft Studio product has its own independent license key. A Medio Premium key unlocks Medio features; a WaveShaper Premium key unlocks WaveShaper features. MetaEdit+ is completely free with no license required. All licenses are one-time lifetime purchases managed through the Hub.

## **Purchases**

The Purchases page provides a complete record of all transactions linked to your account.

### **Purchase History**

Each purchase entry displays:
- **Product** — which application the purchase applies to (with product icon and color coding)
- **Amount** — the purchase price and currency
- **License Key** — the associated key (masked by default, expandable to view full key)
- **Date** — when the purchase was completed

A summary at the top shows the total number of purchases and total amount spent across all products.

### **Invoice Generation**

From each purchase entry you can generate a printable PDF invoice. Invoices include full Arctisoft Studio branding, invoice number, customer details, product line items with pricing and the associated license key. The PDF is generated locally and saved through a system file dialog.

## **Plans and Pricing**

The Plans page provides a detailed side-by-side comparison of Basic (Free) and Premium features for each product. Feature tables are organized by product (Medio, WaveShaper, MetaEdit+) with checkmarks and crosses indicating availability per tier.

This page helps you understand exactly what each license tier includes before purchasing. It links directly to the purchase flow for seamless upgrades.

## **Settings and Account**

The Settings page is organized into five tabs providing full control over your account.

### **Profile**

View and manage your account information:
- **Avatar** — Upload, change or remove your profile picture
- **Email** — Update your account email address with verification
- **Account Info** — View your license count, purchase count and membership details

### **Preferences**

Configure Hub behavior:
- **Auto Update** — Automatically check for and install Hub updates
- **Launch on Startup** — Start the Hub when Windows boots
- **Minimize to Tray** — Keep the Hub running in the system tray when closed
- **Check for Updates** — Periodically check for application updates in the background
- **Show Notifications** — Display desktop notifications for updates and events

### **Security**

Manage authentication and access:
- **Change Password** — Update your account password with confirmation
- **Two-Factor Authentication** — Enable or disable TOTP-based 2FA with QR code enrollment
- **Sign Out All Sessions** — Revoke all active sessions across devices

### **Data and Activity**

View account activity and manage your data:
- **Activity Log** — Timeline of account events including logins, license activations and profile changes
- **Delete Account** — Permanently remove your account and all associated data with confirmation safeguard

### **About**

View product information and access legal documentation:
- **Hub Version** — Current installed version and platform details
- **Applications** — Overview of all Arctisoft Studio products with their licensing model and pricing
- **Legal** — Quick links to the Privacy Policy, Terms of Service and License Agreement

## **Authentication**

### **Sign-In Methods**

The Hub supports three authentication methods:
- **Email and Password** — Traditional sign-in with email verification for new accounts
- **Google SSO** — One-click sign-in with your Google account
- **GitHub SSO** — One-click sign-in with your GitHub account

SSO providers open in a separate popup window so the main Hub interface is never navigated away. New users can create an account directly from the sign-in page. A password reset flow is available for forgotten credentials.

### **Guest Mode**

The Hub supports a Guest Mode for users who want to browse before creating an account. Guests can access the Application Library, Plans, Release Notes, Help and Legal pages. Features that require an account (Dashboard, Licenses, Purchases, Settings) redirect guests to the Library. Guest mode can be exited at any time by signing in.

### **Two-Factor Authentication**

The Hub supports TOTP-based two-factor authentication for enhanced security:

1. Navigate to **Settings → Security**
2. Click **Enable 2FA** to begin enrollment
3. Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.) or enter the secret manually
4. Enter the 6-digit verification code to confirm enrollment
5. On future sign-ins, you will be prompted for a code after entering your password

To disable 2FA, enter a valid verification code in the disable confirmation dialog.

### **Shared Session**

The Hub shares a single authentication session with all managed applications. When you sign in through the Hub, your session tokens are encrypted using AES-256-CBC and stored in a shared session file at `%LOCALAPPDATA%\Arctisoft-Studio\session.dat`. Medio, WaveShaper and the Hub all read from this file, so signing in once grants access across the entire suite. Signing out from any application clears the shared session.

## **Release Notes**

The Release Notes page aggregates version history from all Arctisoft Studio product repositories. Releases are fetched from the GitHub API and cached to minimize API calls, then displayed in reverse chronological order with product-specific color coding. You can filter by product (Medio, WaveShaper, MetaEdit+, Hub) to focus on a single application. Each entry shows the version tag, release date and a formatted changelog with headings and bullet points.

## **Help and FAQ**

The Help page provides answers to frequently asked questions organized into four categories: General, Applications, Licenses and Account. A search bar lets you filter questions by keyword. At the bottom of the page, a diagnostics section lets you copy system information to the clipboard for including in support requests.

## **Legal**

The Legal page contains three tabs:
- **Privacy Policy** — Explains what data is collected, how it is stored and your rights. Arctisoft collects no telemetry, analytics or behavioral tracking. Payment processing is handled by Stripe.
- **Terms of Service** — Rules and conditions for using Arctisoft Studio products and services.
- **License Agreement** — End-user license agreement covering software usage, modification restrictions and liability limitations.

## **Getting Started Guide**

### **Step 1: Install the Hub**

1. Download the latest installer from the [Releases](https://github.com/BerndHagen/Arctisoft-Studio-Hub/releases) page
2. Run the installer and follow the setup wizard
3. Launch **Arctisoft Studio Hub** from your desktop or Start menu

### **Step 2: Create an Account or Sign In**

1. On the login screen, choose **Create Account** or sign in with an existing account
2. You can sign in with email and password, Google or GitHub
3. Verify your email if creating a new account
4. Optionally enable two-factor authentication in Settings → Security

### **Step 3: Install Your Applications**

1. Navigate to the **Library** page
2. Click **Install** on any application card to download and install it
3. Once installed, click **Launch** to open the application directly from the Hub
4. The Hub will notify you when updates are available

### **Step 4: Activate Premium Features**

1. Purchase a Premium license from the **Plans** page or the Arctisoft Studio website
2. Navigate to the **Licenses** page
3. Enter your license key and click **Redeem**
4. Premium features are unlocked immediately across all Arctisoft Studio applications

## **Copyright**

This software is the intellectual property of the Author and is protected by international copyright laws.

1. **License:** You are granted a non-exclusive, non-transferable license to use the software for personal purposes.

2. **Modifications Prohibited:** Modification, decompiling, reverse-engineering or derivative work is prohibited without prior written consent.

3. **Attribution:** When redistributing, appropriate credit to the Author is required, including a link to the original source.

4. **Third-Party Libraries:** Arctisoft Studio Hub uses Electron (MIT), React (MIT), React Router (MIT), Vite (MIT), TypeScript (Apache 2.0) and Electron Builder (MIT). Please review and comply with their respective licenses.

5. **Warranty Disclaimer:** Arctisoft Studio Hub is provided *"as is,"* without warranties of any kind. The Author assumes no liability for damages resulting from use.

6. **Limitation of Liability:** The Author is not responsible for any indirect, special, incidental or consequential damages arising from use of the software.

7. **Termination:** The license may be terminated if these terms are violated. Upon termination, all use must cease and copies deleted.

By using Arctisoft Studio Hub, you agree to these terms and conditions.

## **Screenshots**

Preview the Arctisoft Studio Hub interface before downloading. Note that future updates may introduce additional functionality.

> Screenshots will be added once the application interface is finalized.

<!--
<table>
  <tr>
    <th>Arctisoft Studio Hub - Dashboard</th>
    <th>Arctisoft Studio Hub - Library</th>
  </tr>
  <tr>
    <td><a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-dashboard.png"><img src="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-dashboard.png" alt="Hub Dashboard" width="450"></a></td>
    <td><a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-library.png"><img src="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-library.png" alt="Hub Library" width="450"></a></td>
  </tr>
  <tr>
    <th>Arctisoft Studio Hub - Licenses</th>
    <th>Arctisoft Studio Hub - Settings</th>
  </tr>
  <tr>
    <td><a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-licenses.png"><img src="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-licenses.png" alt="Hub Licenses" width="450"></a></td>
    <td><a href="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-settings.png"><img src="https://github.com/BerndHagen/Arctisoft-Studio-Hub/raw/main/images/img-hub-settings.png" alt="Hub Settings" width="450"></a></td>
  </tr>
</table>
-->