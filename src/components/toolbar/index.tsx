import { observer } from 'mobx-react-lite'
import { type Page, pageLabels } from '~/models/page'
import { pageStore } from '~/stores/page'
import cx from 'classnames'

export const Toolbar = observer(() => {
  const { currentPage, setCurrentPage } = pageStore

  return (
    <aside className="flex">
      <div className="sb-tab h-full">
        {Object.entries(pageLabels).map(([key, value]) => (
          <button
            key={key}
            className={cx('sb-tab-item', { 'sb-tab-selected': currentPage === key })}
            onClick={() => setCurrentPage(key as Page)}>
            {value}
          </button>
        ))}
      </div>
      <div className="sb-tab-content h-full"></div>
    </aside>
  )
})
