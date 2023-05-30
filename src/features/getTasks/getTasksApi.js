import { apiSlice } from "../api/apiSlice";

export const getTasks = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //// endpoints
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
    }),

    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    editStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // optimistic status update start here
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            const updatedData = draft.find((task) => task?.id == arg?.id);
            updatedData.status = arg?.data?.status;
          })
        );
        // optimistic status update end here
        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),
    deletTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              const index = draft.findIndex((task) => {
                console.log(task?.id, arg);
                return task?.id == arg;
              });
              console.log(index);
              draft.splice(index, 1);
            })
          );
        } catch (e) {
          console.log("Okay");
        }
      },
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetTasksQuery,
  useEditStatusMutation,
  useDeletTaskMutation,
  useGetTaskQuery,
  useEditTaskMutation,
} = getTasks;
