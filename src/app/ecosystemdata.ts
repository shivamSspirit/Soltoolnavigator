// app/ecosystem-data.ts
import { EcosystemCategory } from './types';

export const ecosystemData: EcosystemCategory[] = [
  {
    category: "Frameworks",
    description: "Structured environments for writing Solana programs or dApps.",
    tools: [
      { name: "Anchor", description: "Leading framework for Solana programs, simplifying development with Rust macros and security features.", tags: ["Rust", "TypeScript", "Programs", "dApps"], repo: "https://github.com/solana-foundation/anchor" },
      { name: "Seahorse", description: "Python framework that compiles to Anchor Rust for Solana program development.", tags: ["Python", "Programs"], repo: "https://github.com/ameliatastic/seahorse-lang" },
      { name: "Solang", description: "Compiler for Solidity-like code to Solana, enabling Ethereum developers to build programs.", tags: ["Programs"], repo: "https://github.com/hyperledger-solang/solang" },
      { name: "Nautilus", description: "Rust framework with SQL-like syntax for Solana programs.", tags: ["Rust", "TypeScript", "Python", "Programs"], repo: "https://github.com/nautilus-project/nautilus" },
      { name: "Gamba", description: "Framework for creating on-chain betting apps with TypeScript.", tags: ["TypeScript", "dApps", "Games"], repo: "https://github.com/gamba-labs/gamba" },
      { name: "Token Extensions", description: "Framework for advanced token functionality, like transfer fees and metadata.", tags: ["Programs", "dApps"], repo: "https://solana.com/solutions/token-extensions" },
      { name: "Magicblock's BOLT", description: "Framework for persistent on-chain games with minimal deployments.", tags: ["Programs", "dApps", "Games"], repo: "https://docs.magicblock.gg/pages/tools/bolt/introduction" },
      { name: "Gill/Kit", description: "Toolkit for Solana development (limited details).", tags: ["Programs", "dApps"], repo: "https://github.com/DecalLabs/gill" }
    ]
  },
  {
    category: "SDKs",
    description: "Libraries or kits for integrating Solana functionality into applications.",
    tools: [
      { name: "Solana Wallet Adapter", description: "TypeScript library for wallet connections in web dApps.", tags: ["TypeScript", "dApps"], repo: "https://github.com/solana-labs/wallet-adapter" },
      { name: "Solana Wallet Names", description: "Resolves wallet names (e.g., .sol) to addresses across multiple services.", tags: ["TypeScript", "dApps"], repo: "https://github.com/portalpayments/solana-wallet-names" },
      { name: "AnchorPy", description: "Python client library for interacting with Anchor programs.", tags: ["Python", "dApps"], repo: "https://github.com/kevinheavey/anchorpy" },
      { name: "Solana Unity SDK", description: "C# SDK for Unity game development, supporting wallet and transaction operations.", tags: ["C#", "C++", "Unity", "dApps", "Games"], repo: "https://github.com/magicblock-labs/Solana.Unity-SDK" },
      { name: "SolNet", description: ".NET SDK for Solana blockchain interactions.", tags: ["C#", ".NET", "dApps"], repo: "https://github.com/bmresearch/Solnet" },
      { name: "Sol4k", description: "Kotlin SDK for Solana, aimed at mobile and Java-based apps.", tags: ["Kotlin", "Java", "dApps", "Mobile"], repo: "https://github.com/sol4k/sol4k" },
      { name: "Solathon", description: "Python SDK for backend Solana applications.", tags: ["Python", "dApps"], repo: "https://github.com/SuperteamDAO/solathon" },
      { name: "EspressoCash", description: "Flutter SDK for Solana payments and dApps.", tags: ["Flutter", "dApps", "Mobile"], repo: "https://github.com/espresso-cash/espresso-cash-public" },
      { name: "Carbon", description: "Bridges Web2 game economies to Solana, supports Unreal Engine SDK.", tags: ["TypeScript", "C++", "dApps", "Games"], repo: "https://github.com/raresloth/carbon" },
      { name: "Candy Pay", description: "TypeScript SDK for mobile-native payments.", tags: ["TypeScript", "dApps", "Mobile"], repo: "https://github.com/candypay/elements" },
      { name: "Saganize", description: "Kotlin-based mobile development suite for Solana.", tags: ["Kotlin", "Java", "dApps", "Mobile"], repo: "https://github.com/SAGAnize" },
      { name: "solana-agent-kit", description: "SDK for transaction-related operations.", tags: ["dApps"], repo: "https://github.com/sendaifun/solana-agent-kit" },
      { name: "solana-app-kit", description: "SDK for general Solana app development.", tags: ["dApps"], repo: "https://github.com/SendArcade/solana-app-kit" },
      { name: "Underdog API", description: "API for dynamic NFT integration.", tags: ["API", "dApps"], repo: "https://www.underdogprotocol.com/" },
      { name: "GameShift API", description: "API for gaming integrations, including NFTs and marketplaces.", tags: ["API", "dApps", "Games"], repo: "https://docs.gameshift.dev/" },
      { name: "umi", description: "Umi is a modular framework for building and using JavaScript clients for Solana programs. It provides a zero-dependency library that defines a set of core interfaces that libraries can rely on without being tied to a specific implementation.", tags: ["sdk", "nft", "metaplex"], repo: "https://github.com/metaplex-foundation/umi" },
      {name: "kinobi", description:"Generate powerful clients for your Solana programs.Kinobi introduces a language-agnostic representation of Solana clients which can be composed of one or several programs. ", tags:["sdk", "metplex", "client-generation"], repo:"https://github.com/metaplex-foundation/kinobi"}
    ]
  },
  {
    category: "APIs and RPCs",
    description: "Tools providing data access or transaction processing services.",
    tools: [
      { name: "QuickNode", description: "High-performance Solana RPCs with global coverage and archival data.", tags: ["RPCs", "API", "Developer Tools"], repo: "https://www.quicknode.com" },
      { name: "Chainstack", description: "Web3 infrastructure with Solana RPCs and nodes.", tags: ["Nodes", "API", "Data"], repo: "https://chainstack.com/" },
      { name: "Helius", description: "Comprehensive RPCs, APIs, webhooks, and data infrastructure.", tags: ["RPCs", "API", "Developer Tools", "Compression"], repo: "https://github.com/helius-labs" },
      { name: "Nonci", description: "API and SDK for asynchronous transaction queuing with durable nonces.", tags: ["TypeScript", "SDK", "API"], repo: "https://github.com/nonci-xyz" }
    ]
  },
  {
    category: "Infrastructure",
    description: "Tools for hosting, data management, or network operations.",
    tools: [
      { name: "BlokHost", description: "Decentralized web hosting and dCDN for Solana dApps.", tags: ["dApps", "Infrastructure"], repo: "https://github.com/blokhost" },
      { name: "Tiny Dancer", description: "Light client for Solana, enabling lightweight blockchain interactions.", tags: ["dApps", "Infrastructure"], repo: "https://github.com/tinydancer-io" },
      { name: "AWS Solana Blueprints", description: "Infrastructure templates for running Solana nodes on AWS.", tags: ["Infrastructure"], repo: "https://aws.amazon.com/blogs/web3/run-solana-nodes-on-aws/" },
      { name: "Triton", description: "Platform for Solana analytics and infrastructure.", tags: ["Infrastructure"], repo: "https://triton.one/" }
    ]
  },
  {
    category: "Testing and Debugging",
    description: "Tools for testing, debugging, or validating Solana programs.",
    tools: [
      { name: "Amman", description: "Tools for testing Solana SDKs on a local validator.", tags: ["TypeScript", "Rust", "Testing"], repo: "https://github.com/metaplex-foundation/amman" },
      { name: "Bokken", description: "Debugger for Solana programs with breakpoint support.", tags: ["Programs", "Testing"], repo: "https://github.com/Blade-Labs-Corp/bokken" },
      { name: "Arsnal", description: "Debugging tools focused on Solana program analysis.", tags: ["Programs", "Testing"], repo: "https://github.com/AnishDe12020/arsnal" },
      { name: "anchor-errors", description: "TUI for exploring errors in Anchor-based Solana programs.", tags: ["Rust", "Programs", "Logging"], repo: "https://github.com/0xmukesh/anchor-errors" },
      { name: "liteSVM", description: "Lightweight Solana validator for testing environments.", tags: ["Infrastructure", "Testing"], repo: "https://www.anchor-lang.com/docs/testing/litesvm" }
    ]
  },
  {
    category: "CLI and Development Tools",
    description: "Command-line tools or utilities for development workflows.",
    tools: [
      { name: "Shank", description: "Generates IDL from Solana Native Rust programs.", tags: ["Rust", "Programs"], repo: "https://github.com/metaplex-foundation/shank" },
      { name: "Solita", description: "Generates TypeScript clients from IDL for Solana programs.", tags: ["TypeScript", "Programs", "dApps"], repo: "https://github.com/metaplex-foundation/solita" },
      { name: "npx create-solana-dapp", description: "CLI for scaffolding Solana dApps with TypeScript.", tags: ["TypeScript", "dApps"], repo: "https://github.com/solana-developers/create-solana-dapp" },
      { name: "Metaboss", description: "CLI for Metaplex NFT operations, like minting and updating.", tags: ["Rust", "CLI", "NFTs"], repo: "https://github.com/samuelvanderwaal/metaboss" },
      { name: "mucho cli", description: "Simplifies Solana program development and testing.", tags: ["CLI", "Programs"], repo: "https://www.npmjs.com/package/mucho" },
      { name: "Soda", description: "Converts JSON IDL to source code for Solana programs.", tags: ["Rust", "TypeScript", "Programs", "dApps"], repo: "https://github.com/Web3-Builders-Alliance/soda" },
      { name: "SolSync", description: "CLI for fetching and deserializing off-chain data.", tags: ["CLI", "Programs", "dApps"], repo: "https://solsync.app/" },
      { name: "SolStromm", description: "CI/CD pipeline for Solana programs and dApps.", tags: ["YAML", "Programs", "dApps", "CI/CD"], repo: "https://github.com/Adithya2907/solana-devops/" },
      { name: "Kinobi", description: "CLI for generating Solana program interfaces and clients.", tags: ["CLI", "Programs"], repo: "https://github.com/metaplex-foundation/kinobi" }
    ]
  },
  {
    category: "GUI and No-Code Tools",
    description: "Graphical or no-code interfaces for Solana development.",
    tools: [
      { name: "Xray", description: "Web-based transaction explorer for human-readable Solana transactions.", tags: ["Explorer", "Programs", "dApps"], repo: "https://github.com/helius-labs/xray" },
      { name: "Better Call Sol", description: "Web client for composing and submitting Solana transactions.", tags: ["Programs", "dApps", "GUI"], repo: "https://github.com/labeleven-dev/bettercallsol" },
      { name: "BlastCtrl Tools", description: "Web-based toolbox for token and NFT utilities.", tags: ["GUI", "Programs", "dApps"], repo: "https://github.com/BlastCtrl/blastctrl-tools" },
      { name: "SolDisperse", description: "Web-based distributor for tokens and NFTs.", tags: ["GUI", "Programs", "dApps"], repo: "https://github.com/HotKeysInc" },
      { name: "Space Operator", description: "No-code platform for diagramming and building Solana apps.", tags: ["No-Code", "Programs", "dApps"], repo: "https://github.com/space-operator" },
      { name: "Solana Playground", description: "Browser-based IDE for building and testing Solana programs.", tags: ["GUI", "Programs", "Learn"], repo: "https://beta.solpg.io/" }
    ]
  },
  {
    category: "Automation and Miscellaneous",
    description: "Tools for automation, learning, or specialized tasks.",
    tools: [
      { name: "Clockwork", description: "Smart contract automation engine for scheduling on-chain tasks.", tags: ["Rust", "Programs"], repo: "https://github.com/clockwork-xyz/clockwork" },
      { name: "Stockpile", description: "Crowdfunding tools for community projects on Solana.", tags: ["Rust", "Programs", "dApps"], repo: "https://github.com/StockpileLabs/stockpile" },
      { name: "SolCerberus", description: "Role-based security layer for on-chain data access.", tags: ["Rust", "TypeScript", "Programs", "dApps"], repo: "https://docs.solcerberus.com/" },
      { name: "Squads v4", description: "Multisig and team management platform for Solana.", tags: ["Programs", "dApps"], repo: "https://squads.so/blog/v4-and-new-squads-app" },
      { name: "Pinocchio", description: "Tool for Solana development (limited details).", tags: ["Programs"], repo: "https://github.com/anza-xyz/pinocchio" },
      { name: "Surfpool", description: "Tool for Solana development, possibly related to liquidity or DeFi.", tags: ["Programs", "dApps"], repo: "https://www.helius.dev/blog/surfpool" },
      { name: "Solana Attestation Service (SAS)", description: "Framework for attestations on Solana, enabling secure identity verification.", tags: ["Programs", "dApps"], repo: "https://attest.solana.com/" }
    ]
  }
];