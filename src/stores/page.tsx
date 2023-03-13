import { observable, action, makeObservable } from 'mobx'
import { type Page } from '~/models/page'

class PageStore {
  currentPage: Page = 'HOME'

  constructor () {
    makeObservable(this, {
      currentPage: observable,
      setCurrentPage: action.bound
    })
  }

  setCurrentPage (targetPage: Page) {
    this.currentPage = targetPage
  }
}

export const pageStore = new PageStore()
