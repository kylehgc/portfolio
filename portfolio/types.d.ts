import { ResponsiveValue } from "@chakra-ui/react"
import { Property } from "csstype"

export interface CardData {
  projectLink: string,
  title: string
  description: string[]
  repositoryURL: string
  externalLinkURL: string
  screenshotSrc: string
  gradiant: ResponsiveValue<Property.BackgroundImage>
}