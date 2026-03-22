export const capstone = {
  projectTitle: 'Project Management System',
  statusNote:
    'A structured overview of the Project Management System capstone, covering the concept, planning approach, and implementation direction.',
  summary:
    'The project focuses on managing projects, tasks, and role-based collaboration in a structured web application. It demonstrates how business workflows can be translated into a maintainable MVC application backed by relational data.',
  vision:
    'Create a practical coordination platform where users can track work, manage priorities, and understand responsibilities through a clear, role-aware interface. The larger goal is to show how business requirements become a working implementation that is understandable, testable, and deployable.',
  businessRequirements: [
    'Users need a centralized place to create, assign, and monitor project work.',
    'The application must distinguish between user roles and show the right actions to the right people.',
    'Project and task information must persist reliably in a relational database.',
    'The system should be easy to run locally and present clearly during review.',
  ],
  projectPlan: [
    {
      phase: 'Discovery and scope definition',
      detail: 'Identify required entities, user roles, workflows, and success criteria for the MVP.',
    },
    {
      phase: 'Data and application design',
      detail: 'Model projects, tasks, users, and relationships; define routes, controllers, and views.',
    },
    {
      phase: 'Implementation',
      detail: 'Build the MVC application, connect it to the database, and complete CRUD workflows.',
    },
    {
      phase: 'Packaging and review',
      detail: 'Document setup steps, confirm core workflows, and prepare artifacts for portfolio presentation.',
    },
  ],
  analysisDesign: [
    'Primary entities include projects, tasks, users, and role assignments.',
    'The interface separates overview screens from detail screens to keep navigation understandable.',
    'Role-aware actions reduce clutter and help enforce workflow boundaries.',
    'A relational schema supports task ownership, status updates, and project grouping.',
  ],
  wireframes: [
    'Dashboard showing active projects and quick status indicators.',
    'Project detail page with task list and ownership information.',
    'Task create/edit form for updating assignments and statuses.',
    'Administration screen for users and role management.',
    'The visual flow centers on quick project overview, task clarity, and role-aware actions.',
  ],
  statusReports: [
    'Status report 1: scope confirmed, initial entity model drafted, base MVC project created.',
    'Status report 2: database integration complete, core project/task workflows implemented.',
    'Status report 3: role handling and final polish applied, deployment packaging documented.',
  ],
  implementation: [
    'ASP.NET Core MVC used for server-rendered routing and view composition.',
    'PostgreSQL used for durable relational storage.',
    'Role-based flows help organize who can create, update, and review work.',
    'Containerization path exists to make local execution and review more consistent.',
  ],
  artifacts: [
    {
      label: 'Capstone outline',
      href: '/docs/capstone-project-management-outline.txt',
      detail: 'Compact written overview of the project scope, workflow goals, and planned deliverables.',
    },
  ],
};
