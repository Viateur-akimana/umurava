import * as React from "react";

export type ButtonProps = {
  classNames: string;
  label: string;
  icon?: React.ReactNode;
  hasCount?: boolean;
  count?: number
  onClick?: () => void;
  disabled?: boolean;
};

export type MetricProps = {
  classNames?: string;
  title: string;
  value: number;
  icon: React.ReactNode;
}

export interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    // data?: Array<Record<string, unknown>>;
    onPageChange: (page: number) => void;
}

export type AboutProps = {
  icon: string;
  title: string;
  desc: string;
  iconWidth: number;
  iconHeight: number;
};

export type CardProps = {
  status: string;
  image: string;
  title?: string;
  skills?: Array<string>;
  security?: string;
  timeline?: string;
  onClick?: () => void;
  imageWidth: number;
  imageHeight: number;
};

export type UserCardProps = {
  image: string;
  name?: string;
  location?: string;
  jobTitle?: string;
  imageWidth: number;
  imageHeight: number;
};

export type ProcessProps = {
  stepCount: number;
  hasImage: boolean;
  image?: string;
  title: string;
  desc: string;
  imageWidth?: number;
  imageHeight?: number;
};

export interface CtaProps {
    type: "one" | "two";
}