import React from 'react'


const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpen}) => {

    const handleDelete=()=>{
        deleteUserById(user.id)
    }

    const handleUpdate=()=>{
      setUpdateInfo(user)
      handleOpen()
    }

  return (
    <article className='card_user'>
        <h2 className='card_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr />
        <ul className='user_ul'>
            <li className='user_li'><span className='user_span'>EMAIL: </span><i className="material-symbols-outlined">mail</i> {user.email}</li>
            <li className='user_li'><span className='user_span'>BIRTHDAY: </span><i class="material-symbols-outlined">cake</i> {user.birthday}</li>
        </ul>
        <div className="footer_card">
          <button className='footer_btn btn_delete' onClick={handleDelete}>
          <i className="fal fa-trash"></i>
          </button>
          <button className='footer_btn btn_update' onClick={handleUpdate}>
          <i className="fal fa-pen"></i>
          </button>
          
        </div>
        
    </article>
  )
}

export default UserCard