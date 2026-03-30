import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders a headline, intro copy, and initial avatar", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /把想法、设计与前端实现组合成一个有记忆点的个人作品集/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/这里展示我的个人介绍、项目经验和持续打磨中的数字作品/i),
    ).toBeInTheDocument();

    expect(screen.getByText("EW")).toBeInTheDocument();
  });
});
