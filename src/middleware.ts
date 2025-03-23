import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
//   user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/dashboard/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
            //`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`
          `${process.env.NEXT_PUBLIC_BASE_URL}/admin-login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:page",
    "/dashboard/manage-projects/:page",
    "/dashboard/manage-projects/update-project/:page",
    "/dashboard/manage-blogs/:page",
    "/dashboard/manage-blogs/update-blogs/:page",
  ],
};
