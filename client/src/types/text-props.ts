import React from "react";

export interface TextProps {
  name: string;
  type: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
