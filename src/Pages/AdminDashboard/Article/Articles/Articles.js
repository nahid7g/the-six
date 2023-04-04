import React from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'

const Articles = () => {
  return (
    <div>
      <DashboardContentHeader
        title='all articles'
        linkTitle='add article'
        link='articles/new-article'
      />
    </div>
  )
}

export default Articles
