export { default } from "next-auth/middleware";

// Match all routes you want to protect or evaluate
export const config = {
  matcher: ["/dashboard"], // Add other routes as needed
};
