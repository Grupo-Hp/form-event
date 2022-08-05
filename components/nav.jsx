import Image from 'next/image'

const Nav = () => {

    const logo = '/images/logo.svg'

    return (
        <nav className="grid grid-cols-2 h-2/6 bg-primary py-3 px-10">
            <div className='flex items-center justify-start'>
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt='Logo Grupo HP'
                />
            </div>
            <div className='flex items-center justify-end'>
                <h1 className='text-xl text-white font-bold'>Formulário de leads</h1>
            </div>
        </nav>
    )
}

export default Nav