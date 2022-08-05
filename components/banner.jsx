import Image from 'next/image'

const Banner = () => {
    return (
        <div className="m-auto text-white max-w-xl bg-cover p-5 bannerEmail mb-20">
            <div classname='bg-red-500'>
                <a href="https://hpcap.com.br/"><Image src="/images/logo.svg" width={60} height={60}
                    alt="Logo Grupo HP" /></a>
            </div>
            <header className='text-center'>
                <h1 className='text-3xl font-bold my-5'>Nova mensagem:</h1>
                <h4 className='font-bold text-secondary'>Ficamos muito felizes pela menssagem. Isso nos mostra que nossa empresa está sendo vista.</h4>
            </header>
            <main className='py-2.5 px-0 my-10'>
                <ul >
                    <li className='mb-2'><b className='font-bold text-secondary'>Nome: </b></li>
                    <li className='mb-2'><b className='font-bold text-secondary'>E-mail: </b></li>
                    <li className='mb-2'><b className='font-bold text-secondary'>Telefone: </b></li>
                    <li className='mb-2'><b className='font-bold text-secondary'>Assunto: </b></li>
                </ul>
            </main>
            <footer className='text-center'>
                <p>Em breve estaremos de volta para mais mensagens.</p>
                <a className='text-secondary hover:underline' href="https://hpcap.com.br/">Grupo HP</a>
            </footer>
        </div>
    )

}

export default Banner