import Profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-5 mx-6 border-b-2'>
            <h1 className='text-4xl'>knowladge cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;