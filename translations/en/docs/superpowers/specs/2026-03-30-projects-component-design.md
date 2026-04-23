# Projects Component Design

## Background

The current portfolio site has completed the basic project initialization, and the Hero component already has a fairly complete visual direction. In contrast, the Projects block is still in a lightweight placeholder display state. Although it already has a title, description, and tech‑stack tags, the card structure and screenshot area are insufficient to carry the core responsibility of “project showcase”.

This change focuses on the first round of upgrades to the Projects component: converting the existing project list into a more complete project‑card display area, giving each project a screenshot area, title, description, and tech‑stack tags, while staying consistent with the current dark theme.

## Goals

- Create a more complete Projects component project‑card list.  
- Each project card includes a screenshot area, title, description, and tech‑stack tags.  
- Use a dark theme with subtle gradients, borders, and shadow effects, maintaining visual language consistent with Hero.  
- Keep the structure clear, facilitating seamless replacement with real screenshots and real project content later.

## Non‑Goals

- No integration of real project screenshot resources at this time.  
- No addition of filtering, categorization, modal detail pages, or carousel interactions.  
- No modification of the project data structure to a more complex schema.  
- No changes to other sections such as About, Contact, Footer, etc.

## Recommended Approach

Adopt a “left‑side screenshot, right‑side information” split‑column card layout. The screenshot and content sit side‑by‑side, highlighting the portfolio feel while preserving a clear information hierarchy. This approach is especially suitable for showcasing featured projects on the portfolio homepage and can be easily extended to a multi‑project list in the future.

## Alternative Approaches

### 1. Editorial‑Style Showcase Card

Higher emphasis on the screenshot, strong visual impact, but the information organization leans toward a poster style and is slightly less extensible compared with the current project list.

### 2. Split‑Column Info Card

The recommended approach. The screenshot and information area have a more balanced weight, natural reading order, suitable both for portfolio display and as a unified card pattern for future case lists.

### 3. Gallery‑Style Vertical Card

More orderly structure, suitable for displaying a large number of projects, but its recognizability is slightly weaker compared with the current Hero’s character, and the narrative tension inside the card is also reduced.

## Card Structure

- The Projects block continues to use a grid list to display multiple projects.  
- A single card uses a left‑right split layout:  
  - Left side: screenshot display area.  
  - Right side: information area.  
- The information area contains:  
  - Project title  
  - Project description  
  - Tech‑stack tag group  
  - Project link  
- On mobile devices, the card should naturally collapse into a top‑bottom structure, prioritizing readability of the screenshot and title.

## Screenshot Area Design

- At this stage we do not use real screenshots, so the screenshot area should use high‑quality placeholder blocks.  
- The placeholder should no longer be a simple dashed box; instead, simulate a “product preview panel” effect:  
  - Dark gradient background  
  - Thin outer border and inner stroke  
  - Soft highlight or localized color layer  
  - A few geometric blocks hinting at UI structure  
- The purpose is to keep the card looking sufficiently finished and presentable even without real image assets.

## Visual Style

- Overall continuation of the dark theme, using blue‑black, gray‑black, and cyan‑blue highlights as the main visual language.  
- The card body uses a slightly transparent background, soft strokes, and deeper shadows to create a floating feel.  
- Title uses high‑contrast white.  
- Description uses a slightly lower‑contrast gray‑white to maintain hierarchy.  
- Tech‑stack tags adopt a cyan‑blue semi‑transparent capsule style, echoing Hero’s gradient highlights.  
- On hover, the card only receives a subtle lift, border brightening, and enhanced lighting on the screenshot area—no exaggerated animations.

## Data Boundary

- Keep the current `src/data/projects.ts` structure unchanged.  
- Continue using the existing fields:  
  - `name`  
  - `description`  
  - `techStack`  
  - `image`  
  - `link`  
- When `image` is empty, the component automatically renders the placeholder screenshot block instead of relying on external images.

## Responsive Strategy

- Desktop: use left‑right split cards to enhance visual impact.  
- Tablet and mobile: switch to a top‑bottom stacked layout.  
- On small screens, tighten padding, tag spacing, and description width to avoid visual overload.

## Component Boundary

- Primary modifications in `src/components/Projects.tsx`.  
- If necessary, fine‑tune placeholder content in `src/data/projects.ts`, but do not expand the field structure.  
- No new complex state logic, no additional dependency libraries.  
- Keep the component a pure presentation implementation.

## Verification Method

- Run `npm run build` and confirm the component updates build successfully.  
- Run `npm run lint` and confirm there are no ESLint errors.  
- Check that each project card contains a screenshot area, title, description, and tech‑stack tags.

## Implementation Notes

- The focus of this change is not “real project data,” but rather establishing the visual skeleton for project showcase.  
- The high‑quality placeholder screenshot block is a transitional solution but should be sufficiently complete to prevent the component from reverting to a simple placeholder state.  
- After this work, the Projects component should elevate from an “information list” to a “portfolio showcase” role.