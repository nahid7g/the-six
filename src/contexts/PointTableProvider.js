import axios from 'axios'
import React, { createContext } from 'react'

export const PointTableContext = createContext()

const PointTableProvider = ({ children }) => {
  const laligaTable = () => {
    const config = {
      headers: {
        'X-Auth-Token': 'bfe033b185c24617bc086dbf12acc379',
      },
    }
    const url = 'http://api.football-data.org/v4/competitions/PL'
    axios
      .get(url, config)
      .then((res) => res)
      .catch((err) => console.log(err))
  }
  const pointTables = { laligaTable }
  return (
    <PointTableContext.Provider value={pointTables}>
      {children}
    </PointTableContext.Provider>
  )
}

export default PointTableProvider
