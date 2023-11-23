import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Profile } from "../pages/Profile"
import { View } from "../pages/View"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
