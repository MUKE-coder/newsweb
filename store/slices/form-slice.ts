import { IForm } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IForm = {
  step: 1,
  formData: {
    name: "",
    slug: "",
    productDetails: "",
    mediaHouse: "",
    categories: "",
    content: "",
  },
};

const formSlice = createSlice({
  name: "createArticle",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.step = action.payload;
    },
    updateFormData: (
      state,
      action: PayloadAction<Partial<IForm["formData"]>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setCurrentStep, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
