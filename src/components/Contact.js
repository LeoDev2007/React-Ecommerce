import styles from './Contact.module.css'
import React from 'react';


export default function Contact(){
    const [result, setResult] = React.useState("Enviar");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a95c0dd1-abb9-4284-a20f-cb503bc47a6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!!!");
      event.target.reset();
    } else {
      console.log("Erro", data);
      setResult(data.message);
    }
  };
    return (
        <div className={styles.contact}>
            <form onSubmit={onSubmit}>
                <h2>Entre em Contato</h2>
                <div className={styles.inputBox}>
                    <label>Nome</label>
                    <input type="text" className={styles.inputSolo} placeholder="Digite seu nome" required />
                </div>
                <div className={styles.inputBox}>
                    <label>E-mail</label>
                    <input type="text" className={styles.inputSolo} placeholder="Digite seu E-mail" required />
                </div>
                <div className={styles.inputBox}>
                    <label>Mensagem</label>
                    <textarea className={styles.inputSolo2} placeholder="Digite sua mensagem" required />
                </div>
                <button type="submit">{result}</button>
            </form>
             
        </div>
      
    )
}

