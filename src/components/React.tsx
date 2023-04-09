import Amplify from "aws-amplify";
import { retryMiddleware } from "@aws-sdk/middleware-retry";

export default function React() {
  console.log(!Amplify, !retryMiddleware);
  return <div>React</div>;
}
