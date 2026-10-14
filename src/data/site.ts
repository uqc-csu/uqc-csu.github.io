export type Bilingual = {
  en: string;
  zh: string;
};

export type ResearchArea = {
  number: string;
  title: Bilingual;
  summary: Bilingual;
  tags: string[];
};

export type Person = {
  initials: string;
  name: Bilingual;
  role: Bilingual;
  bio: Bilingual;
};

export type Publication = {
  year: string;
  title: Bilingual;
  authors: Bilingual;
  venue: Bilingual;
  doi?: string;
  status: Bilingual;
};

export type NewsItem = {
  date: string;
  type: Bilingual;
  title: Bilingual;
  summary: Bilingual;
};

export const navItems = [
  { href: '/', en: 'Home', zh: '首页' },
  { href: '/research/', en: 'Research', zh: '研究方向' },
  { href: '/people/', en: 'People', zh: '成员' },
  { href: '/publications/', en: 'Publications', zh: '论文' },
  { href: '/news/', en: 'News', zh: '动态' },
  { href: '/contact/', en: 'Contact', zh: '联系' },
];

export const researchAreas: ResearchArea[] = [
  {
    number: '01',
    title: { en: 'Quantum systems & coherent control', zh: '量子系统与相干调控' },
    summary: {
      en: 'A placeholder overview for the group’s first research theme. Replace with a verified scope, methods, and representative questions before publication.',
      zh: '课题组研究方向一的演示文案。正式发布前，请替换为经过确认的研究范围、方法与代表性问题。',
    },
    tags: ['Theme placeholder', 'Research scope', '待补充'],
  },
  {
    number: '02',
    title: { en: 'Hybrid interfaces & precision measurement', zh: '混合界面与精密测量' },
    summary: {
      en: 'A structured space for a second research theme, with room for a short explanation of the physical platform and measurement strategy.',
      zh: '为第二个研究方向预留的结构化内容区域，可补充物理平台与测量策略的简要介绍。',
    },
    tags: ['Theme placeholder', 'Methods', '待补充'],
  },
  {
    number: '03',
    title: { en: 'Open direction for future work', zh: '未来研究方向' },
    summary: {
      en: 'A flexible card for an emerging topic, collaboration, or shared facility once the group’s public description is approved.',
      zh: '预留给新兴课题、合作方向或共享平台，待课题组确认公开表述后使用。',
    },
    tags: ['To be confirmed', 'Collaboration', '待定'],
  },
];

export const people: Person[] = [
  {
    initials: 'PI',
    name: { en: 'Principal investigator · placeholder', zh: '课题负责人 · 占位' },
    role: { en: 'Group lead / to be confirmed', zh: '课题组负责人 / 待确认' },
    bio: {
      en: 'Add a verified short biography, institutional affiliation, and research interests here.',
      zh: '此处添加经过确认的个人简介、单位信息与研究兴趣。',
    },
  },
  {
    initials: '01',
    name: { en: 'Member profile · placeholder', zh: '成员信息 · 占位' },
    role: { en: 'Researcher / to be confirmed', zh: '研究人员 / 待确认' },
    bio: {
      en: 'Add a concise profile only after the member approves the public information.',
      zh: '成员同意公开后，再补充简洁的个人信息。',
    },
  },
  {
    initials: '02',
    name: { en: 'Member profile · placeholder', zh: '成员信息 · 占位' },
    role: { en: 'Student / to be confirmed', zh: '学生 / 待确认' },
    bio: {
      en: 'Keep this structured card for future members, with no invented names or contact details.',
      zh: '保留此结构化卡片供未来成员使用，不填写虚构姓名或联系方式。',
    },
  },
];

export const publications: Publication[] = [
  {
    year: '—',
    title: { en: 'Publication record placeholder', zh: '论文条目占位' },
    authors: { en: 'Verified author list to be added', zh: '待补充经确认的作者列表' },
    venue: { en: 'Journal / conference to be added', zh: '待补充期刊或会议' },
    status: { en: 'Demo entry', zh: '演示条目' },
  },
];

export const newsItems: NewsItem[] = [
  {
    date: '2026-10-14',
    type: { en: 'Website', zh: '网站' },
    title: { en: 'The group website prototype is ready for review', zh: '课题组网站原型完成，等待审阅' },
    summary: {
      en: 'A lightweight Astro + Tailwind foundation is ready. Verified group information can now replace the marked demo fields.',
      zh: '轻量的 Astro + Tailwind 网站基础已完成，后续可将已确认的课题组资料替换到标记位置。',
    },
  },
  {
    date: '—',
    type: { en: 'Placeholder', zh: '占位' },
    title: { en: 'News item to be added', zh: '待添加学术新闻' },
    summary: {
      en: 'Use this structure for seminars, papers, awards, visits, and other verified updates.',
      zh: '可用此结构记录经过确认的组会、论文、获奖、访问等动态。',
    },
  },
];

export const siteMeta = {
  title: 'UQC Research Group',
  description: 'A bilingual-ready static website prototype for the UQC research group.',
  notice: {
    en: 'Preview content · replace marked fields with verified group information before publication.',
    zh: '演示内容 · 正式发布前请将标记字段替换为经过确认的课题组资料。',
  },
};
