// import React from "react";
// import { render, fireEvent } from "@testing-library/react-native";
// import { renderRouter, screen } from "expo-router/testing-library";
// import { HomeScreen } from "../../app/index";

// // Mock database helpers
// jest.mock("~/lib/db/helpers", () => ({
//   observeAllGames: jest.fn(() => []),
// }));

// // Mock router
// jest.mock("expo-router", () => ({
//   useRouter: jest.fn(() => ({
//     push: jest.fn(),
//     replace: jest.fn(),
//   })),
// }));

// // Mock Zustand stores
// jest.mock("~/lib/stores/gameManagerStore", () => ({
//   useGameManagerStore: jest.fn((selector) =>
//     selector({
//       isLoading: false,
//       error: null,
//       currentGameId: null,
//       setCurrentGameId: jest.fn(),
//     })
//   ),
// }));

// jest.mock("~/lib/stores/currentLevelStore", () => ({
//   useCurrentLevelStore: jest.fn((selector) =>
//     selector({
//       setGameCurrentLevel: jest.fn(() => Promise.resolve({ id: "level-1" })),
//     })
//   ),
// }));

// describe("Home Screen", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("renders correctly with no games", () => {
//     const { getByText } = render(<HomeScreen games={[]} />);

//     expect(getByText("Press Secretary")).toBeTruthy();
//     expect(getByText("Start New Game")).toBeTruthy();

//     // Load/Manage Games button should not be visible with no games
//     expect(() => getByText("Load / Manage Games")).toThrow();
//   });

//   it("renders correctly with active games", () => {
//     const mockGames = [
//       { id: "game-1", status: "active" },
//       { id: "game-2", status: "completed" },
//     ];

//     const { getByText } = render(<HomeScreen games={mockGames} />);

//     expect(getByText("Start New Game")).toBeTruthy();
//     expect(getByText("Load / Manage Games")).toBeTruthy();
//   });

//   it("navigates to create screen when Start New Game is pressed", () => {
//     const { getByText } = render(<HomeScreen games={[]} />);
//     const router = require("expo-router").useRouter();

//     fireEvent.press(getByText("Start New Game"));

//     expect(router.push).toHaveBeenCalledWith("/games/create");
//   });

//   it("navigates to games screen when Load / Manage Games is pressed", () => {
//     const mockGames = [{ id: "game-1", status: "active" }];
//     const { getByText } = render(<HomeScreen games={mockGames} />);
//     const router = require("expo-router").useRouter();

//     fireEvent.press(getByText("Load / Manage Games"));

//     expect(router.push).toHaveBeenCalledWith("/games");
//   });

//   it("shows Continue Game button when currentGameId is set", () => {
//     // Update the mock to return a currentGameId
//     require("~/lib/stores/gameManagerStore").useGameManagerStore.mockImplementation(
//       (selector) =>
//         selector({
//           isLoading: false,
//           error: null,
//           currentGameId: "game-1",
//           setCurrentGameId: jest.fn(),
//         })
//     );

//     const mockGames = [{ id: "game-1", status: "active" }];
//     const { getByText } = render(<HomeScreen games={mockGames} />);

//     expect(getByText("Continue Game")).toBeTruthy();
//   });

//   it("handles Continue Game correctly", async () => {
//     // Setup mocks with currentGameId
//     require("~/lib/stores/gameManagerStore").useGameManagerStore.mockImplementation(
//       (selector) =>
//         selector({
//           isLoading: false,
//           error: null,
//           currentGameId: "game-1",
//           setCurrentGameId: jest.fn(),
//         })
//     );

//     const setGameCurrentLevel = jest.fn(() =>
//       Promise.resolve({ id: "level-1" })
//     );
//     require("~/lib/stores/currentLevelStore").useCurrentLevelStore.mockImplementation(
//       (selector) =>
//         selector({
//           setGameCurrentLevel,
//         })
//     );

//     const mockGames = [{ id: "game-1", status: "active" }];
//     const { getByText } = render(<HomeScreen games={mockGames} />);
//     const router = require("expo-router").useRouter();

//     // Press continue game
//     await fireEvent.press(getByText("Continue Game"));

//     // Verify level was loaded
//     expect(setGameCurrentLevel).toHaveBeenCalledWith("game-1");
//     // Verify navigation occurred
//     expect(router.push).toHaveBeenCalledWith("/games/game-1/(tabs)/current");
//   });

//   it("disables Start New Game button when max games reached", () => {
//     // Mock MAX_ACTIVE_GAMES constant
//     jest.mock("~/lib/constants", () => ({
//       MAX_ACTIVE_GAMES: 2,
//     }));

//     // Create enough games to hit the limit
//     const mockGames = [
//       { id: "game-1", status: "active" },
//       { id: "game-2", status: "active" },
//     ];

//     const { getByText } = render(<HomeScreen games={mockGames} />);

//     // The button should have different text and be disabled
//     const button = getByText("All Game Slots Full");
//     expect(button.props.disabled).toBe(true);
//   });

//   it("shows loading indicator when isLoading is true", () => {
//     // Update the mock to show loading state
//     require("~/lib/stores/gameManagerStore").useGameManagerStore.mockImplementation(
//       (selector) =>
//         selector({
//           isLoading: true,
//           error: null,
//           currentGameId: null,
//           setCurrentGameId: jest.fn(),
//         })
//     );

//     const { UNSAFE_getByType } = render(<HomeScreen games={[]} />);

//     // Check if ActivityIndicator is rendered
//     expect(UNSAFE_getByType("ActivityIndicator")).toBeTruthy();
//   });

//   it("shows error message when there is an error", () => {
//     // Update the mock to show an error
//     require("~/lib/stores/gameManagerStore").useGameManagerStore.mockImplementation(
//       (selector) =>
//         selector({
//           isLoading: false,
//           error: "Something went wrong",
//           currentGameId: null,
//           setCurrentGameId: jest.fn(),
//         })
//     );

//     const { getByText } = render(<HomeScreen games={[]} />);

//     expect(getByText("Something went wrong")).toBeTruthy();
//   });
// });
