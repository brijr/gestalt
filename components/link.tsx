import NextLink from "next/link"
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

const linkClassName = "underline underline-offset-4 hover:text-foreground"

export type LinkProps = {
  href: string
  children: ReactNode
  newTab?: boolean
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children">

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, newTab = false, className, ...rest },
  ref
) {
  const classes = cn(linkClassName, className)
  const isInternal = href.startsWith("/") && !href.startsWith("//")
  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  if (isInternal) {
    return (
      <NextLink ref={ref} href={href} className={classes} {...rest}>
        {children}
      </NextLink>
    )
  }

  return (
    <a ref={ref} href={href} className={classes} {...rest} {...newTabProps}>
      {children}
    </a>
  )
})
