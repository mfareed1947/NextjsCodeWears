import Router from 'next/router'
import React from 'react'

const Slug = () => {
  const {slug} = Router.query
  return (
    <div>this is Slug : {slug}</div>
  )
}

export default Slug