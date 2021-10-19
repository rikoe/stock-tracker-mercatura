import React from "react"
import "./styles.css"

const KeyStatistics = () => {
  return (
    <div className="container">
      <div className="stats">
        <h2 className="stats__title">Key Statistics</h2>
        <ul className="stats__list">
          <li>
            Open <span>{}</span>
          </li>
          <li>
            High <span>{}</span>
          </li>
          <li>
            Low <span>{}</span>
          </li>
          <li>
            Previous Close <span>{}</span>
          </li>
        </ul>
        <ul className="stats__list">
          <li>
            Day Range <span>{}</span>
          </li>
          <li>
            52 Week Range <span>{}</span>
          </li>
          <li>
            Market Cap <span>{}</span>
          </li>
          <li>
            P/E Ratio <span>{}</span>
          </li>
        </ul>
        <ul className="stats__list">
          <li>
            Dividend Yield <span>{}</span>
          </li>
          <li>
            Earnings Per Share <span>{}</span>
          </li>
          <li>
            Volume <span>{}</span>
          </li>
          <li>
            Total Avg. Volume <span>{}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default KeyStatistics
