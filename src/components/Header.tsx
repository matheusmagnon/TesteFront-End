import logo from '../../src/assets/images/logo.png'

export function Header() {
    return (
        <div className="w-full flex flex-col py-4 items-center">
            <img src={logo} className='w-72'>
            </img>
        </div >
    )
}