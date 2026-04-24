# Projects Component Design

## Background

The current portfolio site has completed its basic engineering initialization, and the Hero component already possesses a relatively complete visual direction. In contrast, the Projects section remains in a lighter placeholder state. Although it already has a title, description, and tech stack tags, the card structure and screenshot area are insufficient to fulfill the core responsibility of "project display."

This change focuses on the first round of upgrades for the Projects component: transforming the existing project list into a more complete project card display area, enabling each project to have a screenshot area, title, description, and tech stack tags, and maintaining consistency with the current dark theme.

## Goals

- Create a more complete list of project cards for the Projects component.
- Each project card should include a screenshot area, title, description, and tech stack tags.
- Use a dark theme with subtle gradients, borders, and shadow effects to maintain a consistent visual language with the Hero section.
- Maintain a clear structure for seamless replacement with real screenshots and project content in the future.

## Non-Goals

- Do not integrate real project screenshot resources at this time.
- Do not add filtering, categorization, modal detail pages, or carousel interactions at this time.
- Do not modify the project data structure to a more complex schema at this time.
- Do not alter other sections such as About, Contact, or Footer at this time.

## Recommended Solution

Adopt a "left-side screenshot, right-side information" column layout for project cards. Placing the screenshot and content side-by-side highlights the project's visual aspect while preserving a clear information hierarchy. This solution is particularly suitable for showcasing featured projects on the portfolio homepage and facilitates future expansion into a multi-project list.

## Alternative Solutions

### 1. Editorial Display Card

This approach gives higher weight to screenshots, creating a strong visual impact. However, the information organization leans towards a poster-like style, which is less extensible compared to the current project list.

### 2. Columnar Information Card

This is the recommended solution. It balances the weight of screenshots and information areas, offering a natural reading order. It is suitable for project display and can serve as a unified card pattern for future case lists.

### 3. Gallery-Style Vertical Card

This structure is neater and suitable for displaying a large number of projects. However, it has less distinctiveness compared to the current Hero's aesthetic, and the narrative tension within the cards is reduced.

## Card Structure

- The Projects section will continue to use a grid list to display multiple projects.
- Each individual card will adopt a left-right column layout:
  - The left side will be the screenshot display area.
  - The right side will be the information area.
- The information area will include:
  - Project title
  - Project description
  - Tech stack tag group
  - Project link
- On mobile devices, cards should naturally collapse into a top-bottom structure, prioritizing the readability of screenshots and titles.

## Screenshot Area Design

- Real screenshots will not be used in this phase; therefore, the screenshot area should utilize high-quality placeholder blocks.
- The placeholder blocks will no longer use simple dashed borders but will simulate a "product preview panel" effect:
  - Dark gradient background
  - Thin border and inner stroke
  - Soft highlights or localized color layers
  - Small geometric blocks to suggest interface structure
- The purpose of this is to maintain sufficient completeness and display quality for the cards even without real image resources.

## Visual Style

- The overall design will continue the dark theme, using blue-black, gray-black, and cyan-blue highlights as the primary visual language.
- The card itself will use a slightly transparent background, soft borders, and deeper shadows to create a sense of elevation.
- Titles will use high-contrast white.
- Descriptions will use a slightly lower-contrast off-white to ensure hierarchy.
- Tech stack tags will adopt a cyan-blue, semi-transparent capsule style, echoing the gradient highlights of the Hero section.
- On card hover, only a slight lift, border brightening, and enhanced light effect on the screenshot area will be applied, avoiding exaggerated animations.

## Data Boundaries

- The structure of `src/data/projects.ts` will remain unchanged.
- Existing fields will continue to be used:
  - `name`
  - `description`
  - `techStack`
  - `image`
  - `link`
- When `image` is empty, the component will automatically render a placeholder screenshot block, rather than relying on external images.

## Responsive Strategy

- Desktop devices will use the left-right columnar cards to enhance the display.
- Tablets and mobile devices will switch to a top-bottom stacked layout.
- On smaller screens, padding, tag spacing, and description width will be adjusted appropriately to avoid visual heaviness.

## Component Boundaries

- The primary modification will be to `src/components/Projects.tsx`.
- If necessary, placeholder content in `src/data/projects.ts` may be slightly adjusted, but the field structure will not be expanded.
- No complex state logic will be added, and no new dependency libraries will be introduced.
- The component will remain a purely presentational implementation.

## Verification Methods

- Run `npm run build` to confirm that the component updates can be built successfully.
- Run `npm run lint` to ensure there are no ESLint errors.
- Check that each project card includes a screenshot area, title, description, and tech stack tags.

## Implementation Notes

- The focus of this change is not on "real project data" but on establishing the visual framework for project display first.
- The current high-quality placeholder screenshot blocks are a transitional solution but should possess sufficient completeness to prevent the component from reverting to a simple placeholder state.
- Upon completion of this task, the Projects component should be elevated from an "information list" to the role of a "project display area."