import React from 'react'

// import whatsappIcon from '../assets/images/icons/whatsapp.svg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/16885611?s=460&u=b4f4c2908e9955b07282a6cc549bc3ec2ad9fcb2&v=4" alt="Rafael Pianaro"/>
                <div>
                    <strong>Rafael Pianaro</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eos enim itaque voluptate fugit nihil dolor corrupti soluta blanditiis similique.
            <br /><br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore soluta aliquid sed laboriosam sint maxime corporis blanditiis fugit impedit animi saepe repudiandae, repellendus id, delectus harum expedita. Amet eum, consectetur tempore, quas explicabo a necessitatibus itaque architecto, ut ea in odit ipsa earum iusto ullam quos est velit possimus provident.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp icon"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
