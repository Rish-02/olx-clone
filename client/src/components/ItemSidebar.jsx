import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemUser, resetUserItem } from '../redux/ads/adsSlice'

import profile from '../images/profile.png'
import moment from 'moment'

const ItemSidebar = ({ ad }) => {
  const dispatch = useDispatch()
  const { fullname, email, phoneno } = useSelector(
    (select) => select.ads.itemUser
  )

  const time = moment(ad.createdAt).fromNow()
  const date = moment(ad.createdAt).format('ll')

  useEffect(() => {
    dispatch(itemUser(ad.user))

    return () => dispatch(resetUserItem())
  }, [dispatch, ad.user])

  return (
    <div className="item_sidebar_container">
      <div className="details_container">
        <h1 className="heading" style={{ fontSize: '2rem' }}>
          Rs {ad.price}
        </h1>
        <h2 className="heading" style={{ fontSize: '1rem' }}>
          Selling Status: {ad.sellingStatus}
        </h2>
        <div
          className="description"
          style={{ opacity: '.6', marginTop: '12px' }}
        >
          {ad.title}
        </div>

        <div className="d-flex justify-content-between mt-3">
          <span>{ad.location}</span>
          <span>{time}</span>
        </div>
      </div>

      <div className="details_container">
        <h1 className="heading" style={{ fontSize: '1.5rem' }}>
          Seller Description
        </h1>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={profile} style={{ width: '60px' }} alt="profile" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1rem',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{fullname && fullname}</span>
            <span style={{ opacity: '.6' }}>Member since {date}</span>
          </div>
        </div>

        <p style={{ marginTop: '14px' }}>
          <span style={{ fontWeight: 'bold' }}>Email:</span> {email && email}
        </p>
        {phoneno && (
          <p style={{ marginTop: '14px', marginBottom: '0px' }}>
            <span style={{ fontWeight: 'bold' }}>Phone:</span>{' '}
            {phoneno && phoneno}
          </p>
        )}
      </div>

      <div
        style={{ fontWeight: 'bold', marginTop: '8px', paddingLeft: '10px' }}
      >
        AD ID {ad._id}
      </div>
    </div>
  )
}

export default ItemSidebar
