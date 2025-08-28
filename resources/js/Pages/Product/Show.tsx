import React from 'react'
import LayoutMain from '../Layout/LayoutMain'

export default function Show(props: {
    model: string
}) {
    const { model } = props
    return (
        <LayoutMain title={`Product ${model}`}>
            <div>Show {model}</div>
        </LayoutMain>
    )
}
