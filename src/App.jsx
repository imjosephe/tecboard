import { useState } from 'react';
import './App.css'
import { Banner } from './components/Banner';
import { CardEvento } from './components/CardEvento';
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema';

// no react, componentes são FUNÇÕES

// props é um OBJETO
// props.children

function App() {

	const temas = [
		{
			id: 1,
			nome: 'front-end'
		},
		{
			id: 2,
			nome: 'back-end'
		},
		{
			id: 3,
			nome: 'devops'
		},
		{
			id: 4,
			nome: 'inteligência artificial'
		},
		{
			id: 5,
			nome: 'data science'
		},
		{
			id: 6,
			nome: 'cloud'
		},
	];

	const [eventos, setEventos] = useState([
		{
			capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
			tema: temas[0],
			data: new Date(),
			titulo: 'Mulheres no Front'
		}
	]);

	function adicionarEvento(evento) {
		setEventos([...eventos, evento]);
		// eventos.push(evento);
		// console.log('eventos=>', eventos);
	}

	return (
		<main>
			<header>
				<img src="/logo.png" alt="logo" />
			</header>
			<Banner />
			<FormularioDeEvento temas={temas} onSubmit={adicionarEvento} />
			<section className='container'>
				{temas.map(function (tema) {
					if (!eventos.some(function(evento) {
						return evento.tema.id == tema.id;
					})) {
						return null;
					}
					return (
						<section key={tema.id}>
							<Tema tema={tema} />
							<div className="eventos">
								{eventos.filter(function (evento) {
									return evento.tema.id == tema.id;
								}).map(function (evento, index) {
									return <CardEvento evento={evento} key={index} />
								})}

							</div>
						</section>
					)
				})}
			</section>
		</main>
	)
}

export default App