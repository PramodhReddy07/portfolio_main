import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='' target='_blank'>
      <Picture
        src='/icon1.png'
        fallback="A"
        size='7'
        radius='full'
      />
    </Link>
  )
}

export default Avatar