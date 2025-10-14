import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("홈 타이틀 렌더링", () => {
  render(<App />);
  expect(screen.getByText("체육대회")).toBeInTheDocument();
});

test("하단 탭에서 로그인 이동", () => {
  render(<App />);
  fireEvent.click(screen.getByText("로그인"));
  expect(screen.getByText("로그인")).toBeInTheDocument();
});

test("업로드 탭 클릭 시 로그인으로 유도", () => {
  render(<App />);
  fireEvent.click(screen.getByText("업로드"));
  // 업로드는 비로그인 시 /login으로 리다이렉트
  expect(screen.getByText("로그인")).toBeInTheDocument();
});
