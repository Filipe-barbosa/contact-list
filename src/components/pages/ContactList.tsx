import React from 'react'

export default function ListContacts () {
  return (
    <div>ListContacts
      <div>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i}>
            <a href={`/contact/${i}`}>item {i}</a>
          </p>
        ))}
      </div>
    </div>

  )
}
