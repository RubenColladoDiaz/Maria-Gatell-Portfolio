import { routePaths, routes, type RouteKey } from "../data/content";

export function routeFromPath(pathname: string): RouteKey {
  return routes.find((route) => route.path === pathname)?.key ?? "home";
}

export function pathForRoute(route: RouteKey) {
  return routePaths[route];
}
