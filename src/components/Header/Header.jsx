import Profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto border-b-2 my-4 pb-4'>
            <h1 className='text-4xl'>knowladge cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;