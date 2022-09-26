import React, {useEffect, useState} from 'react'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

const Users = () => {

    const [count, setCount] = useState(0)

    const [users, setUsers] = useState(null)

    function add() {
        setCount(count + 10)
    }

    function substract() {
        count >= 1 && setCount(count - 10)
    }

    useEffect(() => {
        fetch(`https://give-me-users-forever.herokuapp.com/api/users/${count}/next`)
            .then((response) => response.json())
            .then((data) => setUsers(data.users.slice(0, -2)))
    }, [count])
    

  return (
    <div className="container">
    <div className='main-cont'>
    {users && users.map(function (user) {
    return <div className={`child ${user.ID % 2 == 0 ? 'hasBg' : ''}`}> 

        <div className='name child-cont'>
        <span>{user.ID}.</span>
        <div><p>{user.FirstNameLastName}</p>
        <p className='small'>{user.EmailAddress}</p></div>
        </div>

        <div className='email child-cont'>
        <p>{user.Email}</p>
        </div>

        <div className='phone child-cont'>
        <p>+{user.Phone}</p>
        </div>

        <div className='Job-title child-cont'>
        <p>{user.JobTitle}</p>
        </div>

        <div className='company child-cont'>
        <p>{user.Company}</p>
        </div>

        </div>
    })}


    </div>
    {users && <div className='buttons'>
    <IoIosArrowBack onClick={substract} className='icons'/>
    <IoIosArrowForward onClick={add} className='icons'/>
    </div>}
    </div>
    
  )
}

export default Users
