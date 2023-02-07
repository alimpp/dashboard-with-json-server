export const application_base_url: string = "http://localhost:3000";

export const application_path = {
  GET: {
    TICKETS: '/tickets',
    TASKS: '/tasks',
    EMPLOYEES: '/employees'
  },
  POST: {
    CREATE_TICKETS: '/tickets',
    CREATE_TASKS: '/tasks',
    CREATE_EMPLOYEES: '/employees'
  },
  PUT: {
    REPLAY_TICKETS: '/tickets',
  },
  DELETE: {},
};
