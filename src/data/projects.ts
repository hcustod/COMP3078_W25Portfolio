import type { ImageMetadata } from 'astro';
import votingAppImg from '../assets/recentprojects/voting-app.webp';
import projectMgmtImg from '../assets/recentprojects/project-management.webp';
import inventoryMgmtImg from '../assets/recentprojects/inventory-management.webp';
import gomokuImg from '../assets/recentprojects/gomoku.webp';
import asciiRogueImg from '../assets/recentprojects/ascii-rogue.webp';
import mudGameImg from '../assets/recentprojects/mud-game.webp';
import flightReservationImg from '../assets/recentprojects/flight-reservation.webp';
import simpleChatCppImg from '../assets/recentprojects/simple-chat-cpp.webp';

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  context: string;
  tech: string[];
  image: ImageMetadata;
  code: string;
  demo?: string;
  docker?: string;
  featured: boolean;
  projectType: string;
  focusArea: string;
  timeline: string;
  role: string;
  features: string[];
  reflection: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'voting-web-app',
    title: 'Voting Web App',
    category: 'Web',
    year: 2025,
    summary: 'A PHP topic creation and voting platform with CRUD operations, user participation, and Docker packaging.',
    context: 'Independent full-stack build focused on clean CRUD workflows, lightweight deployment, and a reviewer-friendly setup.',
    tech: ['PHP', 'MySQL', 'Docker'],
    image: votingAppImg,
    demo: 'http://voting.hcustodio.com/',
    code: 'https://github.com/hcustod/topic-voting-php-webapp',
    docker: 'https://hub.docker.com/r/hcustodio/voting-app',
    featured: true,
    projectType: 'Independent build',
    focusArea: 'PHP CRUD delivery, MySQL persistence, and Docker packaging',
    timeline: '2025 build',
    role: 'Individual developer',
    features: [
      'Topic and voting workflows with persistent storage.',
      'CRUD support for discussion items and basic profile handling.',
      'Containerized deployment for easier local setup and review.',
    ],
    reflection:
      'This build sharpened my ability to connect backend logic, relational persistence, and deployment packaging into a single polished project.',
  },
  {
    slug: 'project-management-system',
    title: 'Project Management System',
    category: 'Web',
    year: 2025,
    summary: 'An ASP.NET Core MVC system for managing projects, tasks, users, and role-based workflows.',
    context: 'Independent product-style build emphasizing layered application structure, business workflow organization, and role-aware UX.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: projectMgmtImg,
    code: 'https://github.com/hcustod/project-management-system',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/project-management-system/general',
    featured: true,
    projectType: 'Independent build',
    focusArea: 'MVC architecture, relational modeling, and role-based workflows',
    timeline: '2025 build',
    role: 'Individual developer',
    features: [
      'Project and task management flows backed by PostgreSQL.',
      'User and role administration within an MVC structure.',
      'Container-ready delivery path for consistent testing and review.',
    ],
    reflection:
      'This project helped me practice turning loosely defined workflow ideas into a structured application with clearer entities, permissions, and delivery boundaries.',
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Web',
    year: 2025,
    summary: 'A database-driven ASP.NET Core MVC app for products, stock movement, orders, and inventory visibility.',
    context: 'Independent systems build centered on data modeling, validation, stock tracking logic, and admin-style interfaces.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: inventoryMgmtImg,
    code: 'https://github.com/hcustod/inventory-management-system',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/inventory-management-system/general',
    featured: true,
    projectType: 'Independent build',
    focusArea: 'Operational data accuracy, server-rendered workflows, and stock movement logic',
    timeline: '2025 build',
    role: 'Individual developer',
    features: [
      'Inventory, product, and stock-tracking workflows.',
      'Server-rendered MVC patterns tied to persistent relational data.',
      'Operational focus on data accuracy and repeatable order handling.',
    ],
    reflection:
      'The strongest takeaway here was how much good data design and validation discipline matter in business-oriented systems.',
  },
  {
    slug: 'gomoku-java-console-game',
    title: 'Gomoku Java Console Game',
    category: 'Games',
    year: 2025,
    summary: 'A turn-based Gomoku game featuring Minimax-driven AI in a Java console interface.',
    context: 'Independent algorithm-focused build used to explore game-state evaluation, heuristics, and console gameplay feedback.',
    tech: ['Java', 'Console', 'Minimax'],
    image: gomokuImg,
    code: 'https://github.com/hcustod/gomoku-minimax-ai-console',
    featured: true,
    projectType: 'Independent build',
    focusArea: 'Decision algorithms, board-state modeling, and console UX',
    timeline: '2025 build',
    role: 'Individual developer',
    features: [
      'Console-based board rendering and turn handling.',
      'Minimax-inspired decision logic for computer moves.',
      'Clear game-state management and win detection logic.',
    ],
    reflection:
      'This project reinforced how evaluation strategy and search depth directly affect both performance and player experience.',
  },
  {
    slug: 'ascii-roguelike',
    title: 'ASCII Roguelike',
    category: 'Games',
    year: 2024,
    summary: 'A Python roguelike rendered in the terminal using ASCII graphics and grid-based exploration.',
    context: 'Independent gameplay prototype focused on turn loops, map logic, and readable feedback in a text-only interface.',
    tech: ['Python', 'ASCII', 'Console'],
    image: asciiRogueImg,
    code: 'https://github.com/hcustod/ascii-rogue-libtcod-console',
    featured: true,
    projectType: 'Independent prototype',
    focusArea: 'State transitions, procedural play loops, and text-first feedback',
    timeline: '2024 build',
    role: 'Individual developer',
    features: [
      'ASCII rendering for map, entities, and movement feedback.',
      'Turn-based exploration and encounter handling.',
      'Python-based architecture for rapid iteration on rules and mechanics.',
    ],
    reflection:
      'It gave me practical reps in loop design, game state transitions, and making terminal output carry enough information to stay playable.',
  },
  {
    slug: 'mud-roguelike',
    title: 'MUD Roguelike',
    category: 'Games',
    year: 2024,
    summary: 'A Python text-based MUD with combat, party generation, items, and command-driven interaction.',
    context: 'Independent text-driven systems build mixing command parsing, world state, and reusable gameplay structures.',
    tech: ['Python', 'Console', 'Networking'],
    image: mudGameImg,
    code: 'https://github.com/hcustod/mud-roguelike-python-console',
    featured: false,
    projectType: 'Independent prototype',
    focusArea: 'Command systems, combat logic, and reusable world structures',
    timeline: '2024 build',
    role: 'Individual developer',
    features: [
      'Command-driven text gameplay with party and item systems.',
      'Combat logic and world-state transitions.',
      'Reusable Python structures for rooms, entities, and interactions.',
    ],
    reflection:
      'This one improved my approach to modular gameplay systems that still stay understandable in a pure text interface.',
  },
  {
    slug: 'flight-reservation-system',
    title: 'Flight Reservation System',
    category: 'Console Apps',
    year: 2024,
    summary: 'A C# console application for creating, searching, and reserving bookings in a transport-style workflow.',
    context: 'Independent domain-modeling exercise built around predictable object design, validation, and stepwise console interactions.',
    tech: ['C#', 'Console'],
    image: flightReservationImg,
    code: 'https://github.com/hcustod/flight-res-sys-console',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/flight-res-sys-console/general',
    featured: false,
    projectType: 'Independent build',
    focusArea: 'Object modeling, booking workflows, and input validation',
    timeline: '2024 build',
    role: 'Individual developer',
    features: [
      'Reservation creation, search, and data-entry flows.',
      'Console-friendly interaction design for stepwise tasks.',
      'Clear class modeling for bookings and business rules.',
    ],
    reflection:
      'The project underscored the value of predictable object boundaries and strict validation in domain-driven console apps.',
  },
  {
    slug: 'simple-chat-server',
    title: 'Simple Chat Server',
    category: 'Console Apps',
    year: 2025,
    summary: 'A C++ chat client/server project using sockets and multithreading for real-time communication.',
    context: 'Independent systems programming build focused on socket communication, concurrency, and lower-level debugging discipline.',
    tech: ['C++', 'Console', 'Networking'],
    image: simpleChatCppImg,
    code: 'https://github.com/hcustod/simple-chat-cpp',
    featured: true,
    projectType: 'Independent systems build',
    focusArea: 'Socket communication, multithreading, and debugging concurrent flows',
    timeline: '2025 build',
    role: 'Individual developer',
    features: [
      'Socket-based message passing between client and server.',
      'Multithreaded handling for concurrent communication.',
      'Low-level systems exposure through C++ networking patterns.',
    ],
    reflection:
      'This work improved my understanding of thread coordination, message flow, and the patience required to debug lower-level networked programs.',
  },
];

export const featuredProjects = portfolioProjects.filter((project) => project.featured);
export const projectArchive = portfolioProjects;
export const projectCategories = ['All', ...new Set(portfolioProjects.map((project) => project.category))];
