export interface ICategory {
	name: string;
	isPublic: boolean;
	description: string;
	path: string;
	slug: string;
	thumbnail: string;
	metaTitle: string;
	metaDescription: string;
	metaKeywords?: string;
	parentId?: string;
}