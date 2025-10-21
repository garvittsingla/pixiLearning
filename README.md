# Learning Pixi (2D game library)

## [PixiJS — Getting Started](https://pixijs.com/8.x/guides/getting-started/intro)

- Entry point: `Experience.tsx` — renders the main game component and composes the Pixi scene.

- Pixi v8 change (React integration):
  - The standalone React wrapper components were removed.
  - Pattern now: import raw Pixi classes, then use an "extend" helper from your React–Pixi bridge to convert those classes into React components that you can use in JSX.

- The ```<Application>``` component is used to wrap your @pixi/react app. The ```<Application>``` component can take all props that can be set on PIXI.Application. Basically a top level component to encapsulate the whole pixi 

- The Container class is the foundation of PixiJS's scene graph system. Containers act as groups of scene objects, allowing you to build complex hierarchies, organize rendering layers, and apply transforms or effects to groups of objects.

- Sprites are the foundational visual elements in PixiJS. They represent a single image to be displayed on the screen. Each Sprite contains a Texture to be drawn, along with all the transformation and display state required to function in the scene graph.