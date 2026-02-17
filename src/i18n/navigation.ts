import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

const { Link, redirect: _redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

// Type redirect to return never, indicating it throws
// The redirect function from next-intl throws internally, but TypeScript doesn't know this
function redirect(...params: Parameters<typeof _redirect>): never {
  _redirect(...params);
  // This line is unreachable but satisfies TypeScript's never return type
  throw new Error("Redirect failed");
}

export { Link, usePathname, useRouter, getPathname, redirect };
