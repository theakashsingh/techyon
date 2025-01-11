const mockProjects = [
  {
    name: "Project Name",
    id: "P-11",
    progress: {
      total: 14,
      completed: "07",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [
      { name: "John Doe" },
      { name: "Jane Smith" },
      { name: "Mike Brown" },
      { name: "Mike Brown" },
    ],
    files: 12,
    stage: "Not Started",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Not Started",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Not Started",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Not Started",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Not Started",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "In Progress",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "In Progress",
  },

  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "In Progress",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "In Progress",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "In Progress",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Archived",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Archived",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Archived",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Archived",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Completed",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Completed",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Completed",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Completed",
  },
  {
    name: "Project Alpha",
    id: "P-12",
    progress: {
      total: 14,
      completed: "10",
    },
    date: {
      start: "01/01/2024",
      end: "31/01/2024",
    },
    team: [{ name: "John Doe" }, { name: "Jane Smith" }],
    files: 8,
    stage: "Completed",
  },
];

export default mockProjects;
