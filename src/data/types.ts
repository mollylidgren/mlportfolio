import type { LocalizedText } from "../i18n/translations";

export type Project = {
  slug: string;
  number: string;

  title: LocalizedText;
  kicker: LocalizedText;
  type: LocalizedText;

  description: LocalizedText;
  longDescription: LocalizedText;

  tags: string[];

  image: string;
  caseImage?: string;

  role: LocalizedText;
  projectType: LocalizedText;

  challenge: LocalizedText;
  process: LocalizedText;
  result: LocalizedText;

  video?: ProjectVideo;

  gallery?: GalleryImage[];
};

export type ProjectVideo = {
  src: string;
  caption?: LocalizedText;
};

export type GalleryImage = {
  src: string;
  caption?: LocalizedText;
};
