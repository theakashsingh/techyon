const mockTask = [
    {
      name: "Project Name",
      id: "T-001",
      progress: { total: 14, completed: "07" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Mike Brown" },
        { name: "Mike Brown" },
      ],
      files: 12,
      status: "delayed",
      stage: "In Review",
    },
    {
      name: "Project Alpha",
      id: "T-002",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Review",
    },
    {
      name: "Project Alpha",
      id: "T-003",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Review",
    },
    {
      name: "Project Alpha",
      id: "T-004",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Review",
    },
    {
      name: "Project Alpha",
      id: "T-005",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Review",
    },
    {
      name: "Project Alpha",
      id: "T-006",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Progress",
    },
    {
      name: "Project Alpha",
      id: "T-007",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Progress",
    },
    {
      name: "Project Alpha",
      id: "T-008",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Progress",
    },
    {
      name: "Project Alpha",
      id: "T-009",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Progress",
    },
    {
      name: "Project Alpha",
      id: "T-010",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Progress",
    },
    {
      name: "Project Alpha",
      id: "T-011",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Revision",
    },
    {
      name: "Project Alpha",
      id: "T-012",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Revision",
    },
    {
      name: "Project Alpha",
      id: "T-013",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Revision",
    },
    {
      name: "Project Alpha",
      id: "T-014",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "In Revision",
    },
    {
      name: "Project Alpha",
      id: "T-015",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "Completed",
    },
    {
      name: "Project Alpha",
      id: "T-016",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "Completed",
    },
    {
      name: "Project Alpha",
      id: "T-017",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "Completed",
    },
    {
      name: "Project Alpha",
      id: "T-018",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "Completed",
    },
    {
      name: "Project Alpha",
      id: "T-019",
      progress: { total: 14, completed: "10" },
      date: { start: "01/01/2024", end: "31/01/2024" },
      owner: "Techyon",
      associated_team: "",
      team: [{ name: "John Doe" }, { name: "Jane Smith" }],
      files: 8,
      status: "on-track",
      stage: "Completed",
    }
  ];
  
  export default mockTask;