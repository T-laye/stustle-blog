// Ambient declarations for plain (non-module) CSS side-effect imports,
// e.g. `import "./globals.css"` or `import "easymde/dist/easymde.min.css"`.
// Next.js's own build pipeline handles these fine; this file just satisfies
// the TypeScript language service, which otherwise reports "Cannot find
// module or type declarations for side-effect import" for bare .css imports.
declare module "*.css";
