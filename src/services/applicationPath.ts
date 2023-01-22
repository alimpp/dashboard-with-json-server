export const application_base_url: string = "https://jsonplaceholder.typicode.com";

export const application_path = {
  GET: {
    TICKETS: '/comments',
    TASKS: '/todos',
  },
  POST: {},
  PUT: {
    UPDATE_TASK: '/todos'
  },
  DELETE: {
    DELETE_TICKETS: '/comments',
    DELTE_TASK: '/todos'
  },
};
