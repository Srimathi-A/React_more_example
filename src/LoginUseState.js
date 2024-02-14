import React,{useState} from 'react';

export default function LoginUseState() {
    const [username,setUsername]=useState('');
    const [password,setpassword]=useState('');
    const [isLoading,showLoader]=useState(false);
    const [error,setError]=useState('');
    const [isLoggedIn,setIsLoggedIn]=usestate(false);

    const onSubmit =async (e)=>{
        e.preventDefault();
        setError('');
        showLoader(true);
        try {
            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(username==='bhuvana'&& password==='password') {
                        resolve();
                    } else {
                        reject();
                    }
                },1000);
            });
            setIsLoggedIn(true);
        } catch (error) {
            setError('Incorrect username or password!');
            showLoader(false);
            setUsername('');
            setpassword('');
        }
    };
    return (
        <div className='App'>
            <div className='login-container'>
                {isLoggedIn ? (
                    <>
                    <h1>Welcome {username}!</h1>
                    <button onClick={()=>setIsLoggedIn(false)}>Log Out</button>
                    </>
                ):(
                    <form className='form' onSubmit={onSubmit}>
                        {error && <p className='error'>{error}</p>}
                        <p>Please login</p>
                        <input 
                        type='text'
                        placeholder='username'
                        value={username}
                        onChange={(e)=>setUsername(e.currentTarget.value)}
                        />
                        <input 
                        type='text'
                        placeholder='password'
                        value={password}
                        onChange={(e)=>setpassword(e.currentTarget.value)}
                        />
                        <buuton className='submit'type='submit' disabled={isLoading}>
                            {isLoading ? 'Logging'}
                        </buuton>
                    </form>
                )
            </div>
        </div>
    )

}