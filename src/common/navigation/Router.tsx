import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Workflows } from "features/workflows";
import { NotFound } from "features/not-found";
import { MainLayout } from "common/layouts/main-layout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Workflows />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
