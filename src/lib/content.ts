import siteData from '../../management/content/en/site.json';
import pageData from '../../management/content/en/pages.json';
import researchData from '../../management/content/en/research.json';
import peopleData from '../../management/content/en/people.json';
import publicationData from '../../management/content/en/publications.json';
import newsData from '../../management/content/en/news.json';
import contactData from '../../management/content/en/contact.json';

export interface SiteContent {
  name: string;
  tagline: string;
  description: string;
  introduction: string;
  image: string;
  imageAlt: string;
  copyright: string;
}
export interface PageIntro { title: string; description: string }
export const pageContent: Record<'research' | 'publications' | 'news' | 'people' | 'contact', PageIntro> = pageData;

export interface ResearchArea { title: string; summary: string; tags?: string[] }
export interface Person { name: string; role: string; bio: string; image?: string; homepage?: string }
export interface Publication { title: string; authors: string[]; journal: string; year: number; doi?: string }
export interface NewsItem { title: string; date: string; category?: string; summary: string; url?: string }
export interface ContactContent { institution: string; department: string; address: string; email: string; website: string }

export const site: SiteContent = siteData;
export const researchAreas: ResearchArea[] = researchData;
export const people: Person[] = peopleData;
export const publications: Publication[] = [...publicationData].sort((a, b) => b.year - a.year);
export const newsItems: NewsItem[] = [...newsData].sort((a, b) => b.date.localeCompare(a.date));
export const contact: ContactContent = contactData;
