import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryReq } from "../app/category/AddCategory";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",

    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (params) => ({
        url: "category",
        method: "GET",
        params,
      }),
    }),

    createCategory: builder.mutation({
      query: (formData: CategoryReq) => {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("slug", formData.slug);
        if (formData.files) {
          data.append("files", formData.files); // 👈 Gửi file thực tế
        }

        return {
          url: "category",
          method: "POST",
          body: data, // ✅ Gửi FormData
          formData: true,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
