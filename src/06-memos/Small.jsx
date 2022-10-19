import {memo} from 'react'

export const Small = memo(({value}) => {

    console.log('Me generé de nuevo')
  return (
    <small>{value}</small>
  )
})
