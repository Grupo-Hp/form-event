"use strict";

const nodemailer = require("nodemailer");

export default function sendMail(req, res) {

  let vendedores = [
    { nome: "Débora Campos", email: "icaro.albar@live.com" },
    { nome: "Luiz Paulo", email: "" },
  ]

  let vendedor = vendedores[req.body.consultor]

  let vendedorNome = vendedor.nome
  let vendedorEmail = vendedor.email


  let transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    secure: true,
    auth: {
      user: 'AKIA6JQEFCPPAZGMEHF6',
      pass: 'BEtrjzS6npEP3WhEu5yqtTekyRsLGC4JQmPCU3xspHWc'
    }
  })

  transporter.sendMail({
    from: "Contato Grupo HP <icaro.albar@gmail.com>",
    to: `icaro.albar@hpcap.com.br, ${vendedorEmail}`,
    subject: "Mensagem do site",
    text: `${req.body.nome}`,
    html: `<style>
    a {
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }

    li {
        list-style: none;
        padding-top: 10px;
        text-align: justify;
    }

    li b,
    a,
    h4 {
        color: #cea80f;
    }

    .container {
        margin: 0 auto;
        max-width: 600px;
        color: #fff;
        background-image: url('https://hpcap.com.br/assets/img/fundo.png');
        background-size: cover;
        padding: 40px;
        border-radius: 5px;
    }

    main {
        padding: 10px 0;
        text-decoration: none;
    }

    .logo,header,footer {
        text-align: center;
    }
</style>

<link rel="stylesheet" href="https://hpcap.com.br/assets/css/BannerAga.css">
<div class="container">
    <div class="logo">
        <a href="https://hpcap.com.br/"><img src="https://hpcap.com.br/assets/img/logo/logo.svg" width="60"
                alt="Logo Grupo HP"></a>
    </div>
    <header>
        <h1>Nova mensagem:</h1>
        <h4>Ficamos muito felizes pela menssagem. Isso nos mostra que nossa empresa está sendo vista.</h4>
    </header>
    <main>
        <ul>
            <li><b>Nome: </b>${req.body.nome}</li>
            <li><b>E-mail: </b>${req.body.email}</li>
            <li><b>WhatsApp: </b>${req.body.whatsapp}</li>
            <li><b>Interesse: </b>${req.body.produtos}</li>
            <li><b>Vendedor: </b>${vendedorNome}</li>
            <li><b>Observação: </b>${req.body.obsevacao}</li>
        </ul>
    </main>
    <footer>
        <p>Em breve estaremos de volta para mais mensagens.</p>
        <a href="https://hpcap.com.br/">Grupo HP</a>
        <footer>
</div>`
  }).then(response => { res.send(response) })
    .catch(erro => { res.send(erro) })
}