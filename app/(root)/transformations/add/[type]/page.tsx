import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs";

const AddTransformationsTypePage = ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm action="Add" userId={} />
    </>
  );
};

export default AddTransformationsTypePage;
