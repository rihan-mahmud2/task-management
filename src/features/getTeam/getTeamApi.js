import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => "/team",
    }),
    getMember: builder.query({
      query: (name) => `/team?name_like=${name}`,
    }),
  }),
});

export const { useGetTeamQuery, useGetMemberQuery } = teamApi;
