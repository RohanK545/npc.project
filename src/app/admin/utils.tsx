export interface ContentBlock {
  contentId: number;
  contentType: "text" | "image" | "table";
  contentValue: string;
  displayOrder: number;
  isActive: boolean;
}

export interface PageSection {
  sectionId: number;
  sectionTitle: string;
  sectionType: string;
  sectionValue: string;
  displayOrder: number;
  isActive: boolean;
  // contentBlocks: ContentBlock[];
}

export interface PageEditor {
  pageId: number;
  metaTitle: string;
  slug: string;
  status: "Draft" | "Published";
  metaDescription: string;
  sections: PageSection[];
}
