"use server";

import React from "react";
import DynamicSharedLayout from "./_components/DynamicSharedLayout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicSharedLayout>
      <div className="full-layout">{children}</div>
    </DynamicSharedLayout>
  );
}