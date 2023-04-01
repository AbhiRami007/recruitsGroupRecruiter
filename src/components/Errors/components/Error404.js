import React from 'react'
import {Link} from 'react-router-dom'
import { toAbsoluteUrl } from '../../../core/AssetHelpers'


const Error404 =()=> {
  return (
    <div className=''>
      <div className=''>
        <img
          src={toAbsoluteUrl('')}
          alt='Error 404'
          className=''
        />
        <h1 className=''>
          Seems there is nothing here
        </h1>
        <Link to='/' className='btn btn-primary'>
          Return Home
        </Link>
      </div>
    </div>
  )
}

export {Error404}
