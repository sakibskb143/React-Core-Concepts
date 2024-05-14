import'./Friend.css'

export default function Friend({friend}){
      const {name,email} =friend;
    return(

        <div className='box1'>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}