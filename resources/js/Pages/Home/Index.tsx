import React from 'react'

export default function index (props:{
  model: {
    title: string,
  }
})
{ const {title}=props.model
  return (
    <div>{title}</div>
  )
  }
