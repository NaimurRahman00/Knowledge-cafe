import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between border-b-2 pb-4'>
            <h1 className='text-4xl' >Knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;