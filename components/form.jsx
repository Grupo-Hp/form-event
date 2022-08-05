
const Form = () => {

    const handleSubmit = () => {

        const form = document.getElementById('form')
        form.addEventListener('submit', _ => _.preventDefault())

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const whatsapp = document.getElementById('whatsapp').value
        const consultor = document.getElementById('consultor').value

        fetch('api/hello', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                whatsapp,
                consultor
            })
        }).then(response => {
            console.log(response)
            alert('Email enviado com sucesso!')
        }).catch(error => {
            console.log(error)
            alert('Ocorreu um erro')
        })
    }

    return (
        <div className="h-80vh py-10 bg-gray-100 flex justify-center">
            <form id="form">
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome:" className="block my-2 border p-1 rounded-md" required />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" id="email" placeholder="Digite seu nome:" className="block my-2 border p-1 rounded-md" required />
                </label>
                <label>
                    <span>WhatsApp:</span>
                    <input type="text" name="whatsapp" id="whatsapp" placeholder="Digite seu nome:" className="block my-2 border p-1 rounded-md" required />
                </label>
                <label>
                    <span>Consultor(a):</span>
                    <select name="consultor" id="consultor" className="block my-2 border p-1 rounded-md" required>
                        <option defaultValue>Selecione o cunsultor...</option>
                        <option value="0">Débora</option>
                        <option value="1">Luiz Paulo</option>
                        <option value="2">Patrícia</option>
                        <option value='3'>Icaro</option>
                    </select>
                </label>
                <input onClick={handleSubmit} type="submit" value="Enviar" className="py-2 px-5 text-white bg-blue-700 rounded-md hover:bg-blue-600 cursor-pointer" />
            </form>
        </div>
    )
}

export default Form 