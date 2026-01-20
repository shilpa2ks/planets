# Testing Setup Documentation

## Overview

This project uses **Jest** and **React Testing Library** for unit and component testing.

## Test Files Created

### Component Tests

1. **PlanetaryStats.test.tsx** - Tests for the PlanetaryStats component

   - Renders name and data correctly
   - Converts name to uppercase
   - Verifies styling

2. **ListOptions.test.tsx** - Tests for the ListOptions component

   - Renders all list item buttons
   - Marks selected index correctly
   - Handles click events
   - Updates selection on prop changes

3. **Planet.test.tsx** - Tests for the Planet component

   - Displays planet information
   - Changes content based on selection
   - Shows/hides geology image appropriately
   - Updates source links when switching views

4. **Nav.test.tsx** - Tests for the Nav component

   - Renders header and navigation links
   - Displays all planets
   - Has correct layout structure

5. **NavLink.test.tsx** - Tests for the NavLink component
   - Renders planet names in uppercase
   - Creates correct href links
   - Applies prefetch attribute

### Utility Tests

6. **imageUtils.test.ts** - Tests for image path normalization
   - Converts relative paths to absolute paths
   - Handles already absolute paths
   - Processes full URLs correctly

### Page Tests

7. **page.test.tsx** - Tests for the home page

   - Renders navigation and planet components

8. **layout.test.tsx** - Tests for the root layout
   - Renders HTML structure correctly
   - Has proper language and hydration attributes
   - Applies font variables

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in watch mode (auto-rerun on file changes)

```bash
npm run test:watch
```

### Generate coverage report

```bash
npm run test:coverage
```

## Test Commands Added to package.json

```json
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage"
```

## Configuration Files

### jest.config.js

- Configured for Next.js with React Testing Library
- Sets up module path aliases (@/ for src directory)
- Configures jsdom test environment for DOM testing

### jest.setup.js

- Imports @testing-library/jest-dom matchers
- Enables extended Jest matchers for DOM assertions

## Dependencies Added

- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers for DOM elements
- **@testing-library/user-event** - User interaction simulation
- **jest** - Testing framework
- **jest-environment-jsdom** - DOM environment for Jest
- **@types/jest** - TypeScript types for Jest

## Writing New Tests

When creating new tests:

1. Follow the naming convention: `ComponentName.test.tsx`
2. Place tests in the same directory as the component
3. Use `describe` and `it` blocks for organization
4. Mock external dependencies (images, child components)
5. Use React Testing Library's `render` and `screen` utilities

### Example Test Structure

```typescript
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("does something", () => {
    render(<MyComponent prop="value" />);

    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
```

## Mocking

Tests include mocks for:

- **next/image** - Mocked to render standard `<img>` tags
- **next/link** - Using standard HTML links in tests
- **Child components** - Mocked to isolate component behavior
- **External data** - JSON data files mocked in tests

## Coverage Goals

- Aim for 80%+ code coverage
- Focus on critical user paths
- Test component interactions and state changes
- Verify error handling and edge cases

## Continuous Integration

These tests can be integrated into CI/CD pipelines:

```bash
npm run test:coverage -- --ci
```
