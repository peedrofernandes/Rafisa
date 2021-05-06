export default function Footer(props) {
  return (
    <footer>

      <div className="footer">

        <div className="footer-info">
          <p>CNPJ: xx-xxx-xxx/xxxx-xx</p>
          <p>Rua São Paulo 4351, Bairro Floresta, Joinville - SC</p>
          <p>Horário de funcionamento: de Segunda-feira à Sexta-feira das 8:00 às 18:00</p>
        </div>

        <ul className="contact column">
          <h4>Contato: </h4>
          <li>
            <img src="/assets/icons/phone-call.svg" className="logo-svg" alt="Logo telefone" />
      (47) 3455&#8209;0780
    </li>
          <li>
            <img src="/assets/icons/email (1).svg" className="logo-svg" alt="E-mail logo" />
      rafisa@rafisa.com.br
    </li>
          <li>
            <img src="/assets/icons/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
      (47) 9 9177&#8209;3626
    </li>
        </ul>

        <div>
          <h4>Voltar para:</h4>
          <div className="nav-menu">
            <ul>
              <li><a href="#main-section">Home</a></li>|
        <li><a href="#buttons">Sobre</a></li>|
        <li><a href="#products">Produtos</a></li>|
        <li><a href="#form">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flaticon">
        Ícones feitos por <a href="https://www.flaticon.com">https://www.flaticon.com</a>
      </div>
      <div className="rafisa">
        <p>@Rafisa 2021 - Todos os direitos reservados</p>
      </div>

    </footer>
  )
}