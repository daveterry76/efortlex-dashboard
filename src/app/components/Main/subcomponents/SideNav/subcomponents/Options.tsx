import React from 'react'
import Image from 'next/image'
import dashboardIcon from '../assets/dashboard-icon.svg'
import orderHistoryIcon from '../assets/order-history-icon.svg'
import transactionsIcon from '../assets/transactions-icon.svg'
import savedItemsIcon from '../assets/saved-items-icon.svg'
import updateProfileIcon from '../assets/update-profile-icon.svg'
import logoutIcon from '../assets/logout-icon.svg'

const options = [
    {
        imageSrc: dashboardIcon,
        backgroundColor: `#964C9A`,
        optionName: 'Dashboard',
        altText: 'dashboard icon',
        textColor: `#FFF`
    },
    {
        imageSrc: orderHistoryIcon,
        backgroundColor: `#FFF`,
        optionName: 'Order History',
        altText: 'order history icon',
        textColor: `#964C9A`
    },
    {
        imageSrc: transactionsIcon,
        backgroundColor: `#FFF`,
        optionName: 'All Transactions',
        altText: 'all transactions icon',
        textColor: `#964C9A`
    },
    {
        imageSrc: savedItemsIcon,
        backgroundColor: `#FFF`,
        optionName: 'Saved Items',
        altText: 'saved items icon',
        textColor: `#964C9A`
    },
    {
        imageSrc: updateProfileIcon,
        backgroundColor: `#FFF`,
        optionName: 'Update Profile',
        altText: 'update profile icon',
        textColor: `#964C9A`
    },
    {
        imageSrc: logoutIcon,
        backgroundColor: `#FFF`,
        optionName: 'Logout',
        altText: 'logout icon',
        textColor: `#964C9A`
    }
]

const Options = () => {
  return (
    <>
        <div className='mt-5 text-center'>
            {options.map((option, index) => (
                <div key={index} style={{ backgroundColor: option.backgroundColor }} className='flex px-3 py-[8px] cursor-pointer border border-b-[#964C9A]'>
                    <Image
                        src={option.imageSrc}
                        alt={option.altText}
                        width={20}
                    />
                    <h4 style={{ color: option.textColor }} className='text-[14px] font-medium ml-2 mt-1 hidden lg:block'>{option.optionName}</h4>
                </div>
            ))}
        </div>
    </>
  )
}

export default Options