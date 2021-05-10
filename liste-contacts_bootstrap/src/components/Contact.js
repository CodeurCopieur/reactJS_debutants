import React from 'react'

export default function Contact({pseudo, email, tel}) {
  return (
    <div>
      <div className="card card-body mb-3">
          <h4>{pseudo}</h4>
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Téléphone: {tel}</li>
          </ul>
        </div>
    </div>
  )
}
