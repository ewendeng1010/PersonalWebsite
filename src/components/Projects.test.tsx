import { render, screen, within } from "@testing-library/react";
import { projects } from "../data/projects";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders every project card with preview, title, description, tags, and link", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        name: "项目展示",
      }),
    ).toBeInTheDocument();

    for (const project of projects) {
      const article = screen.getByRole("article", { name: project.name });

      expect(
        within(article).getByRole("img", {
          name: `${project.name} 项目截图预览`,
        }),
      ).toBeInTheDocument();

      expect(
        within(article).getByRole("heading", {
          name: project.name,
        }),
      ).toBeInTheDocument();

      expect(within(article).getByText(project.description)).toBeInTheDocument();

      for (const tag of project.techStack) {
        expect(within(article).getByText(tag)).toBeInTheDocument();
      }

      expect(
        within(article).getByRole("link", {
          name: `查看 ${project.name}`,
        }),
      ).toHaveAttribute("href", project.link);
    }
  });
});
