
 
const Users = () => {

    type User = {
        name :string ;
        age : number ; 
        email? : string | number;
    }
    const userList: User[] = [
        {
          name: "ayoub",
          age: 12,
          email: "bezaiayoub@gmail.com",
        },
        {
          name: "bezai",
          age: 32,
        },
        {
          name: "ayouaab",
          age: 16,
          email: "0784110647",
        },
      ];
  return (
    <div>
        <ul>
        {userList.map((person ,index)=>(
            <li key={index}>
                <h1>user number : {index}</h1>
                <p>the name is :{person.name}</p>
                <p>the age is :{person.age}</p>
                <p>{(person.email) && <p>the email or the phone number is {person.email}</p>} </p>
            </li>
            
                
            )
        )
        
    }
    </ul>
      
    </div>
  )
}

export default Users
