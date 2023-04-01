import React from 'react'
import {Link} from 'react-router-dom'
import { toAbsoluteUrl } from '../../../core/AssetHelpers'

const Error500 = () => {
  return (
    <div className=''>
      
          <div className=''>
            <h1 className=''>System Error</h1>
            
            <div className=''>
              Something went wrong!
              <br />
              Please try again later.
            </div>
           
            <div className=''>
              <Link to='/' className=''>
                Go to homepage
              </Link>
            </div>
          </div>
          <div
            className=''
            style={{
              backgroundImage: `url('${toAbsoluteUrl('')}')`,
            }}
          ></div>
        </div>
     
  )
}

export {Error500}
