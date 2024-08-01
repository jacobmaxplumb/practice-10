import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/contacts" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "",
      providesTags: ['Contacts']
    }),
    addContact: builder.mutation({
        query: (contact) => ({
            url: '',
            method: 'POST',
            body: contact
        }),
        invalidatesTags: ['Contacts']
    })
  }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactApi;
