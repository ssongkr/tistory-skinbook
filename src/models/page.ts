export type Page = 'HOME' | 'CATEGORY_HOME' | 'POST' | 'GUESTBOOK'
export type PageLabel = Record<Page, string>

export const pageLabels: PageLabel = {
  HOME: '홈',
  CATEGORY_HOME: '카테고리',
  POST: '게시글',
  GUESTBOOK: '방명록'
}
