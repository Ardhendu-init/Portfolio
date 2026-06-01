// Simple mock for next/image to render a regular img in tests
import React from "react";

export default function Image(props: any) {
  return React.createElement("img", props);
}
